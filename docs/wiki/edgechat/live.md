---
title: Change a mod while you play, with EDGEchat
nav_title: Change it while you play
section: EDGEchat
order: 4
description: "Swap a changed mod into the running game in seconds through REDswap, then bring EDGEdeck back in step with install and restore."
reviewed: 2026-11-03
---

# Change it while <span class="y">you play</span>

Restarting the game for every change is slow. REDnode can swap a freshly packed mod into the running game, so you see a change in seconds. Afterwards you bring EDGEdeck back in step, so it keeps managing the mod. Allow 10 minutes.

## Before you start

- [Recolor a jacket](recolor.html) done: the red badge coat deployed by EDGEdeck and showing in the game.
- REDnode 0.41.0 or later. It comes with [REDswap](../rednode/redswap.html), the part that does the swap on game 2.5.
- The game running at a loaded save, with V wearing the coat.

## Step 1: Change it and swap it in

> Recolor the jacket in red_badge_coat to bright green, pack it and swap it into the running game.

Claude changes the project's material, packs the project again, and asks REDnode to swap the new archive into the game. **Claude Code asks before the swap**, every time, because it replaces a file in the game folder while the game runs. Allow it.

The jacket turns green at once, without a restart: in testing the swap took 88 milliseconds. Claude reports what happened: that REDswap did the swap, that nothing failed, and that V's clothes were put on again so they show the new version, in the inventory preview too. A swap works the same for a mod in `archive\pc\mod` and for a REDmod in `mods\`.

{% include shot.html caption="Green after a swap" shows="V in the running game wearing the badge coat, now bright green, seconds after Claude swapped the new build in, with Claude Code's report of the swap beside it." %}

**Things already in the world keep the old version** until the game loads them again. V's clothes are refreshed for you; an NPC wearing the same coat stays red until they appear again.

Try a few more rounds, such as "make it darker" or "make the trim gold". Each is a pack and a swap, seconds each.

## Step 2: Why EDGEdeck is now out of step

EDGEdeck put the red version in the game, linked to the copy in its library. The swap replaced that file in the game folder with the green one. So now:

| Where | Has |
|---|---|
| Your project's `packed` folder | Green |
| The game folder | Green, from the swap |
| EDGEdeck's library | Still red, and no longer linked to the game's file |

EDGEdeck notices. **Close the game**, then ask:

> What would an EDGEdeck deploy change now?

It lists one file, your mod's archive, as **changed in the game folder**, and says the deploy will ask what to do with it. EDGEdeck won't overwrite or clean up that file until you choose. See [Changes made outside EDGEdeck](../edgedeck/deploying.html#changes-made-outside-edgedeck).

{% include shot.html caption="Changed in the game folder" shows="Claude Code listing what an EDGEdeck deploy would change after a swap: one archive marked changed in the game folder, with the keep and restore choices explained." %}

## Step 3: Bring EDGEdeck back in step

> Put the new build in the library and restore that file.

Claude does it in two steps:

1. It installs the project into EDGEdeck again, so the library gets the green build.
2. It deploys with **restore** for that file: the game's copy is replaced by the library's, the same green build, and linked again. Claude Code asks first.

Ask "What would a deploy change now?" again: nothing for your mod. Start the game: the coat is still green, and EDGEdeck manages it as before.

When Claude asks you to choose, the two choices mean:

| Choice | Does | Use when |
|---|---|---|
| **restore** | Puts the library's copy back in the game | The library has the version you want, as after the install above |
| **keep** | Takes the game folder's file into the library, as it is | You want exactly what's in the game, and have no project build of it |

Claude doesn't pick one for you without saying what each does.

## Don't delete swapped files by hand

If you swap in a mod EDGEdeck never deployed, REDnode adds its archive to `archive\pc\mod`, where EDGEdeck doesn't know about it. Don't delete it by hand, and don't leave it there: install the project into EDGEdeck and deploy ([Recolor a jacket, step 5](recolor.html#step-5-put-it-in-the-game-with-edgedeck)), so EDGEdeck manages it.

## The loop, from now on

| While | Do |
|---|---|
| The game runs | Change, pack, swap. Look. Repeat |
| You're done for the day | Close the game. Install the project's last build into EDGEdeck, and deploy with restore |

## Check

- The jacket turned green without a restart, and Claude Code asked before the swap.
- After closing the game, EDGEdeck showed the file as changed in the game folder.
- After install and restore, nothing was left to deploy, and the coat stayed green after a restart.

Next: [When a mod doesn't work](check-mod.html). EDGEchat's [lesson 4](https://edgemodders.github.io/EDGEchat/guide-live.html) covers the same steps.
