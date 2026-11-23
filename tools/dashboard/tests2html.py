"""Turn test step tables from a tool's docs into the Owner Summary's collapsible Tests block.

usage: python tests2html.py REF spec.json   (prints the HTML)
spec.json: [{"title", "tool", "file", "heading", "status", "note"?}], file relative to the folder that holds the tool checkouts
"""
import html
import pathlib
import json
import re
import sys

ROOT = str(pathlib.Path(__file__).resolve().parents[3]) + "/"


def inline(t):
    t = html.escape(t.strip(), quote=False)
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    t = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    return t


def section(path, heading):
    lines = open(ROOT + path, encoding="utf8").read().split("\n")
    hits = [k for k, l in enumerate(lines) if re.match(r"#+ ", l) and heading.lower() in l.lower()]
    assert len(hits) == 1, (path, heading, len(hits))
    a = hits[0]
    lvl = len(lines[a]) - len(lines[a].lstrip("#"))
    b = a + 1
    while b < len(lines) and not (re.match(r"#+ ", lines[b]) and len(lines[b]) - len(lines[b].lstrip("#")) <= lvl):
        b += 1
    return lines[a + 1:b]


def render(spec):
    out = []
    steps = 0
    for t in spec:
        body = section(t["file"], t["heading"])
        # Only the section's own steps: stop at a sub-heading, and take its first table.
        for k, l in enumerate(body):
            if re.match(r"#+ ", l):
                body = body[:k]
                break
        first = next(k for k, l in enumerate(body) if l.startswith("|"))
        end = next((k for k in range(first, len(body)) if not body[k].startswith("|")), len(body))
        body = body[:end] + [l for l in body[end:] if not l.startswith("|")]
        steps += end - first - 2
        rows = [l for l in body if l.startswith("|")]
        prose = [l for l in body if l.strip() and not l.startswith("|")]
        cells = [[c for c in re.split(r"(?<!\\)\|", r.strip().strip("|"))] for r in rows]
        head, data = cells[0], [c for c in cells[2:]]
        out.append(f'<div class="test"><h3>{inline(t["title"])} <span class="meta">{html.escape(t["tool"])} &middot; {len(data)} steps &middot; {html.escape(t["status"])}</span></h3>')
        for p in prose:
            out.append(f"<p>{inline(p)}</p>")
        if t.get("note"):
            out.append(f"<p>{inline(t['note'])}</p>")
        out.append('<div class="tw"><table><thead><tr>' + "".join(f"<th>{inline(h)}</th>" for h in head) + "</tr></thead><tbody>")
        for r in data:
            out.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
        out.append("</tbody></table></div>")
        out.append(f'<p class="src">From {html.escape(t["file"])}, "{html.escape(t["heading"])}".</p></div>')
    n = steps
    return (f'<details class="tests"><summary>Tests <span class="meta">{len(spec)} tests &middot; {n} steps</span></summary>\n' + "\n".join(out) + "\n</details>")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf8")
    print(render(json.load(open(sys.argv[2], encoding="utf8"))))
