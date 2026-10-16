---
title: Making mods and apps for REDnode
nav_title: Making mods and apps
section: REDnode
order: 5
description: "What a REDnode package is: Node mods, overlay apps and HUD widgets, the rednode-app.json manifest, the apps folder, permissions, requirements, and how to work on one."
reviewed: 2026-10-16
---

# Making mods and <span class="y">apps</span>

This part of the REDnode section is for people who want to make something. You need some JavaScript, or [REDagent](../redagent/) to write it with you. You don't need to know redscript, Lua or C++.

## Packages

Everything REDnode runs is a **package**: a folder in the apps folder with a manifest file, `rednode-app.json`. A package can be:

| Kind | What it is | Made of | Good for |
|---|---|---|---|
| **Node mod** | Code that runs in Node, outside the game | A `.mjs` file | Logic: reacting to the game, changing values, talking to other programs. Can open simple windows without any HTML |
| **Overlay app** | A web page drawn over the game | An `.html` page, with CSS and JavaScript | Rich windows and tools |
| **HUD widget** | An overlay app that never takes input | The same, with `"kind": "hud"` | Read-outs that sit on screen like the game's HUD |
| **App and mod together** | A page for the looks and a Node mod behind it | Both, talking over a channel | A web UI with a back end |

Node mods and overlay apps use the same `rednode` package to reach the game, so what works in one works in the other.

| | Node mod | Overlay app |
|---|---|---|
| Runs in | Its own Node process | A Chromium page in the overlay host |
| UI | REDnode's [ui builder](node-mods.html#windows-without-html) | Any HTML and CSS, or the [UI kit](overlay-apps.html#the-ui-kit) |
| npm packages | Yes | Yes, bundled or as plain browser scripts |
| If it crashes | Only that mod stops. **Restart** in the launcher | Only that page |
| Page | [Node mods](node-mods.html) | [Overlay apps](overlay-apps.html) |

## The manifest

`rednode-app.json` tells REDnode what the package is. A Node mod:

```json
{
  "id": "hello-mod",
  "name": "Hello mod",
  "version": "0.1.0",
  "author": "you",
  "description": "Shows where V is.",
  "main": "mod.mjs",
  "open": true
}
```

The fields you'll use most:

| Field | Means |
|---|---|
| `id` | Unique. Lowercase letters, digits, `-` and `_`. REDnode saves positions and settings under it, so don't change it later |
| `name`, `version`, `author`, `description` | Shown in the launcher and Mod Manager |
| `main` | A Node mod: the file to run |
| `entry` | An overlay app: the page to show. Needs `width` and `height` |
| `open` | Start it on (true) until the player decides otherwise |
| `permissions` | Powers the package asks the player for. See below |
| `requires` | Other mods it needs, with versions |

