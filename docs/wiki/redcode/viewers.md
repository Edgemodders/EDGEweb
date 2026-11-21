---
title: Textures, meshes and sounds
section: REDcode
order: 7
description: "See and hear what a mod is made of in REDcode: the texture viewer, the 3D mesh viewer and Find Items, animations on a body and synced sets, streaming sectors in 3D, the audio player, the game's 73,000 sound effects, and replacing one."
reviewed: 2026-11-21
---

# Textures, meshes and <span class="y">sounds</span>

REDcode shows game files the way they look and sound, not only as data. Each viewer opens with a click, from your project or straight from Game Assets, with nothing to extract first.

| On this page | |
|---|---|
| [Textures](#textures) | The texture viewer |
| [Meshes in 3D](#meshes-in-3d) | The 3D view, [its light](#the-light), and [which items use a mesh](#which-items-use-a-mesh) |
| [Animations](#animations) | Play an animation on a body, with root motion, and [a synced set](#synced-sets) together |
| [Streaming sectors](#streaming-sectors) | A piece of the game's world in 3D, every mesh where the game puts it |
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

{% include shot.html caption="The texture viewer" src="/assets/shots/redcode/viewers-texture.png" alt="A normal map of a pair of shoes in the texture viewer, over a checkerboard, with the Fit, 1:1 and Pixels buttons at the top right." shows="A game texture open in the texture viewer, over the checkerboard, with the size and the Fit, 1:1 and Pixels buttons." %}

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
- Drag the **splitter** between the 3D view and the list to widen the list for long names. Double-click it for the default width. The width is kept for the window, and the animation view shares it.
- **Tree** and back to **3D** keeps the view as you left it: the camera, and in the other 3D views the animation and the sectors loaded.

{% include shot.html caption="The 3D mesh viewer" src="/assets/shots/redcode/viewers-mesh.png" alt="The Nokota Osprey rifle in the 3D view in flat colours on a ground grid: the LOD and appearance pickers, Wireframe, Bounds, Grid, Frame, Find Items and Open in EDGEmat in the toolbar, the triangle and size line, and the submesh list on the right." shows="A vehicle or weapon mesh from the game in the 3D view: the model coloured by material, the LOD picker and toggles in the toolbar, and the submesh list on the right." %}

Good to know:

- Game meshes are **coloured by material**, not textured.
- With [EDGEmat](../edgemat/) installed, the view shows the materials as EDGEmat renders them: colours only, and approximate. See [EDGEmat in 3D](../edgemat/view-in-3d.html).
- The view shows the **saved** file. Save to see your edits.
- `.glb` and `.gltf` files, such as a mesh you exported to Raw, open in the same viewer. A model that carries its own materials and textures, such as one from Blender, shows them; **Shading** switches to flat colours.

### The light

The mesh, animation and sector views light a model more like the game does. There is an environment for metal and gloss to reflect, and highlights are toned down so they don't turn flat white.

| Control | Does |
|---|---|
| **Light** | Sets the brightness, from 0.5× to 2.5×. A dark material is easier to read at 1.5× or more |
| **Fixed light** | Keeps the light still while you turn the model, to see how shine moves over it |

The light you pick is the one the next 3D view opens with, in the same window.

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

{% include shot.html caption="Find Items" src="/assets/shots/redcode/viewers-find-items.png" alt="The shoe mesh in the 3D view with the red_yellow_graphic appearance, and the Find Items list over it: three records under Shows red_yellow_graphic, named Sunny Ammo synthetic high-tops, then the other appearances of the mesh." shows="Find Items open over the 3D view of a pair of shoes: under Shows red_yellow_graphic, three item records with their names in the game, then the other appearances of the mesh below." %}

**Try it.** In Game Assets, filter for `converse mesh` and open `s1_055_pma_shoe__converse.mesh`. Pick `red_yellow_graphic` in the Appearance list and press **Find Items**. You should see `Items.CasualShoes_01_basic_01`, the Sunny Ammo synthetic high-tops, at the top.

## Animations

An animation file (`.anims`) opens on an **Animations** view. It lists the file's animations with their length, and plays the one you pick on its **rig**, the skeleton the animation moves.

- A man's or a woman's animations play on the game's plain grey **base body**. The toolbar says which rig and which body: `Rig man_base.rig`, `On Base male body`. Heads are meshes of their own, so the base body has none.
- Other rigs, such as a vehicle's or the player's, show **bones** only: lines and dots for the bones and joints.
- **Body** and **Bones** switch each on and off. **Frame** fits the view to the whole animation.
- **Root motion** moves the whole rig through the scene as the animation moves it, such as a soldier dropping from an AV and walking off, and the view follows. It is off at first, and REDcode remembers your choice.
- **Play** and pause, a bar to drag through the animation, single frames, **Loop** and speed. An animation of a frame or two, a still pose, opens paused.
- **Tree** shows the file's data; **Animations** goes back to where you were.
- A large file takes about a minute to open the first time, and is quick after that.

Other EDGE tools can open an animation on a character's own meshes, such as [EDGEquest](../edgequest/)'s Preview: a Trauma Team paramedic with helmet and clothes, still plain grey.

**Try it.** In Game Assets, filter for `synced__q001_00c__male_average` and open the `.anims`. Pick `synced__q001_00c_trauma_arrives_soldiers__land_v1__soldier_01`: the body crouches and drops, in place. Turn on **Root motion**: it travels about 14 metres, and the view follows it.

{% include shot.html caption="The animation view" shows="An .anims file open on the Animations view: the base male body on the grid, the toolbar with Frame, Body, Bones, Root motion and the rig and body names, and the list of animations with their lengths on the right." %}

### Synced sets

Some animations are one part of a moment several characters play together: the Trauma Team's landing is a clip for the AV and one for each soldier, each in its own `.anims` file. Pick such a clip, and a **Synced set** section under the list names the others in the same folder, each with a colour and a tick.

- **Play the Set** turns on Root motion and plays them together on one clock, each on its own rig, placed where the game puts them. A row says **placed** once it is; hover it to see how. **Stop the Set** shows the one animation alone again.
- Play, pause, the time bar, Loop, speed, **Body**, **Bones** and **Frame** act on every member.
- Untick a member to hide it. The player's male and female files are alternatives: ticking one unticks the other.
- Turning **Root motion** off stops the set.

**Try it.** In the landing above, press **Play the Set**. The AV and the second soldier join. At the start both soldiers are inside the AV; at the end they stand on the ground out from it, about 4 metres apart.

{% include shot.html caption="A synced set" shows="The Trauma Team landing playing as a set: the AV's bones and two soldiers' bodies, and the Synced set section under the animation list with three ticked members marked placed." %}

## Streaming sectors

The game's world is cut into **streaming [sectors](../glossary.html#sector)** (`.streamingsector` files), each a list of what stands in one piece of the map: buildings, props, decals, lights. A sector from the game or your project opens on a **3D view**, read-only, with every mesh drawn where the sector places it.

| To | Do |
|---|---|
| Turn, pan, zoom | Drag, right-drag, mouse wheel |
| Fly | Click the view, then W, A, S, D, Q and E. Shift goes faster |
| See what something is | Click it: it is outlined, the line below names it, and the Properties view shows its entry |
| Go to it in the file | **Show in Tree** |

- **Markers** shows the things that aren't meshes, such as entities, decals and lights, as markers.
- **By material** colours by material instead of by mesh.
- **Streamed** shows only what the game would draw from where the camera is. Fly closer and more appears.
- **Coarser levels** adds the sectors that hold what is seen from far away over this one. There can be hundreds, so a bar over the view counts them as they are read, then as their meshes export.
- **Light** and **Fixed light** work as in the [mesh view](#the-light).
- The first time, each mesh is exported, which takes a few seconds for a busy sector (Coarser levels can take minutes). After that a sector opens at once.

The view shows the **saved** file. To move something, add the sector to your project with **Add to Project** in the editor's header, change its entry's position in the tree, and save: the view draws it in its new place.

**Try it.** Search game files for `exterior_-22_7_0_0.streamingsector` and open it: about 105 meshes drawn nearly 9,000 times, and 202 markers.

{% include shot.html caption="A streaming sector in 3D" shows="A streaming sector open on the 3D view: buildings and street seen from above, one building outlined in the accent colour, the toolbar with Markers, By material, Streamed, Coarser levels and Light, and the count line below." %}

## Sounds

A sound file opens in the **audio player**. Most `.wem` files in the game are voice lines, in the `localization` folders. `.opus` files open in it too.

- The player shows the sound's **waveform**. Click or drag on it to jump to a point.
- **Play** and **Loop** sit below it. `Space` plays and pauses.
- The toolbar shows the time, codec, channels and sample rate.
- **Save...** writes the sound to a file.
- **Open in EDGEwave** hands the sound to EDGEwave, the EDGE sound studio. See [Working with other tools](other-tools.html#edgewave).

WAV, Ogg, MP3 and FLAC files keep VS Code's own preview, and offer the player under **Open With...**.

{% include shot.html caption="The audio player" src="/assets/shots/redcode/viewers-audio.png" alt="A voice line, a .wem file, in the audio player: its waveform, the Play and Loop buttons, the time 0:00.0 of 0:06.2, and Vorbis, mono, 48 kHz at the right." shows="A voice line (.wem) open in the audio player: the waveform with the play position, the Play and Loop buttons, and the codec and rate in the toolbar." %}

## The game's sound effects

The game's sound effects aren't separate files you can browse. About **73,000 sounds** are packed together, with an index file that groups them into **events**, such as a gunshot or a door, each with a few variations. Each sound is known by a number, its **hash**.

**REDcode: Browse Game Sounds**, in the Game Assets **`...`** menu, opens that index as a list.

- Type in the filter box to narrow the list by event name, tag or hash. All the words must match, for example `revol reload`.
- Click a row to play its first sound, or a number to play that variation.
- The arrow keys step through the list and play as they go.
- **Copy Hash** copies the hash of the sound that's playing. **Replace…** [replaces it](#replacing-a-sound) with your own. **Save...** writes it as an `.opus` file.
- **Open in EDGEwave** works here too.

Event names come from WolvenKit's list of events for game version 1.6. It names about 10,900 of the 16,100 events that have sounds; the rest show only their hash.

{% include shot.html caption="The game sound list" src="/assets/shots/redcode/viewers-sounds.png" alt="Browse Game Sounds with revol reload in the filter, 2 of 16,175 events: two reload events with numbered variations, the first variation playing, its waveform above with Pause and Loop." shows="Browse Game Sounds open: the filter box with a search such as revol reload, the list of events with numbered variations, one playing." %}

### Replacing a sound

You can replace any of the game's **sound effects** with a WAV file of your own, in one step. It needs a project open; without one, **Replace…** offers **New Project** or **Open Folder**.

1. In the game sound list, play the sound you want to replace and press **Replace…**.
2. If the event plays one of several sounds at random, REDcode asks: **Replace All** puts your WAV in for every one of them, **Only This One** for the one you picked. Replace only one and you hear yours only some of the time.
3. Pick your WAV.
4. Press **Pack and Play** in the message, with the game running under [REDnode](../rednode/), or **Pack and Install** and start the game.

| After | You should see |
|---|---|
| Step 3 | Your WAV copied to `source\raw\sounds\<hash>.wav`, named by the sound's hash, and imported at once: the Project view selects the new sound pack (`sfx_container_<number>.opuspak`) under **Archive**, beside a new sound index (`sfx_container.opusinfo`). Earlier replacements in the project stay. Replacing a sound you already replaced asks first |
| Step 4 | In the game, your sound plays where the old one did |

**Try it.** Filter the list for `cmn_generic_work_inhaler`, the sound of an NPC using an inhaler. It plays one of four sounds: press **Replace…**, then **Replace All 4**, and pick a WAV. Pack and Play, and watch an NPC use an inhaler.

Good to know:

- This was tested in the game by REDcode's developer, with the inhaler above.
- You can still do it by hand: save a WAV named by the hash (**Copy Hash**) anywhere under `source\raw`, and press **Import from Raw** on it.
- No rules for the WAV (length, mono or stereo, sample rate) are written down. Staying close to the original's length and channels is the careful choice.
- Every mod that replaces sounds carries its own copy of the game's one sound index. Two such mods can't both win: the game uses one index.
- With REDnode in the game, **Pack and Play** can swap a sound mod into the running game. See [Sound mods](pack-install.html#sound-mods).

**Voice lines** (`.wem`) can be exported to Ogg to listen to or edit elsewhere, but not imported back yet. See [Export and import](export-import.html#what-converts).

[EDGEwave](../edgewave/), the EDGE sound studio, builds on this to edit and mix sounds.
