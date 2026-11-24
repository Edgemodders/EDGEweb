---
title: Textures, meshes and sounds
section: REDcode
order: 7
description: "See and hear what a mod is made of in REDcode: the texture viewer, the 3D mesh viewer and Find Items, animations on a body, synced sets and making clips with Uthana, streaming sectors in 3D with their materials and selecting many things, the audio player, the game's 73,000 sound effects, and replacing one."
reviewed: 2026-11-22
---

# Textures, meshes and <span class="y">sounds</span>

REDcode shows game files the way they look and sound, not only as data. Each viewer opens with a click, from your project or straight from Game Assets, with nothing to extract first.

| On this page | |
|---|---|
| [Textures](#textures) | The texture viewer |
| [Meshes in 3D](#meshes-in-3d) | The 3D view, [its light](#the-light), and [which items use a mesh](#which-items-use-a-mesh) |
| [Animations](#animations) | Play an animation on a body, with root motion, [a synced set](#synced-sets) together, and [make a clip](#making-a-clip) from words or a GLB |
| [Streaming sectors](#streaming-sectors) | A piece of the game's world in 3D, every mesh where the game puts it: [moving round](#moving-round), [picking and materials](#picking-a-thing-and-its-materials), [selecting many](#selecting-many-things) |
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

{% include shot.html caption="The animation view" src="/assets/shots/redcode/viewers-animation.png" alt="An .anims file open on the Animations view: the grey base male body mid-landing on the grid, the toolbar with Make, Frame, Body, Bones, Root motion, the light and the rig and body names, the list of 13 animations with their lengths on the right, and the Synced set section under it." shows="An .anims file open on the Animations view: the base male body on the grid, the toolbar with Frame, Body, Bones, Root motion and the rig and body names, and the list of animations with their lengths on the right." %}

### Synced sets

Some animations are one part of a moment several characters play together: the Trauma Team's landing is a clip for the AV and one for each soldier, each in its own `.anims` file. Pick such a clip, and a **Synced set** section under the list names the others in the same folder, each with a colour and a tick.

- **Play the Set** turns on Root motion and plays them together on one clock, each on its own rig, placed where the game puts them. A row says **placed** once it is; hover it to see how. **Stop the Set** shows the one animation alone again.
- Play, pause, the time bar, Loop, speed, **Body**, **Bones** and **Frame** act on every member.
- Untick a member to hide it. The player's male and female files are alternatives: ticking one unticks the other.
- Turning **Root motion** off stops the set.

**Try it.** In the landing above, press **Play the Set**. The AV and the second soldier join. At the start both soldiers are inside the AV; at the end they stand on the ground out from it, about 4 metres apart.

{% include shot.html caption="A synced set" src="/assets/shots/redcode/viewers-synced-set.png" alt="The Trauma Team landing playing as a set at 6.36 seconds: the AV's bones in orange and two soldiers' bodies standing apart on the ground, with the Synced set section listing soldier_01, av and soldier_02, the last two ticked and marked placed, and Stop the Set." shows="The Trauma Team landing playing as a set: the AV's bones and two soldiers' bodies, and the Synced set section under the animation list with three ticked members marked placed." %}

### Making a clip

You can make a new animation from words, with [Uthana](../glossary.html#uthana), an AI service that turns a sentence into motion. It lands straight on the game's own skeleton, ready to play. Uthana is paid, with your own key: you set it once in the [Keys view](settings.html#the-keys-view).

**Make**, in the animation view's bar, opens the **Make** panel above the clip list. It works on a man's or a woman's animations, the ones that play on the base body, with a project open; otherwise the panel says why. Under the heading **Make a Clip**, the clip picked in the list shows in yellow.

| In the panel | Does |
|---|---|
| The words | What the animation shows, such as "a man stands relaxed, then crosses his arms and taps his right foot" |
| Model | Uthana's model and its price: 3.0 and 3.0 Lite at $0.10 a second, 3.0 Mini at $0.075 |
| Length | 4 to 10 seconds; 5 at first |
| **In place** | No travel across the floor. On at first, because the game plays such clips where the character stands. Off keeps the travel, which is untried in the game |
| **Upper body only** | Holds the legs still, for arm motions such as a wave or a phone call |
| **As written** | Sends your words as they are. Off, Uthana first rewrites them into a description of the motion |
| **New Clip**, **Replace Clip** | A new clip in your project, or a clip that takes the place of the one picked in the list |
| Name | The new clip's name: small letters, digits and `_`. Left empty, it is made from your words |

**Generate** shows the price on its button, such as **Generate, $0.50**, and makes the clip with Uthana. You are charged only when it finishes. **From a GLB…**, beside it, does the same with a clip already on the game's rig, from Blender say, and costs nothing.

While a clip is made, the panel's inputs are off and the button shows a spinner, the stage and the time so far. A bar steps through the stages, and a notification follows them. One clip is made at a time. It takes a minute or two.

The new clip then opens in its own tab, playing on its body. That tab opens with the Make panel showing the words and how the clip was made (the model, the length, the cost, when), ready to make it again.

| You chose | You get |
|---|---|
| **New Clip** | The clip in a set of its own, `<mod name>\anims\<name>\<name>.anims` under Archive. Under Raw, in the same folder: the clip as a `.glb`, the motion as Uthana sent it (`.source.glb`), and a record, `<name>.edgefab.json`, that [EDGEdir](../edgedir/) and [EDGEfab](../edgefab/) read |
| **Replace Clip** | A copy of the game's whole set in your project, with your clip in place of the one you picked. The game plays yours wherever it played that one |

- A name that is taken gets `_2`. If you type the name of a clip you made before, REDcode asks first, before anything is paid: **Make It Again** (it keeps its id) or **Keep Both**. It also says when EDGEfab has edited that clip.
- Every made clip faces the way the game's own clips do, and Uthana is asked for feet that stay on the ground: a foot that bears weight stays flat and does not slide.
- The same is in the command palette: **Generate an Animation with Uthana** asks the rig, the words and the length; **Add a Clip from GLB** (also in the Project view's right-click menu on a `.glb`) and **Replace a Game Clip**.

**Try it** (about $0.50 of Uthana credit). With a project open, open `generic_male_average__stand__2h_on_sides__01.anims` from Game Assets and press **Make**. Type "a man stands relaxed, then crosses his arms and taps his right foot" and press **Generate**. In a minute or two the new clip opens and plays, and the Project view shows its set under `anims`.

Tested by REDcode's developer: making clips both ways, and a replaced clip played in the game. The first time a clip plays on a character in the game, a brief T pose came before it; that looks like the game's side, not the clip's (unverified).

{% include shot.html caption="The Make panel" src="/assets/shots/redcode/viewers-make.png" alt="An animation view with the Make panel open above the clip list: Make a Clip with the picked clip's name in yellow, a sentence typed in, the model and length lists, In place, Upper body only and As written, New Clip and Replace Clip, the Name box, and the Generate, $0.50 and From a GLB buttons." shows="An animation view with the Make panel open above the clip list: Make a Clip with the picked clip's name in yellow, the words typed in, the model and length, In place, Upper body only and As written, New Clip and Replace Clip, the Name box, and the Generate, $0.50 and From a GLB buttons." %}

## Streaming sectors

The game's world is cut into **streaming [sectors](../glossary.html#sector)** (`.streamingsector` files), each a list of what stands in one piece of the map: buildings, props, decals, lights. A sector from the game or your project opens on a **3D view**, read-only, with every mesh drawn where the sector places it.

### Moving round

| To | Do |
|---|---|
| Orbit | Drag |
| Look round and fly | Hold the right button: move the mouse to look round where the camera stands, W, A, S and D to fly, Q and E to go down and up. The wheel changes the fly speed while you hold it. As in [EDGEbuilder](../edgebuilder/) |
| Pan | Drag with the middle button, or with the left and Ctrl held |
| Zoom | The wheel. It goes towards the thing under the cursor, not the middle of the view |
| Fly close to a thing | Double-click it |
| Frame the picked thing | `F`, or **Frame** |

Shift makes any move faster, and Ctrl slower. Once you have clicked in the view, W, A, S, D, Q and E fly without the right button too.

The **camera row** under the toolbar does the same with buttons, for a touchpad, or when you'd rather click. **Zoom**, **Move** (forward, back, left and right), **Pan**, **Height** and **Orbit** move the camera while a button is held. **Speed** sets the fly speed (shown as ×1.0). **Top** looks down from above, on the picked thing or the sector, and **Reset** goes back to the view the sector opened with. **?** shows a line naming the mouse and keys.

### Picking a thing and its materials

Click a thing to pick it. It is outlined, and the Properties view shows its entry. The line under the view names its id, its mesh's file name, the appearance it uses and its materials; hover that line for the mesh's path and the material of each part. Beside it:

| Button | Does |
|---|---|
| **Show in Tree** | Goes to the thing's entry in the file |
| **Open Mesh** | Opens its mesh in the [3D mesh view](#meshes-in-3d) |
| **Open in EDGEmat** | Puts the mesh on [EDGEmat](../edgemat/)'s Desk, at the appearance this thing uses |
| **Add Mesh to Project** | Copies the mesh into your project. It asks first, because a change to the mesh then shows everywhere the game uses it |

**Materials**, in the toolbar, draws the picked thing with its own materials, textures included. With EDGEmat installed, EDGEmat renders them; without it, REDcode does, with EDGEmat's renderer. A note says which. Like the mesh view's colours, it is approximate. The world's **multilayered** materials, on most buildings and the pavement, still come out a flat grey.

On a project's copy of a sector, a thing whose mesh is in the project too is drawn with the project's own materials.

### More in the toolbar

- **Markers** shows the things that aren't meshes, such as entities, decals and lights, as markers.
- **By material** colours each thing by the materials its appearance names, instead of by mesh. Things that share a material share a colour: the tall buildings of a plaza are often one. The first time, a line counts the meshes as their material names are read.
- **Streamed** shows only what the game would draw from where the camera is. Fly closer and more appears.
- **Coarser levels** adds the sectors that hold what is seen from far away over this one. There can be hundreds, so a bar over the view counts them as they are read, then as their meshes export.
- **Light** and **Fixed light** work as in the [mesh view](#the-light).
- The first time, each mesh is exported, which takes a few seconds for a busy sector (Coarser levels can take minutes). After that a sector opens at once.

### Selecting many things

The list on the right of the view shows what is selected. Empty, it says how to select.

| To | Do |
|---|---|
| Add a thing, or take it out | Ctrl+click it. The last one added is the current one, in the accent colour; the line below and the Properties view follow it |
| Select what is in a box on the screen | Shift+drag. Everything whose middle is in the box is selected. Hold Ctrl as well to add to what you had |
| Select what is in a box in the world | **Volume**: drag its base on the ground, move the mouse up for its height, and click. Everything inside is selected |
| Take long things too | **Touching**: roads, walls and other long things whose box reaches into yours count as well |
| Select everything shown, or nothing | `Ctrl+A`, or `Esc`, after a click in the view |

A volume keeps a handle on each face, to resize it, and a round one above, to move it along the ground. The selection follows. A click inside the volume still picks the thing there. `Esc` takes away the selection, the volume and Isolate; pressed before you draw, it turns Volume off.

In the list, click a row to fly to it and make it the current one. Hover a row for its buttons: **Fly To**, **Tree** (Show in Tree), **Mesh** (Open Mesh), **EDGEmat** (Open in EDGEmat), **Add** (Add Mesh to Project) and **×**, which takes it out of the selection. These act on the whole selection:

| Button | Does |
|---|---|
| **Frame All** | Fits the view to everything selected |
| **Isolate** | Makes everything else see-through and ghostly. It follows the selection while it is on, and ends when nothing is selected. Press it again to see everything |
| **Add Meshes to Project** | Copies each selected thing's mesh into your project, each mesh once. One question names how many first |
| **Copy** | Copies one line per thing, its id and its mesh, to paste anywhere |

The view shows the **saved** file. To move something, add the sector to your project with **Add to Project** in the editor's header, change its entry's position in the tree, and save: the view draws it in its new place.

**Try it.** Search game files for `exterior_-22_7_0_0.streamingsector` and open it: about 105 meshes drawn nearly 9,000 times, and 202 markers. Click the cardboard and bottles on the street, then turn on **Materials**: the cardboard is drawn with its own texture. Then Shift+drag a box over part of the street, and the list fills.

{% include shot.html caption="A streaming sector in 3D" src="/assets/shots/redcode/viewers-sector.png" alt="A streaming sector open on the 3D view: two blocks of buildings and a piece of street seen from above, the toolbar with Frame, Coarser levels, Streamed, Markers, By mesh, Materials, Volume, Touching, Scripts and Light, the camera row under it, four things in the selected list on the right, and the line below naming the picked mesh with Show in Tree, Open Mesh, Open in EDGEmat and Add Mesh to Project." shows="A streaming sector open on the 3D view: buildings and street seen from above, a few things selected and one outlined in the accent colour, the toolbar with Markers, By material, Materials, Streamed, Coarser levels, Volume and Light, the camera row under it, the selected list on the right, and the line below naming the picked mesh with Show in Tree, Open Mesh, Open in EDGEmat and Add Mesh to Project." %}

{% include shot.html caption="A volume in a sector" src="/assets/shots/redcode/viewers-volume.png" alt="A see-through Volume box drawn on a street in a sector's 3D view, with a handle on each face and a round one above, 58 things selected and listed on the right, and Isolate on: what is outside the selection is drawn as faint red outlines." shows="A see-through Volume box drawn on a street in a sector's 3D view, with a handle on each face and the round one above, the things inside it selected and listed on the right, and Isolate on so everything else is ghostly." %}

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
