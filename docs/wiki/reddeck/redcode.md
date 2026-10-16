---
title: REDdeck and REDcode
section: REDdeck
order: 10
description: "Test your own REDcode or WolvenKit project as a REDdeck mod, and copy files from installed mods into a project."
reviewed: 2026-10-16
---

# REDdeck and <span class="y">REDcode</span>

If you make mods in [REDcode](../redcode/) or WolvenKit, REDdeck is how you get them into the game alongside everything else, and how you borrow from mods you already have.

## Test your own mod

**Add from REDcode project** (in the Mods view's `...` menu) takes a project's packed output as a mod.

1. Open your project's folder in VS Code. It contains a `.cpmodproj` file; WolvenKit projects work too.
2. Pack the project, with REDcode's **Pack** or with WolvenKit.
3. Choose **Add from REDcode project** and pick the project. It appears in your list like any mod.
4. Turn it on and deploy.

The mod **follows the project**. Each time you pack again, REDdeck refreshes the library copy, and the next deploy picks up the change. It's placed with your other mods, so conflicts with them show up the same way.

{% include shot.html caption="A project as a mod" shows="A REDcode project's packed output listed as a mod in REDdeck, with the status showing it was rebuilt and is waiting for a deploy." %}

## Copy files from a mod into your project

When a REDcode project is open, you can copy files from an installed mod into it, to learn from it or build on it.

1. Right-click a mod, one of its folders or a single file in the Mods view.
2. Choose **Add to Project**.

| File type | What happens |
|---|---|
| Loose files: scripts, CET Lua, TweakXL YAML, ArchiveXL files, configs | Copied into the project's `source/resources` at the same place they deploy, so your packed mod carries them to the same place in the game |
| A file the project already has, with different content | Left alone, unless you choose **Replace** |
| `.archive` files | REDdeck lists the resources inside and asks for all of them or a pick. REDcode then extracts them into the project's `source/archive` at their game paths. Resources the project already has are kept unless you choose **Replace**. Needs REDcode 0.6.1 and REDbridge 0.7.1 or newer; without them, archives are skipped and REDdeck says why |

Without a project open, REDdeck says so and offers REDcode's **New Project**.

> **Respect the author.** Another modder's files are theirs. Check the mod's permissions on its Nexus page before you publish anything that includes them.

## Installing from REDcode

Packing, installing and running the game also work from inside REDcode: its **Install** goes through REDdeck when REDdeck is installed, so REDdeck stays the one tool that writes to the game folder. REDcode is a separate extension: search the Extensions view for **REDcode for Cyberpunk 2077** by Edgemodders (its id is `edgemodders.redcode-cyberpunk`). See [REDcode](../redcode/). REDnode packages are a REDdeck mod kind of their own since 0.20 (see [Adding mods](adding-mods.html)).
