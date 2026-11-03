---
title: "EDGEchat safety: what Claude asks before doing"
nav_title: Safety
section: EDGEchat
order: 7
description: "What Claude asks you before doing with EDGEchat, what it reads without asking, what never happens, and how to take access back."
reviewed: 2026-11-03
---

# Safety: what Claude <span class="y">asks first</span>

With EDGEchat, Claude can read a lot without asking: your game's files, the running game, your mod list. Anything that changes your game, its folder or your save asks you first, every time, and you can always say no.

## How asking works

Before such an action, Claude Code shows a permission prompt saying what it's about to do. **Allow** runs it once. **Deny** stops it, and Claude carries on or asks you what to do instead.

{% include shot.html caption="A permission prompt" shows="Claude Code asking before an EDGEdeck deploy, with the tool's name, what it will do, and the Allow and Deny choices." %}

These prompts come from the EDGE tools themselves: each marks its tools that change things as "always ask". So they appear in every permission mode, auto mode included, and there's no "don't ask again" for them. Claude can't turn them off, and neither can a setting. EDGEchat's tests checked this in auto mode.

## What asks, and what doesn't

| Asks you first, every time | Doesn't ask |
|---|---|
| **REDnode:** calls into the game that can change it, such as V's money or health | Calls that only read, such as V's money |
| Swapping an archive into the running game ([Change it while you play](live.html)) | The game's state, logs, running apps, screenshots, TweakDB reads, what is near V |
| Changing quest facts or the journal in your save, or moving V | Reading quest facts and the journal |
| Placing or removing things in the world | Listing what's near V or what was placed |
| An installed mod's own tools, unless its author marked them read-only | Read-only mod tools |
| **EDGEdeck:** deploy, undo and remove, which write to the game folder or delete a mod from the library | Listing mods, conflicts, what a deploy would change |
| **Claude Code:** writing or changing files in your project (in its default permission mode) | Reading files |

Two more:

- **EDGEmat** making a material from words sends your words to Google Gemini or OpenAI, billed to your key. It doesn't ask, so Claude says which service it will use before the first time.
- REDnode's optional **Tools Manager**, in its Admin Tools pack, switches any of REDnode's or a mod's tools off for every assistant. A tool switched off isn't offered to Claude at all. See [REDnode: AI agents](../rednode/agents.html).

## What never happens

| Never | Instead |
|---|---|
| The game's own files changed | Mods are separate files the game loads on top. Remove the mod and the game is as before |
| Files put into or deleted from the game folder by hand | EDGEdeck deploys mods and can undo each deploy. The one exception: a REDnode package you're building, in REDnode's apps folder |
| Your keys shown, pasted in chat or written into files | They stay in Windows' credential store (the plugin's key settings) or in [REDnode's Keys](../rednode/settings.html#keys) |

## Taking access back

| To | Do |
|---|---|
| Stop Claude reaching the game | In REDnode's Settings drawer, **Revoke** Claude Code under **Connected assistants**, or switch **MCP server** off |
| Stop one tool | REDnode's Tools Manager, or deny its prompt |
| Remove EDGEchat | `/plugins`, then uninstall `edge`. Or at a terminal prompt: `claude plugin uninstall edge@edgemodders` |

The [FAQ](../faq.html) answers more general questions about AI and safety on EDGE. EDGEchat's [safety page](https://edgemodders.github.io/EDGEchat/guide-safety.html) names each tool.
