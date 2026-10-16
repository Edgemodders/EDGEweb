---
title: Textures, meshes and sounds
section: REDcode
order: 5
description: "See and hear what a mod is made of in REDcode: the texture viewer, the 3D mesh viewer, the audio player and the game's 73,000 sound effects."
reviewed: 2026-10-16
---

# Textures, meshes and <span class="y">sounds</span>

REDcode shows game files the way they look and sound, not only as data. Each viewer opens with a click, from your project or straight from Game Assets, with nothing to extract first.

## Textures

A texture (`.xbm`) opens in the **texture viewer**: the image over a checkerboard, so you can see what's transparent, with its size.

| Button | Does |
|---|---|
| **Fit** | Scales the image to the pane |
| **1:1** | One texture pixel per screen pixel |
| **Pixels** | Sharp, blocky scaling, to see single pixels |

The same viewer opens `.dds` and `.tga` files, which VS Code can't show. In the Project view, PNG, JPG, BMP and TIFF open in it too, because a black texture is invisible in VS Code's own preview on a dark theme. Elsewhere those keep VS Code's preview and offer **REDcode Texture** under **Open With...**.

To see a texture's settings (its format, compression, flags), open it in the CR2W editor: see [Editing game files](editing.html#which-files-open-in-it). To change the picture, [export](export-import.html) it to PNG, edit it in any image editor, and import it back.

{% include shot.html caption="The texture viewer" shows="A game texture open in the texture viewer, over the checkerboard, with the size and the Fit, 1:1 and Pixels buttons." %}

## Meshes in 3D

A mesh (`.mesh`) opens on a **3D view** inside the CR2W editor. **Tree** shows the file's data; **3D** goes back.

| To | Do |
|---|---|
| Orbit | Drag |
| Pan | Right-drag, or Shift-drag |
| Zoom | Mouse wheel |
| Fit the model in view | **Frame** |

- The toolbar picks the **LOD**, the level of detail. LOD 1 has the most detail.
- It also turns on and off the **wireframe**, the **bounding box** and the **ground grid**, and shows the triangle count and the size in metres.
- The list on the right turns each **submesh** on and off, with its material name and triangle count.

Good to know:

- Submeshes are **coloured by material name**, not textured. Textures on meshes come later.
- The view shows the **saved** file. Save to see your edits.
- `.glb` and `.gltf` files, such as a mesh you exported to Raw, open in the same viewer.

{% include shot.html caption="The 3D mesh viewer" shows="A vehicle or weapon mesh from the game in the 3D view: the model coloured by material, the LOD picker and toggles in the toolbar, and the submesh list on the right." %}

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

The game's sound effects aren't separate files you can browse. About **73,000 sounds** are packed together, with an index file that groups them into **events**, such as a gunshot or a door, each with a few variations.

**REDcode: Browse Game Sounds**, in the Game Assets **`...`** menu, opens that index as a list.

- Type in the filter box to narrow the list by event name, tag or hash. All the words must match, for example `revol reload`.
- Click a row to play its first sound, or a number to play that variation.
- The arrow keys step through the list and play as they go.
- **Copy Hash** copies the hash of the sound that's playing. **Save...** writes it as an `.opus` file.
- **Open in EDGEwave** works here too.

Event names come from WolvenKit's list of events for game version 1.6. It names about 10,900 of the 16,100 events that have sounds; the rest show only their hash.

{% include shot.html caption="The game sound list" shows="Browse Game Sounds open: the filter box with a search such as revol reload, the list of events with numbered variations, one playing." %}

### Replacing a sound

You can export a voice line (`.wem`) to Ogg to listen to or edit elsewhere. Putting a changed sound back into the game isn't possible from REDcode yet: WolvenKit's library can't import sounds, so **Import from Raw** doesn't offer it. See [Export and import](export-import.html#what-converts).
