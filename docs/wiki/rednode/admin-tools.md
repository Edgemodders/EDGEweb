---
title: "Admin Tools: the Task Manager and the Tools Manager"
nav_title: Admin Tools
section: REDnode
order: 4.3
description: "REDnode's optional Admin Tools pack: the Task Manager, which shows what every package costs and ends a stuck one, and the Tools Manager, which decides which tools AI assistants may use."
reviewed: 2026-11-13
---

# Admin <span class="y">Tools</span>

**REDnode Admin Tools** is an optional pack of two apps for managing REDnode itself. Install it if you want to see what your mods cost, stop one that misbehaves, or decide which tools AI assistants may use.

| App | What it does |
|---|---|
| [Task Manager](#task-manager) | Lists every running package with its CPU, memory and game calls. **End task** stops one, **Restart** starts it again |
| [Tools Manager](#tools-manager) | Lists every tool an AI assistant can use through REDnode, with a switch for each |

**Status:** released, for game 2.5. Both apps passed their test in the game on the pack's first release, for game 2.31. The 2.5 release has had no separate test.

## Install

| You need | |
|---|---|
| REDnode 0.38.1 or later | [Install REDnode](install.html) first |
| The pack's zip, `REDnode-Admin-Tools-<version>.zip` | From [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35793) or [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) |

1. With the game closed, add the zip to EDGEdeck or Vortex and deploy, or extract it into the game folder. The two apps land in REDnode's apps folder, as `taskmanager` and `toolsmanager`.
2. Start the game, press **F10** and open the [Mod Manager](mod-manager.html).
3. Select **Task Manager**. Under **Permissions**, read the warning, then switch **Allowed** on for both lines: "managing REDnode" and "staying above other packages' windows".
4. Switch it on. Press **Pin to launcher** to keep it one click away.
5. Do the same for **Tools Manager**.

| You should see | |
|---|---|
| Before step 3 | The window opens, but says "Task Manager needs the admin permission: allow it in the Mod Manager" |
| After step 3 | Within a second, its table fills with your running packages |

> **About the "managing REDnode" permission.** A package that has it can end or restart any of your mods, and switch on AI tools you switched off. Allow it only for a package you trust. You can withdraw it in the Mod Manager at any time.

To remove the pack, remove it in your mod manager or delete the two folders. REDnode stays.

## Task Manager

One row per running package, refreshed every second. **1 s**, **5 s** and **Pause** change how often. Click a column to sort by it.

{% include shot.html caption="The Task Manager" shows="The Task Manager window over the game: one row per running package with its status, CPU, memory, thread, heap, game calls and uptime, one row selected, and the End task and Restart buttons." %}

| Column | Shows |
|---|---|
| **Status** | Running, starting, crashed, not responding, ended |
| **CPU %**, **Memory** | What the package's process and windows use. Mods in a [shared process](mod-manager.html#node-mods-restart-and-shared-process) all show the whole process |
| **Thread**, **Heap** | How busy the mod itself is, and the memory its code uses. 100 % in **Thread** means stuck or very busy. These tell mods in a shared process apart |
| **Game calls/s** | How many times a second it calls the game |
| **Service** | Calls a second between it and other packages |
| **Up** | How long it has run |

Select a row, then:

| Button | Does |
|---|---|
| **End task** | Stops the package now, even a mod stuck in an endless loop. Its windows close. It stays switched on, so it comes back the next time the game starts |
| **Restart** | Starts it again now, with its window if it had one open |

REDnode's own windows, such as the Mod Manager and the Mod log, are listed but can't be ended.

### Try it: find what a mod costs

1. Switch on a sample such as **Hello mod**, and open the Task Manager.
2. Find the Hello mod's row and read its **Memory** and **Game calls/s**.
3. Select the row and press **End task**, then **Restart**.

| After | You should see |
|---|---|
| Step 2 | A few game calls a second: the Hello mod asks for V's position twice a second |
| Step 3 | The Hello mod's window closes, and opens again |

## Tools Manager

Every tool an AI assistant can see through REDnode's [MCP server](agents.html), the way Claude Code and REDagent see it: REDnode's own tools first, then each running mod's. Each row says what the tool does and whether it **reads** (runs without asking), **asks first** or **acts**.

{% include shot.html caption="The Tools Manager" shows="The Tools Manager window over the game: REDnode's tools as the first group, then a mod's tools, each row with its switch and whether it reads or asks first, and one tool selected with its description." %}

| Control | Does |
|---|---|
| The switch on a tool | Takes the tool away from every assistant, from its next request |
| The switch on a group | The same for all of REDnode's tools, or all of one mod's |
| **Off for new packages** | A newly installed mod's tools start switched off, until you switch them on |
| Select a tool | Shows its description and options, as an assistant reads them |
| **Assistants** | Which assistants have connected, and when |
| **Recent calls of mods' tools** | The newest calls: when, by which assistant, and the result or error |

Good to know:

- Switching off `api_read` or `api_call` takes the game away from every assistant, REDagent included. The window says so beside them.
- REDnode keeps the switches, not the pack. If you remove the pack, the tools you switched off stay off. Install the pack again to change them.

## More

- [Agents and MCP](agents.html): what the tools are, and connecting Claude Code.
- REDnode's own [Admin Tools guide](https://edgemodders.github.io/REDnode/admin-tools.html), with the `admin` permission's calls for mod makers.
