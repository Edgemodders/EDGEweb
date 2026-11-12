---
title: The EDGEhack Desk and the Library
nav_title: The Desk and the Library
section: EDGEhack
order: 6
description: "EDGEhack's Desk for quickhacks in progress outside a project, and the EDGE Library for quickhacks you keep: Add to Library, the Library view, Add to Project and Refresh from Library."
reviewed: 2026-11-11
---

# The Desk and the <span class="y">Library</span>

| | Desk | Library |
|---|---|---|
| What it's for | Quickhacks you're working on, with no project needed | Quickhacks you keep for good, to use in any mod |
| Where | EDGEhack's own folder (`%LOCALAPPDATA%\EDGEhack\desk`) | The [EDGE Library](../library.html), one folder of your own every EDGE tool shares (`Documents\EDGE Library` by default) |
| Organised | Newest first | In folders you make |
| Mod files | None, until Add to Project | None, until Add to Project |

## The Desk

**Clone and Modify on the Desk** (the **+** in the Desk view's title bar) starts a quickhack from any of the game's. With no project open in REDcode, **Clone and Modify** and **Edit** land on the Desk too. A Desk quickhack is edited like any other, and its page offers **Add to Project** instead of Pack and Play.

Hover a Desk quickhack for its buttons: **Add to Project**, **Add to Library** and a trash can. The right-click menu also has **Duplicate...**, for a copy under another name. **Add to Project** puts it in the open project under the project's names and writes its mod files; the Desk keeps its own. Adding it again replaces the project's copy, after asking.

Below the Desk's quickhacks, the **Project** group lists the open project's.

{% include shot.html src="/assets/shots/edgehack/desk-view.webp" caption="The Desk view" shows="The Desk view with three quickhacks, one hovered with its Add to Project, Add to Library and trash icons, and the Project group below with the project's quickhacks." %}

## Add to Library

On a Desk quickhack, or right-click a Project one:

1. **Add to Library**. The first time, EDGEhack asks where the EDGE Library goes, unless another EDGE tool already set it up.
2. A list asks **which folder**: the Library's top folder, your folders, or **New Folder...** to make one, such as `Quickhacks/Electric`. The folder you used last comes first.

It's copied into that folder as `<name>.quickhack.asset`, with its own icons. A project's quickhack is copied without the mod's name in it, so it fits any mod. Adding the same quickhack again finds its Library copy wherever it is, and asks before replacing it.

{% include shot.html src="/assets/shots/edgehack/library-folder.webp" caption="Picking a Library folder" shows="The list at the top of VS Code titled Add to Library: Desk Spark: which folder?, with The Library's top folder, a Quickhacks/Electric folder marked Last used, and New Folder... at the bottom." %}

## The Library view

The Library's folders that hold quickhacks, and each quickhack with its version:

| On a quickhack | What it does |
|---|---|
| Click | Opens it. A save raises its version. Its page offers Add to Project |
| **Add to Project** | Copies it into the open project under the project's names, writes its mod files, and notes where it came from in the project's `source\library.json` |
| **Copy to the Desk** | A copy to work on, which **Add to Library** later puts back over this one |
| **Reveal in File Explorer** | Its folder |
| **Remove from Library** | To the Recycle Bin, after asking. Projects that took it keep their copy |

{% include shot.html src="/assets/shots/edgehack/library-view.webp" caption="The Library view" shows="The Library view with a Quickhacks folder and an Electric folder inside, two quickhacks with their icons and versions, one hovered with its Add to Project and trash icons." %}

## Refresh from Library

When you change a Library quickhack after a project took it, the project's copy is marked **newer in the Library (v3)** in the Desk view's Project group. **Refresh from Library** on it takes the new version, after asking: changes made to it in the project since are lost. Its mod files are written again.

{% include shot.html src="/assets/shots/edgehack/library-newer.webp" caption="A newer version in the Library" shows="The Desk view's Project group with a quickhack marked newer in the Library (v3), and its Refresh from Library icon." %}

## Try it

1. Add a Desk quickhack to the Library, in a new folder.
2. Add it to your project from the Library view.
3. Open the Library's copy, change a number and save.
4. In the Project group, **Refresh from Library** on it.
