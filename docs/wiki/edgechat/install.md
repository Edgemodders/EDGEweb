---
title: Install EDGEchat and connect it to the game
nav_title: Install and connect
section: EDGEchat
order: 1
description: "Install EDGEchat in Claude Code (EDGEkit, VS Code or a terminal), fill in its settings, let Claude into the game, and check it all with /edge:setup."
reviewed: 2026-11-03
---

# Install and <span class="y">connect</span>

By the end of this page EDGEchat is installed, Claude can see the running game, and `/edge:setup` shows all four connections working. Allow 20 to 40 minutes, most of it for installing the EDGE tools EDGEchat connects to.

## What you need

| Need | Why | Check |
|---|---|---|
| Windows 10 or 11 | The EDGE tools run on Windows | |
| Cyberpunk 2077 **2.5** | The game version the EDGE tools support now. On 2.31, see [Troubleshooting](troubleshooting.html#game-231) | The game's main menu shows the version |
| Claude Code, signed in | The assistant itself: the extension in VS Code, [EDGEkit](../edgekit/) (which has it built in), or `claude` in a terminal. It needs a Claude account whose plan includes Claude Code | [Claude Code's setup](https://code.claude.com/docs/en/setup) |
| Node.js 20 or later | Three of the four connections run on it | `node --version` in a terminal prints `v20` or higher |
| [REDnode](../rednode/) 0.41.0 or later, in the game | The `rednode` connection, and swapping changes into the running game. 0.40.1 is the oldest that can sign in | REDnode's launcher (**F10**) shows its version |
| [REDbridge](../redbridge/) 0.10.0 or later, and the .NET 10 runtime | Lets the `redcode` and `edgemat` connections read the game's files. 0.11.0 reads every file in 2.5 | `dotnet --list-runtimes` lists a `10.` runtime |
| [EDGEdeck](../edgedeck/) in VS Code (recommended) | Its **Run game** button is the easy way to start the game with your mods. The `edgedeck` connection works without it | The EDGEdeck view in VS Code |

## Step 1: Install the EDGE tools first

Skip any you already have.

1. **REDnode** goes into the game: [install REDnode](../rednode/install.html). It needs RED4ext and redscript. With EDGEdeck, **Get the frameworks** fetches those, and EDGEdeck takes REDnode's release zip like any mod.
2. **REDbridge** is a program, not a mod: [install REDbridge](../redbridge/install.html). Unzip it anywhere, such as `C:\Tools\REDbridge`, and note where `REDbridge.exe` is: you need its path in step 3. If you use REDcode in VS Code, its **Install REDbridge** command does this for you.
3. **The .NET 10 runtime**, for REDbridge, from [dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet/10.0).
4. **EDGEdeck**, if you want it: [install EDGEdeck](../edgedeck/install.html).

## Step 2: Install EDGEchat

There are three ways. All three install the same plugin, and VS Code and the terminal share it: install once, use it in both.

### In EDGEkit

EDGEkit 1.140.2 or later offers EDGEchat at the end of its first-run steps.

1. Answer **Set Up** to "Set up Claude Code for EDGE?".
2. Claude Code's plugin dialog opens on `edge`. Confirm adding the EDGEmodders marketplace, then press **Install**.
3. EDGEkit opens a new Claude Code session with `/edge:setup` already typed. Fill in the settings first (step 3), then run it.

### In VS Code

1. In the Claude Code panel, type `/plugins` in the prompt box. The **Manage plugins** dialog opens.
2. On its **Marketplaces** tab, enter `Edgemodders/EDGEchat`.
3. On its **Plugins** tab, find `edge`, press **Install**, and choose **Install for you**, so it works in every folder.

{% include shot.html caption="The plugin dialog" shows="Claude Code's Manage plugins dialog in VS Code on the Plugins tab, with the edge plugin from the edgemodders marketplace and its Install button." %}

A shortcut: paste this link into Windows' Run dialog (**Win+R**). It opens the same dialog on EDGEchat.

```
vscode://anthropic.claude-code/install-plugin?plugin=edge&marketplace=Edgemodders/EDGEchat
```

### From a terminal

At a PowerShell or Command Prompt prompt, not inside a running `claude` session:

```
claude plugin install edge --marketplace Edgemodders/EDGEchat
```

It answers `Successfully installed plugin: edge@edgemodders`. Inside a running `claude` session it takes two commands: `/plugin marketplace add Edgemodders/EDGEchat`, then `/plugin install edge@edgemodders`.

## Step 3: Fill in the settings

After the install, a form asks for the plugin's five settings. All are optional, but most people need the first two.

| Setting | Fill in | Leave empty when |
|---|---|---|
| **Cyberpunk 2077 folder** | The game's install folder, the one holding `archive`, `bin` and `r6`, such as `E:\SteamLibrary\steamapps\common\Cyberpunk 2077` | REDcode is set up in VS Code with the same folder |
| **REDbridge.exe** | The full path of `REDbridge.exe` from step 1 | REDcode is set up in VS Code |
| **EDGEdeck library** | The folder in EDGEdeck's **Library Path** setting | You never moved EDGEdeck's library |
| **Google Gemini key**, **OpenAI key** | Your own key, only for making materials from words in EDGEmat. Billed to you, and kept in Windows' credential store | You don't make materials from words. The pages here don't need one |

**In VS Code, scroll down.** The **Save configuration** button is below the last setting, out of sight at first. Nothing is saved until you press it.

{% include shot.html caption="The settings form" shows="The edge plugin's settings form in VS Code, scrolled down to show the Cyberpunk 2077 folder and REDbridge.exe filled in and the Save configuration button below the last setting." %}

You can change them later: see [Settings, commands and updates](settings.html).

## Step 4: Restart Claude Code

The connections read their settings only when they start. In VS Code or EDGEkit, run **Developer: Reload Window** from the Command Palette (**Ctrl+Shift+P**). In a terminal, quit `claude` and start it again.

## Step 5: Let Claude into the game

The `rednode` connection works only while the game runs, and you allow it once, from inside the game. There is no token to copy.

1. Start the game and load a save.
2. Press **F10** to open REDnode's launcher. On the **REDNODE** tab, press the gear at the right of the **Theme** row: the [Settings drawer](../rednode/settings.html) opens.
3. Switch **MCP server** on. Switch **Hot reload** on too: [Your first mod](first-mod.html) uses it. Close the launcher with **F10**.
4. In Claude Code, type `/mcp`, pick `plugin:edge:rednode` and choose **Authenticate**.
5. Your browser opens a page titled **Approve in Cyberpunk 2077**, with a code. In the game, a **Connect** window shows a code too. Check that they match.
6. Press **F10**, then **Allow** in the Connect window. Back in Claude Code, `/mcp` shows `plugin:edge:rednode` connected.

{% include shot.html caption="Allow Claude Code in the game" shows="The game with REDnode's Connect window asking to allow Claude Code, its code matching the code on the Approve in Cyberpunk 2077 page in the browser beside it." %}

You stay signed in, also after the game restarts. REDnode's Settings drawer lists Claude Code under **Connected assistants**, and **Revoke** there takes the access back.

If the browser says the request was denied or lapsed, **Deny** was pressed or nobody answered within two minutes: choose **Authenticate** again.

## Step 6: Run /edge:setup

Type `/edge:setup` and press Enter. Claude checks each connection, changes nothing, and ends with a table:

| Server | State when it works |
|---|---|
| rednode | Connected: the game, at a loaded save |
| redcode | Connected: the REDbridge version and how many archives and files it found |
| edgedeck | Connected: your library, its mods, and whether frameworks need updating |
| edgemat | Connected: how many material setups its library holds |

{% include shot.html caption="/edge:setup, all connected" shows="Claude Code showing the table /edge:setup ends with: rednode, redcode, edgedeck and edgemat, each connected, with no next steps." %}

Anything not connected comes with one next step. The usual ones:

| It says | Do |
|---|---|
| rednode **not running** | Start the game, load a save, check **MCP server** is on (step 5). Then `/mcp`, `plugin:edge:rednode`, **Reconnect** |
| rednode **not signed in** | Step 5, from 4 on |
| redcode **no game folder** or **no REDbridge** | Fill in the setting it names (step 3), then restart (step 4) |
| edgedeck shows **no mods**, but you have some | It opened another library: fill in **EDGEdeck library** (step 3) |
| edgemat **library not built** | Step 7 |
| A server **added by hand** | You added it before EDGEchat, so Claude would see its tools twice. Claude explains how to remove that copy, and asks before running anything |

More in [Troubleshooting](troubleshooting.html).

## Step 7: Build EDGEmat's library, once

EDGEmat finds garments' materials in a list of [game materials](../edgemat/game-materials.html) it builds from your own game. If `/edge:setup` said it isn't built, ask:

> Build the EDGEmat library.

It reads the game's archives through REDbridge and takes a minute or two. The EDGEmat extension in VS Code shares the same library, so it may be built already; the extension also rebuilds it after a game update. Without the extension, ask Claude to build it again after an update.

## Step 8: Your first question

With the game at a loaded save, ask:

> How much money does V have right now?

Claude reads it from the running game and answers with the number, without asking permission: reading the game never changes it. That's the sign everything works. A few more to try:

> What is V wearing right now?

> Which mods are on in EDGEdeck?

> How does EDGEdeck's Run game button work?

The last one comes from this wiki, which EDGEchat carries: ask about any EDGE tool's buttons and settings.

## Check

- `/edge:setup` shows all four connected.
- Claude told you V's money without a permission prompt.
- REDnode's **Connected assistants** lists Claude Code.

Next: [Your first mod, no code](first-mod.html). EDGEchat's [lesson 1](https://edgemodders.github.io/EDGEchat/guide-install.html) covers the same steps.
