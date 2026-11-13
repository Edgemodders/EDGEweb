---
title: "The world: objects, scenes and pins"
nav_title: The world
section: REDnode
order: 8.2
description: "Place things in Cyberpunk 2077's world from a REDnode package: spawn a box in front of V, people and props, moving and removing, objects far from V, EDGEbuilder scenes, what is near V, and labelled pins over places and objects."
reviewed: 2026-11-13
---

# The world: objects, scenes and <span class="y">pins</span>

The `world` part of the `rednode` package puts things into the running game: a prop, a person, a whole scene, or a labelled pin over a place. EDGEbuilder, EDGE's world builder, is built on it.

| On this page | Needs | Status |
|---|---|---|
| [Your first object](#your-first-object), [Spawning](#spawning), [Moving, removing and watching](#moving-removing-and-watching) | [Codeware](https://github.com/psiberx/cp2077-codeware) 1.14 or later | Passed in game |
| [Objects far from V](#objects-far-from-v) | Codeware; REDnode 0.58.0 or later | Passed in game with boxes. Heavier objects and people are untried |
| [Scenes, and what's near V](#scenes-and-whats-near-v) | Codeware | Passed in game |
| [Pins](#pins) | REDnode 0.59.1 or later. Styles, pins on objects and `label` need 0.62.4 | Passed in game |

New to calling the game? Read [The game API](game-api.html) first: every call here needs `await`.

Words used here: an **entity** is one object in the game's world: a prop, a person, a car. A **mesh** is a 3D shape, a `.mesh` file. A **template** is an `.ent` file, the game's recipe for an entity. A **component** is one part attached to an entity, such as a mesh or a light. See the [glossary](../glossary.html).

## Your first object

This spawns a cardboard box three metres in front of V. Without Codeware the calls fail and say so, so add it to your manifest:

```json
"requires": { "codeware": ">=1.14" }
```

```js
import { api, game, world } from 'rednode';

// A place a few metres in front of V.
async function inFront(metres) {
  const player = await api.GetPlayer(game.instance);
  if (!player) throw new Error('No player: load a save first');
  const p = await player.GetWorldPosition();
  const f = await player.GetWorldForward();
  return { x: p.X + f.X * metres, y: p.Y + f.Y * metres, z: p.Z };
}

const { id } = await world.spawn({
  mesh: 'base\\environment\\decoration\\containers\\packaging\\cardboard_box\\cardboard_box_a_closed.mesh',
  position: await inFront(3),
});
console.log('Spawned', id.hash);
```

| Do | You should see |
|---|---|
| Load a save, stand somewhere open, and run the code (in a Node mod, or line by line in the [Console](game-api.html#try-it-in-the-console)) | A closed cardboard box on the ground three metres ahead of V, within about a quarter of a second |
| Run `await world.move(id, await inFront(6))` | The box jumps to six metres ahead |
| Run `await world.remove(id)` | The box is gone |
| Switch your mod off instead | The box goes too: REDnode removes what a package spawned when it stops |

{% include shot.html caption="A spawned box" shows="Gameplay with a closed cardboard box standing on the street three metres in front of V." %}

The `inFront` helper and the mesh path come from the **World test** sample in REDnode's repo, which passed in game. The paths use double backslashes because `\` is a special character in JavaScript text.

## Spawning

`world.spawn(options)` makes one entity and gives back `{ id }` once it is in the world. What it makes depends on the options:

| You give | You get |
|---|---|
| `mesh`, with optional `meshAppearance` and `scale` | A prop with just that mesh. The simplest form |
| `record: 'Character.CitizenRichFemale'` | A person, from a `Character.*` TweakDB record. They stand where placed and stay friendly to V. `npc: false` leaves the game's own behaviour |
| `template`, with optional `components` | An entity from an `.ent` file, with extra parts you built with `api.$new` attached |

Every form takes:

| Option | Does |
|---|---|
| `position` | Where: `{ x, y, z }` in the world's metres |
| `yaw` | Which way it faces, in degrees around the vertical axis |
| `keep: true` | Keeps it in the save. It comes back about 8 seconds after that save loads; the delay is expected |
| `wait: false` | Gives the id back as soon as the entity is made, without waiting for it to be in the world. For an object far from V, or one still loading |
| `label: 'Name'` | Puts a [pin](#pins) on it that follows it |

If the object isn't in the world in time, the call fails, and REDnode removes the object first, so a failed spawn leaves nothing behind.

A person, and a template with a mesh attached:

```js
await world.spawn({ record: 'Character.CitizenRichFemale', position: await inFront(2) });

const mesh = await api.$new('entMeshComponent', {
  name: 'my_marker',
  mesh: 'base\\environment\\ld_kit\\marker.mesh',
  meshAppearance: 'default',
});
await world.spawn({
  template: 'base\\gameplay\\loot\\containers\\common_suitcases\\appearances\\suitcase_small_placeholder.ent',
  position: await inFront(4),
  components: [mesh],
});
```

## Moving, removing and watching

| Call | Does |
|---|---|
| `world.move(id, position, orientation?, yaw?)` | Moves it, and optionally turns it: `yaw` in degrees, or a full `orientation` |
| `world.remove(id)` | Removes it |
| `world.spawned()` | Lists what your package spawned, each with `attached`: whether it's in the world now |
| `world.entity(id)` | The entity as a game object, to call its methods through `api`. `null` once it's gone |
| `world.on(name, fn)` | Runs your function when an entity is created (`Entity/Initialize`), enters the world (`Entity/AfterAttach`) or leaves it (`Entity/Detach`) |
| `world.watch(id)` | Starts those events for an entity your package didn't spawn |
| `world.available()` | True when Codeware is installed and a save is loaded |

## Objects far from V

Most mods never need this. It is for editors whose camera leaves V.

The game normally brings a spawned object into the world only while V is around. An object 300 m away never shows, and `wait: false` only holds on to it until V gets near. To have it there anyway, ask the game to keep it spawned:

```js
const { id } = await world.spawn({
  mesh: 'base\\environment\\ld_kit\\marker.mesh',
  position: { x: p.x + 300, y: p.y, z: p.z }, // p: V's position
  alwaysSpawned: true,
  wait: false,
});
```

In REDnode's test it worked at 300 m, 1 km and 4 km, and the objects stayed with V 5 km away. 200 boxes took about 46 ms each to ask for, with a steady frame rate. Heavier objects and people are untested.

| Good to know | |
|---|---|
| It stays for the whole session | Wherever V goes, until you remove it. Remove what you no longer show |
| Scenes | `world.load(scene, { wait: false, alwaysSpawned: true })` does it for every object of a scene |
| A camera you fly with | Needs the option too, if V can be far from it |

## Scenes, and what's near V

| Call | Does |
|---|---|
| `world.load(scene, options)` | Loads an EDGEbuilder scene into the running game: its meshes, entities and people, but not lights yet. Pass a `.scene.json` file's path in your package, or the scene itself. Loading a scene of the same name again replaces it. It gives back what it spawned and what it skipped, with the reason |
| `world.unload(name)` | Removes what `world.load` spawned for that scene |
| `world.near({ radius, files, uses })` | The entities near V, nearest first (within 15 m unless you give `radius`), with each one's class, distance and appearance. With `files: true`, the files each one uses; with `uses`, only the entities that use one of the files you name |
| `world.files(entity)` | The files one entity uses: its template and everything its components name, as path [hashes](../glossary.html) |
| `world.onRespawn(fn)` | Tells you when an [archive swap](more-apis.html#swapping-archives-into-the-running-game) made REDnode spawn one of your entities again, with its old and new id |

```js
const r = await world.load('scenes/my_alley.scene.json');
console.log(r.spawned.length, 'spawned', r.skipped);
// later
await world.unload(r.name);
```

**Try it in the Console:** stand near some people or cars and type `await world.near({ radius: 10 })`. You should see a list with each entity's class and its distance in metres.

The **World objects test** sample in REDnode's repo has a button for each of these.

## Pins

A pin is a glowing post with a label: a title, a line of text and the distance. It marks a place or an object so it can be found from far away. REDnode's overlay draws pins on top of the game; they change nothing in the game itself and need no Codeware.

```js
import { game, world } from 'rednode';

const here = await game.player.position();
const id = await world.pin({ at: here, title: 'Drop', text: 'the crate by the stairs' });
```

| Do | You should see |
|---|---|
| Run the code, then walk away and turn round | A cyan post where V stood, with a label: **Drop**, the text, and the distance in metres |
| Look away from it | The label waits at the edge of the screen with an arrow pointing the way to turn |
| Open the map or photo mode | The pin hides |
| Run `await world.unpin(id)` | The pin is gone |

{% include shot.html caption="A world pin" shows="Gameplay looking down a street at a cyan post with a label above it: the title Drop, a line of text, and the distance in metres." %}

A pin can follow an object: give `at` the id that `world.spawn` returned, or use `label` when you spawn.

```js
const { id: judy } = await world.spawn({ record: 'Character.Judy', position: here });
await world.pin({ at: judy, title: 'Judy' });

// The same in one call:
await world.spawn({ record: 'Character.Judy', position: here, label: 'Judy' });
```

A `style` sets how a pin looks:

```js
await world.pin({ at: here, title: 'Far', style: { color: '#ff4fd8', scale: 'screen' } });
await world.pinStyle({ scale: 'screen', color: '#ffcf3f' }); // every pin of your package
```

| `scale` | Size | Behind a wall |
|---|---|---|
| `"fit"` (the default) | Full size up to 15 m, then shrinks with distance down to a smallest size | Still drawn, dimmed |
| `"world"` | A real size in the world: small when far | Hidden |
| `"screen"` | The same size at any distance | Shown |

A style can also set `color` (`#rrggbb`), `font`, `titleSize`, `textSize` and `pinHeight` (the post's height in metres, 3 if left out).

| Call | Does |
|---|---|
| `world.pin({ at, title, text?, style? })` | Drops a pin and gives back its number |
| `world.unpin(id)`, `world.clearPins()` | Removes one pin, or all of your package's |
| `world.pins()` | Lists your package's pins, each with its distance |
| `world.pinStyle(style)`, `world.pinStyle(id, style)` | Restyles all of your package's pins, or one |

| Good to know | |
|---|---|
| When pins go | Your package's pins go when it stops, and every pin goes when the game session ends |
| Assistants | Claude Code and REDagent can drop pins too, through REDnode's [MCP server](agents.html). Pins only draw, so they don't ask first |
| Coming | A **Pins** window for players, `world.goTo(id)` to move V beside a pin, and pin sets kept in files are built for a later REDnode release |

The developer's notes and test results are on REDnode's [World API page](https://edgemodders.github.io/REDnode/world.html).
