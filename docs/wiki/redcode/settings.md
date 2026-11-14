---
title: REDcode settings and commands
nav_title: Settings and commands
section: REDcode
order: 13
description: "Every REDcode setting with its default and when to change it, every REDcode command with its icon, the keys, and the editors it adds to Open With."
reviewed: 2026-11-13
---

# Settings and <span class="y">commands</span>

| On this page | |
|---|---|
| [Settings](#settings) | [Game and REDbridge](#game-and-redbridge), [Projects and packing](#projects-and-packing), [Export and import](#export-and-import) |
| [Commands](#commands) | By where they live, with their icons |
| [Keys](#keys) | The shortcuts in one place |
| [Editors under Open With](#editors-under-open-with) | Which editor opens which file |

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `redcode`. Most people never change any of these: REDcode finds the game and fetches REDbridge on its own.

{% include shot.html caption="REDcode in VS Code's settings" shows="VS Code's Settings editor filtered to redcode, showing the game path, bridge path and pack settings." %}

### Game and REDbridge

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.gamePath` | Steam's default folder, `C:\Program Files (x86)\Steam\steamapps\common\Cyberpunk 2077` | The Cyberpunk 2077 folder, the one with `bin`, `archive` and `r6`. If it isn't the game, REDcode offers one it finds on start | The game is somewhere else. **REDcode: Set Game Folder** sets it for you |
| `redcode.bridgePath` | empty | Path to `REDbridge.exe`, or its folder. **Install REDbridge** fills it in. While it is empty, REDcode only finds a REDbridge that is on your PATH; none comes inside the extension | Rarely. Write the old value down before you change it by hand, so you can go back: Install REDbridge overwrites it |
| `redcode.dotnetRoot` | empty | Where the .NET 10 runtime is, for REDbridge only, when it's installed for your user rather than the whole PC | REDbridge can't find a .NET runtime that is installed |
| `redcode.bridgeRepository` | `Edgemodders/REDbridge` | The GitHub repository Install and Update REDbridge download from | Only if told to, for example to test a REDbridge build |
| `redcode.bridgeUpdateCheck` | on | Asks GitHub once per session whether a newer REDbridge exists, and offers it | You'd rather update by hand |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, which breaks other tools. Use `redcode.dotnetRoot`, which applies to REDbridge alone.

### Projects and packing

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.author` | empty | Your name, written into new projects | Set it once |
| `redcode.pack.clean` | on | Empties `packed` before packing, so a file you removed doesn't linger in the mod | Rarely. Keep it on |
| `redcode.pack.redmod` | off | Packs the project as a REDmod under `packed/mods/<mod name>` | You want to ship a REDmod. See [Packing as a REDmod](pack-install.html#packing-as-a-redmod) |
| `redcode.launch` | `auto` | How Run Game starts the game: `auto` (through Steam for a Steam install, else the exe), `steam` or `exe` | Steam doesn't start the game the way you want |
| `redcode.rednode.installPackage` | on | When the game has REDnode, installs and updates REDcode's small REDnode package, `redcode`, in REDnode's apps folder. It tells REDnode mods, such as EDGEbuilder, and assistants which project is open in REDcode | You don't want REDcode to add anything to the game folder |
| `redcode.loc.language` | `en-us` | The language of the texts in the LocKeys view and the LocKey hover, and of the text file Add to Project Onscreens writes to. **LocKey Language...** sets it | You play or mod in another language |

### Export and import

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.export.textureFormat` | `png` | The image format Export to Raw writes for textures: `png`, `tga`, `dds`, `bmp`, `jpg` or `tiff` | Your image editor prefers another format |
| `redcode.export.meshFormat` | `glb` | Meshes as one `.glb` file, or `gltf` for a `.gltf` with its `.bin` | Your 3D tool prefers `.gltf` |
| `redcode.export.meshMaterials` | on | Exports a mesh's materials and their textures with it | You only want the shape |
| `redcode.export.meshLods` | off | Exports every level of detail (LOD) of a mesh, each named `_LOD_1`, `_LOD_2` and so on, not only the most detailed one | You want to edit the simpler copies the game shows at a distance too |
| `redcode.import.keepSettings` | on | Import keeps the settings of the file it replaces: a texture's format, compression and flags, a mesh's materials | You want WolvenKit's defaults instead |
| `redcode.blenderPath` | empty | `blender.exe`, or its folder, for Edit in Blender. REDcode fills it in when it finds Blender | REDcode can't find your Blender |

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `REDcode` to see them. Most are also buttons or right-click items in the REDcode sidebar; the Icon column shows the button's picture where there is one. Commands marked *menu only* act on the row you clicked, so they don't appear in the palette. Some palette commands show only when they can work, for example once a project is open or the game is loaded.

### Projects

| Command | Icon | Does |
|---|---|---|
| New Project | A folder with a plus | Asks for a name and a folder, creates a WolvenKit project and opens it |
| Pack | A package | Builds the project's `packed` folder. Also `Ctrl+Shift+B` |
| Pack and Install | A rocket | Packs, then installs |
| Pack and Play | A flame | Packs, then swaps the archive into the running game through REDnode. Without REDnode running, Pack and Install. It was called Pack and Try before 0.10.5, and the old command id, `redcode.packAndTry`, still works for keybindings |
| Install | | Puts the packed mod in the game, through EDGEdeck when it's installed. In the Project view's **`...`** menu |
| Uninstall | | Takes the mod out of the game again. In the **`...`** menu |
| Run Game | A play triangle | Starts the game |
| Close Project | | Closes the project's folder; the Project view goes back to New Project. In the **`...`** menu |
| Refresh Project | A circling arrow | Re-reads the project folder |
| Filter the Project | A funnel | Narrows the Project view to matching files |
| Clear the Project Filter | Crossed-out lines | Shows the whole project again |

### Project view items (menu only)

| Command | Icon | Does |
|---|---|---|
| Export to Raw | An arrow out of a box | Converts a game file to PNG, glTF, Ogg and so on under Raw |
| Import from Raw | An arrow into a screen | Converts it back into the game's format under Archive. Also takes sound effect WAVs named after their hash |
| Edit in Blender | A pencil | On a `.mesh` under Archive or a `.glb`/`.gltf` under Raw: opens it in Blender and imports each save |
| Add to Library... | Books | On a file under Archive: saves it with the files it needs as an item in the EDGE Library |
| Open as JSON | | Opens the game file as WolvenKit JSON |
| Open in CR2W Editor | | On a texture: opens it in the CR2W editor |
| Open With... | | VS Code's list of editors for the file |
| Copy Path | Two pages | Copies the full path on disk |
| Reveal in File Explorer | An open folder | Opens the folder in File Explorer |
| Delete | A bin | Sends the file or folder to the Recycle Bin, after asking |

### Game Assets

| Command | Icon | Does |
|---|---|---|
| Open game file as JSON | | Searches the game as you type and opens the file you pick as JSON |
| Search game files | A magnifier | The same search, then Open as JSON, Add to project or Copy path |
| Browse Game Sounds | A speaker | Opens the game's sound effects as a list to filter and play. In the view's **`...`** menu |
| Refresh Game Assets | A circling arrow | Re-reads the tree |
| Filter Game Assets | A funnel | Narrows the tree to matching files |
| Clear the Game Assets Filter | Crossed-out lines | Shows the whole tree again |
| Add to Project *(menu only)* | A page with a plus | Copies the file or folder into the project |
| Extract to... *(menu only)* | | Copies the file or folder to a folder you choose |
| Add to Library... *(menu only)* | Books | Saves the file with the files it needs as an item in the EDGE Library |
| Open in Editor *(menu only)* | | Opens the file read-only, as a click does |
| Open as JSON *(menu only)* | | Opens a copy of the file as JSON |
| Open Texture *(menu only)* | | Opens a texture in the texture viewer |
| Copy Game Path *(menu only)* | Two pages | Copies the path inside the game |

### TweakDB

| Command | Icon | Does |
|---|---|---|
| Open TweakDB Record... | A magnifier | Searches records as you type and opens the one you pick |
| Open In... *(menu only)* | | On a record another EDGE tool can open: lists the tools to open it in |
| New Tweak from This Record... | A page with a plus | Writes a TweakXL YAML file into the project that clones or changes the record. Needs a project |
| Copy Record Path *(menu only)* | Two pages | Copies the record's path |
| Filter TweakDB | A funnel | Narrows the TweakDB view to records matching your words |
| Clear TweakDB Filter | Crossed-out lines | Shows the record types again |

### LocKeys

| Command | Icon | Does |
|---|---|---|
| Search LocKeys... | A magnifier | Finds the game's texts by words, by key or by secondary key |
| LocKey Language... | A globe | Picks the language of the texts |
| Clear LocKey Search | Crossed-out lines | Empties the LocKeys view. A button in the view's title bar |
| Add to Project Onscreens *(menu only)* | A page with a plus | Copies the entry into the project's own text file. Needs a project |
| Copy LocKey *(menu only)* | Two pages | Copies the entry's key |
| Copy Text *(menu only)* | | Copies the entry's text |
| Open in Its File *(menu only)* | | Opens the entry on its row in its localization file. A click on the entry does this |

### Editing

| Command | Icon | Does |
|---|---|---|
| Save JSON to Project | A yellow save mark | On JSON opened from a project file: rebuilds the game file from it. The button is in the editor's title bar |

### Setup and REDbridge

| Command | Does |
|---|---|
| Set Game Folder | Lists the game installs REDcode found, or lets you browse for one |
| Install REDbridge | Downloads the latest REDbridge and points REDcode at it |
| Update REDbridge | Checks for a newer REDbridge and installs it |
| Restart REDbridge | Stops and starts REDbridge |
| Show REDbridge log | Opens REDcode's log. Clicking the status bar item does the same |

### For other tools

| Command | Does |
|---|---|
| Extract from a Mod Archive into the Project | Not for typing: EDGEdeck calls it for its **Add to Project** on a mod's `.archive` |
| Stop Watching Blender | Not in the palette: click the **Blender** item in the status bar to end Edit in Blender's watch |

## Keys

REDcode adds no global shortcuts of its own. These work in its views:

| Key | Where | Does |
|---|---|---|
| `Ctrl+Shift+B` | Anywhere, with a project open | Pack, as VS Code's build task `redcode: pack` |
| `Ctrl+S`, `Ctrl+Z`, `Ctrl+Y` | The CR2W editor | Save, undo, redo |
| `Esc` | The CR2W editor's search | Clears the results |
| `Alt+Left`, `Alt+Right` | A TweakDB record page | Back and forward through the records you opened |
| `Space` | The audio player | Play and pause |
| Arrow keys | The game sound list | Step through the sounds, playing each |
| `Ctrl+/` | A tweak file | Comment a line in or out |
| `Ctrl+K` then `Ctrl+T` | Anywhere | VS Code's theme picker, for the REDnode HUD theme |

To give a command your own shortcut, open VS Code's **Keyboard Shortcuts** (`Ctrl+K` then `Ctrl+S`) and search for `REDcode`.

## Editors under Open With

REDcode adds these to VS Code's **Open With...** list, by file type:

| Editor | Default for | Offered for |
|---|---|---|
| REDcode CR2W Editor | Entities, meshes, atlases, materials, animations, scenes and the other CR2W types | `.xbm`, `.json`, `.csv` |
| REDcode Texture | `.xbm`, `.dds`, `.tga` | PNG, JPG, BMP, TIFF |
| REDcode Mesh | `.glb`, `.gltf` | |
| REDcode Audio | `.wem`, `.opus` | WAV, Ogg, MP3, FLAC |
| REDcode Game Sounds | `.opusinfo` | |

Right-click a file in VS Code's Explorer, choose **Open With...**, and pick **Configure default editor** there to change a default.
