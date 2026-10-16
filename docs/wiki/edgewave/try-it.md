---
title: Try EDGEwave
nav_title: Try it
section: EDGEwave
order: 1
description: "Run EDGEwave's sound editor today by building it from source. For the curious: it is unreleased and still in its hand test."
reviewed: 2026-10-16
---

# Try <span class="y">EDGEwave</span>

EDGEwave has no release yet, so there is nothing to download and install. If you're comfortable with a terminal, you can build it from its source and run it in a test window of VS Code. This is how its developer tests it.

Expect an unfinished tool. The editor works, but its hand test isn't complete, and it can't put a sound into the game yet: you get a WAV file in your project. EDGEwave never changes your game folder.

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | EDGEwave reads its sounds through REDcode and REDbridge |
| [VS Code](https://code.visualstudio.com/) | |
| [REDcode](../redcode/) 0.9.0 or later, set up with REDbridge | REDcode is "REDcode for Cyberpunk 2077" in VS Code's Extensions view, or part of the [EDGEkit extension pack](../edgekit/install-pack.html). **REDcode: Install REDbridge** fetches REDbridge |
| [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) 24 | To download and build EDGEwave |
| A REDcode project | Where EDGEwave saves your edits and renders. Without one, it asks for a folder |

## Build and run it

1. Download and build EDGEwave in a terminal:

   ```powershell
   git clone https://github.com/Edgemodders/EDGEwave.git
   cd EDGEwave
   npm install
   npm run build
   ```

2. Open the `EDGEwave` folder in VS Code and press **F5**. Pick **Run EDGEwave** if VS Code asks. A second VS Code window opens with EDGEwave loaded. Use that window for everything below; closing it stops EDGEwave.
3. In that window, open your REDcode project.

**Untested combination:** the developer's hand test ran EDGEwave beside REDcode's source (the **Run EDGEwave with REDcode main** option in the same list), from before REDcode 0.9.0 was released. Running it beside an installed REDcode 0.9.0 should work, since that release carries what EDGEwave needs, but it hasn't been checked. The [dev setup](https://edgemodders.github.io/EDGEwave/dev-setup.html) has the developer details.

## Edit a sound

1. **Open a sound.** Run **REDcode: Browse Game Sounds**, play a sound, and click **Open in EDGEwave**. Or right-click a sound file in REDcode's Project view or VS Code's Explorer and choose **Open Sound in EDGEwave…**.
2. **Listen and select.** Space plays and stops. Drag on the waveform to select part of it; **Loop** repeats the selection. Ctrl+mouse wheel zooms, and **Fit** shows the whole sound.
3. **Edit.** Use the edit buttons. Each edit is listed under **Edits**, where × removes it. Ctrl+Z and Ctrl+Y undo and redo, and Ctrl+S saves.
4. **Render.** Pick a sample rate and click **Render WAV**. The WAV appears in your project.

The EDGEwave icon in the activity bar opens the **Sounds** view, a list of the sounds you have opened.

{% include shot.html caption="The Sounds view and Open in EDGEwave" shows="REDcode's sound browser with the Open in EDGEwave button, and EDGEwave's Sounds view in the activity bar listing two sound documents." %}

## Where files go

| You opened | EDGEwave saves |
|---|---|
| A game sound effect | `source\raw\sfx\<event>\<sound>.edgewave` in your project, and the WAV beside it |
| A game voice line | The game file's own path under `source\raw`, and the WAV beside it |
| A file on disk | A `.edgewave` file beside it. Rendering a `.wav` writes `<name>.edit.wav`, so your original is kept |

Opening the same sound again reopens its `.edgewave` file, with your edits.

## Tell us what you find

Report problems on [EDGEwave's issues page](https://github.com/Edgemodders/EDGEwave/issues) or on the [EDGEmodders Discord](https://discord.gg/63qP3Erw43). Say what you did, what you expected and what happened.
