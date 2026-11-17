"""Refresh the facts a script can read in docs/assets/dashboard/status.js.

Rewrites: `issues` (every open issue in the Edgemodders organization, through `gh`), and per tool
`lastTag`, `lastTagDate` (the latest GitHub release), `lastCommit` and `commitsSinceTag` (from GitHub,
so a stale local checkout does not matter) and, where the sibling checkout has a package.json,
`version` (a version with a note in brackets is left alone).

Leaves alone everything curated by hand: plans, tests, waitingOn, ownerActions, risks, sessions.
It does not set `asOf`: set that when the curated parts were checked too.

Run from the EDGEweb folder:  python tools/dashboard/refresh.py
"""
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


def main():
    text = FILE.read_text(encoding="utf-8")
    start = text.index(HEAD) + len(HEAD)
    data = json.loads(text[start:text.rindex(";")])

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

    FILE.write_text(text[:start] + json.dumps(data, indent=1, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"{len(data['issues'])} open issues, {len(data['tools'])} tools written to {FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
