---
title: EDGEkit
nav_title: Overview
section: EDGEkit
order: 0
description: "EDGEkit, the EDGEmodders editor: one app with every EDGE tool built in, and today an extension pack that installs them in VS Code."
reviewed: 2026-10-16
---

# EDGE<span class="y">kit</span>

EDGEkit is the EDGEmodders editor: one app to install, with every EDGE tool already inside. It is built from Code - OSS, the open-source core of VS Code, with its own name and look, the way VSCodium is. You install EDGEkit and start modding Cyberpunk 2077, with no extensions to hunt for.

EDGEkit comes in two forms:

| Form | What it is | Status |
|---|---|---|
| **The EDGEkit extension pack** | One extension for VS Code (or VSCodium) that installs the published EDGE extensions in one go | **Available now, as a preview.** See [Install the extension pack](install-pack.html) |
| **The EDGEkit app** | A complete editor of its own, with the EDGE extensions built in | Planned. Being built; nothing to download yet |

## Why you might want it

| If you... | EDGEkit gives you |
|---|---|
| Are new to modding and to VS Code | One install instead of a list of extensions to find and set up (the app, when it's ready) |
| Already use VS Code | The extension pack: REDcode, EDGEdeck and the HUD theme in one click |
| Want your tools to stay current | Each EDGE extension updates on its own, so a fix in EDGEdeck reaches you without waiting for a new EDGEkit |
| Want to stay offline | The app is planned to work on first start with no network, since its extensions are built in |

## What the app will be

These are decisions from EDGEkit's design, for an app that isn't built yet:

| Decision | What it means for you |
|---|---|
| Built on Code - OSS | It looks and works like VS Code, but is called EDGEkit everywhere, with its own icon and settings folder. It sits beside an installed VS Code without touching it |
| The EDGE extensions built in | REDcode, EDGEdeck, the REDnode HUD theme (the default theme), REDscript IDE, and later REDagent's editor view, EDGEmat and EDGEwave |
| Extensions from Open VSX | VS Code's own Marketplace is only for Microsoft's products, so EDGEkit uses [Open VSX](https://open-vsx.org/), as VSCodium does |
| Windows x64 only, for now | Linux may come later |
| Unsigned at first | Windows SmartScreen may warn. The download page will say how to get past it |
| No Copilot, telemetry off | Claude Code can be installed from Open VSX like any extension; EDGEkit doesn't bundle it |
| Rare releases | A new EDGEkit only when the editor itself changes. The extensions update themselves in between |

EDGEkit doesn't set up Claude Code itself. Giving Claude Code the modding knowledge and the EDGE tools is the job of EDGEplugin, a separate Claude Code plugin in its early design. Until then, see [Connect Claude Code](../connect-claude-code.html).

## Status

As of 2026-10-16:

| Phase | State |
|---|---|
| K0 Decide | Done 2026-10-15: the decisions above |
| K1 Build | **In progress.** Building Code - OSS from its source on the developer's PC. The download and branding steps work; a full build hasn't run yet |
| K4 Release, early parts | The extension pack 0.1.0 is published, as a preview, on the VS Code Marketplace and Open VSX (2026-10-16). A daily check watches for new EDGE extensions to add to it |

## Roadmap

In plain words. Each phase ends with a test on the developer's PC.

| Phase | What it adds | Status |
|---|---|---|
| K0 Decide | The name, platform, updates, AI and trademark decisions | Done |
| K1 Build | Code - OSS built from source, unbranded | In progress |
| K2 Brand | EDGEkit's name, icons, default theme and welcome page | Planned |
| K3 Bundle | The released EDGE extensions built in, working with no network, and updating themselves from Open VSX | Planned |
| K4 Release | A Windows installer anyone can download, which updates itself. The extension pack is the part that shipped early | Pack published; installer planned |
| K5 Track upstream | Moving to newer Code - OSS releases every month or so, sooner for a security fix | Planned |

## In this section

| Page | |
|---|---|
| [Install the extension pack](install-pack.html) | Get the EDGE extensions in VS Code with one install |

The [EDGEkit docs](https://edgemodders.github.io/EDGEkit/) and its [design](https://edgemodders.github.io/EDGEkit/design.html) are the developer reference. Source and issues: [github.com/Edgemodders/EDGEkit](https://github.com/Edgemodders/EDGEkit).

EDGEkit is not affiliated with Microsoft. Visual Studio Code is a trademark of Microsoft; EDGEkit is built from the MIT-licensed Code - OSS.
