# EDGEweb: notes for Claude sessions

EDGEweb is the website for https://edgemodders.ai, the home of EDGEmodders: a new Cyberpunk 2077 modding community whose message is **"Anyone can mod"**. AI assistants (Claude first) make modding possible for people without coding or modding skills. The site is a landing page that pitches the four tools and links to their Pages sites. It is one of five repos by the same owner: REDnode (runtime), REDcode (IDE), REDbridge (engine host, GPL-3.0), REDdeck (mod manager) and this one. REDnode's `CLAUDE.md` sets the shared conventions.

## Site

- `docs/index.html` is the landing page and `docs/platform.html` ("Read more") is the EDGE platform page. Both are standalone HTML with no front matter, so Jekyll serves them as-is, and share `docs/assets/css/site.css`. The platform is called **EDGE**; the community is **EDGEmodders**.
- `platform.html` has a benefits table with a status per row (Working, In progress, Planned) and a section per toolkit with screenshot placeholders (`.shot` divs). To fill one, put the image in `docs/assets/shots/` and replace the placeholder's contents with an `<img>` with real alt text. Re-check the statuses against each tool's CLAUDE.md whenever the page is touched.
- `docs/*.md` pages use `docs/_layouts/default.html` and `docs/assets/css/hud.css`. Add every new page to `nav` in `docs/_config.yml`.
- `docs/community.md` is the "Get involved" page: where the community lives, ways to help, ground rules. When a chat server or other venue opens, add it there and to the join section of `index.html`.
- Deployed by `.github/workflows/pages.yml`. Custom domain `edgemodders.ai` is set in Settings > Pages, not with a CNAME file (Actions deploys ignore it).
- Tool status lines on the cards come from each tool's README and CLAUDE.md. Keep them current and honest; mark anything unbuilt as such. The transcript in "The loop" is labelled illustrative and must stay labelled until the loop works end to end.

## Conventions

- Commit straight to `main` and push, in small logical commits. Agree the plan in chat first.
- Git identity for this repo is `Edgemodders` <341184298+Edgemodders@users.noreply.github.com> (the RED* repos use `CyberbuildsAI`). Never change the global identity.
- Writing style: plain, short sentences, tables for comparisons. Friendly to non-modders: avoid jargon on the landing page, or explain it.
- House style is the HUD look shared with the RED* repos: tokens in `:root` (bg `#08090d`, yellow `#fcee0a`, cyan `#19f3ff`, red `#ff2a52`, green `#5dffa1`), Chakra Petch, Rajdhani, JetBrains Mono, cut-corner panels, sticky status bar. Keep it in sync with REDnode's design doc.
- `tools/brand/render.ps1` regenerates the banner, social preview, icon and badges. Tool icons in `docs/assets/tools/` are copied from each tool repo; recopy when they change.
- Always carry the "not affiliated with CD PROJEKT RED" notice, and credit WolvenKit and the wider modding community.
