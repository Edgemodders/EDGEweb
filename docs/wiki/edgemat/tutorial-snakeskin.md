---
title: "Tutorial: snakeskin pants by asking Claude"
nav_title: "Tutorial: snakeskin"
section: EDGEmat
order: 11
description: "Step by step: ask Claude Code, through EDGEmat's MCP server, to make a dark green snakeskin material and put it on a pair of slim-fit pants for both bodies, then wear them in the game."
reviewed: 2026-10-20
---

# Tutorial: <span class="y">snakeskin</span> by asking Claude

In this tutorial you don't press a button in EDGEmat at all: you ask [Claude Code](https://claude.com/claude-code) for dark green snakeskin pants in one sentence, and it uses EDGEmat's tools to find the garment, generate the material and put it on. It is the test EDGEmat passed on 2026-10-20. The garment is the **Light Azure composite-lined slim-fits**.

{% include shot.html caption="The result: snakeskin slim-fits, front" src="/assets/shots/edgemat/tutorial-snakeskin-front.png" shows="V in the dark green snakeskin slim-fits, from the front: green scales with black edges over both legs, the pants' own folds kept." %}

## What you need

| | |
|---|---|
| Claude Code, connected to EDGEmat's MCP server **with your image service key** | Below |
| A WolvenKit project made with REDcode | **REDcode: New Project**, for example `MyMaterials`. Note its folder |
| [REDcode](../redcode/) to pack it, and [Cyber Engine Tweaks](https://www.nexusmods.com/cyberpunk2077/mods/107) | As in [Your mod in the game](in-the-game.html) |

## 1. Give the server your key

The MCP server can't read VS Code's secret storage, so it takes the image service key from its environment. Register it with `-e` and your key (see [Assistants](assistants.html#connect-claude-code) for the file):

```powershell
claude mcp remove --scope user edgemat
claude mcp add --scope user edgemat -e GEMINI_API_KEY=<your key> -- node "C:\Users\<you>\EDGE\edgemat-mcp-0.3.0.cjs"
```

For OpenAI, use `OPENAI_API_KEY` instead. Run the `remove` line only if EDGEmat was registered before. Then start a **new** Claude Code session, so it sees the change.

## 2. Ask

In the new session, ask (with your project's folder):

> Using EDGEmat, make a dark green snakeskin material and put it on the Light Azure composite-lined slim-fits, both bodies, in my project C:\...\MyMaterials

Claude then works through EDGEmat's tools. You can follow along in its replies:

| Step | Tool | What happens |
|---|---|---|
| Find the pants | `mat_find` | The item is `Items.Pants_01_basic_02`. Both bodies' meshes, `l1_012_pwa_...` and `l1_012_pma_...`, use the material `flames_blue_pink` for this look |
| Make the material | `mat_generate` | Your words go to the image service, with EDGEmat's request for a seamless texture with no text. The image is made seamless, gets bumps and shine, and is written into your project |
| Put it on | `mat_generate`'s targets | Both meshes are copied into the project and pointed at the new material. On a garment, the repeat goes into the texture and the pants keep their folds |

Claude ends by naming the files it wrote and the next step: pack and install.

{% include shot.html caption="Claude Code making the snakeskin" shows="A Claude Code session: the request, then Claude calling mat_find and mat_generate, and its reply listing the files written into the project for both meshes." %}

You can name the settings too: "repeat 6, glossy, strong bumps". Or ask to see the image first: "generate it but don't use it yet"; Claude then makes only the image (`mat_generate` with imageOnly) and uses it with `mat_from_image` once you agree.

## 3. Into the game

1. With the game closed, in REDcode: **Pack and Install**.
2. Start the game, and in Cyber Engine Tweaks' console:

   ```lua
   Game.AddToInventory("Items.Pants_01_basic_02", 1)
   ```

3. Equip the pants; photo mode, front, side and back.

{% include shot.html caption="Snakeskin, side" src="/assets/shots/edgemat/tutorial-snakeskin-side.png" shows="V in the snakeskin slim-fits from the side: even scales down the leg, a sheen on the hip." %}

{% include shot.html caption="Snakeskin, back" src="/assets/shots/edgemat/tutorial-snakeskin-back.png" shows="V in the snakeskin slim-fits from the back: a wet-look sheen on the seat and thighs, the scales in relief, the pants' folds behind the knees." %}

## What to look for

| Look at | You should see |
|---|---|
| Folds | The pants' own wrinkles, at their normal size |
| Scales | A believable size, even over both legs, with no obvious repeat |
| Shine and bumps | The scales stand out in relief; a sheen where the light hits |
| Panel lines | The pattern breaks where the garment's pieces meet, such as the front of the thigh. That's normal |

## Try next

- Do both: the [worn leather tutorial](tutorial-worn-leather.html) uses the Comfy rocker slim-fits (`Items.Pants_01_basic_01`), which share these meshes but use another material, so both can be in one project.
- Recolor instead of replacing: "make the punk jeans dark green" uses `mat_edit` and the garment's own layers ([Assistants](assistants.html)).
