---
title: EDGEhack scripts
nav_title: Scripts
section: EDGEhack
order: 4
description: "A quickhack's own logic in JavaScript: a scan check that decides per person whether it is usable, and a function when it lands, run in the game by REDnode."
reviewed: 2026-11-11
---

# <span class="y">Scripts</span>

A quickhack's records say what it does to everyone. A script decides per person, in JavaScript: whether it can be used on them, and what more it does when it lands. [REDnode](../rednode/) 0.61.1 or later runs it in the game.

| Function | When it runs | What it does |
|---|---|---|
| **Scan check**, `canUse(target, hack)` | Each time V scans a person | Returns `true` to show the quickhack usable on them, `false` to show it disabled, with your text on the wheel |
| **On land**, `onLand(target, hack)` | When it lands on a living person, a frame or two after what its records do | Adds to the hack: more damage, a status effect, anything worked out from the target. It can't cancel the hack |

## Add one

The **Scripts** section is at the bottom of a quickhack's page. The quickhack must be in a project: its script goes in the mod's REDnode package there.

1. Press **Add** on **Scan check** or **On land**.
2. The script file opens: `source\resources\red4ext\plugins\REDnode\apps\<mod>\<quickhack>.mjs` in your project, with the function and a comment saying what it gets.
3. Write the function, and save the file.

The file is yours: EDGEhack only ever adds a function you ask for. It writes the package's own files (`main.mjs`, `rednode-app.json`, and `quickhacks.d.ts`, the types VS Code completes from) at each save of the quickhack's page. **Pack and Play** installs the package with the mod. **Remove** takes the script off the quickhack; the file stays.

With a scan check, **A disabled hack says** sets what the wheel shows on a person it's disabled on. Empty, it says "Not on this target".

{% include shot.html src="/assets/shots/edgehack/scripts-section.webp" caption="The Scripts section" shows="The Scripts section of a quickhack's page: the script file's path, Scan check with Open, On land with Add, and the A disabled hack says field." %}

## What a function gets

`target` is the person, as they were when the game asked:

| Field | Holds |
|---|---|
| `level`, `health`, `healthPercent` | Their level, health in points, health in percent (0 to 100) |
| `isHuman`, `isDrone`, `isAndroid`, `isMechanical` | What they are |
| `isBoss`, `isElite`, `isCivilian` | Their rank |
| `damage(amount)` | Lowers their health by that many points, as V |
| `addEffect(effect)` | Puts a status effect on them from V, such as `"BaseStatusEffect.ContagionPoisonLvl2"` |

`hack` says which hack it is: `tier` (1 is Common), `item` (the tier's item), `action`, and in `onLand`, `spread` (it spread to this person) and `byV`.

## Examples

Only on people who aren't bosses:

```js
export function canUse(target, hack) {
  return !target.isBoss;
}
```

More damage on the wounded, by tier:

```js
export async function onLand(target, hack) {
  if (target.healthPercent < 50) await target.damage(20 * hack.tier);
}
```

A scan check runs each time V scans someone, so keep it quick: answer from `target` alone. While it runs the hack shows "Checking...", for a second the first time V scans someone; with no answer, the game's own result stands.

{% include shot.html src="/assets/shots/edgehack/scripts-in-game.webp" caption="A scan check in the game" shows="The quickhack wheel on a scanned enemy: the scripted quickhack greyed out with the modder's own disabled text, beside the game's quickhacks." %}

## Try it

1. Make a quickhack (see [Your first quickhack](first-quickhack.html)) and press **Add** on **On land**.
2. Uncomment the example line in the file, and save.
3. Save the quickhack's page, then **Pack and Play**, and upload it on someone below half health.

REDnode's Mod log (F10) shows the mod's lines, and any error in your script.
