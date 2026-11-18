---
title: Add to Project
nav_title: Add to Project
section: EDGEfab
order: 6
description: "Add to Project turns a prop on the Desk into game files in your mod project: what it writes and where, collision, getting the prop into the game, and game materials on a part."
reviewed: 2026-11-17
---

# Add to <span class="y">Project</span>

**Add to Project** turns a prop on the Desk into the files the game uses, inside your mod project. After it, the prop is part of your mod: pack it, and place it in the world.

| On this page | |
|---|---|
| [How](#how) | One click |
| [What it writes](#what-it-writes) | The files, and where |
| [Collision](#collision) | How the prop is solid |
| [Into the game](#into-the-game) | Pack, then place |
| [Changing a prop that's already in](#changing-a-prop-thats-already-in) | |
| [Game materials on a part](#game-materials-on-a-part) | By asking Claude, for now |

## How

1. Open your project in REDcode. If none is open, EDGEfab asks you to pick a project folder.
2. On the Desk, right-click the prop and choose **Add to Project**, or press the icon at the right of its line.

It takes one to three minutes for a prop in parts: a game material is made for each part, about four textures each. A progress note names each step. At the end:

```text
EDGEfab added Neon vending machine to NeonProps, solid (a physical mesh with a box).
Place neon_vending_machine.ent with EDGEbuilder, or spawn it.
```

The message has three buttons: **Pack and Play** packs the mod and gets it into the game, as the same button in REDcode does, **Reveal Entity** shows the `.ent` file, and **Show Log** lists every file written.

The prop needs a size first. If the Desk says **Size unknown**, use [Set Size](models.html#size).

## What it writes

Everything goes under one folder named after your project and the prop. For a project `NeonProps` and a prop `neon_vending_machine`:

```text
NeonProps\source\archive\neonprops\props\neon_vending_machine\
    neon_vending_machine.ent          the entity: this is what you place
    neon_vending_machine.mesh         the mesh, with its three levels of detail
    neon_vending_machine_body.mi      a material for each part
    neon_vending_machine_body_d01.xbm     its color texture
    neon_vending_machine_body_n01.xbm     its bumps
    neon_vending_machine_body_r01.xbm     its roughness
    neon_vending_machine_body_m01.xbm     its metal
    ...                               the same for front, back, base and the rest

NeonProps\source\raw\neonprops\props\neon_vending_machine\
    neon_vending_machine.glb          the prepared model
    neon_vending_machine.edgefab.json where it came from, and its license
```

| File | What it is |
|---|---|
| `.ent` | The entity. Its **game path** is what tools ask for: `neonprops\props\neon_vending_machine\neon_vending_machine.ent` |
| `.mesh` | The shape. It starts from one of the game's own barrels, with everything replaced: shape, materials and collision |
| `.mi` | A material, made from the model's own textures with [EDGEmat](../edgemat/)'s code. A glow is written into it |
| `.xbm` | A texture in the game's format |
| `.edgefab.json` | A record: the words or file the prop came from, the Tripo plan, the collision. Keep it: it is your proof of where the model came from |

All paths are lowercase, as the game expects. Bumps are written the way the game reads them, so raised details don't shade as dents.

{% include shot.html caption="A prop's files in the project" src="/assets/shots/edgefab/add-to-project-files.png" alt="VS Code's Explorer after Add to Project: under source, archive, neonprops, props and neon_vending_machine are the .ent, the .mesh, and a .mi with four .xbm textures for each part. REDcode shows the .ent beside it." shows="The project's file tree after Add to Project: the prop's folder with its .ent, its .mesh, and a .mi with its .xbm textures for each part." %}

## Collision

Collision makes the prop solid. The **Collision** setting ([Settings](settings.html#settings)) chooses how:

| Setting | Means | Use |
|---|---|---|
| `physical` | The entity has one physical mesh, with a box the prop's size. The default | Almost always |
| `box` | The entity has a plain mesh and a separate box collider, as many of the game's own props do | If another tool expects that shape |
| `none` | It only draws. V walks through it | Decoration out of reach |

Both kinds of box were tested in the game: V stops at them and can stand on them. The box fits the prop's outer size, so a table is solid under its top too. A shape that follows the prop closely is not there yet.

## Into the game

1. **Pack.** Press **Pack and Play** on the message, or at the top of REDcode's Project view. With the game running and REDnode's MCP server on, the mod is swapped into the running game. Otherwise it is installed for the next start. See [REDcode: pack and install](../redcode/pack-install.html).
2. **Place.** In the game, press **F10**, open **EDGEbuilder**, then **Assets**, the **Mods** tab and **Entities**. Search for the prop's name and press **Drop where I look**. See [EDGEbuilder](../edgebuilder/browsing.html).

You can also spawn the entity by its game path with any tool that spawns entities.

## Changing a prop that's already in

Change the prop on the Desk (its size, its glow, a new model), then **Add to Project** again. The same name replaces the prop in the project. Then pack again.

**It keeps what didn't change.** A material made from the same pictures as last time keeps its files, and only the changed ones are made again. The message says what was kept:

```text
EDGEfab added Neon vending machine to NeonProps, solid (a physical mesh with a box).
4 of its 6 materials are unchanged and were kept. front keeps the material you gave it.
```

| Good to know | |
|---|---|
| Only the size or shape changed | Every material is kept. It takes seconds |
| A picture or a glow changed | Only that part's material is made again. This still takes a minute or more |
| **Start Over...** | The button on the message, when something was kept. It makes every texture again and puts every part back on the model's own texture. It asks first |
| After a rename | The prop goes in under its new name, beside the old one. Delete the old folder from the project |
| From the Library | A prop added from the [Library](library.html) is a ready copy: it takes seconds |

## Game materials on a part

A prop made in [parts](models.html#parts) wears Tripo's textures on each part. Any part can wear one of the **game's own materials** instead: metallic car paint on the body, the game's vending machine glass on the shelves, a plain glow on a panel. Game materials shine and react to light as the rest of Night City does.

**There are no buttons for this yet.** It works today by asking Claude, with EDGEmat connected (see [Assistants](assistants.html#edgefab-with-edgechat)). For example:

> In my project `D:\Mods\NeonProps`, put the game's blue emissive material on the `back` part of `neon_vending_machine.mesh`, and the game's vending machine glass on its `front_2` part.

It was seen in the game once, on a vending machine with three parts changed: red car paint, a blue glow and game glass, by day and night.

| Good to know | |
|---|---|
| Add to Project again keeps it | A part you gave another material keeps it when you add the prop again, and the message names the part |
| Going back | The model's own material for that part stays in the project. **Start Over...** on the message puts every part back on its own |
| The buttons are planned | In EDGEmat: **Use a Game Surface** and a game material for each part. EDGEfab's first release waits for them |

Next: [The Library](library.html), or [Assistants](assistants.html).
