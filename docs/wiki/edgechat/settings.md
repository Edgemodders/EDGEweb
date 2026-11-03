---
title: EDGEchat settings, commands and updates
nav_title: Settings, commands and updates
section: EDGEchat
order: 8
description: "EDGEchat's five settings and how to change them, its four commands and its skills, getting new versions, and where things are kept."
reviewed: 2026-11-03
---

# Settings, commands and <span class="y">updates</span>

## The five settings

| Setting | Id | What | When empty |
|---|---|---|---|
| Cyberpunk 2077 folder | `game_path` | The game's install folder, the one holding `archive`, `bin` and `r6` | REDcode's game folder setting in VS Code is used; EDGEdeck then remembers or finds the game in Steam, GOG or Epic |
| REDbridge.exe | `redbridge_exe` | The path of `REDbridge.exe` | REDcode's REDbridge setting in VS Code is used |
| EDGEdeck library | `edgedeck_library` | EDGEdeck's library folder | The `EDGEdeck` folder in your user folder. EDGEdeck's own VS Code settings aren't read, so if you moved the library, fill this in |
| Google Gemini key | `gemini_api_key` | Your key, for making materials from words in EDGEmat | Off. Kept in Windows' credential store |
| OpenAI key | `openai_api_key` | The same, with OpenAI | Off. Kept in Windows' credential store |

The REDcode fallbacks read VS Code's own settings. In EDGEkit or another editor, fill in the settings instead.

REDnode needs no setting: you allow Claude Code from inside the game ([Install and connect, step 5](install.html#step-5-let-claude-into-the-game)).

### Changing them

| Where | How |
|---|---|
| VS Code, EDGEkit | `/plugins`, then the gear on the `edge` row. Change, scroll down, press **Save configuration** |
| Inside a terminal session | `/plugin configure edge@edgemodders` |
| At a terminal prompt | `claude plugin configure edge@edgemodders` lists them, and which are unset |

Then restart Claude Code: the connections read the settings only when they start. Changing REDcode's own VS Code setting doesn't change the plugin's, which comes first.

## The commands

| Command | Does | Changes anything? |
|---|---|---|
| `/edge:setup` | Checks the four connections, finds EDGE servers you added by hand that would show twice, and gives one next step for each problem | No |
| `/edge:new-mod` | Asks what the mod should do, picks the simplest kind, makes it and tests it in the game with you: [Your first mod](first-mod.html) | Yes, each change asks first |
| `/edge:check-mod` | Lists what's wrong with a mod, with a fix for each: [When a mod doesn't work](check-mod.html) | No, until you choose a fix |
| `/edge:init-project` | Writes a `CLAUDE.md` for your mod's folder: [Keep a project easy to work on](projects.html) | Writes one file, and asks first if one is there |

## The skills

Claude loads these by itself when a task needs them. You don't call them.

| Skill | Knows |
|---|---|
| `rednode-mods` | REDnode packages: overlay apps, HUD widgets, Node mods, the game API, testing them in the running game. Copied from REDnode's own guide |
| `wolvenkit-projects` | Making, packing, deploying and swapping a WolvenKit project with the EDGE tools |
| `archives-and-cr2w` | The game's archives and file types, and how an item leads to its files |
| `edge-tools` | How every EDGE tool works, from this wiki, which the plugin carries a copy of |

## The connections

| Connection | Runs | Needs |
|---|---|---|
| `rednode` | Inside the game, in [REDnode](../rednode/agents.html) | The game running, **MCP server** on, and Claude Code allowed once |
| `redcode` | On your PC, the [REDcode](../redcode/assistants.html) server | Node.js 20, REDbridge and the .NET 10 runtime, the game folder |
| `edgedeck` | On your PC, the [EDGEdeck](../edgedeck/assistants.html) server | Node.js 20, the EDGEdeck library |
| `edgemat` | On your PC, the [EDGEmat](../edgemat/assistants.html) server | Node.js 20, REDbridge, its library built once |

## Updates

New versions come from EDGEchat's marketplace. Claude Code leaves auto-update off for marketplaces like this one, so you stay on the version you installed until you update.

**Turn on auto-update** (recommended): on the **Marketplaces** tab of `/plugins` (VS Code, EDGEkit) or `/plugin` (terminal), select `edgemodders`, then **Enable auto-update**. Claude Code then updates the plugin when a session starts, and the next session uses it.

{% include shot.html caption="Turning on auto-update" shows="The Marketplaces tab of Claude Code's /plugins dialog with the edgemodders marketplace selected and its Enable auto-update choice." %}

**Or update by hand**, at a terminal prompt:

```
claude plugin marketplace update edgemodders
claude plugin update edge@edgemodders
```

Inside a running `claude` session, the same commands start with `/plugin`. In VS Code, the refresh icon on the **Marketplaces** tab of `/plugins` updates the listing.

After an update, restart Claude Code. A new version may add settings: `/edge:setup` names any that are unset. What changed is in EDGEchat's [changelog](https://edgemodders.github.io/EDGEchat/changelog.html).

## Where things are

| Thing | Where |
|---|---|
| The plugin's settings | Claude Code's user settings, `%USERPROFILE%\.claude\settings.json`, under `pluginConfigs`. Keys aren't there: they're in Windows' credential store |
| The plugin itself | Claude Code's plugin cache, managed by Claude Code. Don't edit it |
| EDGEmat's library | `%LOCALAPPDATA%\EDGEmat`, shared with the EDGEmat extension |
| EDGEdeck's library | The `edgedeck_library` setting, or `%USERPROFILE%\EDGEdeck` |
