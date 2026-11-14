---
title: Getting started
section: Start here
order: 1
description: "The three ways into EDGE, which tool to use for what, what you need before you start, and how each tool installs today."
reviewed: 2026-11-13
---

# Getting <span class="y">started</span>

EDGE is a family of tools. You don't need all of them. This page helps you pick: first the three ways in, then a table by what you want to do.

**Want to be led through it?** [Your first hour](first-hour.html) is one route from nothing installed to a first mod in your game, step by step.

## Three ways in

Most people start with one of these three. They are not rivals: many people end up with all of them.

| | [The EDGEkit app](edgekit/) | [REDagent](redagent/) | [EDGEchat](edgechat/) |
|---|---|---|---|
| **What it is** | An editor for Windows with the EDGE tools built in | An AI assistant inside the game | An add-on that makes Claude Code, Anthropic's AI assistant, a modding assistant |
| **Where you use it** | On your desktop | In a chat window over the game, while you play | On your desktop: in EDGEkit, in VS Code or in a terminal |
| **What you do with it** | Install and manage mods, and make mods with buttons and lists: recolors, quickhacks, sounds, quests, changed game files | Ask for a mod in plain words. It writes mods that run beside the game and draw on the HUD | Ask for a mod in plain words. Claude makes mods that run beside the game, changed game values, recolored clothes and other mods made of game files |
| **An AI does the work** | No. You can add EDGEchat to it | Yes | Yes |
| **What it costs** | Free | Free, plus your own Anthropic API key, paid per use | Free, plus a Claude plan that includes Claude Code |
| **What it needs** | Windows | [REDnode](rednode/) in the game | Claude Code, and the tools it connects: REDnode, REDbridge and EDGEdeck. [The full list](edgechat/install.html#what-you-need) |
| **Start with** | [Install the app](edgekit/install.html), then [your first session](edgekit/first-session.html) | [Install and set up](redagent/install.html), then [your first mod](redagent/first-mod.html) | [Install and connect](edgechat/install.html), then [your first mod](edgechat/first-mod.html) |

REDagent and EDGEchat are both AI assistants. The difference is where they are and how you pay: REDagent is in the game and uses an API key; EDGEchat is at your desk and uses a Claude plan. A Claude plan can't be used with REDagent, and an API key isn't what EDGEchat needs.

## I want to...

| I want to... | Use | Start with |
|---|---|---|
| Install, switch on and off, and update mods made by others | [EDGEdeck](edgedeck/) | [Install EDGEdeck](edgedeck/install.html), then [your first mod](edgedeck/first-mod.html). Coming from Vortex? [Switch from Vortex](edgedeck/switch-from-vortex.html) |
| Ask for a mod while I play | [REDagent](redagent/) | [Install and set up REDagent](redagent/install.html), then [your first mod](redagent/first-mod.html) |
| Ask for a mod at my desk, with Claude Code | [EDGEchat](edgechat/) | [Install and connect](edgechat/install.html), then [your first mod](edgechat/first-mod.html) |
| Get the editor tools in one install | [EDGEkit](edgekit/) | The app: [Install the app](edgekit/install.html). Already use VS Code: [Install the extension pack](edgekit/install-pack.html) |
| Recolor clothes, or make a new material from my words | [EDGEmat](edgemat/) | [Install EDGEmat](edgemat/install.html), then [Tutorial: recolor a jacket](edgemat/tutorial-recolor.html) |
| Change one of the game's quickhacks, or make a new one | [EDGEhack](edgehack/) | [Install and set up EDGEhack](edgehack/install.html), then [Change a game quickhack](edgehack/edit-quickhack.html) |
| Change how something in the game sounds | [EDGEwave](edgewave/) | [Install and set up EDGEwave](edgewave/install.html), then [Tutorial: your first sound mod](edgewave/tutorial.html) |
| Read the game's quests, or write a small quest of my own | [EDGEquest](edgequest/) | [Install and set up EDGEquest](edgequest/install.html), then [Your first quest](edgequest/first-quest.html) |
| Place objects in the game world and build a scene | [EDGEbuilder](edgebuilder/) | [Install and set up EDGEbuilder](edgebuilder/install.html), then [Your first scene](edgebuilder/first-scene.html) |
| Look inside the game's files and change them by hand: a name, a texture, a stat | [REDcode](redcode/) | [Install and set up REDcode](redcode/install.html), then [Your first mod](redcode/first-mod.html) |
| Find out why a mod doesn't work | [EDGEdeck](edgedeck/), or [EDGEchat](edgechat/) | [Conflicts and who wins](edgedeck/conflicts.html), or ask Claude: [When a mod doesn't work](edgechat/check-mod.html) |
| Write a mod in JavaScript or TypeScript, or build an in-game app | [REDnode](rednode/) | [Making mods and apps](rednode/making-mods.html) |
| See how the game's own UI is built, or make a HUD panel that looks like the game's | [REDnode](rednode/) with its UI Tools pack | [UI Tools](rednode/ui-tools.html), then [your first native HUD panel](rednode/ui-tools-tutorial.html) |
| Connect Claude Code to one tool by hand, without EDGEchat | The tool's own page for assistants | [Connect Claude Code](connect-claude-code.html) |