The full list, with window placement (`anchor`, `x`, `y`), `kind`, `hideWith` and `isolation`, is in [Settings and controls](settings.html#manifest-fields).

## The apps folder

Packages live in `red4ext\plugins\REDnode\apps` in the game folder, one folder each. The overlay host watches that folder while the game runs:

| You | REDnode |
|---|---|
| Add a package folder | Finds it at once. It starts if its manifest says `"open": true`; otherwise switch it on in the [Mod Manager](mod-manager.html). It starts unpinned and counts as new |
| Change the manifest | Restarts the package |
| Change a file, with **Hot reload** on | Restarts the mod, or reloads the page, in about a second |
| Delete the folder | Stops the package |
| Save a manifest that names a file you haven't written yet | Skips the package until that file exists |

So the loop is: game running, **Hot reload** switched on in the launcher, your package's folder open in an editor. Save, and look. No game restart.

Write files your package keeps (settings, saves) to its data folder (`pkg.dataDir`), never into its own folder: hot reload watches that, and an update would overwrite it.

## Permissions

A package can ask for powers the player must allow, in its manifest:

```json
"permissions": ["agent", "bridge"]
```

| Permission | Gives | See |
|---|---|---|
| `mcp` | REDnode's MCP tools for an AI agent inside the package | [Agents and MCP](agents.html) |
| `agent` | Asking REDagent questions | [Agents and MCP](agents.html#asking-redagent-from-a-mod) |
| `bridge` | REDbridge: the game's archives and files | [Game API](game-api.html#the-games-files-through-redbridge) |
| `front` | Staying in the tool layer, above other packages | [Spaces and layers](spaces.html#the-tool-layer) |
| `solo` | Solo mode | [Spaces and layers](spaces.html#solo-mode) |

The calls that need a permission reject until the player allows it. Explain in your description why you need it.

## Requirements

If your package needs another mod, say so:

```json
"requires": {
  "codeware": ">=1.14",
  "tweakxl": ">=1.10"
}
```

REDnode checks the game folder: RED4ext plugins by folder or DLL, redscript modules in `r6/scripts`, Cyber Engine Tweaks mods, and `red4ext`, `cet` and `redscript` themselves. Versions come from the DLL where it has one. Ranges work the npm way (`>=1.16`, `^1.16`, `~1.16`, `*`). The player sees what's missing in the launcher and Mod Manager, and your code can ask with `kernel.requirements()`. Your package still runs, so it can explain.

The [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html#requirements) has every rule for names and ranges.

## What's in the `rednode` package

| Part | For | Page |
|---|---|---|
| `game` | Player position, game events, what the game is showing, UI sounds | [Game API](game-api.html#the-game-helper) |
| `api` | Any game function, typed | [Game API](game-api.html#calling-any-game-function) |
| `tweakdb` | Reading and changing TweakDB | [Game API](game-api.html#tweakdb) |
| `world` | Spawning and moving objects (needs Codeware) | [Game API](game-api.html#placing-things-in-the-world) |
| `ui` | Windows from Node, and solo mode | [Node mods](node-mods.html#windows-without-html) |
| `pkg`, `secrets` | Your package's id, folders and secrets | [Node mods](node-mods.html#data-and-secrets) |
| `channel` | Messages between your page and your Node mod | [Node mods](node-mods.html#a-page-and-a-mod-together) |
| `kernel` | Requirements, REDbridge, the MCP server | [Game API](game-api.html#the-games-files-through-redbridge), [Agents](agents.html) |
| `agent` | Asking REDagent | [Agents and MCP](agents.html#asking-redagent-from-a-mod) |

The `rednode` package is written in TypeScript and carries types for every call, and for the game's 15,000-odd classes. An editor such as [REDcode](../redcode/) completes them as you type. The [API reference](https://edgemodders.github.io/REDnode/api/) lists every call with examples.

## Learn from the samples

REDnode's deploy puts its sample packages in the apps folder. Each is small and readable:

| Sample | Shows |
|---|---|
| Hello mod | A Node mod with a window, a button and live data |
| Ticker mod | A Node mod with no window: logs game events |
| Crash mod | Breaking on purpose, to see isolation and restarts |
| UI kit | Every UI kit widget in one window |
| Native button | A borderless button that looks like the game's |
| Coords HUD, Vitals | HUD widgets, reading V's position, health, level and money |
| Game API mod | Calling the game from Node, including a change (100 eddies) |
| TweakDB test | Reading and changing TweakDB |
| World test | Spawning a box in front of V |
| Layers test, Pointer lock test, Test timer | Solo mode, holding the cursor, staying on top |
| Ask mod | Asking REDagent and streaming the answer |
| Packaging test | Requirements and REDbridge |

Their source is in REDnode's repo under [`packages/overlay/apps`](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay/apps).

## Or let REDagent write it

[REDagent](../redagent/) writes, runs, checks and fixes REDnode packages with you, in the game. It only writes inside the apps folder, shows every change before making it, and can undo. See [Your first mod with REDagent](../redagent/first-mod.html).

## Sharing your package

There's no REDnode release for players yet, so there's no standard way to publish a package. For now, share the folder: players put it in their apps folder. When REDnode ships as a normal mod, packages are planned to be separate mods that list REDnode as a requirement, the way CET mods list CET.
