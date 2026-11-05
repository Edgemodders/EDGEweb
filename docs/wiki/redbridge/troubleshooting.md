---
title: Troubleshooting REDbridge
nav_title: Troubleshooting
section: REDbridge
order: 2
description: "Fixes for REDbridge problems: missing, too old, not starting, the .NET runtime, game 2.31, slow first TweakDB use, and where the logs are."
reviewed: 2026-11-05
---

# Troubleshooting <span class="y">REDbridge</span>

REDbridge has no window, so its problems show up in the tool that uses it. Start there.

## Where to look

| Tool | Where REDbridge shows | Its log |
|---|---|---|
| EDGEdeck | The EDGEdeck page's footer: a green dot and the running version, or a **Get REDbridge** button | **Show log** in the Mods view's `...` menu |
| REDcode | The status bar item for the bridge | **REDcode: Show REDbridge log**, or click the status bar item |
| REDnode | The Mod Manager, on a package that asks for the bridge permission or names REDbridge in its requirements, says which REDbridge it uses and where it came from, or shows **Get REDbridge** | REDnode's Mod log app, for the package's own messages |

## Problems and fixes

### EDGEdeck shows no conflicts inside archives

Look at the EDGEdeck page's footer. A **Get REDbridge** button means there's no REDbridge yet: click it. A green dot with a version means it's running, and you may simply have no conflicts inside archives. See [EDGEdeck's troubleshooting](../edgedeck/troubleshooting.html#no-conflicts-inside-archives).

### REDcode says REDbridge is too old

REDcode 0.10.0 and newer need REDbridge 0.10.0 or newer, and REDcode's **Find Items** needs 0.11.0 ("Find Items needs a newer REDbridge"). Run **REDcode: Update REDbridge**. If you set `redcode.bridgePath` to a copy you manage yourself, download the newer release and unzip it over that copy instead. See [Install and update](install.html#which-version-do-i-need).

### REDbridge doesn't start

Usually the .NET 10 runtime is missing.

1. Through EDGEdeck or REDnode's Mod Manager: run **Get REDbridge** again. It installs the runtime for your user account when it's missing.
2. Through REDcode: accept its offer to install the runtime, or run `winget install Microsoft.DotNet.Runtime.10` in a terminal.
3. Then **REDcode: Restart REDbridge**, or reload VS Code.

If it still fails, check that you haven't set `DOTNET_ROOT` for your whole Windows account (in Windows' environment variables). Remove it if you have: it makes .NET programs look only there, and breaks other tools such as Vortex. Use `edgedeck.dotnetRoot` or `redcode.dotnetRoot` instead when REDbridge needs a particular .NET.

### A REDnode package says REDbridge isn't available

Two things must be true:

- **REDbridge is installed.** The simplest way is **Get REDbridge** in REDnode's Mod Manager (F10, then the Mod Manager), on the package's line. REDnode also uses a copy that EDGEdeck (**Get REDbridge**) or REDcode (**REDcode: Install REDbridge**) fetched.
- **You allowed the package's bridge permission** in REDnode's Mod Manager. The Mod Manager also shows where REDbridge was found.

If Get REDbridge fails, the Mod Manager shows the error and **Try again**. It needs to reach GitHub.

### Streaming sectors read wrong on game 2.31

REDbridge 0.11.0 is built for game 2.5. On 2.31 it fails some quest sectors ("Non-zero padding bytes found"), and others come back with wrong node data. Everything else works. If you mod 2.31's world sectors, use REDbridge 0.10.0: download it from the [releases page](https://github.com/Edgemodders/REDbridge/releases) and point the tool at it, as in [Installing it by hand](install.html#installing-it-by-hand). EDGEdeck's daily update check leaves a copy you set up yourself alone.

### Game 2.5 files fail to open

REDbridge 0.10.0 and older are built with WolvenKit 9.1, from before game 2.5, and fail some of its files. Update to 0.11.0 or newer: **Update REDbridge** in EDGEdeck or REDnode's Mod Manager, or **REDcode: Update REDbridge**.

### A baked mesh isn't solid, or a bake warns "no collision data"

A mesh is solid only with `"solid": true` on it in the scene (REDbridge 0.12.0 or later) and collision data in the mesh. Without the data it still shows, and the bake's warning names it. Ask `mesh.info` first: `hasCollision` is false for those. Pick another mesh, or use an entity with a physical mesh. See [Solid objects](index.html#solid-objects).

### A bake refuses a file that isn't in the game's archives

A mod's or a project's file needs one of two things. Pass the mod's `archive` or the project's `root`, so REDbridge can check the file and read its size. Or give the object's `bounds` in the scene: the bake then runs, with a warning that the game needs the mod that has the file. Both need REDbridge 0.12.0.

### The first TweakDB look-up is slow

That's expected. REDbridge reads the game's TweakDB file on the first request, which takes about 12 seconds. After that, look-ups are quick. REDcode's TweakDB view says when it's loading.

### Something else

Ask on [Discord]({{ site.discord }}) with the lines from the tool's log, or [open an issue](https://github.com/Edgemodders/REDbridge/issues) on REDbridge's repo.
