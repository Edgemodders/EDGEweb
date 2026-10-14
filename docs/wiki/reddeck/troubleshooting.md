---
title: Troubleshooting REDdeck
nav_title: Troubleshooting
section: REDdeck
order: 13
description: "Fixes for common REDdeck problems: game not found, Vortex, missing conflicts, changed files, Nexus downloads, and a game that won't start."
reviewed: 2026-10-14
---

# Troubleshooting <span class="y">REDdeck</span>

## Start with the log

**Show log** in the Mods view's `...` menu, or **View**, **Output**, then **REDdeck** in the dropdown. The first lines say where the library and the game are and how the game was found. When you ask for help, include them.

## Problems and fixes

### "Game not found" in the status bar

REDdeck couldn't find Cyberpunk 2077 in your Steam libraries, GOG or Epic.

1. Click the status bar, or the **Find the game folder** row in the Set up group.
2. Pick the folder that contains `bin`, `archive` and `r6`.

If the game *is* in one of the Steam libraries the log lists, please [report it](https://github.com/Edgemodders/REDdeck/issues) with those log lines.

### "Vortex manages the game"

Vortex has mods deployed in the game folder, and two managers can't deploy into one folder. Purge in Vortex (**Mods**, **Purge**), then deploy in REDdeck. See [Switch from Vortex](switch-from-vortex.html).

### No conflicts inside archives

Those need REDbridge. Look at the REDdeck page's footer:

- A **green dot** and a REDbridge version: it's running. If you still see no archive conflicts, you may simply have none.
- A **Get REDbridge** button: click it. REDbridge also needs the .NET 10 runtime, which Get REDbridge installs for your user account.

### A mod says "changed in game folder" or "changed, deploy again"

Something outside REDdeck changed or replaced its files, usually a Steam **Verify integrity of game files** or a game update. Deploy. REDdeck asks about each changed file whether to keep the change or put the mod's file back. See [Deploying and undo](deploying.html#changes-made-outside-reddeck).

### "Premium only" when updating

Nexus gives direct downloads to Premium members only. REDdeck opens the file's Nexus page instead; press **Mod manager download** there and the file arrives through the download link. See [Nexus Mods](nexus.html#premium-and-free-accounts).

### Mod manager download on Nexus opens Vortex, not REDdeck

Vortex takes the download links back every time it starts. Use **Nexus: handle download links (nxm)**, or the row that reappears in the Set up group.

### Deploy copies files instead of using hardlinks

Your library is on a different drive from the game. Hardlinks only work on the same drive. Move the library: set `reddeck.libraryPath` to a folder on the game's drive. See [Library, disk space and loadouts](library.html#moving-the-library).

### The game won't start after a game update

A framework probably needs updating for the new game version. Check the Frameworks group's header and update what it names. See [Frameworks and game patches](frameworks.html#after-a-game-update).

### The game won't start, or crashes, after adding mods

1. Press **Undo deploy** and start the game. If it works, a mod is the cause.
2. Turn half your mods off and deploy. Start the game. Keep halving until you find the mod.
3. Check that mod's Nexus page for its requirements: a framework it needs may be missing or out of date.

A [loadout](library.html#loadouts) saved before you start makes it easy to get back to your full list afterwards.

### Something else

Ask on [Discord]({{ site.discord }}) with your log's first lines, or [open an issue](https://github.com/Edgemodders/REDdeck/issues) on REDdeck's repo.
