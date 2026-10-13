---
title: Switch from Vortex to REDdeck
nav_title: Switch from Vortex
section: REDdeck
order: 1
description: Move your Cyberpunk 2077 mods from Vortex to REDdeck without losing anything.
reviewed: 2026-10-13
---

# Switch from Vortex to <span class="y">REDdeck</span>

REDdeck can take over the mods Vortex manages for Cyberpunk 2077. Vortex keeps its own copies, so you can go back.

## The one rule

**Only one manager can have mods deployed at a time.** While Vortex manages the game folder, REDdeck refuses to deploy. Purging Vortex first takes its files out of the game, so REDdeck can put them back.

## Steps

1. **Install REDdeck** from the [releases page](https://github.com/Edgemodders/REDdeck/releases) and open its Mods view in VS Code.
2. **Import.** In the **Set up** group, click **Import from Vortex**, or use the view's `...` menu. REDdeck copies Vortex's Cyberpunk mods into its library with their names, versions and Nexus ids.
3. **Check the list.** Turn on the mods you want. The **Frameworks** group at the top holds RED4ext, CET, redscript, ArchiveXL, TweakXL and friends, which most other mods need.
4. **Purge in Vortex.** In Vortex, open **Mods** and press **Purge**. This removes Vortex's deployed files from the game folder. Your mods stay in Vortex.
5. **Deploy in REDdeck.** Press **Deploy**. **Show pending changes** first if you want to see every file it will place, and why.
6. **Play.** If something looks wrong, **Undo deploy** removes everything REDdeck placed and nothing else.

## Good to know

- **Nexus download links.** Vortex takes the **Mod manager download** links back whenever it starts. If you use both, REDdeck's **Handle Nexus download links** row comes back so you can reclaim them.
- **Conflicts.** Click **Get REDbridge** in the Set up group to see conflicts inside mod archives, which Vortex can't show.
- **"Vortex manages the game".** This message means step 4 is still to do.

The [REDdeck guide](https://edgemodders.github.io/REDdeck/guide.html) covers each step in more detail.
