---
title: Overlay apps
section: REDnode
order: 7
description: "Build in-game windows and HUD widgets from web pages with REDnode: a first app, the UI kit and its themes, HUD widgets, game sounds, the title bar, keys and modifiers, pointer lock and window sizes."
reviewed: 2026-11-05
---

# Overlay <span class="y">apps</span>

An overlay app is a web page that REDnode draws on top of the game. If you can make a web page, you can make an in-game window: HTML for the content, CSS for the look, JavaScript for the behaviour. Any web framework works.

For UI the game draws itself, in its own widgets on its HUD, see [Native UI: ink markup](ink-markup.html) instead.

## How it works

| Part | What it does for your app |
|---|---|
| The overlay host, beside the game | Loads your page in Chromium (the engine inside Chrome), off screen, and sends each new picture of it to the game |
| The REDnode plugin, in the game | Draws your window, moves it when it's dragged, and passes mouse and keyboard to it in interactive mode |
| The `rednode` package | Your page's way to the game, the same as a Node mod's |

## Your first app

A folder in the apps folder with a manifest and a page.

`where-am-i/rednode-app.json`:

```json
{
  "id": "where-am-i",
  "name": "Where am I",
  "version": "0.1.0",
  "author": "you",
  "entry": "index.html",
  "width": 360,
  "height": 200,
  "anchor": "top-left",
  "x": 100,
  "y": 100,
  "open": true
}
```

`where-am-i/index.html`:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script src="rednode://ui/rednode-ui.js"></script>
<script type="importmap">{ "imports": { "rednode": "rednode://sdk/index.js" } }</script>
<style>
  html, body { margin: 0; width: 360px; height: 200px; background: transparent; }
  rn-window { position: absolute; inset: 6px; }
</style>
</head>
<body>
  <rn-window title="Where am I" draggable>
    <rn-button id="where">Where am I?</rn-button>
    <p id="out"></p>
  </rn-window>
  <script type="module">
    import { game } from 'rednode';
    document.getElementById('where').addEventListener('click', async () => {
      const p = await game.player.position();
      document.getElementById('out').textContent = `X ${p.x.toFixed(1)}  Y ${p.y.toFixed(1)}  Z ${p.z.toFixed(1)}`;
    });
  </script>
</body>
</html>
```

The first `<script>` loads the UI kit; the import map lets the page import `rednode` by name. Load a save, press F10 and click the button.

### Three rules

| Rule | Why |
|---|---|
| Keep the page background **transparent** | Transparent parts show the game, and clicks there pass through to what's behind |
| Make the page the **window's size** | Sizes are in pixels at 1080p. REDnode scales windows with the screen height: twice the size at 4K |
| **Don't draw a cursor** | REDnode draws it, at the game's frame rate |

Any element with the `data-rednode-drag` attribute is a drag handle. `<rn-window draggable>` makes its title bar one.

## The UI kit

The UI kit is a set of ready-made widgets in the EDGE HUD look, written as HTML tags. They work in plain HTML and inside React, Vue or anything else, and your page's CSS can't break them.

| Tag | Is |
|---|---|
| `rn-window` | A window with a title bar, close and the [title-bar buttons](overlay.html#title-bar-buttons) |
| `rn-panel` | A titled section |
| `rn-button` | A button, with optional `sound` and `hover-sound` |
| `rn-toggle`, `rn-slider`, `rn-input` | Switch, slider, text field. `<rn-input clearable>` shows a **✕** inside the field while it holds text, which empties it as typing it away would (REDnode 0.56.1) |
| `rn-list`, `rn-menu`, `rn-tabs` | Lists, menus and tabs |
| `rn-progress`, `rn-tooltip`, `rn-notification` | Progress bar, tooltip, pop-up message |

They work with the keyboard too: Tab between widgets, arrows in lists and menus, Enter to choose.

```html
<rn-window title="Weather control" draggable>
  <rn-toggle label="Freeze time"></rn-toggle>
  <rn-slider label="Rain" min="0" max="100" unit="%"></rn-slider>
  <rn-button>Apply</rn-button>
