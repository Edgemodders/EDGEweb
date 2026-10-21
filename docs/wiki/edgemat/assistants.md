---
title: EDGEmat and AI assistants
nav_title: Assistants
section: EDGEmat
order: 9
description: "Connect Claude Code to EDGEmat's MCP server, so an assistant can find a garment's materials, describe and recolor its layers, and make new materials for you."
reviewed: 2026-10-20
---

# EDGEmat and <span class="y">assistants</span>

EDGEmat comes with an **MCP server**, so an AI assistant such as [Claude Code](https://claude.com/claude-code) can use EDGEmat the way you do: find a garment's materials, describe its layers, recolor them, and make new materials from words or an image, saving into your mod project. Every EDGEmat feature comes to the buttons and the assistant together.

## Connect Claude Code

You need [Node.js](https://nodejs.org/) 20 or later, and Cyberpunk 2077 and REDbridge as for the extension ([Install and set up](install.html)).

1. From EDGEmat's [releases page](https://github.com/Edgemodders/EDGEmat/releases), download `edgemat-mcp-<version>.cjs`, the server in one file, and keep it somewhere stable, such as `%USERPROFILE%\EDGE\`.
2. In a terminal, run once (with your path):

   ```powershell
   claude mcp add --scope user edgemat -- node "C:\Users\<you>\EDGE\edgemat-mcp-0.3.0.cjs"
   ```

   `--scope user` makes EDGEmat available in every folder. Without it, Claude Code only sees EDGEmat in the folder where you ran the command.
3. Start a new Claude Code session. It sees EDGEmat's tools. To check, run `claude mcp list`: EDGEmat shows as connected.

The server finds the game and REDbridge from your VS Code settings, the same way the extension does (EDGEmat's settings, then REDcode's), so on a PC with REDcode set up it needs nothing more. It shares the extension's material library; with none built yet, ask the assistant to build it first. It starts its own REDbridge while it runs.

To point it elsewhere, add options after the file name, or set environment variables (an empty one counts as not set):

| Option | Environment variable | What |
|---|---|---|
| `--game <folder>` | `EDGEMAT_GAME_PATH` | The Cyberpunk 2077 folder |
| `--bridge <path>` | `REDBRIDGE_EXE` | `REDbridge.exe`, or its folder |
| `--cache <folder>` | `EDGEMAT_CACHE` | Where the library lives, `%LOCALAPPDATA%\EDGEmat` by default |

### A key for new materials

`mat_generate` calls an AI image service with your own key. The server can't read VS Code's secret storage, so give it the key in its environment, with `-e` (Gemini, OpenAI, or both):

```powershell
claude mcp add --scope user edgemat -e GEMINI_API_KEY=<your key> -e OPENAI_API_KEY=<your key> -- node "C:\Users\<you>\EDGE\edgemat-mcp-0.3.0.cjs"
```

To change it, run `claude mcp remove --scope user edgemat` and add it again. Every other tool, `mat_from_image` included, works without a key.

For the other EDGE tools' servers, see [Connect Claude Code](../connect-claude-code.html).

{% include shot.html caption="Claude Code asking EDGEmat" shows="A Claude Code session in a terminal answering 'describe the Arasaka samurai jacket's layers' with EDGEmat's mat_describe: the layers in plain words and their shares." %}

## What it can do

| Tool | Does | Like the UI's |
|---|---|---|
| `mat_find` | Finds a garment by in-game name or record id, or a mesh by path, and walks it to its looks per body type, meshes and materials, with each setup and the mask set it uses | [Find](find.html) |
| `mat_describe` | Describes a setup layer by layer, in plain words and raw values: surface, color, finishes, tiling, opacity, detail texture, share of the garment, and what looks wrong | [The setup editor](setup-editor.html) |
| `mat_colors` | One surface's colors with plain names, and the closest to a color given in words, hex or RGB; its finishes in plain words | [Surface pages](surfaces.html) |
| `mat_templates` | Searches the surfaces by plain words | [The Library](library.html)'s search |
| `mat_microblends` | Searches the detail textures by plain words | The Library's Microblends |
| `mat_library` | Says whether the library is built and current, and builds it | Rebuild Library |
| `mat_edit` | Changes a setup's layers in words ("dark red", "glossy", "leather standard clean") and saves it into a project, as a new setup with its meshes (the default) or in place. Picks the surface's closest color and says how close; `preview` shows the result without saving | [Editing and Save to Project](setup-editor.html#changing-a-layer) |
| `mat_generate` | Makes a material from words through Gemini or OpenAI with your key, and puts it on mesh materials. `imageOnly` makes just the image, to look at first | [New Material](new-material.html) |
| `mat_from_image` | Makes a material from an image file, no service or key, and puts it on mesh materials | New Material › From an image file |
| `mat_apply` | Puts an existing material (`.mi`) on mesh materials | |

## Things to ask

> Which materials do the punk jeans use, for each body?

> Describe the Sunny Ammo sneakers' layers. Which one is the sole?

> What's the closest dark red the leather on the Arasaka jacket can take?

> Find me a worn chrome surface and show its colors.

> I opened a setup from a mod and one layer looks white in the game. Why?

> Make the Sturdy-stitched punk jeans dark green on both bodies, and save it into my project C:\...\MyMaterials.

> Make a dark green snakeskin material and put it on the Light Azure composite-lined slim-fits, both bodies, in my project C:\...\MyMaterials.

Step by step: [Tutorial: snakeskin by asking Claude](tutorial-snakeskin.html).

The assistant answers from the same data you see, and names the files behind it, so you can open them yourself.

## Good to know

- The server sends no telemetry. Its only network calls are `mat_generate`'s, to the image service whose key you gave it, when asked. Claude Code talks to Claude with your own account.
- It reads the game and never writes to it. It writes only into the project you name.
- Some asks match many items ("samurai" fits 19). The assistant then gets a list and picks one, or asks you.
