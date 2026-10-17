---
title: Troubleshooting REDbridge
nav_title: Troubleshooting
section: REDbridge
order: 2
description: "Fixes for REDbridge problems: missing, too old, not starting, the .NET runtime, slow first TweakDB use, and where the logs are."
reviewed: 2026-10-16
---

# Troubleshooting <span class="y">REDbridge</span>

REDbridge has no window, so its problems show up in the tool that uses it. Start there.

## Where to look

| Tool | Where REDbridge shows | Its log |
|---|---|---|
| EDGEdeck | The EDGEdeck page's footer: a green dot and the running version, or a **Get REDbridge** button | **Show log** in the Mods view's `...` menu |
| REDcode | The status bar item for the bridge | **REDcode: Show REDbridge log**, or click the status bar item |
| REDnode | The Mod Manager, on a package that asks for the bridge permission, says where REDbridge was found | REDnode's Mod log app, for the package's own messages |

## Problems and fixes

### EDGEdeck shows no conflicts inside archives

Look at the EDGEdeck page's footer. A **Get REDbridge** button means there's no REDbridge yet: click it. A green dot with a version means it's running, and you may simply have no conflicts inside archives. See [EDGEdeck's troubleshooting](../edgedeck/troubleshooting.html#no-conflicts-inside-archives).

### REDcode says REDbridge is too old

REDcode 0.9.0 needs REDbridge 0.8.0 or newer. Run **REDcode: Update REDbridge**. If you set `redcode.bridgePath` to a copy you manage yourself, download the newer release and unzip it over that copy instead. See [Install and update](install.html#which-version-do-i-need).

### REDbridge doesn't start

Usually the .NET 10 runtime is missing.

1. Through EDGEdeck: run **Get REDbridge** again. It installs the runtime for your user account when it's missing.
2. Through REDcode: accept its offer to install the runtime, or run `winget install Microsoft.DotNet.Runtime.10` in a terminal.
3. Then **REDcode: Restart REDbridge**, or reload VS Code.

If it still fails, check that you haven't set `DOTNET_ROOT` for your whole Windows account (in Windows' environment variables). Remove it if you have: it makes .NET programs look only there, and breaks other tools such as Vortex. Use `edgedeck.dotnetRoot` or `redcode.dotnetRoot` instead when REDbridge needs a particular .NET.

### A REDnode package says REDbridge isn't available

Two things must be true:

- **REDbridge is installed** through EDGEdeck (**Get REDbridge**) or REDcode (**REDcode: Install REDbridge**). REDnode uses their copy.
- **You allowed the package's bridge permission** in REDnode's Mod Manager. The Mod Manager also shows where REDbridge was found.

### The first TweakDB look-up is slow

That's expected. REDbridge reads the game's TweakDB file on the first request, which takes about 12 seconds. After that, look-ups are quick. REDcode's TweakDB view says when it's loading.

### Something else

Ask on [Discord]({{ site.discord }}) with the lines from the tool's log, or [open an issue](https://github.com/Edgemodders/REDbridge/issues) on REDbridge's repo.
