---
title: Your first scene
section: EDGEbuilder
order: 2
description: "A first walk through EDGEbuilder, start to finish: make a scene, drop a crate, fly the camera, move and stack crates, group and copy them, undo, then bake the scene so the crates stand in Night City for good."
reviewed: 2026-11-08
---

# Your first <span class="y">scene</span>

This page takes you through EDGEbuilder once, start to finish. You'll build a small stack of crates, copy it, and bake it into the world, so the crates stand in Night City and stop V even with EDGEbuilder closed. It takes about 20 minutes, plus two game restarts.

The other pages explain each control in full. Here you only need to follow the steps.

## Before you start

| You need | Where to get it |
|---|---|
| EDGEbuilder installed, with REDbridge allowed | [Install and set up](install.html) |
| A save where V stands somewhere quiet and open: an empty lot, a car park, a quiet alley | Your own saves. Busy streets work too, but traffic gets in the way |
| For the bake at the end: [REDcode](../redcode/) in VS Code, with a project open | [REDcode projects](../redcode/projects.html). Any project will do, even a new empty one |

Press **F10** until REDnode's windows take the mouse (the overlay is **interactive**), and open EDGEbuilder from the launcher.

## 1. Check the three pills

At the top of EDGEbuilder's panel, three pills say whether everything is ready:

