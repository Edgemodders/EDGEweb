---
title: Troubleshooting EDGEchat
nav_title: Troubleshooting
section: EDGEchat
order: 9
description: "Fixes for EDGEchat: missing commands, a connection that fails or won't sign in, settings that don't take, tools shown twice, mods that don't change, and game 2.31."
reviewed: 2026-11-03
---

# Troubleshooting <span class="y">EDGEchat</span>

First, run `/edge:setup`: it checks every connection and gives the one next step for each. The tables below are the same answers, to read without Claude.

## The connections

| You see | Why | Do |
|---|---|---|
| No `/edge:` commands | The plugin isn't installed, or Claude Code wasn't restarted | [Install and connect](install.html), steps 2 and 4 |
| `rednode` failed to connect, or "connection refused" | The game isn't running, or REDnode's **MCP server** is off | Start the game, load a save, switch **MCP server** on (**F10**, **REDNODE** tab, the gear by **Theme**). Then `/mcp`, `plugin:edge:rednode`, **Reconnect** |
| `rednode` needs authentication | Not signed in yet. Claude can't start the sign-in for you | `/mcp`, `plugin:edge:rednode`, **Authenticate**, then **Allow** in the game ([step 5](install.html#step-5-let-claude-into-the-game)) |
| The browser says the request was denied or lapsed | **Deny** was pressed, or nobody answered within two minutes | **Authenticate** again |
| No sign-in page, or an error about the server's sign-in | REDnode older than 0.40.1 | [Update REDnode](../rednode/install.html#updating-rednode) |
| `rednode` connected, but every call fails as unauthorized | Claude Code was revoked under REDnode's **Connected assistants** | **Authenticate** again |
| `redcode`: game not loaded | No game folder | Fill in the **Cyberpunk 2077 folder** setting ([Settings](settings.html)), restart Claude Code |
| `redcode` fails starting the bridge | REDbridge missing or too old, or no .NET 10 runtime | REDbridge 0.10.0 or later, its path in the **REDbridge.exe** setting, and the .NET 10 runtime: see [Install REDbridge](../redbridge/install.html) |
| `redcode`, `edgedeck` or `edgemat` missing | The connection didn't start | Install Node.js 20 or later (`node --version`). The first start downloads the server and can be slow: `/mcp`, **Reconnect** |
| `edgedeck` shows no mods, but you have some | It opened another library | Fill in the **EDGEdeck library** setting with EDGEdeck's **Library Path** |
| `edgemat`: library not built | It's built once, from your game | Ask "Build the EDGEmat library" |
| Every EDGE tool shows twice | You added an EDGE server by hand before EDGEchat | `/edge:setup` names it and explains how to remove the copy |
| EDGEmat's tools show twice, one set named `edgemat__mat_...` | REDnode is set to share EDGEmat's tools with desktop assistants (`"edgematTools": "all"`, see [REDnode: Files and folders](../rednode/settings.html#files-and-folders)) | Set it back to its default: EDGEchat brings EDGEmat itself |
| A changed setting has no effect | The connections read their settings only when they start | Restart Claude Code (in VS Code, **Developer: Reload Window**) |
| The settings form didn't save | **Save configuration** is below the settings, out of sight | Scroll down in the form, then press it |

## Mods

| You see | Do |
|---|---|
| A mod doesn't show, or crashes | `/edge:check-mod`: see [When a mod doesn't work](check-mod.html) |
| A REDmod has no effect | Start the game with `-modded`: EDGEdeck's **Run game** adds it |
| EDGEdeck says a file was "changed in the game folder" | A swap replaced a deployed file: [Change it while you play, step 3](live.html#step-3-bring-edgedeck-back-in-step) |
| EDGEdeck won't deploy | The game is running: close it first |
| A deploy would put in mods you didn't expect | They're switched on but were never deployed. Deploy only the mod you mean, or switch the others off. **Run game** deploys every waiting change |
| A swap says "RED Hot Tools not loaded" | REDnode older than 0.41.0, which needs RED Hot Tools, and that has no 2.5 build. Update REDnode: from 0.41.0, [REDswap](../rednode/redswap.html) does the swap |

## Game 2.31

The EDGE tools now target game 2.5. On 2.31:

| Tool | On 2.31 |
|---|---|
| REDnode | 0.37.0 is the last for 2.31, and it has no sign-in. Add REDnode to Claude Code by hand with its **Copy setup** command instead ([Connect Claude Code](../connect-claude-code.html)). `/edge:setup` leaves that copy alone |
| REDbridge | Keep 0.10.0: 0.11.0 misreads 2.31's world sectors |
| Swaps into the running game | Need RED Hot Tools, which has a 2.31 build |

## Still stuck

Ask Claude in plain words, such as "rednode won't connect, what do I check?". It has these answers and the rest of this wiki. Or open an issue on [EDGEchat's GitHub](https://github.com/Edgemodders/EDGEchat/issues) with what `/edge:setup` said, or ask on [Discord]({{ site.discord }}).
