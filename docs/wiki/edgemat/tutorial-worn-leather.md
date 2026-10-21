---
title: "Tutorial: worn leather pants with EDGEmat"
nav_title: "Tutorial: worn leather"
section: EDGEmat
order: 10
description: "Step by step: generate a worn brown leather from words with an AI image service, put it on a pair of slim-fit pants for both bodies, and wear them in the game."
reviewed: 2026-10-20
---

# Tutorial: worn <span class="y">leather</span>

In this tutorial you turn the **Comfy rocker aramid-weave slim-fits** into worn brown leather pants, from one line of words, and wear them in the game. It is the test EDGEmat passed on 2026-10-20, written up so you can follow it. It takes about 15 minutes, most of it in the game.

{% include shot.html caption="The result: worn leather slim-fits, front" shows="V in the worn leather slim-fits, from the front, in an indoor garage: warm brown leather with fine creases, the pants' own folds at the knees." %}

## What you need

| | |
|---|---|
| EDGEmat 0.3 or later and [REDcode](../redcode/) | [Install and set up](install.html) |
| A REDcode project | **REDcode: New Project** (`Ctrl+Shift+P`), for example `MyMaterials`. Leave it open |
| An image service key | Google Gemini or OpenAI, your own ([New Material](new-material.html#from-words-ai)). One take costs a few cents |
| [Cyber Engine Tweaks](https://www.nexusmods.com/cyberpunk2077/mods/107) | To put the pants on V |

## 1. Find the pants' material

1. Click EDGEmat's icon in the activity bar, then the **FIND** header (below the Library) and its magnifier.
2. Type `comfy rocker` and open **Comfy rocker aramid-weave slim-fits**. Its record id, `Items.Pants_01_basic_01`, shows beside it: you'll need it in the game.
3. Open your V's body (Feminine or Masculine), then the mesh `l1_012_pw?_pants__jeans_tight.mesh`.
4. Hover the material **leather** and press the sparkle icon at its right (**New Material Here...**).

The **New Material** page opens. **Where it goes** names leather on two meshes, `l1_012_pwa_...` and `l1_012_pma_...`: one per body, so the pants change whichever body you play.

{% include shot.html caption="Find, with New Material Here on the leather material" shows="The Find view open on the Comfy rocker slim-fits: the item with Items.Pants_01_basic_01 beside it, a body, the l1_012 mesh, and the leather material with the sparkle icon highlighted." %}

## 2. Generate the leather

1. Under **1. The image**, stay on **From words (AI)** and type:

   > worn brown leather with fine creases

2. Leave **Detail** on medium. Pick your service.
3. Press **Generate**. The first time, paste your API key in the box that opens. A notification shows while the service works, usually under a minute.
4. **Take 1** appears under **2. Takes**, and **3. The material** shows it tiled 3 × 3. Look for seams or a pattern that repeats too obviously. Not happy? Press **Generate again**, or change the words, and pick the take you like best.

{% include shot.html caption="Takes and the tiled preview" shows="The New Material page with two takes of worn brown leather, the second selected, and its 3 x 3 tiled preview with no visible seams." %}

## 3. Add it to the project

Under **3. The material**:

| Setting | Set to | Why |
|---|---|---|
| Name | `worn leather` | Names the files: `worn_leather` |
| Repeat | 6 | Six times across the pants: fine creases, not big blotches |
| Bumps | Moderate | The creases catch the light |
| Shine | Satin | A soft sheen, not plastic |
| Metal | off | |

Press **Add to Project**. The message says it saved `worn_leather` and put it on 2 mesh materials, and the page lists both meshes with "repeat in the texture, garment folds kept": the pants keep their own folds and wrinkles at their real size.

{% include shot.html caption="Saved into the project" shows="The message 'Saved worn_leather into ... and put on 2 mesh materials.' with Pack and Try and Show Files, and the page listing both l1_012 meshes with 'repeat in the texture, garment folds kept'." %}

## 4. Into the game

1. Close the game if it's running. In REDcode, **Pack and Install**. (Pack and Try is for a running game with Red Hot Tools: see [Your mod in the game](in-the-game.html).)
2. Start the game and load a save.
3. Open Cyber Engine Tweaks' console and run:

   ```lua
   Game.AddToInventory("Items.Pants_01_basic_01", 1)
   ```

4. Equip the pants, and look in photo mode: front, side and back.

{% include shot.html caption="Worn leather, side" shows="V in the worn leather slim-fits from the side: the leather texture follows the leg evenly, with soft highlights on the seat." %}

{% include shot.html caption="Worn leather, back" shows="V in the worn leather slim-fits from the back: fine creases, the pants' own folds behind the knees, panel lines reading as stitching." %}

## What to look for

| Look at | You should see |
|---|---|
| Folds | The pants' own wrinkles at the knees and ankles, at their normal size |
| The leather | Fine creases and cracks, even over both legs, with no obvious repeat |
| Panel lines | The pattern breaks where the garment's pieces meet. On leather this reads as stitching |
| Color | Close to the take. A warm image gives a warm, tan brown |

## Try next

- Change the words: "black patent leather", "cracked red leather". Glossy shine suits patent.
- Use a photo of your own: **From an image file**, no key needed.
- Ask Claude instead: [Tutorial: snakeskin by asking Claude](tutorial-snakeskin.html).