1. The first says **World ready**. If it says **Load a save**, load one.
2. The second says **REDbridge** and its version, in green. If it says **Allow REDbridge (hover)**, see [Allow REDbridge](install.html#allow-redbridge).
3. The third counts the game's assets, about **31,500 assets**. The first time, it says **Indexing...** for a few seconds.

When all three are green, you're ready.

{% include shot.html src="/assets/shots/edgebuilder/first-ready.webp" caption="Ready to build" shows="EDGEbuilder's panel at the right of the game, with its three pills green: World ready, REDbridge 0.12.1, 31,601 assets, and the Assets tab below them." %}

## 2. Make a scene

A **scene** is the list of everything you place. EDGEbuilder saves it after every change, so you never lose work. Give your first one a name.

1. Open the **Library** tab.
2. If it says **No Library folder yet**, press **Make the Library**. That makes `Documents\EDGE Library`, a folder the EDGE tools share for your work. (You can skip it: pick **This PC** in the tree instead, and the scene is kept in EDGEbuilder's own folder.)
3. Click **Library** in the tree, so new things go there.
4. In the **Picked** panel, type `Construction Crates` in **Name**.
5. Press **New scene here**.

The message line says **New scene Construction Crates in Library**, and the scene shows in the tree with an **open** tag. The **Scene** tab now has it as **Open scene's name**.

{% include shot.html src="/assets/shots/edgebuilder/first-new-scene.webp" caption="A new scene in the Library" shows="The Library tab: the tree with Library at the top and Construction Crates under it tagged open, the Picked panel with Construction Crates typed in Name, and the New scene here button." %}

## 3. Find a crate and drop it

1. Open the **Assets** tab and type `cargo crate`. Typing anywhere on the tab goes into the search box.
2. Click the **Meshes** tab above the results, so only meshes are listed. A **mesh** is a plain 3D model: it has a look, but no behaviour of its own.
3. Click `cargo_crate_a.mesh` in the list. The **Picked** panel shows its size in metres and its **appearances**, the colours and labels the same crate comes in.
4. Click an appearance you like.
5. Press **Drop where I look**.

The crate lands about 3 m in front of V, facing V. The message line says how long it took, for example **Dropped cargo_crate_a.mesh in 412 ms.**, and the **Scene** tab opens with the crate selected. The game draws its outline around it.

What you see is a **preview**: a stand-in EDGEbuilder places in the running game while you build. You'll make the crates permanent in step 10.

{% include shot.html src="/assets/shots/edgebuilder/first-dropped.webp" caption="The crate dropped" shows="A cargo crate standing on the ground in front of V, outlined by the game, and the Scene tab with cargo_crate_a in the list and the Selected panel showing its position." %}

## 4. Switch Edit on and fly

1. Turn on the **Edit** switch at the right end of the panel's title bar.

The view changes to EDGEbuilder's own camera, the game's HUD goes away, and V stays where V stood. The screen goes very slightly darker: the mouse now works in the world, not in the game.

2. Hold the **right mouse button** and move the mouse to look around.
3. Still holding it, press **W**, **A**, **S**, **D** to fly, and **E** to rise. Hold **Shift** to go faster.
4. Fly up a few metres and look down at the crate.

A help line at the bottom of the screen always says what you can do next.

{% include shot.html src="/assets/shots/edgebuilder/first-edit-on.webp" caption="Looking down on the crate" shows="Edit on: the editor camera a few metres above the crate, no HUD, V standing beside it, the help line at the bottom centre." %}

## 5. Move the crate

The selected crate has a **gizmo**: red, green and blue arrows, and a yellow ring.

1. Click the crate if it isn't selected.
2. Drag the **red arrow**. The crate slides along it. Let go to keep it there.
3. Drag the **yellow ring** to turn the crate. Hold **Ctrl** while you drag and it turns in 15° steps.
4. Now with keys: press **G** (the crate follows the mouse), then **Z** (only up and down), type `2`, and press **Enter**. The crate rises exactly 2 m.
5. Press **Ctrl+E**. The crate drops back onto the ground.

If you get it wrong, **Esc** or a right-click puts the crate back while you're still moving it. After that, **Ctrl+Z** undoes it.

{% include shot.html src="/assets/shots/edgebuilder/first-gizmo.webp" caption="Moving with the gizmo" shows="The selected crate with its red, green and blue arrows, the yellow ring and the thin cyan box, the mouse dragging the red arrow, and the help line naming the move." %}

## 6. Make a small stack

1. With the crate selected, press **Ctrl+D**. A copy follows the mouse.
2. Move it beside the first crate and click to put it down.
3. Press **Ctrl+D** again and put a third crate beside the others.
4. For a fourth on top: press **Ctrl+D**, click to put it on the ground near the others, then press **G**, **Z**, type the crate's height and press **Enter**. The **Picked** panel on the Assets tab gave the height as the last of the three sizes, about `1` m. Then drag its red and green arrows until it sits on the crates below.

{% include shot.html src="/assets/shots/edgebuilder/first-stack.webp" caption="A small stack" shows="Three cargo crates side by side on the ground and a fourth on top of them, the top one selected with its gizmo." %}

## 7. Group the stack and name it

A **group** keeps objects together, so one click picks them all.

1. Hold **Shift** and drag a box around the four crates. All four are selected; the Scene tab says **4 selected**.
2. Press **Ctrl+G**. The message says **Grouped 4 objects as Group 1**.
3. In the **Selected** panel, the **Group name** field holds **Group 1**. Type `Crate stack` and press **Enter**.
4. Click any one crate: the whole stack is selected. **Alt+click** picks one crate on its own.

In the Scene tab's list, **Crate stack** shows as a folder with its four crates under it. The arrow beside it folds them away.

{% include shot.html src="/assets/shots/edgebuilder/first-group.webp" caption="The group in the Scene tab" shows="The Scene tab's list with Crate stack as a group, group of 4 at its right, its four crates under it, and Group name in the Selected panel reading Crate stack." %}

## 8. Copy the stack somewhere else

1. Click the stack to select it, and press **Ctrl+C**. The message says **Copied 4 objects. Ctrl+V pastes them where the cursor points.**
2. Fly a little way off, a wall's length away.
3. Point the cursor at the ground there and press **Ctrl+V**. A second stack lands on the ground under the cursor, already selected, as a new group of the same name.

{% include shot.html src="/assets/shots/edgebuilder/first-two-stacks.webp" caption="Two stacks" shows="The camera looking at two identical stacks of four crates a few metres apart, the newer one selected." %}

## 9. Undo a mistake

1. With the new stack selected, press **Delete**. It's gone.
2. Press **Ctrl+Z**. It's back, where it was.
3. Press **Ctrl+Y**, and it's deleted again. Press **Ctrl+Z** once more to keep it.

Undo covers the last 100 changes this session. The **Undo** and **Redo** buttons on the Scene tab do the same.

Your scene has been saved after every step. **Ctrl+S** confirms it, and the Scene tab says where: **In Library. Saved after every change.**

## 10. Bake it into the world

So far the crates are previews: only you see them, while EDGEbuilder runs, and V walks through them. **Baking** writes them into your REDcode project as part of the game world, so they stand for anyone who installs it.

1. Make sure your REDcode project is open in VS Code.
2. Open the **Bake** tab. At the top it names the scene, **Construction Crates: 8 objects**, and the project it bakes into.
3. Read the checks under it. One says **8 meshes will stop V, bullets and cars. Entities keep their own collision.** New meshes start **Solid when baked**, so your crates will be solid. A red check stops the bake and says what to fix.
4. Press **Bake**. The message says **Baked Construction Crates: 8 objects into** your project, and **The last bake** lists the files it wrote.

{% include shot.html src="/assets/shots/edgebuilder/first-bake-tab.webp" caption="The Bake tab" shows="The Bake tab for Construction Crates, 8 objects, into the REDcode project, with the checks (8 meshes will stop V, bullets and cars), the Bake button, and the project's bakes listing Construction Crates." %}

## 11. See it in the game

A bake comes into the game only as the game starts.

1. Switch **Edit** off, and quit the game.
2. In REDcode, press **Pack and Install** (the rocket button in the Project view). It packs the project and installs it with [EDGEdeck](../edgedeck/).
3. Start the game and load the same save.
4. Walk V up to the crates and try to walk through them. They stop V. So do bullets and cars.

EDGEbuilder places no previews for a scene whose bake is in the game, so nothing stands twice. The Bake tab says **Its bake is in the game**. Your crates now stand with EDGEbuilder closed, or uninstalled.

{% include shot.html src="/assets/shots/edgebuilder/first-baked.webp" caption="Baked crates in the world" shows="V standing against the baked stack of crates in first person, with the game's HUD back and EDGEbuilder's panel closed." %}

## 12. Change it and bake again

1. Open EDGEbuilder, open the **Scene** tab and press **Rebuild previews**. The previews come back, so you can edit the scene. Each crate is now there twice, the baked one and its preview, so it may flicker.
2. Switch **Edit** on, select one stack and move it a few metres.
3. Open the **Bake** tab. It says **The scene changed since: bake again to bring it in.**
4. Press **Bake**, quit the game, **Pack and Install**, and start again.

The stack stands in its new place, with nothing left at the old one.

{% include shot.html src="/assets/shots/edgebuilder/first-changed.webp" caption="The scene changed since its bake" shows="The Bake tab's state line: Baked with the date and 8 objects, then The scene changed since: bake again to bring it in." %}

## Where next

| To learn | Read |
|---|---|
| Every way to search, and your mods' assets | [Browsing and dropping](browsing.html) |
| Exact moves, turns and scales | [Positioning objects](positioning.html) |
| Orbit, pan and frame with the camera | [The camera and builder mode](camera.html) |
| Selecting, groups, copy and paste in depth | [Arranging a scene](arranging.html) |
| Keeping scenes, the Library, Solid, Seen from, taking a bake out | [Scenes and baking](scenes.html) |
| Bakes kept in the Library, for any project | [Bakes in the Library](scenes.html#bakes-in-the-library) |
| When something goes wrong | [Troubleshooting](troubleshooting.html) |
