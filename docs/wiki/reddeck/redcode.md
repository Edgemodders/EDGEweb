---
title: REDdeck and REDcode
section: REDdeck
order: 10
description: "Test your own REDcode or WolvenKit project as a REDdeck mod, and copy files from installed mods into a project."
reviewed: 2026-10-13
---

# REDdeck and <span class="y">REDcode</span>

If you make mods in [REDcode](../redcode/) or WolvenKit, REDdeck is how you get them into the game alongside everything else, and how you borrow from mods you already have.

## Test your own mod

**Add from REDcode project** (in the Mods view's `...` menu) takes a project's packed output as a mod.

1. Open your project's folder in VS Code. It contains a `.cpmodproj` file; WolvenKit projects work too.
2. Pack the project. Today that means WolvenKit; packing from inside REDcode is planned.
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
| `.archive` files | Skipped. Their models, textures and other resources need extracting into `source/archive`, which REDcode's Game Assets view does |

Without a project open, REDdeck says so and offers REDcode's **New Project**.

> **Respect the author.** Another modder's files are theirs. Check the mod's permissions on its Nexus page before you publish anything that includes them.

## Still to come

Packing from REDcode, and a one-click **Install into REDdeck** and **Test in game** from inside it, are planned, along with REDnode packages as a REDdeck mod kind.
