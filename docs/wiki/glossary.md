---
title: Glossary
section: Start here
order: 3
description: Plain-language definitions of Cyberpunk 2077 modding terms and EDGE terms.
reviewed: 2026-10-13
---

# <span class="y">Glossary</span>

Modding words in plain language. If a word you met isn't here, ask on [Discord]({{ site.discord }}) and we'll add it.

## Game and modding terms

| Term | Meaning |
|---|---|
| Archive | A `.archive` file: a package of game files. The game ships hundreds; many mods are a single archive in `archive/pc/mod` |
| ArchiveXL | A framework that lets archive mods add new things (items, appearances) rather than only replace files |
| CET (Cyber Engine Tweaks) | A popular framework for Lua script mods and in-game ImGui windows |
| CR2W | The binary format of most game files inside archives. REDcode and REDbridge show them as readable JSON |
| Hash | A number that stands for a file path inside an archive. Tools turn hashes back into paths when they know them |
| Load order | Which mod wins when two mods change the same file |
| Nexus Mods | The main site where Cyberpunk mods are published |
| RED4ext | The framework that loads native plugins into the game. REDnode is one of them |
| REDengine | The game's engine. The source of "RED" in the tool names |
| REDmod | CD PROJEKT RED's own mod format, deployed with their `redMod` tool |
| redscript | A language for scripting the game, compiled into the game's own scripts |
| RTTI | The game's type system: the classes, functions and enums it knows about at runtime. REDnode's game API is generated from it |
| TweakDB | The game's database of item stats, characters and settings |
| TweakXL | A framework that changes TweakDB with simple YAML files (`.yaml` or `.tweak`) |
| Vortex | A general-purpose mod manager. REDdeck can import its mods |
| WolvenKit | The community's main Cyberpunk modding tool. EDGE builds on its engine |

## EDGE terms

| Term | Meaning |
|---|---|
| EDGE | The platform: the five toolkits working together |
| Agent | An AI that can use tools, not only chat. REDagent is one; Claude Code is another |
| Change card | REDagent's preview of a file change, as a diff, with Allow and Deny |
| Deploy | REDdeck putting your switched-on mods into the game folder, with hardlinks, recorded in a manifest |
| Hot reload | REDnode restarting a changed mod in the running game, without a game restart |
| Library | Where REDdeck keeps your mods, outside the game folder |
| MCP (Model Context Protocol) | The standard that lets AI agents use tools. REDnode, REDdeck and REDcode each offer an MCP server |
| Node mod | A REDnode mod written in JavaScript or TypeScript, running in its own Node process |
| Overlay app | A small web app (HTML, CSS, JavaScript) that REDnode draws on top of the game |
| Tier 1, Tier 2 | REDnode's two kinds of mod code: Tier 2 runs outside the game (most mods); Tier 1 runs inside it for the rare cases that must change a value mid-call (planned) |
