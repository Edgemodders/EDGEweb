---
title: Frameworks and game patches
nav_title: Frameworks and patches
section: EDGEdeck
order: 8
description: "How EDGEdeck handles RED4ext, CET, redscript, ArchiveXL, TweakXL and other frameworks, and what to do after a Cyberpunk 2077 update."
reviewed: 2026-11-03
---

# Frameworks and <span class="y">game patches</span>

## What frameworks are

Many Cyberpunk mods don't work alone. They're built on **frameworks**: community tools that add abilities the game doesn't have. A mod page on Nexus lists the frameworks it needs under its requirements.

| Framework | What it does |
|---|---|
| RED4ext | Loads native plugins into the game. Many other frameworks are RED4ext plugins |
| Cyber Engine Tweaks (CET) | Runs Lua script mods and their in-game windows |
| redscript | Compiles `.reds` script mods into the game's scripts |
| ArchiveXL | Lets archive mods add new items and appearances, not only replace existing ones |
| TweakXL | Changes the game's database of items and stats from simple YAML files |
| Codeware | A library many script mods use |
| Audioware | Adds custom sounds |
| input_loader | Adds custom key bindings |
| mod_settings | Gives mods a settings menu in the game |
| [REDnode](../rednode/) | Runs Node.js mods and overlay apps. Shown with the frameworks because REDnode packages need it |

In EDGEdeck, frameworks are mods like any other: you add them from Nexus (or as files), turn them on, and deploy. They're pinned in the **Frameworks** group at the top of the list because so much depends on them.

## Getting the frameworks

Most mods need at least RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL and Codeware. **Get the frameworks** gets those six in one go (EDGEdeck 0.29.0 or later). It's in four places:

- the download button on the Frameworks group's header;
- the **Get the frameworks** row in the Set up group, while any of the six is missing;
- a link on the EDGEdeck page;
- the Mods view's `...` menu.

A list shows each one with the version your library has and the version that's out, with the missing and older ones ticked. Confirm, then deploy.

The files come from each author's GitHub release, the same files and versions as on Nexus, so you don't need a Nexus account. Each one joins the same mod a Nexus download of it would, so its versions, update checks and **Switch version...** work as for any mod.

{% include shot.html caption="Get the frameworks" shows="The list Get the frameworks shows: the six frameworks with the library's version and the newest one, the missing and older ones ticked." %}

Frameworks other than those six, such as Audioware, input_loader or mod_settings, you add from their Nexus pages like any mod (see [Adding mods](adding-mods.html)).

## The game version

The Frameworks group's header shows the game version, for example `3, 3 on · game 2.31`. EDGEdeck reads the version from the game's executable and records it at every deploy.

## After a game update

**A game patch is the most common reason a modded game stops starting.** Frameworks hook deep into the game, and a patch can move what they hook into. Framework authors usually release updated versions within days.

When the game's version differs from the one at your last deploy, the Frameworks header says, for example, `game updated to 2.31`, with a warning icon. If you're signed in to Nexus, EDGEdeck checks the frameworks once for that game version and names the ones that have newer files.

{% include shot.html caption="Game updated" shows="The Frameworks group header saying game updated to 2.31 with a warning icon, and two frameworks marked update available." %}

What to do:

1. **Update the frameworks**, the button the EDGEdeck page shows after a game patch, updates them all at once; or update each one from its `update ... available` link. Frameworks update from their authors' GitHub releases, so no Nexus click is needed. **Update all** does every mod with an update, frameworks included. See [Update all](nexus.html#update-all).
2. **Deploy.**
3. If a framework has no update yet, wait for its author, or turn off the mods that need it until there is one.
4. If you aren't signed in to Nexus, EDGEdeck asks you to sign in so it can check. You can also check each framework's Nexus page yourself.

## Steam verify

A Steam **Verify integrity of game files** can overwrite files EDGEdeck deployed. Those mods then show `changed in game folder` or `changed, deploy again`. Deploy puts the mods' files back, asking first about any file that changed. See [Deploying and undo](deploying.html#changes-made-outside-edgedeck).
