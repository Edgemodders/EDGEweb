---
title: Export and import
section: REDcode
order: 7
description: "Export game files from a REDcode project to PNG, glTF and Ogg, edit them in other tools, and import them back with their settings kept."
reviewed: 2026-10-16
---

# Export and <span class="y">import</span>

Some changes need another tool: you repaint a texture in an image editor, or reshape a mesh in Blender. **Export to Raw** turns a game file into a format those tools open. **Import from Raw** turns it back into the game's format, ready to pack. WolvenKit's own exporter and importer do the converting, through REDbridge, with the same results as in WolvenKit.

## The round trip

1. Add the game file to your project (see [Game Assets](game-assets.html#add-to-project)). It's under **Archive** in the Project view.
2. Hover over it and press **Export to Raw**, or right-click it. The converted file appears under **Raw**, at the same path.
3. Edit the file under Raw in your other tool and save it.
4. Hover over the file under Raw and press **Import from Raw**. REDcode rebuilds the game file under Archive from it.
5. [Pack](pack-install.html) and try it in the game.

Export and Import only show on files that can be converted. Both work on a folder too.

{% include shot.html caption="Export and import buttons" shows="The Project view with a texture under Archive showing the Export to Raw hover button, and its exported PNG under Raw showing the Import from Raw button." %}

## What converts

| Game file | Exports to | Imports back? |
|---|---|---|
| Texture (`.xbm`) | An image: PNG by default, or TGA, DDS, BMP, JPG or TIFF (`redcode.export.textureFormat`) | Yes |
| Mesh (`.mesh`) | glTF: one `.glb` file by default, or `.gltf` with a `.bin` beside it (`redcode.export.meshFormat`). Its materials and their textures come along (`redcode.export.meshMaterials`) | Yes |
| Voice line or other sound (`.wem`) | Ogg | **No.** WolvenKit's library can't import sounds yet, so Import doesn't offer it |
| Masks, morph targets, animations, fonts, CSV and a few more | The format WolvenKit uses for each | Where WolvenKit can |

Files with no such format, such as entities and appearances, aren't exported: edit them in the [CR2W editor](editing.html) or [as JSON](editing.html#editing-as-json) instead.

## Settings are kept on import

A texture has settings an image file can't hold: its compression, its format, flags that tell the game how to stream it. A mesh has its materials. With `redcode.import.keepSettings` on (the default), the file you import **keeps the settings of the file it replaces**. This is WolvenKit's "use existing file" option. REDcode also keeps every texture flag, which WolvenKit's library on its own doesn't.

Turn the setting off only if you want WolvenKit's defaults instead.

## Exporting and importing folders

- **Export** on a folder asks first, with the number of files, then exports each one it can.
- **Import** on a folder takes only **re-imports**: raw files whose game file is already under Archive, and the newest raw file for each.

That second rule matters for meshes. A mesh export writes its material textures into Raw too. Without the rule, a folder import would turn them all into new textures in your mod, which would replace the game's. To import one of those textures on purpose, import that file on its own.

## After an import

A file that's open in the CR2W editor reloads by itself. If it had unsaved edits, REDcode warns you instead: revert the file (**File**, **Revert File**) to see the import, or save to keep your edits over it.

## For assistants

`redcode-mcp` has `project_export` and `project_import`, so an assistant can do the same, for example exporting every texture in a folder for you. See [Assistants and MCP](assistants.html).
