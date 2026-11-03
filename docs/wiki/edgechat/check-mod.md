---
title: When a mod doesn't work, with EDGEchat
nav_title: When a mod doesn't work
section: EDGEchat
order: 5
description: "/edge:check-mod looks at a mod's files, the logs, the running game and EDGEdeck at once, changes nothing, and lists what is wrong with a fix for each."
reviewed: 2026-11-03
---

# When a mod <span class="y">doesn't work</span>

A mod that doesn't show, crashes the game or does the wrong thing usually has a plain reason: a file in the wrong place, a capital letter in a path, an old build, a framework out of date. `/edge:check-mod` looks everywhere at once, and changes nothing. Allow 5 minutes.

## Step 1: Run it

Type `/edge:check-mod`. If Claude can't tell which mod you mean, it asks: a WolvenKit project, a REDnode package, a mod in EDGEdeck by name, or files you name. It also asks what you expected and what happened instead. Say it plainly:

> My red_badge_coat mod: the coat should be red but it's the normal color.

To try it out, use the coat from [Recolor a jacket](recolor.html).

## Step 2: What it looks at

Everything it does only reads. Nothing in your mod, the game or EDGEdeck changes.

| Where | Looks for |
|---|---|
| The mod's files | Capital letters or spaces in game paths (the game never finds such a file), files that don't open, a `packed` folder older than the changes in `source`, ArchiveXL `.xl` files left out of `packed`, tweaks outside `r6\tweaks` |
| A TweakXL tweak | Valid YAML, and that every record and value it names exists in the game's data |
| A REDnode package | A valid `rednode-app.json`, its id matching the folder, its files there, the permissions it uses listed |
| The logs | The logs of RED4ext, ArchiveXL, TweakXL, Codeware, redscript, REDnode and Cyber Engine Tweaks in the game folder: your mod's name, errors, warnings |
| The running game | For a REDnode package: whether it runs or crashed, and its last error |
| EDGEdeck | Whether the mod is on and deployed, conflicts with other mods, files changed outside EDGEdeck, frameworks out of date after a game patch |

## Step 3: Read the report

It ends with one table, the most serious problem first, and says which one to fix first:

| Problem | Where | Why it matters | Fix |
|---|---|---|---|
| The project was changed after the last pack | `packed\...\red_badge_coat.archive` is older than `source\...` | The game has the old build | Pack again, install and deploy |

{% include shot.html caption="The check-mod report" shows="Claude Code at the end of /edge:check-mod: a table of problems with where, why and the fix for each, and a line on what was checked and found fine." %}

Then a line on what it checked and found fine, so you know what was covered. A guess is marked as a guess.

Claude offers to make the fixes. Each one that changes the game folder, such as a deploy or an undo, asks you first, as always.

## The usual causes

| Symptom | Often |
|---|---|
| Every mod broke at once, after a game update | Frameworks out of date. EDGEdeck's list says "game updated to ..." and which need updating: see [Frameworks and game patches](../edgedeck/frameworks.html) |
| A clothing or texture mod shows the old look | Not deployed; a REDmod started without `-modded`; the build older than the change; a capital letter in a path |
| A tweak has no effect | The `.yaml` file outside `r6\tweaks`, or a typo in a record name |
| A REDnode package doesn't show | It crashed: its error is in REDnode's log. Or **Hot reload** is off, so REDnode hasn't loaded the latest files |
| Two mods fight | Both replace the same file, and the one higher in EDGEdeck's list wins: see [Conflicts](../edgedeck/conflicts.html) |

## Check

- You got a table of problems with a fix for each, or a clear "nothing wrong found" with what was checked.
- Nothing changed until you chose a fix.

Next: [Keep a project easy to work on](projects.html). EDGEchat's [lesson 5](https://edgemodders.github.io/EDGEchat/guide-check.html) covers the same steps.