## What you need

Nobody needs every row. The second column says who needs each.

| You need | For | Notes |
|---|---|---|
| Cyberpunk 2077 on a Windows PC, game version 2.5 | Everything | The main menu shows the version. Still on 2.31? See the [FAQ](faq.html#which-game-versions-and-stores-does-it-work-with) |
| The [EDGEkit app](edgekit/install.html), or [VS Code](https://code.visualstudio.com/) | REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest and EDGEhack, which run inside an editor | Both are free. REDnode, REDagent and EDGEbuilder run in the game and need neither |
| RED4ext and redscript | [REDnode](rednode/install.html), and so REDagent and EDGEbuilder | Two free frameworks most modded games already have. EDGEdeck's [Get the frameworks](edgedeck/frameworks.html#getting-the-frameworks) installs them |
| [REDnode](rednode/install.html) in the game | REDagent, EDGEbuilder and any REDnode mod. Also for trying a change in the running game from REDcode or EDGEhack | Free |
| [REDbridge](redbridge/) | Every tool that reads the game's files | You don't install it yourself. The tools download it at a button press |
| Your own Anthropic API key, with some credit | REDagent | You pay Anthropic per use. [Get a key](redagent/install.html#1-get-an-anthropic-api-key), and see [what it costs](redagent/costs.html) |
| A Claude plan that includes Claude Code | EDGEchat | Paid to Anthropic. EDGEchat also needs Node.js 20 or later: [its list](edgechat/install.html#what-you-need) |
| A free [Nexus Mods](https://www.nexusmods.com/cyberpunk2077) account | Downloading mods from Nexus Mods | Optional for the EDGE tools themselves |

A few optional features use an AI service with your own key. The [FAQ](faq.html#what-does-edge-cost) lists them.

## How each tool installs today

| Tool | Where you get it | How it goes in |
|---|---|---|
| The EDGEkit app | An installer from [GitHub](https://github.com/Edgemodders/EDGEkit/releases/latest) | Run the installer. REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest and EDGEhack are built in |
| REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest | The VS Code Marketplace and Open VSX, the two stores editors install extensions from | From the editor's Extensions view, or all at once with the [EDGEkit extension pack](edgekit/install-pack.html). Not needed in the EDGEkit app |
| EDGEhack | Open VSX, Nexus Mods and GitHub. Not on the VS Code Marketplace yet | In VS Code, from the downloaded file: [Install EDGEhack](edgehack/install.html#install-edgehack). Not needed in the EDGEkit app |
| REDnode, REDagent, EDGEbuilder | A zip from Nexus Mods or GitHub | Into the game folder, with EDGEdeck or Vortex, or by hand |
| REDbridge | GitHub | EDGEdeck, REDcode and REDnode download it for you |
| EDGEchat | From inside Claude Code | One button in EDGEkit, or Claude Code's plugin dialog |

All of them are young. Each tool's Overview page has a **Status** section that says what is released, what was tested in the game and what is still planned.

## Where to go next

- [Your first hour](first-hour.html): the route, step by step.
- The [FAQ](faq.html): cost, safety, saves, uninstalling.
- Stuck on a word? The [Glossary](glossary.html) explains the modding terms.
- Want to talk to people? Join us on [Discord]({{ site.discord }}).
