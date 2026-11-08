---
title: The camera and builder mode
nav_title: Camera and builder mode
section: EDGEbuilder
order: 5
description: "EDGEbuilder's own camera: look, fly, orbit, pan, dolly and frame while V stays put, and builder mode, which hides the game's HUD and other windows while Edit is on."
reviewed: 2026-11-08
---

# The camera and <span class="y">builder mode</span>

Placing things from V's eyes is awkward: you can't see behind a crate, or look down on a room from above. So when you switch **Edit** on, EDGEbuilder looks through a **camera of its own** and the game's HUD gets out of the way. Together, that's **builder mode**.

## What happens when you switch Edit on

| | |
|---|---|
| The view | Switches to EDGEbuilder's camera, starting exactly where V's view is, so nothing jumps |
| V | Stays where V was standing. Only the camera moves |
| The HUD | The game's own HUD (minimap, quest tracker, crosshair) disappears |
| Other windows | Other REDnode packages' windows hide, if you allowed solo mode |
| The help line | At the bottom of the screen, now also lists the camera keys |

Switch **Edit** off and the view snaps back to V's eyes and the HUD returns. Switch it on again and the camera starts from V's view again.

Both halves can be switched off in the Settings tab, if one misbehaves. See [Settings and keys](settings.html). From 0.3.3 the switches apply at once, even while Edit is on, and switching Edit on with one of them off says so in the message line.

{% include shot.html src="/assets/shots/edgebuilder/camera-builder.webp" caption="Builder mode" shows="The game with Edit on and the camera flown up above a street: no minimap, quest tracker or crosshair, V standing small in the distance, and the EDGEbuilder panel at the right." %}

## Moving the camera

| Mouse or key | Does |
|---|---|
| Hold the **right mouse button** and move the mouse | Look around |
| Right mouse held, plus **W**, **A**, **S**, **D** | Fly forward, left, back, right |
| Right mouse held, plus **Q** or **E** | Fly down or up |
| **Shift** or **Ctrl** while flying | Faster or slower |
| **Mouse wheel** while flying | Changes the flying speed. The message line shows it |
| Hold the **middle mouse button** and move | Orbit around the selected object, or a point 10 m ahead when nothing is selected |
| **Shift** with the middle mouse button | Pan: slide the camera sideways and up or down |
| **Mouse wheel** | Move closer or further |
| **F** | Frame the selection: bring the camera to a good distance from it |

The gizmo, the box and selecting by clicking all keep working from wherever the camera is.

### The cursor while looking

With **REDnode 0.22.0 or later** and EDGEbuilder 0.3.2 or later, the cursor disappears and stays put while you hold the right or middle button. The view keeps turning however far you move the mouse. Let go and the cursor is back where it was. **Esc** while holding ends the lock without leaving Edit.

With an older REDnode, the cursor moves while you look, and turning stops when it reaches the edge of the screen.

The cursor lock passed its in-game retest on 2026-10-16 (EDGEbuilder 0.3.2 with REDnode 0.24.0).

## Dropping from the camera

With the editor camera on, **Drop where I look** puts the asset on the first surface the camera looks at, up to 60 m away, turned to face the camera. That makes it easy to fly to a spot, look at it, and drop. **Drop at click** drops it where you click instead. See [Browsing and dropping](browsing.html#drop-it).

## How far can the camera go?

In the in-game test, the camera flew about 200 m away from V and the world stayed fully loaded there. You don't need to bring V along.

## Loading a save with Edit on

When a save loads, Edit stays on and the camera starts again from V's view.

In 0.3.0, the game's HUD came back after the load. 0.3.1 fixes that: while builder mode is on, EDGEbuilder checks every second and hides the HUD again if the game brought it back. The fix passed its in-game retest on 2026-10-16.

## If V's view gets stuck

If EDGEbuilder stops while Edit is on (it crashed, or you closed it), V's view may stay on the editor camera with the HUD hidden.

- **Load a save.** That gives V's camera back.
- EDGEbuilder also fixes it by itself the next time it starts: before it changes anything, it writes down what it changed, and puts V's camera and HUD back from that note. The message line says so when it does.

## Builder mode and other windows

From 0.4.1, builder mode also hides other packages' windows, through REDnode's [solo mode](../rednode/spaces.html#solo-mode). It needs your permission: in REDnode's Mod Manager, allow EDGEbuilder **Hiding every other package's windows (solo mode)**. See [Install and set up](install.html#allow-redbridge). While it's on, the launcher tab shows **SOLO EDGEbuilder**. Switch Edit off and the windows come back. REDnode's own tools, such as the launcher, stay.

Without the permission, other windows stay on screen, and EDGEbuilder says so once. While Edit is on, EDGEbuilder's layer is over them, so they can't be clicked. Switch Edit off to use them.

## Try it: a look from the rooftops

1. Drop something in front of V and leave it selected.
2. Switch **Edit** on.
3. Hold the right mouse button and press **E** to rise above the street. Hold **Shift** to go faster, or turn the mouse wheel while flying to change the speed.
4. Fly forward with **W** to a rooftop and look back down.
5. Press **F**. The camera comes back to a good distance from the selected object.
6. Hold the middle mouse button and move the mouse: the camera circles the object. Add **Shift** to slide it sideways or up.
7. Turn the mouse wheel to move closer and further.
8. Switch **Edit** off. You're back in V's eyes, where V stood all along.
