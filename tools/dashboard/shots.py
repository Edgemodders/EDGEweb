"""The screenshots the site still waits for.

  python tools/dashboard/shots.py                 writes "shots" into docs/assets/dashboard/status.js
  python tools/dashboard/shots.py --html out.html also writes the image dossier's page (published as a private artifact)
  python tools/dashboard/shots.py --list          prints every missing shot, one per line

A shot is missing when a wiki page's {% include shot.html %} has no src, or names a file that is not in
docs/assets/shots/ yet, and when docs/platform.html still holds a placeholder div. Who takes it is a guess from
the words of its description (the game: the owner; the editor or the desktop: a Claude session, by script);
shots-where.json corrects a wrong guess: { "<page>|<caption>": "game" | "editor" }.
"""
import datetime
import html
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
DOCS = ROOT / "docs"
STATUS = DOCS / "assets" / "dashboard" / "status.js"
WHERE = pathlib.Path(__file__).with_name("shots-where.json")
PAGE = pathlib.Path(__file__).with_name("shots-dossier.html")
INBOX = r"E:\Modding\Cyberpunk 2077\EDGEweb\docs\assets\shots\inbox" + "\\"
SITE = "https://edgemodders.ai/"

NAMES = {"redagent": "REDagent", "rednode": "REDnode", "redcode": "REDcode", "redbridge": "REDbridge",
         "edgedeck": "EDGEdeck", "edgebuilder": "EDGEbuilder", "edgewave": "EDGEwave", "edgemat": "EDGEmat",
         "edgefab": "EDGEfab", "edgequest": "EDGEquest", "edgehack": "EDGEhack", "edgedir": "EDGEdir",
         "edgekit": "EDGEkit", "edgechat": "EDGEchat", "edgemods": "EDGEmods", "redsave": "REDsave"}

# Words that say the picture is of the running game (or of a window that only exists over it).
GAME = re.compile(
    r"\bthe game\b|in the game|gameplay|cyberpunk 2077 with|\bHUD\b|\bV (in|wearing|beside)\b|on V\b|photo mode|"
    r"night city|mod manager|redagent (window|chat)|workbench|interactive mode|launcher|"
    r"(console|pins|task manager|tools manager|sound tracer|remove doors|connect|key request|editor request) window|"
    r"the sound tracer|edgebuilder|edge director|quest tracker|inventory|in-game|running$", re.I)


def slug(text):
    return re.sub(r"[^a-z0-9]+", "-", html.unescape(text).lower()).strip("-")[:48].strip("-")


ONLY_IN_GAME = {"EDGEbuilder", "REDagent"}  # these run inside the game: every picture of them is the owner's


def where(key, text, fixes, tool=""):
    return fixes.get(key) or ("game" if tool in ONLY_IN_GAME or GAME.search(text) else "editor")


