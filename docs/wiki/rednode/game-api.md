---
title: The game API, TweakDB and the world
nav_title: Game API and TweakDB
section: REDnode
order: 8
description: "How REDnode packages reach the game: the game helper, calling any game function, TweakDB reads and changes, placing objects in the world, the game's files through REDbridge, and sound."
reviewed: 2026-10-16
---

# The game API, <span class="y">TweakDB</span> and the world

Everything here works the same in a Node mod and in an overlay app. Every call is asynchronous: you `await` it, it runs on the game's own thread between two frames, and the answer comes back a frame or two later.

| Part | Does | Needs | Status |
|---|---|---|---|
| `game` | A few everyday helpers | Nothing | Passed in game |
| `api` | Any game function, typed | Nothing | Passed in game |
| `tweakdb` | Read TweakDB | Nothing | Passed in game |
| `tweakdb` | Change TweakDB, undone when your package stops | [TweakXL](https://github.com/psiberx/cp2077-tweak-xl) 1.10 or later | Passed in game |
| `world` | Spawn, move and remove objects | [Codeware](https://github.com/psiberx/cp2077-codeware) 1.14 or later | Passed in game |
| `kernel.bridge()` | The game's archives and files | [REDbridge](../redbridge/) and the `bridge` permission | Passed in game |
| Sound | The game's UI sounds; your own audio files | Nothing | UI sounds passed; own files planned |

## The game helper

```js
import { game } from 'rednode';

const p = await game.player.position();          // { x, y, z }, V's position
await game.audio.play('ui_menu_onpress');         // a game UI sound
game.on('PlayerPuppet.OnGameAttached', reload);   // the main menu and every save load
const state = await game.state();                 // menu, photo mode, scene, main menu, overlay mode
```

`game.player.position()` fails at the main menu, where there is no V. `game.instance` is the `GameInstance` value that many game functions take first.

## Calling any game function

`api` reaches every function the game's scripting can see: global functions, the static functions of a class, and the methods of game objects. It's typed from the game's own type data, so an editor completes every class, method and value as you type.

```js
import { api, game } from 'rednode';

const player = await api.GetPlayer(game.instance);              // a global function
const shop = await api.GameInstance.GetTransactionSystem(game.instance); // a static function
const money = await api.MarketSystem.Money();
const eddies = await shop.GetItemQuantity(player, money);       // a method of a game object
await shop.GiveItem(player, money, 100);                         // a change: 100 eddies
```

This is cut down from the **Vitals** and **Game API mod** samples, which read V's health, level and money and passed their in-game test.

| To | Use |
|---|---|
| Call a global function | `api.Name(...)` |
| Call a static function | `api.ClassName.Name(...)` |
| Call a method | `obj.Name(...)` on an object a call gave you |
| Call by full name (operators, overloads) | `api.$call('Name;Type;Type', ...)` |
| Read or write a property | `obj.$get('name')`, `obj.$set('name', value)` |
| Make a new game object | `api.$new('ClassName', { ...properties })` |
| A function that writes into an argument | Pass `api.$out` in its place. New in REDnode 0.23.1, not yet tested in game |

### How values look in JavaScript

| Game type | In JavaScript |
|---|---|
| Bool, whole numbers, Float, Double | `boolean`, `number` |
| Int64, Uint64 | `string`, because JavaScript numbers lose precision past 2^53 |
| CName, String | `string` |
| Enums | The member's name, such as `"Health"` |
| TweakDBID | `"0x..."`. A record path such as `"Items.money"` works as an argument |
| Structs (Vector4, ItemID...) | Plain objects |
| Game objects | References. Call their methods with `await`. `null` when there is none |
| Resource references | A path such as `"base\\environment\\ld_kit\\marker.mesh"`, or its hash |

### Rules worth knowing

| Rule | |
|---|---|
| References die on save load | A game object you hold stops working when the game deletes it or a save loads: calls on it fail with "that game object no longer exists". Fetch fresh ones after `PlayerPuppet.OnGameAttached` |
| Wrong arguments are refused | Arguments are checked against the function's types first. A wrong one fails with its name and type, and the game isn't touched |
| Right types, wrong moment | The checks catch wrong types, not wrong values. Calling a function the game doesn't expect at that moment can still crash it, as with any script mod |
| Batch by not waiting | Calls you start together, without awaiting each one, run in the same game frame (up to 256 a frame). In the developer's test, ten at a time gave 300 moves a second at 30 fps |
| Not supported yet | Functions with `script_ref` parameters fail with a clear message |

### The game API reference

Every class, struct, enum and global function in the base game (2.31) is in REDnode's [game API reference](https://edgemodders.github.io/REDnode/game/), with REDnode's notes on how things behave. It's built from the game's own type data, like NativeDB. The same lookup is an [MCP tool](agents.html), so Claude can look things up too.

## TweakDB

[TweakDB](../glossary.html) is the game's database of tuning data: items, weapons, vehicles, characters, perks. A **record** is one thing, such as `Items.Preset_Lexington_Default`; a **flat** is one value in it, such as `Items.Preset_Lexington_Default.quality`.

### Reading

No other mod needed.

```js
import { tweakdb } from 'rednode';

await tweakdb.get('Items.Preset_Lexington_Default.friendlyName'); // a flat's value
await tweakdb.flat('Items.Preset_Lexington_Default.quality');     // the value with its type
const gun = await tweakdb.record('Items.Preset_Lexington_Default', 'WeaponItem');
await gun?.FriendlyName();                                        // a typed method of the record
await tweakdb.records('Vehicle');                                 // every vehicle record's id
```

| Call | Gives |
|---|---|
| `tweakdb.get(path)` | A flat's value, or `null` |
| `tweakdb.flat(path)` | The value and its type |
| `tweakdb.record(path, type?)` | The record as a game object, or `null` |
| `tweakdb.records(type)` | The ids of every record of a type |
| `tweakdb.type(path)` | A record's type |
| `tweakdb.id(path)`, `tweakdb.name(id)`, `tweakdb.learn(paths)` | Between paths and ids |

In the in-game test, listing all 1,377 vehicle records took 26 ms.

**Names.** TweakDB ids are hashes, and the game doesn't keep the names. A path your package passed in is remembered and comes back as that path; any other id comes back as `"0x..."`. `tweakdb.learn` tells REDnode more names. Both forms work as input everywhere.

### Changing

Changes go through TweakXL, the community's standard for TweakDB edits, so they work beside every other TweakXL mod. List it in your manifest so players without it see what's missing:

```json
"requires": { "tweakxl": ">=1.10" }
```

```js
await tweakdb.set('Items.Preset_Lexington_Default.friendlyName', "My Lexington");
await tweakdb.clone('Items.MyMod_Lexington', 'Items.Preset_Lexington_Default');
await tweakdb.set('Items.MyMod_Lexington.quality', 'Quality.Legendary');
```

| Call | Does |
|---|---|
| `tweakdb.set(path, value, { type? })` | Changes a flat and applies it. A new flat needs `type` |
| `tweakdb.clone(path, base)` | A new record copied from another |
| `tweakdb.create(path, type)` | A new, empty record |
| `tweakdb.update(path)` | Applies changed flats to a record (`set` already does) |

**Undone when your package stops.** REDnode remembers each flat's value from before your package first changed it, and puts it back when the package stops: switched off, restarted, hot reloaded or crashed. So set your values every time your package starts; switching it off really removes them. Records you clone or create stay until the game closes, since TweakDB can't remove them.

Objects already in the game, such as an item V carries, may keep values they copied when they were made. Which ones do is not yet confirmed.

For fixed edits that don't need code, TweakXL's own `.yaml` and `.tweak` files are still the simplest way.

### Without the game running

Reading TweakDB with the game closed, through REDbridge, is planned for REDnode but not built. It was waiting for REDbridge's TweakDB methods, which arrived in REDbridge 0.8.0. REDcode's TweakDB browser already uses them.

## Placing things in the world

`world` spawns objects, with parts such as a mesh attached, moves them, removes them, and tells you when they appear and disappear. It needs [Codeware](https://github.com/psiberx/cp2077-codeware) 1.14 or later; without it, these calls fail and say so. EDGEbuilder, EDGE's world builder, is built on it.

```js
import { api, world } from 'rednode';

const mesh = await api.$new('entMeshComponent', {
  name: 'my_box',
  mesh: 'base\\environment\\ld_kit\\marker.mesh',
  meshAppearance: 'default',
});
const { id } = await world.spawn({
  template: 'base\\gameplay\\loot\\containers\\common_suitcases\\appearances\\suitcase_small_placeholder.ent',
  position: { x: -1234, y: 987, z: 12 },
  components: [mesh],
});
await world.move(id, { x: -1234, y: 988, z: 12 });
await world.remove(id);
```

| Call | Does |
|---|---|
| `world.spawn(options)` | Spawns from a template or a TweakDB record, with components attached, and resolves once it's in the world |
| `world.move(id, position, orientation?, yaw?)` | Places it |
| `world.remove(id)` | Removes it |
| `world.watch(id)` | Events for an entity spawned some other way |
| `world.on(name, fn)` | `Entity/Initialize`, `Entity/AfterAttach`, `Entity/Detach` |
| `world.entity(id)` | The entity, or `null` once it's gone |
| `world.available()` | True when Codeware is installed and a game is loaded |

In the in-game test, a box appeared in front of V about a quarter of a second after the click. The **World test** sample does exactly this.

## The game's files through REDbridge

[REDbridge](../redbridge/) runs WolvenKit's engine: it lists, searches and extracts the game's archives, turns game files into JSON and back, and textures into PNG. A package can use it with the `bridge` permission:

```js
import { kernel } from 'rednode';

const bridge = await kernel.bridge(); // fails until the player allows it, or if REDbridge isn't installed
const found = await bridge.call('archive.search', { query: 'player_ma_tpp', limit: 5 });
```

REDnode doesn't ship REDbridge. It uses the copy [EDGEdeck](../edgedeck/) (**Get REDbridge**) or REDcode downloaded. One REDbridge serves every package: it starts on the first call, takes about three seconds to load the game's archive index, and stops after 10 minutes without calls. The method names are in [REDbridge's docs](https://edgemodders.github.io/REDbridge/).

## Sound

| Want | Today |
|---|---|
| The game's own UI sounds | Works: `game.audio.play(name)`, or `sound` on UI kit buttons. See [Overlay apps](overlay-apps.html#game-sounds) |
| The rest of the game's audio system (sounds on entities, parameters, radio) | Reachable through `api`, but untested beyond playing a sound |
| Your own audio files (WAV, OGG, MP3, FLAC) following the game's volume, pause and position | **Planned.** REDnode will have its own audio engine. A first research build is in REDnode 0.23.0 and 0.23.1 and waits for its in-game test |

The plan is on REDnode's [Sound API page](https://edgemodders.github.io/REDnode/sound.html).

## Not yet

| Want | Status |
|---|---|
| Change what a game function does while it runs (multiply damage, cancel a call) | Needs code inside the game (Tier 1) or declarative rules. Designed, not started |
| Hear any game function being called, as an event | Planned |
| A console to type JavaScript in the game, like CET's | Proposed, not scheduled |
