---
title: Textures, meshes and sounds
section: REDcode
order: 7
description: "See and hear what a mod is made of in REDcode: the texture viewer, the 3D mesh viewer and Find Items, animations, the audio player, the game's 73,000 sound effects, and replacing one."
reviewed: 2026-11-13
---

# Textures, meshes and <span class="y">sounds</span>

REDcode shows game files the way they look and sound, not only as data. Each viewer opens with a click, from your project or straight from Game Assets, with nothing to extract first.

| On this page | |
|---|---|
| [Textures](#textures) | The texture viewer |
| [Meshes in 3D](#meshes-in-3d) | The 3D view, and [which items use a mesh](#which-items-use-a-mesh) |
| [Animations](#animations) | Play an animation on its skeleton |
| [Sounds](#sounds) | The audio player |
| [The game's sound effects](#the-games-sound-effects) | Browse and play all 73,000, and [replace one](#replacing-a-sound) |

## Textures

A texture (`.xbm`) is a picture the game wraps onto a shape or shows in its interface. It opens in the **texture viewer**: the image over a checkerboard, so you can see what's transparent, with its size.

| Button | Does |
|---|---|
| **Fit** | Scales the image to the pane |
| **1:1** | One texture pixel per screen pixel |
| **Pixels** | Sharp, blocky scaling, to see single pixels |

The same viewer opens `.dds` and `.tga` files, which VS Code can't show. In the Project view, PNG, JPG, BMP and TIFF open in it too, because a black texture is invisible in VS Code's own preview on a dark theme. In VS Code's own Explorer those files keep VS Code's preview: right-click one there and choose **Open With...**, then **REDcode Texture**, to get the viewer.

To see a texture's settings (its format, compression, flags), open it in the CR2W editor: see [Editing game files](editing.html#which-files-open-in-it). To change the picture, [export](export-import.html) it to PNG, edit it in any image editor, and import it back.

{% include shot.html caption="The texture viewer" shows="A game texture open in the texture viewer, over the checkerboard, with the size and the Fit, 1:1 and Pixels buttons." %}

## Meshes in 3D

A mesh (`.mesh`) is a 3D shape. It opens on a **3D view** inside the CR2W editor. **Tree** shows the file's data; **3D** goes back.

| To | Do |
|---|---|
| Orbit | Drag |
| Pan | Right-drag, or Shift-drag |
| Zoom | Mouse wheel |
| Fit the model in view | **Frame** |

Two words first. A mesh is made of parts, called **submeshes**, and each part has a material. An **appearance** is one set of materials for those parts: the same jacket shape in black leather, in red, with a logo. One mesh usually has several.

- The **Appearance** list switches between the mesh's appearances. Each submesh then shows the material that appearance gives it.
- The list on the right turns each **submesh** on and off, with its material name and triangle count.
- The toolbar picks the **LOD**, the level of detail: the game keeps simpler copies of a shape to draw at a distance. The most detailed comes first.
- It also turns on and off the **wireframe**, the **bounding box** and the **ground grid**, and shows the triangle count and the size in metres.
- **Find Items** lists the items in the game that wear this mesh. See [Which items use a mesh](#which-items-use-a-mesh).
- **Open in EDGEmat** puts the mesh on [EDGEmat](../edgemat/)'s Desk with the appearance shown open, to change its materials.

{% include shot.html caption="The 3D mesh viewer" shows="A vehicle or weapon mesh from the game in the 3D view: the model coloured by material, the LOD picker and toggles in the toolbar, and the submesh list on the right." %}

Good to know:

- Game meshes are **coloured by material**, not textured.
- With [EDGEmat](../edgemat/) installed, the view shows the materials as EDGEmat renders them: colours only, and approximate. See [EDGEmat in 3D](../edgemat/view-in-3d.html).
- The view shows the **saved** file. Save to see your edits.
- `.glb` and `.gltf` files, such as a mesh you exported to Raw, open in the same viewer. A model that carries its own materials and textures, such as one from Blender, shows them; **Shading** switches to flat colours.

### Which items use a mesh

**Find Items**, in the 3D view's toolbar, answers "which item is this?". It looks through TweakDB, the game's database, for the items whose look shows the mesh. The first time takes about 10 seconds, while TweakDB loads.

- Items that show the **appearance you're looking at** come first, then items showing **other appearances** of the mesh.
- Pick a row to open the item's [TweakDB record](tweakdb.html). The buttons on a row copy the record name, for [REDnode's Console](../rednode/overlay.html#the-console) or a tweak, or open the item's `.app` file.

Each row shows how the item reaches the mesh:

| On the row | What it is |
|---|---|
| The item's name in the game, and its record | The item, as the inventory shows it and as TweakDB knows it |
| The record's appearance name | The look the item asks for |
| The `.app` look | The entry in an `.app` file that the name leads to. An `.app` file is a list of looks, each naming the meshes it shows |
| The mesh appearance | The set of materials that look uses on this mesh |

It works for clothing and similar items: shoes, jackets, outfit sets, glasses, helmets, masks, food and drinks. It does not work for weapons, which choose their look another way. For a mesh no item shows, it lists the `.app` looks that use it, to open instead.

{% include shot.html caption="Find Items" shows="Find Items open over the 3D view of a pair of shoes: under Shows red_yellow_graphic, three item records with their names in the game, then the other appearances of the mesh below." %}

**Try it.** In Game Assets, filter for `converse mesh` and open `s1_055_pma_shoe__converse.mesh`. Pick `red_yellow_graphic` in the Appearance list and press **Find Items**. You should see `Items.CasualShoes_01_basic_01`, the Sunny Ammo synthetic high-tops, at the top.

## Animations

An animation file (`.anims`) opens on an **Animations** view. It lists the file's animations with their length, and plays the one you pick on its skeleton, drawn as bones and joints.

- **Play** and pause, a bar to drag through the animation, single frames, **Loop** and speed.
- **Tree** shows the file's data.
- A large file takes about a minute to open the first time, and is quick after that.

Bodies on the skeleton, and movement through the scene, are planned.

## Sounds

A sound file opens in the **audio player**. Most `.wem` files in the game are voice lines, in the `localization` folders. `.opus` files open in it too.

- The player shows the sound's **waveform**. Click or drag on it to jump to a point.
- **Play** and **Loop** sit below it. `Space` plays and pauses.
- The toolbar shows the time, codec, channels and sample rate.
- **Save...** writes the sound to a file.
- **Open in EDGEwave** hands the sound to EDGEwave, the EDGE sound studio. See [Working with other tools](other-tools.html#edgewave).

WAV, Ogg, MP3 and FLAC files keep VS Code's own preview, and offer the player under **Open With...**.

{% include shot.html caption="The audio player" shows="A voice line (.wem) open in the audio player: the waveform with the play position, the Play and Loop buttons, and the codec and rate in the toolbar." %}

## The game's sound effects

The game's sound effects aren't separate files you can browse. About **73,000 sounds** are packed together, with an index file that groups them into **events**, such as a gunshot or a door, each with a few variations. Each sound is known by a number, its **hash**.

**REDcode: Browse Game Sounds**, in the Game Assets **`...`** menu, opens that index as a list.

- Type in the filter box to narrow the list by event name, tag or hash. All the words must match, for example `revol reload`.
- Click a row to play its first sound, or a number to play that variation.
- The arrow keys step through the list and play as they go.
- **Copy Hash** copies the hash of the sound that's playing. You need it to [replace the sound](#replacing-a-sound). **Save...** writes it as an `.opus` file.
- **Open in EDGEwave** works here too.

Event names come from WolvenKit's list of events for game version 1.6. It names about 10,900 of the 16,100 events that have sounds; the rest show only their hash.

{% include shot.html caption="The game sound list" shows="Browse Game Sounds open: the filter box with a search such as revol reload, the list of events with numbered variations, one playing." %}

### Replacing a sound

You can replace any of the game's **sound effects** with your own sound. It needs a project open.

1. In the game sound list, play the sound you want to replace and press **Copy Hash**.
2. Save your sound as a WAV file named after that hash, such as `832549876.wav`, in your project's `source\raw` folder. It shows under **Raw** in the Project view. REDcode converts the WAV to the game's format itself.
3. Press **Import from Raw** on it.
4. Press **Pack and Install**, then start the game, or restart it if it was running.

| After | You should see |
|---|---|
| Step 3 | Under **Archive**, one or more sound packs (`sfx_container_<number>.opuspak`) and a new sound index (`sfx_container.opusinfo`). Earlier replacements in the project stay |
| Step 4 | The mod installed. In the game, your sound plays where the old one did |

Good to know:

- The steps up to the files in your project are tested. Hearing the replaced sound in the game has not been tested by REDcode's developer yet: please [tell us](https://github.com/Edgemodders/REDcode/issues) how it goes.
- No rules for the WAV (length, mono or stereo, sample rate) are written down. Staying close to the original's length and channels is the careful choice.
- Every mod that replaces sounds carries its own copy of the game's one sound index. Two such mods can't both win: the game uses one index.
- With REDnode in the game, **Pack and Play** can swap a sound mod into the running game. See [Sound mods](pack-install.html#sound-mods).

**Voice lines** (`.wem`) can be exported to Ogg to listen to or edit elsewhere, but not imported back yet. See [Export and import](export-import.html#what-converts).

[EDGEwave](../edgewave/), the EDGE sound studio, builds on this to edit and mix sounds.
