---
title: EDGEkit
nav_title: Overview
section: EDGEkit
order: 0
description: "EDGEkit, the EDGEmodders editor: one app with every EDGE tool built in, and an extension pack that installs them in VS Code."
reviewed: 2026-11-03
---

# EDGE<span class="y">kit</span>

EDGEkit is the EDGEmodders editor: one app to install, with every EDGE tool already inside. It is built from Code - OSS, the open-source core of VS Code, with its own name and look, the way VSCodium is. You install EDGEkit and start modding Cyberpunk 2077, with no extensions to hunt for.

EDGEkit comes in two forms:

| Form | What it is | Status |
|---|---|---|
| **The EDGEkit app** | A complete editor of its own, with the EDGE extensions built in | **Released as a preview:** 1.140.3, 1 November 2026, Windows x64. See [Get the app](#get-the-app) below |
| **The EDGEkit extension pack** | One extension for VS Code (or VSCodium) that installs the published EDGE extensions in one go | **Available, as a preview:** 0.3.0, 3 November 2026. See [Install the extension pack](install-pack.html) |

## Why you might want it

| If you... | EDGEkit gives you |
|---|---|
| Are new to modding and to VS Code | The app: one install instead of a list of extensions to find and set up |
| Already use VS Code | The extension pack: REDcode, EDGEdeck, EDGEmat, EDGEwave and the HUD theme in one click |
| Want your tools to stay current | Each EDGE extension updates on its own, so a fix in EDGEdeck reaches you without waiting for a new EDGEkit |
| Want to stay offline | The app works on first start with no network, since its extensions are built in |

## Get the app

1. Download `EDGEkitSetup-1.140.3.exe` from the [EDGEkit releases page](https://github.com/Edgemodders/EDGEkit/releases/latest).
2. Run it. The installer isn't signed yet, so Windows SmartScreen may warn: choose **More info**, then **Run anyway**. It installs for your Windows user only, beside VS Code, without touching it.
3. On the **Select Additional Tasks** page, tick **Send Nexus Mods download links (Mod manager download) to EDGEdeck** if you want the **Mod manager download** button on Nexus Mods to send files to EDGEdeck. It starts unticked when Vortex or Mod Organizer has the links, so nothing is taken from them without asking. See [Download links](#nexus-mods-download-links) below.
4. On first start, a short onboarding offers an optional GitHub sign-in and a theme choice, then EDGEkit's Welcome walkthrough. When the onboarding closes, Claude Code installs from Open VSX after you confirm that you trust its publisher.
5. Once Claude Code is in, EDGEkit asks once whether to set up EDGEchat, the EDGE plugin for Claude Code. See [Claude Code for EDGE](#claude-code-for-edge) below.
6. Follow each tool's first steps: [REDcode](../redcode/install.html) needs REDbridge, [EDGEdeck](../edgedeck/install.html) has its Set up steps.

{% include shot.html caption="The installer's Nexus links box" shows="EDGEkit's installer on the Select Additional Tasks page, with the box Send Nexus Mods download links (Mod manager download) to EDGEdeck." %}

### Nexus Mods download links

Only one program on your PC receives the links behind Nexus Mods' **Mod manager download** button. The installer offers them to EDGEkit's EDGEdeck once: on a first install, and the first time you update by hand from 1.140.2 or older. After that, updates leave the links wherever you put them. Uninstalling EDGEkit gives them up if they still go to it.

To take them later, for example after Vortex took them back, use the Welcome page's **Get mods from Nexus Mods** step, or EDGEdeck's **Handle Nexus download links** row. See [Nexus Mods in EDGEdeck](../edgedeck/nexus.html#download-links).

EDGEkit checks for a new release when it starts and then every hour. When one is out, **Restart to Update** in the gear menu installs it. The built-in extensions update themselves from Open VSX in between. Each release's changes are in EDGEkit's [changelog](https://github.com/Edgemodders/EDGEkit/blob/main/CHANGELOG.md).

## What the app is

These are decisions from EDGEkit's design:

| Decision | What it means for you |
|---|---|
| Built on Code - OSS | It looks and works like VS Code, but is called EDGEkit everywhere, with its own icon and settings folder. It sits beside an installed VS Code without touching it |
| The EDGE extensions built in | In 1.140.3: REDcode 0.10.5, EDGEdeck 0.29.4, EDGEmat 0.3.1, EDGEwave 0.1.0, the REDnode HUD theme 0.3.1 (the default theme) and Redscript IDE 0.3.4. Each then updates itself from Open VSX. REDagent's editor view may join later |
| Extensions from Open VSX | VS Code's own Marketplace is only for Microsoft's products, so EDGEkit uses [Open VSX](https://open-vsx.org/), as VSCodium does |
| Windows x64 only, for now | Linux may come later |
| Unsigned at first | Windows SmartScreen may warn: choose **More info**, then **Run anyway** |
| No Copilot chat | Copilot chat and the Agents window are off. Claude Code installs from Open VSX on the first start, after you confirm |
| Rare releases | A new EDGEkit only when the editor itself changes. The extensions update themselves in between |

## Claude Code for EDGE

Giving Claude Code the modding knowledge and the EDGE tools is the job of EDGEchat, a separate Claude Code plugin. EDGEkit 1.140.2 or later sets it up for you:

1. Once Claude Code is installed, EDGEkit asks once whether to set up EDGEchat. Say yes.
2. Claude Code's plugin dialog opens on EDGEchat. Install it.
3. EDGEkit opens a new Claude Code session with `/edge:setup` ready to send. It checks EDGEchat's connections to the EDGE tools and says what's missing.

Missed the question? **EDGEkit: Set Up Claude Code for EDGE** in the command palette (`Ctrl+Shift+P`), or the Welcome page's step, does the same at any time. This passed the developer's test on a fresh install. For EDGEchat's settings and signing in to REDnode, see [EDGEchat's Install and connect](../edgechat/install.html).

{% include shot.html caption="Set up Claude Code for EDGE" shows="EDGEkit's one-time question offering to set up EDGEchat, and Claude Code's plugin dialog open on EDGEchat behind it." %}

## Status

As of 2026-11-03:

| Phase | State |
|---|---|
| K0 Decide | Done 2026-10-15: the decisions above |
| K1 Build | Done 2026-10-18: Code - OSS built from source, without Copilot |
| K2 Brand | Under way: name, icons, installer, default theme and watermark done; the onboarding and Welcome text wait for the owner's review |
| K3 Bundle | Done 2026-10-21: the EDGE extensions built in, working offline, updating from Open VSX |
| K4 Release | **Released:** 1.140.1, the first, on 2026-10-22; 1.140.2 (Claude Code for EDGE) on 2026-10-26; 1.140.3 (the Nexus links box, REDcode 0.10.5, EDGEdeck 0.29.4) on 2026-11-01. The extension pack 0.3.0, adding EDGEmat and EDGEwave, published on 2026-11-03 on the VS Code Marketplace and Open VSX. The update was tested end to end on the developer's PC (1.140.1 to 1.140.2); not yet seen: a real click on **Restart to Update** from an installed release |

## Roadmap

In plain words. Each phase ends with a test on the developer's PC.

| Phase | What it adds | Status |
|---|---|---|
| K0 Decide | The name, platform, updates, AI and trademark decisions | Done |
| K1 Build | Code - OSS built from source, unbranded | Done |
| K2 Brand | EDGEkit's name, icons, default theme and welcome page | Under way |
| K3 Bundle | The released EDGE extensions built in, working with no network, and updating themselves from Open VSX | Done |
| K4 Release | A Windows installer anyone can download, which updates itself. The extension pack shipped early | 1.140.3 released; pack 0.3.0 published |
| K5 Track upstream | Moving to newer Code - OSS releases every month or so, sooner for a security fix | Planned |

## In this section

| Page | |
|---|---|
| [Get the app](#get-the-app) | Download and install the EDGEkit app, Nexus download links, and Claude Code for EDGE (on this page) |
| [Install the extension pack](install-pack.html) | Get the EDGE extensions in VS Code with one install |

The [EDGEkit docs](https://edgemodders.github.io/EDGEkit/) and its [design](https://edgemodders.github.io/EDGEkit/design.html) are the developer reference. Source and issues: [github.com/Edgemodders/EDGEkit](https://github.com/Edgemodders/EDGEkit).

EDGEkit is not affiliated with Microsoft. Visual Studio Code is a trademark of Microsoft; EDGEkit is built from the MIT-licensed Code - OSS.
