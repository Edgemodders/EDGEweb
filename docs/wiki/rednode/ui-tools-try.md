---
title: "UI Workbench: Try"
nav_title: "UI Tools: Try"
section: REDnode
order: 10.3
description: "Change one of the game's own UI widgets live with the UI Workbench's Try: every field, Reset and Reset all, why nothing is ever kept, and a walkthrough on a HUD text."
reviewed: 2026-11-03
---

# UI Workbench: <span class="y">Try</span>

**Try** changes one of the game's own widgets while the game runs: hide it, fade it, tint it, resize it, move it, or change its text. It's for finding out what controls a look before you change any file, the way you would try a CSS value in a browser's developer tools.

Nothing Try does is kept. Each change remembers the value the widget had, **Reset** puts it back, and switching the Workbench off puts back everything that is left. A save never holds a change.

> **Needs the admin permission.** Try changes another package's view of the game, so it is for packages you allowed **managing REDnode** in the Mod Manager. See [The admin permission](ui-tools.html#the-admin-permission). Without it, a try answers with the reason instead of changing anything.

## Open it

1. In the **Inspect** tab, select a widget: pick it on screen with **Pick**, or click its row in the tree. See [Inspect](ui-tools-inspect.html).
2. In the details, open **Try**. It is folded at first; once you open it, it stays open for the next widget.

{% include shot.html caption="The Try part" shows="The details of a picked HUD text with the Try part open: the visible switch, the opacity slider, the tint, text, font size, size, margin and x y fields filled with the widget's values, the line saying the value now and before, and Reset, Reset all and the count of changes tried." %}

## The fields

Each field starts with the widget's value as the game has it now. Type a new value and press **Enter** to try it. The switch and the slider act at once.

| Field | Shown for | Type | Does |
|---|---|---|---|
| **visible** | Every widget | A switch | Shows or hides the widget, with everything inside it |
| **opacity** | Every widget | A slider, 0 to 100 % | Fades it. The widget follows **while you drag** |
| **tint** | Every widget | `#rrggbb` or `#rrggbbaa` | Its colour. Texts and shapes take the tint as their colour |
| **text** | Text widgets | Any text | What it says |
| **font size** | Text widgets | A number | The size of its letters |
| **size** | Every widget | Two numbers: `width height` | Its size, in the HUD's units |
| **margin** | Every widget | One number, or four: `left top right bottom` | Space around it, inside its parent |
| **padding** | Panels | One number, or four | Space inside it, around its children |
| **x y** | Every widget | Two numbers: `x y` | Moves it from where its parent puts it, without changing the layout |

The line under the fields answers each try: the property, the value now and the value **before**, for example `opacity: 0.4 (before: 1)`. A value the field can't read, such as a single number for **x y**, is refused with what it wants (`give two numbers: x y`) and changes nothing.

| Button | Does |
|---|---|
| **Reset** | Puts back everything tried on this widget, and reads it again |
| **Reset all** | Puts back everything tried on every widget, this one or others |
| The count beside them | How many changes are tried and not yet put back, or **nothing tried** |

### What puts a change back

| When | What happens |
|---|---|
| You press **Reset** or **Reset all** | The values from before come back at once |
| You switch the Workbench off, or close its window | REDnode puts back every change it tried |
| The REDnode host starts | It puts back anything an earlier session left, for a host that ended without cleaning up |
| A save loads | The game rebuilds its HUD with fresh widgets, so the ones you changed are gone. Pick again |
| The game removes the widget itself | The change goes with it. **Reset all** then says how many were on widgets the game had removed |

The game's own scripts keep driving their widgets while you try. A controller that updates a text, such as a clock's, may write over a tried text the next time it updates (unverified for each HUD piece). That is a clue in itself: the property is the controller's.

## Walkthrough: change a HUD text, tint it, fade it, reset it

You need a save with the UI Workbench switched on and its admin permission allowed.

1. Load a save. Press **F10** for interactive mode.
2. In **Inspect**, press **Pick** and click a text on the HUD: the name of the quest you're tracking, or the clock. The details show a text widget, with its words in the **text** row.
3. Open **Try**. Its **text** field holds the same words.
4. Replace them with `Hello from REDnode` and press **Enter**. The game's own text changes on the HUD, in the game's own font. The line under the fields says `text: Hello from REDnode (before: ...)` with the old words.
5. Click the **tint** field, type `#ff3040` and press **Enter**. The text turns red.
6. Drag the **opacity** slider slowly to the left. The text fades while you drag, and comes back as you drag right.
7. Type `40 0` in **x y** and press **Enter**. The text moves 40 to the right; the panel around it stays.
8. The count beside **Reset all** says **4 change(s) tried**.
9. Press **Reset**. The text, its colour, its opacity and its place come back as they were, and the count says **nothing tried**.

{% include shot.html caption="Try on a HUD text" shows="The quest tracker's objective line on the HUD changed by Try: it reads Hello from REDnode, in red, shifted to the right, with the Workbench's Try part showing the before line." %}

Now try two changes on two different widgets, and press **Reset all**: both come back. Try one more, then switch the Workbench off in the launcher: that one comes back too as it closes.

> **Tip:** the health bar at the top left hides itself out of combat. Pick the quest tracker, the clock or the minimap's labels for a first try.

## Finding what controls a look

| You want to know | Try |
|---|---|
| Which widget draws a line of text | Change its **text** to something obvious: if the text on screen changes, that's the one |
| Which panel holds a group | Switch **visible** off on the parent you picked with **Parent**: everything that vanishes is inside it |
| Where a colour comes from | Change the **tint** on the widget, then on its parents. If a parent's tint changes the child, the colour is inherited |
| Whether space comes from a margin or the layout | Change **margin** and **padding** and watch which one moves the widget |

When you've found it, note its **Path** (the details' copy button) and its property name in **Properties**. That's what an archive mod or a script edit would change. For a HUD panel of your own in the game's look, see [To source](ui-tools-to-source.html).

## For mod makers

Try is `ink.try(id, prop, value)` in the `rednode` package, for packages allowed `admin`. The properties are `visible`, `opacity`, `tint`, `size`, `margin`, `padding`, `translation`, and a text's `text` and `fontSize`, in the ink API's own forms: a tint as `"#rrggbb"`, a size or translation as `[x, y]`, margins as one number or four. It answers `{ was, now }`. `ink.reset(id?, prop?)` puts back what was tried, newest first, and `ink.tried()` lists what is still changed. REDnode puts back a package's tries when it stops. Details in REDnode's [Native game UI](https://edgemodders.github.io/REDnode/ink.html#ut3b-build-rednode-0560-ui-workbench-030) page.

```js
import { ink } from 'rednode';

const { hits } = await ink.at(1800, 300);
const r = await ink.try(hits[0].id, 'opacity', 0.3);
console.log(r.was, r.now); // the value before, and the value now
await ink.reset();
```
