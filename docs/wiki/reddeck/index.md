---
title: REDdeck
nav_title: Overview
section: REDdeck
order: 0
description: "REDdeck, the EDGE platform's mod manager for Cyberpunk 2077: what it is, what it's for, and why you might want it."
reviewed: 2026-10-13
---

# RED<span class="y">deck</span>

REDdeck is the EDGE platform's mod manager for Cyberpunk 2077. It runs inside VS Code (and inside REDcode, which is built on VS Code) and looks after the mods you download: it keeps them, puts the ones you want into the game, takes them out again, and tells you when two of them fight over the same thing.

{% include shot.html caption="REDdeck in VS Code" shows="The REDdeck Mods view in VS Code's sidebar with a typical list of mods, the Frameworks group at the top, and the REDdeck page open beside it." %}

## What it's for

Cyberpunk 2077 has no built-in list of mods. A mod is a set of files dropped into the right folders inside the game folder: archives in one place, scripts in another, plugins in a third. Doing that by hand works for two or three mods. With twenty, you lose track of which file came from which mod, removing a mod means hunting for its files, and a game update can quietly break everything.

A mod manager does that bookkeeping for you. REDdeck:

- **keeps your mods in a library** outside the game folder, so turning a mod off doesn't mean deleting it;
- **deploys** the mods you switch on into the game folder, and records every file it puts there;
- **undoes** a deploy exactly, removing only the files it placed;
- **shows conflicts** when two mods change the same thing, and lets you choose the winner;
- **checks Nexus Mods** for updates and downloads them for you.

## Why you might want it

| If you... | REDdeck gives you |
|---|---|
| Find other mod managers confusing | One list of mods and four verbs: **add**, **turn on or off**, **deploy**, **remove**. Plain words, and no profiles, staging, purges or rules to learn |
| Worry about breaking your game | Every deploy is recorded in a manifest and can be undone. REDdeck never deletes a file it didn't put there |
| Have mods that clash in strange ways | REDdeck sees conflicts *inside* mod archives, which file-based managers like Vortex can't see, and explains who wins |
| Already use Vortex | A one-click import of your Vortex mods. Vortex keeps its copies, so you can go back |
| Want an AI assistant to manage mods for you | A command line and an MCP server with the same verbs, so Claude or another agent can list, add, switch and deploy mods, asking you before it touches the game |
| Make mods in REDcode | Your project's packed output becomes a mod that refreshes every time you pack |

## How it fits into EDGE

REDdeck is the **Deploy** stage of the EDGE platform. It works on its own, and other toolkits add to it when they're present:

| Toolkit | What it adds to REDdeck |
|---|---|
| [REDbridge](../redbridge/) | Reads inside mod archives, so REDdeck can show archive-level conflicts. REDdeck downloads and updates it for you |
| [REDcode](../redcode/) | A REDcode project can become a REDdeck mod, and REDdeck mods can feed files back into a project |
| Claude and other agents | REDdeck's MCP server lets an AI assistant manage your mods |

## Status

REDdeck is at version 0.19 and manages its developer's game on two PCs. It isn't on the VS Code Marketplace yet; it installs from a file on its [releases page](https://github.com/Edgemodders/REDdeck/releases). Nexus sign-in through the browser is built and waits for Nexus to register REDdeck; until then you paste a personal API key, which works the same way.

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | Requirements, installing, the Set up steps, updating and uninstalling |
| [Switch from Vortex](switch-from-vortex.html) | Move your mods over safely |
| [The Mods view and the REDdeck page](mods-view.html) | Find your way around |
| [Adding mods](adding-mods.html) | From files, folders and Nexus, and how REDdeck decides where files go |
| [Deploying and undo](deploying.html) | What deploy does, hardlinks, changes outside REDdeck, undo |
| [Conflicts](conflicts.html) | What they are, who wins, and how to choose |
| [Nexus Mods](nexus.html) | Signing in, download links, updates and versions |
| [Frameworks and game patches](frameworks.html) | RED4ext, CET, redscript and friends, and what to do after a game update |
| [Library, disk space and loadouts](library.html) | Where everything is kept, what uses space, saved lists |
| [REDdeck and REDcode](redcode.html) | Testing your own mods, and borrowing files from installed ones |
| [Assistants and the command line](assistants.html) | Let Claude manage your mods, or script REDdeck |
| [Settings and commands](settings.html) | Every setting and command |
| [Troubleshooting](troubleshooting.html) | Symptoms and fixes |

The [REDdeck guide](https://edgemodders.github.io/REDdeck/guide.html) and [design](https://edgemodders.github.io/REDdeck/design.html) on REDdeck's own docs site are the reference this section draws on.
