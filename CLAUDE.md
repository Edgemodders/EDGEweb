# EDGEweb: notes for Claude sessions

EDGEweb is the website for https://edgemodders.ai, the home of EDGEmodders: a new Cyberpunk 2077 modding community whose message is **"Anyone can mod"**. AI assistants (Claude first) make modding possible for people without coding or modding skills. The site is a landing page that pitches the five tools and links to their Pages sites. It is one of six repos by the same owner: REDagent (in-game modding agent), REDnode (runtime), REDcode (IDE), REDbridge (engine host, GPL-3.0), REDdeck (mod manager) and this one. REDnode's `CLAUDE.md` sets the shared conventions.

## Site

- `docs/index.html` is the landing page and `docs/platform.html` ("Read more") is the EDGE platform page. Both are standalone HTML with no front matter, so Jekyll serves them as-is, and share `docs/assets/css/site.css`. The platform is called **EDGE**; the community is **EDGEmodders**.
- `platform.html` has a benefits table with a status per row (Working, In progress, Planned) and a section per toolkit with screenshot placeholders (`.shot` divs). To fill one, put the image in `docs/assets/shots/` and replace the placeholder's contents with an `<img>` with real alt text. Re-check the statuses against each tool's CLAUDE.md whenever the page is touched.
- `docs/*.md` pages use `docs/_layouts/default.html` and `docs/assets/css/hud.css`. Add every new page to `nav` in `docs/_config.yml`.
- `docs/community.md` is the "Get involved" page: where the community lives, ways to help, ground rules. The community Discord is https://discord.gg/63qP3Erw43: `discord` in `_config.yml` (used by the layout and markdown pages) and hard-coded in `index.html` and `platform.html` (footer chip and Join button). Change all three together. The invite never expires. When `site.css` changes, bump the `?v=` on its link in both HTML pages so browsers skip their 10-minute cache (the layout versions `hud.css` automatically).
- Deployed by `.github/workflows/pages.yml`. Custom domain `edgemodders.ai` is set in Settings > Pages, not with a CNAME file (Actions deploys ignore it).
- Tool status lines on the cards come from each tool's README and CLAUDE.md. Keep them current and honest; mark anything unbuilt as such. The transcript in "The loop" is labelled illustrative and must stay labelled until the loop works end to end.

## Wiki (curated by Claude sessions)

- `docs/wiki/` is the EDGEmodders wiki at https://edgemodders.ai/wiki/. Claude sessions write and curate it; the community suggests changes on Discord or in issues (see `docs/wiki/contribute.md`). Terminology: the whole suite is the **EDGE platform**; REDagent, REDnode, REDcode, REDdeck and REDbridge are its toolkits.
- The wiki home (`docs/wiki/index.md`) introduces the EDGE platform. Its Platform benefits table is a summary of the Benefits lists on the toolkit pages: when a toolkit page's benefits change, update the summary too.
- Layout: `docs/_layouts/wiki.html` (sidebar built from page front matter) and the wiki rules at the end of `docs/assets/css/hud.css`. Sidebar groups are `wiki_sections` in `docs/_config.yml`.
- Every page needs front matter (quote `description` and any value containing ": ", or YAML breaks and the page drops out of the sidebar): `title`, `nav_title` (optional, sidebar label), `section` (one of `wiki_sections`), `order`, `description`, `reviewed` (date of the last check). One folder per toolkit, `index.md` as its overview.
- **Purpose:** each toolkit's wiki section is its user manual: user-focused, in depth and thorough. It draws on the toolkit's docs but does not copy them; the docs sites stay the developer reference and design record. REDdeck's section (`docs/wiki/reddeck/`) is the agreed template. Pages, in sidebar order: Overview (what it is, what it's for, why you'd want it, how it fits EDGE, status, page map), Install and set up, one "using" page per feature area, Settings and commands (complete, from the extension's `package.json` where there is one), Troubleshooting. REDnode splits into using REDnode and making mods and apps. REDbridge, mostly invisible to users, gets a shorter section.
- **Screenshots:** use `{% include shot.html caption="..." shows="..." %}` wherever a picture helps; it renders a placeholder saying what the shot should show. The owner supplies images later: put them in `docs/assets/shots/<toolkit>/` and add `src="/assets/shots/<toolkit>/<name>.png"` to the include. Never take screenshots of the owner's game or PC unasked.
- Sources of truth are the toolkits' own docs and CLAUDE.md files (read them with `gh api repos/Edgemodders/<repo>/contents/...` or the sibling checkouts, after a pull). The wiki explains and links; it does not copy reference material. Never state a feature works unless its repo says it passed or shipped; say "planned" or "untested" otherwise.
- When curating: re-check each page touched against its sources, update `reviewed`, keep the toolkit statuses on `index.html` and `platform.html` consistent with the wiki, and answer recurring Discord or issue questions with FAQ entries or new pages.

## Conventions

- Commit straight to `main` and push, in small logical commits. Agree the plan in chat first.
- Git identity for this repo is `Edgemodders` <341184298+Edgemodders@users.noreply.github.com> (the RED* repos use `CyberbuildsAI`). Never change the global identity.
- Writing style: plain, short sentences, tables for comparisons. Friendly to non-modders: avoid jargon on the landing page, or explain it.
- House style is the HUD look shared with the RED* repos: tokens in `:root` (bg `#08090d`, yellow `#fcee0a`, cyan `#19f3ff`, red `#ff2a52`, green `#5dffa1`), Chakra Petch, Rajdhani, JetBrains Mono, cut-corner panels, sticky status bar. Keep it in sync with REDnode's design doc.
- `tools/brand/render.ps1` regenerates the banner, social preview, icon and badges. Tool icons in `docs/assets/tools/` are copied from each tool repo; recopy when they change.
- Always carry the "not affiliated with CD PROJEKT RED" notice, and credit WolvenKit and the wider modding community.
