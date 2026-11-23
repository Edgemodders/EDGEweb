"""Refresh the facts a script can read in docs/assets/dashboard/status.js.

Rewrites: `issues` (every open issue in the Edgemodders organization, through `gh`), and per tool
`lastTag`, `lastTagDate` (the latest GitHub release), `lastCommit` and `commitsSinceTag` (from GitHub,
so a stale local checkout does not matter) and, where the sibling checkout has a package.json,
`version` (a version with a note in brackets is left alone).

Leaves alone everything curated by hand: plans, tests, waitingOn, ownerActions, risks, sessions.
One exception: it gives every item that waits on the owner (`ownerActions`, and each open entry of
`ownerSpotTests`) a `ref` such as RA1 and a `since` date when it has none. A ref is the tool's
two-letter `code` and the next number after the tool's `ownerSeq`; a number is never used twice.
`python tools/dashboard/refresh.py --refs` does only that, with no call to GitHub.
It does not set `asOf`: set that when the curated parts were checked too.

Run from the EDGEweb folder:  python tools/dashboard/refresh.py
"""
import datetime
import json
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
FILE = ROOT / "docs" / "assets" / "dashboard" / "status.js"
HEAD = "window.EDGE_STATUS = "


def run(args, cwd=None):
    r = subprocess.run(args, cwd=cwd, capture_output=True, text=True, encoding="utf-8")
    return r.stdout.strip() if r.returncode == 0 else ""


# Each tool's two letters, for the refs of what waits on the owner. A new tool needs a line here.
CODES = {"REDagent": "RA", "REDnode": "RN", "REDcode": "RC", "REDbridge": "RB", "EDGEdeck": "ED", "EDGEbuilder": "EB",
         "EDGEwave": "EW", "EDGEmat": "EM", "EDGEquest": "EQ", "EDGEhack": "EH", "EDGEkit": "EK", "EDGEchat": "EC",
         "REDsave": "RS", "EDGEfab": "EF", "EDGEdir": "DR", "EDGEmobile": "MB", "EDGEmods": "MD", "EDGEguide": "EG",
         "VATS": "VA", "EDGErepo": "ER", "EDGEweb": "WB"}
PASSED = ("passed", "done")


def owner_refs(data, today, first_seen=None):
    """Gives each item that waits on the owner a ref and a since date, where it has none.

    An action written as plain text becomes {"ref", "what", "since"}. `first_seen` maps
    (tool, text) to a date, for items older than their ref."""
    first_seen = first_seen or {}
    added = 0
    for i, tool in enumerate(data["tools"]):
        name = tool["name"]
        code = tool.get("code") or CODES.get(name)
        if not code:
            print(f"{name}: no two-letter code in CODES, its items get no ref", file=sys.stderr)
            continue
        seq = int(tool.get("ownerSeq") or 0)
        actions = [a if isinstance(a, dict) else {"what": a} for a in tool.get("ownerActions") or []]
        spots = [s for s in tool.get("ownerSpotTests") or [] if str(s.get("status", "")).lower() not in PASSED]
        for item, text in [(a, a.get("what")) for a in actions] + [(s, s.get("feature")) for s in spots]:
            if not item.get("ref"):
                seq += 1
                item["ref"] = f"{code}{seq}"
                added += 1
            if not item.get("since"):
                item["since"] = first_seen.get((name, text), today)
        tool["ownerActions"] = [{"ref": a["ref"], "what": a.get("what"), "since": a["since"],
                                 **{k: v for k, v in a.items() if k not in ("ref", "what", "since")}} for a in actions]
        rest = {k: v for k, v in tool.items() if k not in ("name", "code", "ownerSeq")}
        data["tools"][i] = {"name": name, "code": code, "ownerSeq": seq, **rest}
    return added


def write(text, start, data):
    FILE.write_text(text[:start] + json.dumps(data, indent=1, ensure_ascii=False) + ";\n", encoding="utf-8")


def main():
    text = FILE.read_text(encoding="utf-8")
    start = text.index(HEAD) + len(HEAD)
    data = json.loads(text[start:text.rindex(";")])
    today = datetime.date.today().isoformat()
    if "--refs" in sys.argv:
        added = owner_refs(data, today)
        write(text, start, data)
        print(f"{added} new refs written to {FILE.relative_to(ROOT)}")
        return

    out = run(["gh", "search", "issues", "--owner", "Edgemodders", "--state", "open", "--limit", "300",
               "--json", "repository,number,title,labels,updatedAt,createdAt"])
    if out:
        data["issues"] = sorted(
            ({"repo": i["repository"]["name"], "number": i["number"], "title": i["title"],
              "labels": [l["name"] for l in i["labels"]], "created": i["createdAt"][:10], "updated": i["updatedAt"][:10]}
             for i in json.loads(out)),
            key=lambda i: (i["repo"], i["number"]))
    else:
        print("gh gave no issues: the issues list is left as it was", file=sys.stderr)

    for tool in data["tools"]:
        name = tool["name"]
        api = f"repos/Edgemodders/{name}"
        commit = run(["gh", "api", f"{api}/commits?per_page=1", "--jq", ".[0].commit.committer.date"])
        if not commit:
            print(f"{name}: GitHub gave nothing, left as it was", file=sys.stderr)
            continue
        tool["lastCommit"] = commit[:10]
        release = run(["gh", "api", f"{api}/releases/latest", "--jq", '.tag_name + " " + .published_at'])
        if release:
            tag, when = release.split(" ")
            tool["lastTag"], tool["lastTagDate"] = tag, when[:10]
            ahead = run(["gh", "api", f"{api}/compare/{tag}...HEAD", "--jq", ".ahead_by"])
            tool["commitsSinceTag"] = int(ahead or 0)
        else:
            tool["lastTag"], tool["lastTagDate"], tool["commitsSinceTag"] = None, None, 0
        package = ROOT.parent / name / "package.json"
        if package.exists() and "(" not in str(tool.get("version") or ""):
            try:
                version = json.loads(package.read_text(encoding="utf-8")).get("version")
                if version:
                    tool["version"] = version
            except ValueError:
                pass

    owner_refs(data, today)
    write(text, start, data)
    print(f"{len(data['issues'])} open issues, {len(data['tools'])} tools written to {FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
