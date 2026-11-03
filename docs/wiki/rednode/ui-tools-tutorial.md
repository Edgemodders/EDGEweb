---
title: "Tutorial: your first native HUD panel"
nav_title: "Tutorial: first HUD panel"
section: REDnode
order: 10.7
description: "Step by step in the UI Workbench: make a project from the template, read its markup and script, change the title, add a line, change a colour threshold, see each change live, then export it and install it as a mod of its own."
reviewed: 2026-11-03
---

# Tutorial: your first native <span class="y">HUD panel</span>

In this tutorial you make a small gauge on the game's HUD, drawn by the game itself, with a slider that drives it. You start from the UI Workbench's template, change it a little at a time while it runs, and finish with a zip that installs as a mod of its own. No coding experience is needed: you change words and numbers, and the editor tells you if something is wrong.

It takes about 20 minutes. The template, Run, Save while it runs, Export and installing the export all passed in game in the UI Workbench's tests (2026-11-02 and 2026-11-03); the edits here are small changes to the template.

{% include shot.html caption="The finished gauge" shows="The game's HUD with the Cyberware heat panel at the left: its title, a level bar in the warning colour, the percentage, the mood line Running hot, a raw level line, and the controls window with its slider at the right of the screen." %}

## What you need

| | |
|---|---|
| [REDnode](install.html) 0.56.0 or later and [Codeware](https://github.com/psiberx/cp2077-codeware) 1.16 or later | Installed in the game |
| The [UI Tools](ui-tools.html#install) pack | Installed, with the UI Workbench switched on and its **admin** permission allowed ([how](ui-tools.html#the-admin-permission)) |
| A save to load | Any save in the open world |

## 1. Make the project

1. Load your save and press **F10** for interactive mode.
2. In the UI Workbench, open the **Projects** tab.
3. Type `Heat Gauge` in the name box and press **New**.

The status line says `Made Heat Gauge in ...\Documents\REDnode\UI projects\heat-gauge`, and the **Edit** tab opens on two files: the markup, `panel.ink.html`, on the left, and the script, `mod.mjs`, on the right.

## 2. Run it

1. Press **Run**. The status line says `Heat Gauge runs in the game. Its output and any crash are in the Mod log.`
2. A window, **Heat Gauge: controls**, opens at the right of the screen with a **Level** slider.
3. Press **Esc** to leave interactive mode and look at the HUD's left side: a panel says **HEAT GAUGE**, with a bar at 50 %, *In the zone*, and *0 changes from the slider*.
4. Press **F10** again and drag the slider slowly to the right. The panel follows while you drag: the bar fills, the number climbs, and from 70 the panel turns to the warning colour (*Running hot*), from 90 to red (*Overheating!*). The count goes up with each change sent.
5. Press **Reset** in the controls window: back to 50 and 0 changes.

{% include shot.html caption="The template running" shows="The template project running: the HEAT GAUGE panel at the left of the HUD at 50 percent, In the zone, and the Heat Gauge: controls window at the right with its Level slider and Reset button, the Workbench's Edit tab open in front." %}

## 3. Read what you made

Here is the markup the template wrote, without the comment at the top of the file that explains it (lines 1 to 4). Each tag is one of the game's widgets; `{name}` is a slot the script fills.

```html
<mount layer="hud" anchor="left" x="80" y="-60">
  <column gap="10">
    <text style="label">{title}</text>
    <row gap="12" align="center">
      <text style="small" tone="dim">Level</text>
      <bar value="{fill}" tone="{tone}" track="dim" width="240" height="8" />
      <text style="value" tone="{tone}">{level}%</text>
    </row>
    <text style="body" tone="{tone}">{mood}</text>
    <text style="small" tone="dim">{changes} changes from the slider. Made in the UI Workbench.</text>
  </column>
</mount>
```

| Line | Means |
|---|---|
| `<mount layer="hud" anchor="left" x="80" y="-60">` | Put the panel on the HUD, at the left edge, 80 in and a little above the middle |
| `<column gap="10">` | Stack what's inside top to bottom, 10 apart |
| `<text style="label">{title}</text>` | A text in the game's label style, showing the data's `title` |
| `<row gap="12" align="center">` | Put the next three side by side, centred on each other |
| `<bar value="{fill}" tone="{tone}" ...>` | A bar filled to the data's `fill` (0 to 1), in the data's `tone` colour |
| `{level}%`, `{mood}`, `{changes}` | More slots: the script decides what they say |

And the script's main parts:

```js
import { ink, ui } from 'rednode';

const handlers = {};
let changes = 0;

// The panel's data for a level from 0 to 100: the names its {slots} read.
function data(level) {
  return {
    level,
    fill: level / 100,
    tone: level >= 90 ? 'danger' : level >= 70 ? 'warning' : 'accent',
    mood: level >= 90 ? 'Overheating!' : level >= 70 ? 'Running hot' : level >= 30 ? 'In the zone' : 'Idling',
    changes,
  };
}

const view = await ink.load('panel.ink.html', handlers, {
  title: "Heat Gauge",
  ...data(50),
});

const level = ui.slider('Level', (value) => {
  changes++;
  view.set(data(value));
}, { min: 0, max: 100, value: 50, unit: '%', live: true });
```

| Part | Does |
|---|---|
| `data(level)` | Works out everything the panel shows for one level: the bar's fill, the colour (`tone`), the mood |
| `ink.load(...)` | Reads the markup and puts it on the HUD, with the title and the data for 50 |
| `ui.slider(..., { live: true })` | A slider in an overlay window. `live: true` sends its value while you drag, not only when you let go |
| `view.set(data(value))` | Gives the panel new data. REDnode sends the game only the widgets whose slots read something that changed |

The rest of the script opens the controls window with the slider and **Reset**.

## 4. Change the title

The title comes from the script, so the panel can show any name.

1. In the script, find `title: "Heat Gauge",` and change it to `title: "Cyberware heat",`.
2. Press **Save** (or Ctrl+S). The status line says `Saved and restarted Heat Gauge`.
3. Press **Esc** and look: the panel now says **CYBERWARE HEAT**, in capitals because the `label` style writes in upper case. The level is back at 50, since a restart starts the script from the top.

The project's own name in the Workbench stays **Heat Gauge**; that's a different thing, changed with **Rename** in Projects.

## 5. Add a line to the panel

1. Press **F10**. In the markup, put the cursor at the end of the `{mood}` line and press Enter.
2. Type this new line:

```html
<text style="small" tone="dim">Raw level: {level}</text>
```

3. Watch the markup's header while you type: it may show an error while the line is half typed, and clears once the line is complete.
4. Press **Save**. The panel shows the new line under the mood, and it follows the slider too, because it reads `{level}` like the percentage does.

Your markup now reads (after the comment):

```html
<mount layer="hud" anchor="left" x="80" y="-60">
  <column gap="10">
    <text style="label">{title}</text>
    <row gap="12" align="center">
      <text style="small" tone="dim">Level</text>
      <bar value="{fill}" tone="{tone}" track="dim" width="240" height="8" />
      <text style="value" tone="{tone}">{level}%</text>
    </row>
    <text style="body" tone="{tone}">{mood}</text>
    <text style="small" tone="dim">Raw level: {level}</text>
    <text style="small" tone="dim">{changes} changes from the slider. Made in the UI Workbench.</text>
  </column>
</mount>
```

### Make a mistake on purpose

Change `style="small"` on your new line to `style="tiny"`. Within a moment the header says `line 14: style: "tiny" is not one of: title, subtitle, heading, body, label, value, small, fluff`, and the word is underlined. That list is every style you can use. Put it back to `small`. A mistake like this never reaches the game: REDnode checks the whole file first.

## 6. Change when it turns to warning

The colours come from the `tone` line in the script's `data` function:

```js
tone: level >= 90 ? 'danger' : level >= 70 ? 'warning' : 'accent',
```

Read it as: 90 or more is `danger`, else 70 or more is `warning`, else `accent`.

1. Change `level >= 70 ? 'warning'` to `level >= 50 ? 'warning'`.
2. Change the mood line's `level >= 70 ? 'Running hot'` to `level >= 50 ? 'Running hot'` to match.
3. Press **Save**, then drag the slider past 50: the panel turns to the warning colour and says *Running hot* from 50 now.

Want other colours? The [tones](ink-markup.html#tones) are `normal`, `accent`, `highlight`, `success`, `warning`, `danger`, `dim`, `white` and `background`. Try `'success'` instead of `'accent'` for a green gauge below the warning level.

## 7. Move it and print something

1. In the `<mount ...>` line of the markup, change `y="-60"` to `y="200"` and save: the panel moves down. `x` moves it right; a minus moves it the other way.
2. In the script, find the **Reset** button near the end: `ui.button('Reset', () => {`. On the next line, add `console.log('Gauge reset');` and save.
3. Switch on **Mod log** in the REDnode launcher, then press **Reset** in the controls window: the Mod log shows `[heat-gauge] Gauge reset`. Anything your script prints, and any crash, shows there.

## 8. Stop and export

1. In **Edit**, press **Stop**. The panel and the controls window go.
2. Press **Export**. The status line says `Exported Heat Gauge: ...\Documents\REDnode\UI exports\heat-gauge-0.1.0.zip (... files, ... KB). The path is copied.`
3. Paste the path into Explorer's address bar to see the zip.

## 9. Install it as a mod

To try the export as a player would, the project must step aside first, or REDnode keeps running the project instead (a development copy wins over an installed one).

1. In **Projects**, press **Delete** on **Heat Gauge**, then **Sure?**. It moves to the projects folder's `.trash`.
2. Quit the game.
3. Extract `heat-gauge-0.1.0.zip` into your Cyberpunk 2077 folder (the one that holds `bin` and `red4ext`), or add it to Vortex or EDGEdeck and deploy. It lands in `red4ext\plugins\REDnode\apps\heat-gauge`.
4. Start the game and load a save. Press **F10**, open the **Mod Manager** and find **Heat Gauge**: installed, with no **DEV** tag. Switch it on.
5. The controls window and the panel show, with your title, your extra line and your thresholds. The slider drives the panel. The UI Workbench isn't needed for it to run.

You've made a native HUD mod. To keep working on it, take the `heat-gauge` folder back from `.trash` into `UI projects` (rename it to `heat-gauge`), and remove the installed copy.

## Try next

| Idea | How |
|---|---|
| Show V's real health instead of a slider | Use `bind`: `<bar bind="player.health" of="player.healthMax" />`. See [Game values](ink-markup.html#game-values-with-no-round-trip) |
| Start from the game's own look | Copy a HUD piece with [To source](ui-tools-to-source.html) and change it |
| A list that grows | `<list items="..." key="id">`. See [Lists](ink-markup.html#lists) |
| Find what a game widget's colour is | [Try](ui-tools-try.html) a tint on it live |
| Share it | Upload the zip. See [Export](ui-tools-export.html#share-it) |
