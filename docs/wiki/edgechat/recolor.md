---
title: Recolor a jacket with EDGEchat
nav_title: Recolor a jacket
section: EDGEchat
order: 3
description: "A clothing mod the way most are made: Claude makes a WolvenKit project with EDGEmat, packs it, and EDGEdeck puts it in the game. The NCPD badge coat, in red."
reviewed: 2026-11-03
---

# Recolor a <span class="y">jacket</span>

This page makes a mod that changes how a jacket looks, the way most clothing mods are made: a WolvenKit project holding the game's files for that jacket, changed, then packed and put in the game by [EDGEdeck](../edgedeck/). Claude does the file work through the `edgemat` and `redcode` connections; you check the result. Allow 20 minutes.

## Before you start

- [Install and connect](install.html) done, with EDGEmat's library built (step 7 there).
- EDGEdeck in VS Code, for the easy way to start the game afterwards (step 6).
- The game running at a loaded save, for step 1. You close it in step 5.

## Step 1: Put the jacket on V

This page uses the **Heavy-duty aramid-reinforced badge coat**, the NCPD coat: it's easy to get, and it's the one EDGEchat was tested with. Its id in the game's data is `Items.Cop_01_Set_Jacket`.

Open [REDnode's Console](../rednode/overlay.html#the-console) from the launcher (**F10**; REDnode 0.49.5 or later) and type:

```js
addItem("Items.Cop_01_Set_Jacket")
```

The coat goes into V's inventory. Equip it there.

To use a jacket V already wears instead, ask Claude:

> What is V wearing in the outer torso slot? Give me its TweakDB record id.

Claude reads it from the game without asking, and answers with an id. Use that id instead of `Items.Cop_01_Set_Jacket` below.

## Step 2: Know what you're recoloring

A garment in the game is not one file. Ask:

> What materials does Items.Cop_01_Set_Jacket have? Use edgemat.

Claude follows the item through the game's data to its meshes and materials, and lists them. The badge coat is a jacket with a tactical vest, a belt, an NCPD patch and cuffs, each with its own mesh and material. The jacket's material is `cop_blue_black`: that's the one to change.

Three things to know, all met while testing this page:

| Know | Why |
|---|---|
| One item can be several meshes worn together | Recolor only the part you mean: here the jacket's `cop_blue_black`, not the vest's |
| Each body type has its own mesh | `pwa` in a file name is the feminine body, `pma` the masculine. A recolor changes both, so it works for any V |
| V's clothes and NPCs' clothes are different files | V's are under `player_equipment`. A file under `citizen_casual` or another NPC folder changes what NPCs wear, not V. If the file list in step 3 has no `player_equipment` path, the wrong mesh was picked |

[EDGEmat's pages](../edgemat/) explain materials, layers and recolors in depth.

## Step 3: Make the project, in red

Ask, naming a folder of your own outside the game folder, with a name in lowercase:

> Make a new WolvenKit project at `C:\Users\<you>\Documents\Cyberpunk Mods\red_badge_coat` that recolors the jacket of Items.Cop_01_Set_Jacket (its cop_blue_black material) to bright red with edgemat. Don't deploy yet.

Claude makes the project, describes the jacket's color layers in plain words, writes a red version of its material into the project, and points the jacket's meshes at it. Claude Code asks before writing files. At the end Claude lists what's in the project. Check that:

- the paths are under `base\characters\garment\player_equipment\torso\t2_064_jacket__t2_player_heavy\`;
- both bodies are there: `t2_064_pwa_...` and `t2_064_pma_...`;
- there is one new `.mlsetup` file, such as `cop_blue_black_red_badge_coat.mlsetup`.

You can do the same by hand in the [EDGEmat extension](../edgemat/new-material.html): find the item, open its material, recolor it, and add it to the project. Claude takes it from there.

## Step 4: Pack it

> Pack the project.

The `redcode` connection packs the game files in the project's `source\archive` folder into one file, `red_badge_coat.archive`, in its `packed` folder. It warns about capital letters or spaces in game paths; there should be none.

Some projects pack as a **REDmod** instead, into `packed\mods\<name>\`. That works too, with one difference in step 6.

## Step 5: Put it in the game with EDGEdeck

**Close the game first:** EDGEdeck won't deploy while it runs. Then:

> Install the project into EDGEdeck and show me what a deploy would change.

Claude adds the project to EDGEdeck's library, as version `dev`, switched on, and lists what the next deploy would do:

| You see | Means |
|---|---|
| `add` `archive/pc/mod/red_badge_coat.archive` | Your mod, as expected |
| Other mods' files too | Mods you switched on earlier but never deployed. A normal deploy puts them in as well. To keep this to one mod, ask to deploy only `red_badge_coat` |

> Deploy only red_badge_coat.

Claude Code **asks before the deploy**, every time, because it writes into the game folder. Allow it. EDGEdeck links the file into the game folder and records it, so it can [undo the deploy](../edgedeck/deploying.html#undo-deploy) or remove the mod later.

## Step 6: Start the game and look

The easy way is EDGEdeck's **Run game**, the play button in its Mods view. It deploys any waiting changes first (every mod that's on, not only this one), then starts the game with `-modded`. See [Start the game](../edgedeck/deploying.html#start-the-game).

Starting from Steam works the same for a mod packed into `archive\pc\mod`. A **REDmod** loads only when the game starts with `-modded`: add it to the game's launch options in Steam, or use **Run game**. Without it the jacket keeps its old color.

Load a save and look at V: the badge coat is red, in the inventory preview too.

{% include shot.html caption="The red badge coat" shows="V in the game wearing the NCPD badge coat with its jacket recolored bright red, the tactical vest over it unchanged." %}

## If it isn't red

| Check | How |
|---|---|
| V wears this coat | Ask "What is V wearing in the outer torso slot?" |
| The project changed V's jacket, not an NPC's | The paths in step 3 are under `player_equipment` |
| A REDmod, started without `-modded` | Start with **Run game** |
| The pack is older than your change | Pack again, then install and deploy again (steps 4 and 5) |
| Something else | `/edge:check-mod`: see [When a mod doesn't work](check-mod.html) |

## Good to know

- **A replaced file changes it everywhere it's used.** Your mod replaces the coat's meshes, so anyone wearing this coat in your game shows red.
- **The game's own files never change.** Your mod is a separate file the game loads on top. Remove it and the coat is back to normal.
- **To remove the mod,** ask Claude to remove it from EDGEdeck, then deploy, or use EDGEdeck's **Undo** on the last deploy. Both ask first.

## Check

- The project holds V's jacket meshes for both bodies, and one new `.mlsetup`.
- Claude Code asked before the deploy.
- The coat is red in the game.

Next: [Change it while you play](live.html). EDGEchat's [lesson 3](https://edgemodders.github.io/EDGEchat/guide-recolor.html) covers the same steps.