</rn-window>
```

{% include shot.html caption="The UI kit" src="/assets/shots/rednode/overlay-apps-the-ui-kit.png" alt="The UI kit sample&rsquo;s Controls tab: Primary, Ghost, Danger, Disabled and Hover me buttons, a Freeze time toggle, a Rain slider, a Call sign text field and an Upload progress bar." shows="The UI kit sample window in the REDnode theme, showing buttons, toggles, a slider, a text field and tabs." %}

### Themes

Windows follow the theme the player picks in the launcher: `rednode`, `hud` (HUD red, a look-alike of the game's UI) or `edge` (solid yellow title bars). To fix your app to one, set `theme` on the element, for example `<body theme="hud">`. The older names `game` and `yellow` still work.

### Looking like the game

Leave out the window and you get pieces that look like part of the game's UI. The **Native button** sample is a single game-style button on a transparent page, with a menu and a pop-up message. The game's own fonts and textures can't be shipped, so the `hud` theme rebuilds the look in CSS.

The full component reference is in the [UI kit README](https://github.com/Edgemodders/REDnode/tree/main/packages/ui).

## HUD widgets

Add `"kind": "hud"` to the manifest and the app becomes part of the HUD: drawn, but never focused, never dragged, and never in the way of a click. Add `"hideWith"` to hide it when the game shows something else:

```json
"kind": "hud",
"hideWith": ["menu", "photo-mode", "scene", "main-menu"],
"anchor": "top",
"x": 0,
"y": 14
```

| `hideWith` | Hides while |
|---|---|
| `menu` | A game menu is open: inventory, map, pause |
| `photo-mode` | Photo mode is on |
| `scene` | A cinematic scene plays. Which scenes count is still being confirmed |
| `main-menu` | The main menu and loading screens |

REDnode hides the window itself, in the same frame the game changes, so there's no lag. Any window can use `hideWith`, not only HUD widgets.

`anchor` with `x` and `y` keeps a widget at the same edge on any screen size and shape. Anchors are `top-left` (the default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` and `bottom-right`.

## Game sounds

Overlay apps can play the game's own UI sounds, which mix with the game and follow its volume:

```html
<rn-button sound="ui_menu_onpress" hover-sound="ui_menu_hover">Apply</rn-button>
```

```js
RednodeUI.playSound('ui_jingle_quest_success');
```

Names confirmed in game include `ui_menu_onpress`, `ui_menu_hover`, `ui_menu_tutorial_close`, `ui_loot_take_all`, `ui_menu_item_bought` and `ui_jingle_quest_success`. An unknown name plays nothing. The UI kit sample's **Sound** tab is a quick way to try names. Your package can also play its own audio files: see [Sound](game-api.html#sound).

## Talking to the game

Import `rednode` exactly as a Node mod does. Everything on [Game API and TweakDB](game-api.html) works in a page: `game`, `api`, `tweakdb`, `world`, `audio`, `archives`, `secrets`, `kernel`, `agent`, and `service` to call other packages. A Node mod's `pkg.dataDir` and the file system are Node-only; pair your page with a mod for those (see [a page and a mod together](node-mods.html#a-page-and-a-mod-together)).

Two events reach a page only through the older `window.rednode.on`: `focus` (your window gained or lost the keyboard; dim your title) and `overlay` (the mode changed: passive, interactive or hidden).

## The title bar

