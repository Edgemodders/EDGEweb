---
title: Contribute to the wiki
nav_title: Contribute
section: Start here
order: 9
description: "How to suggest a wiki page, report a mistake or share a tip."
reviewed: 2026-10-13
---

# Contribute to the <span class="y">wiki</span>

The wiki is curated so it stays accurate: pages are checked against each tool's docs before they go up. You don't have to write a page to help.

| You have | Do this |
|---|---|
| A question the wiki doesn't answer | Ask on [Discord]({{ site.discord }}). Questions that come up twice become FAQ entries |
| A mistake or an out-of-date page | [Open an issue]({{ site.repo }}/issues) with the page link and what's wrong |
| A tip, a recipe or a "how I made X" | Share it on Discord or in an issue. We'll turn it into a page and credit you |
| A finished page | Send a pull request adding a Markdown file under `docs/wiki/` in [EDGEweb]({{ site.repo }}) |

## Writing a page

- Plain words and short sentences. Explain or link any modding term.
- Tables for comparisons and steps that have options.
- Link to the tool's docs for reference detail instead of copying it.
- Say what is untested. Never include files extracted from the game.

Each page starts with front matter like this:

```yaml
---
title: Switch from Vortex to REDdeck
nav_title: Switch from Vortex
section: REDdeck
order: 2
description: "One sentence for search results."
reviewed: 2026-10-13
---
```

`section` is the sidebar group, one of: Start here, REDagent, REDnode, REDcode, REDdeck, REDbridge. `order` sorts pages within it.