def find():
    fixes = json.loads(WHERE.read_text(encoding="utf-8")) if WHERE.exists() else {}
    shots, taken = [], 0
    for page in sorted((DOCS / "wiki").rglob("*.md")):
        rel = page.relative_to(DOCS).as_posix()
        text = page.read_text(encoding="utf-8")
        title = re.search(r'^title:\s*"?(.*?)"?\s*$', text, re.M)
        parts = page.relative_to(DOCS / "wiki").parts
        tool = NAMES.get(parts[0], "Wiki") if len(parts) > 1 else "Wiki"
        for m in re.finditer(r"\{%-?\s*include shot\.html(.*?)-?%\}", text, re.S):
            a = dict(re.findall(r'(\w+)="(.*?)"', m.group(1), re.S))
            src = a.get("src")
            if src and (DOCS / src.lstrip("/")).exists():
                taken += 1
                continue
            cap, shows = html.unescape(a.get("caption", "")), html.unescape(" ".join(a.get("shows", "").split()))
            stem = pathlib.PurePosixPath(src).stem if src else f"{page.stem}-{slug(cap)}"
            folder = pathlib.PurePosixPath(src).parent.as_posix().lstrip("/") if src else f"assets/shots/{parts[0] if len(parts) > 1 else 'wiki'}"
            key = f"{rel}|{cap}"
            shots.append({"tool": tool, "page": rel, "pageTitle": title.group(1) if title else page.stem,
                          "url": SITE + re.sub(r"(index)?\.md$", "", rel) + ("" if rel.endswith("index.md") else ".html"),
                          "caption": cap, "shows": shows, "file": stem + ".png", "folder": "docs/" + folder + "/",
                          "named": bool(src), "where": where(key, cap + " " + shows, fixes, tool), "key": key})
    plat = (DOCS / "platform.html").read_text(encoding="utf-8")
    section = ""
    for m in re.finditer(r'<section id="([\w-]+)"|<div class="shot"><div><b>Screenshot</b>(.*?)</div></div>', plat):
        if m.group(1):
            section = m.group(1)
            continue
        cap = html.unescape(m.group(2))
        key = f"platform.html|{section}|{cap}"
        shots.append({"tool": NAMES.get(section, section), "page": "platform.html", "pageTitle": "The platform page",
                      "url": SITE + "platform.html#" + section, "caption": cap, "shows": cap + ".",
                      "file": f"platform-{slug(cap)}.png", "folder": f"docs/assets/shots/{section}/",
                      "named": False, "where": where(key, cap, fixes, NAMES.get(section, section)), "key": key})
    taken += len(re.findall(r'<div class="shot"><img', plat))
    seen = {}
    for s in shots:  # two shots on one page with one caption would share a name
        n = seen[s["folder"] + s["file"]] = seen.get(s["folder"] + s["file"], 0) + 1
        if n > 1:
            s["file"] = s["file"][:-4] + f"-{n}.png"
    return shots, taken


def summary(shots, taken, today, url):
    tools = {}
    for s in shots:
        t = tools.setdefault(s["tool"], {"tool": s["tool"], "game": 0, "editor": 0})
        t[s["where"]] += 1
    return {"asOf": today, "dossier": url, "taken": taken, "missing": len(shots),
            "game": sum(1 for s in shots if s["where"] == "game"),
            "editor": sum(1 for s in shots if s["where"] == "editor"),
            "byTool": sorted(tools.values(), key=lambda t: -(t["game"] + t["editor"]))}


def main():
    args = sys.argv[1:]
    shots, taken = find()
    if "--list" in args:
        for s in shots:
            print(f'{s["where"]:6} | {s["tool"]:11} | {s["page"]} | {s["file"]} | {s["caption"]}')
        print(len(shots), "missing,", taken, "taken")
        return
    today = datetime.date.today().isoformat()
    text = STATUS.read_text(encoding="utf-8")
    start = text.index("{")
    data = json.loads(text[start:text.rindex("}") + 1])
    url = (data.get("shots") or {}).get("dossier", "")
    new = summary(shots, taken, today, url)
    out = {}
    for k, v in data.items():  # keep "shots" beside ownerSummary, before the long lists
        if k != "shots":
            out[k] = v
        if k == "ownerSummary":
            out["shots"] = new
    out.setdefault("shots", new)
    STATUS.write_text(text[:start] + json.dumps(out, indent=1, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f'{new["missing"]} missing ({new["game"]} in the game, {new["editor"]} in the editor), {taken} taken')
    if "--html" in args:
        target = pathlib.Path(args[args.index("--html") + 1])
        for s in shots:
            s.pop("key")
        payload = json.dumps({"asOf": today, "inbox": INBOX, "taken": taken, "shots": shots}, ensure_ascii=False)
        target.write_text(PAGE.read_text(encoding="utf-8").replace("/*DATA*/null", payload.replace("</", "<\\/")), encoding="utf-8")
        print("dossier page:", target)


if __name__ == "__main__":
    main()