`rn-window` gives your window the standard title bar: **✕**, and up to three action buttons beside it (move to space, roll up, pin to HUD, reset position, debug), with **⋯** for the rest. See [title-bar buttons](overlay.html#title-bar-buttons). To leave one out, add `no-space`, `no-rollup` or `no-debug`:

```html
<rn-window title="Speedometer" draggable no-rollup>...</rn-window>
```

From REDnode 0.58.0 a page can add buttons of its own next to **✕**, by setting the window's `titleButtons` from your script. Each has an `id`, a `label`, an `icon`, `on` to light it and an `onClick`, as [in a Node mod](node-mods.html#title-bar-buttons-and-views). They count toward the three icons, so the window's own actions move into **⋯**:

```js
document.querySelector('rn-window').titleButtons = [
  { id: 'settings', label: 'Settings', icon: 'settings', onClick: () => openSettings() },
];
```

Your package needs nothing to work with [spaces](spaces.html): its windows join the space the player is in.

## Keys, modifiers and double-clicks

Keys and the mouse reach the focused window much as in a browser. Since REDnode 0.56.1:

| What | How it works |
|---|---|
| Ctrl, Shift and Alt on the mouse | Clicks, moves and the wheel carry `ctrlKey`, `shiftKey` and `altKey`, read from Windows at each event, so Ctrl+click, Shift+drag and Alt+click work |
| Edit keys | Ctrl+Z, Ctrl+Y, Ctrl+Shift+Z, Ctrl+A, Ctrl+C, Ctrl+V and Ctrl+X arrive as `keydown` events. A text field edits as usual; a page with its own undo or copy takes the key with `preventDefault()` and nothing else happens. Before, the overlay ran the editing command itself and the page never heard the key |
| Double-clicks | Two presses of the same button within 450 ms and 6 px count as a double-click, so `dblclick` reaches pages: a text field selects a word, and a page's own double-click actions work. Before, every press arrived as a single click |
| Esc | Esc normally leaves interactive mode, so a page never hears it. A page in the middle of something (a drag, a pick, a move) can ask for it with the web's Keyboard Lock API; while it has focus, Esc then comes to it as a key. F10 always leaves interactive mode, so the player is never stuck |

```js
async function startMove() {
  await navigator.keyboard.lock(['Escape']); // Esc now comes to this page
  moving = true;
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && moving) cancelMove();
});
function endMove() {
  moving = false;
  navigator.keyboard.unlock(); // Esc leaves the overlay again
}
```

The UI Workbench's Pick uses this: Esc ends a pick and leaves you in interactive mode. The **Input test** sample in REDnode's repo shows all of these. Details: [Keys and modifiers](https://edgemodders.github.io/REDnode/overlay-apps.html#keys-and-modifiers).

## Holding the cursor (pointer lock)

A 3D editor's camera turns while you hold a mouse button and move: the cursor must stay put while the movement keeps coming. Pages use the web's own Pointer Lock API for this, and REDnode does the holding in the game:

```js
pad.addEventListener('pointerdown', (e) => {
  if (e.button === 2) pad.requestPointerLock(); // right button
});
document.addEventListener('pointermove', (e) => {
  if (document.pointerLockElement === pad) turnCamera(e.movementX, e.movementY);
});
addEventListener('pointerup', (e) => {
  if (e.button === 2) document.exitPointerLock();
});
```

While locked, the cursor is hidden and stays where it was, and each movement arrives with `movementX` and `movementY`. The lock ends with `exitPointerLock()`, **Esc**, **F10**, or the window closing; `pointerlockchange` tells the page. Only the window in use can take the lock, and only in interactive mode. This passed its in-game test in REDnode 0.22.0. The **Pointer lock test** sample shows it.

## Window size and the whole screen

| Manifest | Does | Since |
|---|---|---|
| `"resizable": true`, with `minWidth` and `minHeight` | A grip in the window's bottom-right corner lets the player resize it, as the Mod Manager does. REDnode keeps the size with the window's place, and **Reset position and size** in the title bar goes back to the manifest's. Size your page with `100vw` and `100vh` so it follows | 0.49.5 |
| `"fill": "screen"` | The page covers the whole game view at any aspect ratio: always 1080 high, and as wide as the view (1920 at 16:9, 2580 at 21:9, 3840 at 32:9). It follows a resolution change. For an editor's see-through canvas over the world. A `<rn-window draggable>` on such a page moves inside it, and the rest of the page stays put | 0.50.2 |
| `<rn-window draggable resizable min-width="..." min-height="...">` on a `fill` page | The window resizes inside the page by its corner grip, down to its minimum (320 x 200 if not set). The page keeps its place and size, and **Reset position and size** in its title bar puts them back. Give the window a height and let its content fill it. The UI Workbench works this way | 0.56.1 |

All three passed in game. The **Fill test** sample shows a full-view page, and the [UI Workbench](ui-tools.html) a resizable window on one. Details in the guide: [Resizable windows](https://edgemodders.github.io/REDnode/overlay-apps.html#resizable-windows), [A page that covers the whole game view](https://edgemodders.github.io/REDnode/overlay-apps.html#a-page-that-covers-the-whole-game-view).

## Frames from another address

A page can show another page in an `<iframe>`: one served from `http://127.0.0.1:<port>`, another site, or a sandboxed frame. From REDnode 0.50.2 the frame gets real input in the game: clicks, the wheel, hover, drags and typing, through CSS transforms and frames inside frames. This passed in game with the **Frame test** sample. See [Frames from another address](https://edgemodders.github.io/REDnode/overlay-apps.html#frames-from-another-address).

## Good to know

- **Keep animation light.** Every repaint is copied to the game, at most 60 times a second. Many busy windows cost more.
- **Each open window is a Chromium page** using roughly 60 to 100 MB.
- **Hot reload** reloads your page when you save its files.
- **Tooltips:** the UI kit shows an element's `title` as a tooltip in the game (Chromium's own tooltips don't show in overlay windows). Players can switch them off.
- **Copying text:** use `ui.copy(text)` from the `rednode` package; a page's `navigator.clipboard` isn't reliable in overlay windows.
- The developer reference, with every tested example, is the [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html).
