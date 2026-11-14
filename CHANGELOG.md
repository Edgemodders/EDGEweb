# Changelog

What changed on https://edgemodders.ai and its wiki, for players and modders. Every push to `main` goes live, and changes collect under **Unreleased** until the next release. A release is a tag (`v<version>`) and a GitHub release that takes its notes from its section here.

How to keep it:

- With each change a reader would notice, add a line under **Unreleased**, in its group: **New**, **Changed**, **Fixed** or **Other**. One change per line, in the commit that makes the change. Leave out typo fixes and changes only the build sees.
- For a release, rename **Unreleased** to `## <version> (<date>)`, start a new empty **Unreleased** above it, then tag `v<version>` and make the GitHub release from that section.
- Links are full URLs, since the same text may go to GitHub, Discord and Nexus.

## Unreleased

**New**

- Wiki: REDagent has its own install page, from getting an Anthropic API key to the first start, updating and removing: https://edgemodders.ai/wiki/redagent/install.html
- Wiki: REDagent's costs, key and data on a page of their own, with the costs measured in its tests and how to keep them down: https://edgemodders.ai/wiki/redagent/costs.html
- Wiki: EDGEkit has pages for installing the app, a first session (where each tool lives, first steps, Claude Code with EDGEchat) and troubleshooting: https://edgemodders.ai/wiki/edgekit/install.html
- Wiki: EDGEchat's overview says what it doesn't do yet (quests, quickhacks) and where to go instead; a sample `CLAUDE.md` on its projects page; an Uninstalling section on its settings page: https://edgemodders.ai/wiki/edgechat/
- Wiki: pages for REDnode's Admin Tools pack (Task Manager, Tools Manager) and Sound Tools pack (Sound Tracer, Sound Search, Hot swap): https://edgemodders.ai/wiki/rednode/admin-tools.html and https://edgemodders.ai/wiki/rednode/sound-tools.html
- Wiki: three REDnode pages for mod makers, with a runnable example for each part: TweakDB from code, https://edgemodders.ai/wiki/rednode/tweakdb.html; the world (objects, scenes and pins), https://edgemodders.ai/wiki/rednode/world.html; and more of the game (quests, text, quickhack functions, sound, files, the game's UI), https://edgemodders.ai/wiki/rednode/more-apis.html
- Wiki: "Try it" walkthroughs across REDnode's section: a first widget, a first Console command with how to find an item's id, a first archive swap, first prompts for Claude Code, a second space, reading the Mod log; and a "Start here" route for new makers: https://edgemodders.ai/wiki/rednode/making-mods.html
- Wiki: "Your first mod with EDGEdeck", a walkthrough from an empty list to one Nexus mod working in the game: https://edgemodders.ai/wiki/edgedeck/first-mod.html
- Wiki: EDGEdeck's loadouts have their own page, with a Try it: https://edgemodders.ai/wiki/edgedeck/loadouts.html
- Wiki: a Troubleshooting page for REDagent: https://edgemodders.ai/wiki/redagent/troubleshooting.html

**Fixed**

- Wiki: EDGEdeck's rule for which mod wins a conflict is stated once, with an example: https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins
- Wiki: updating frameworks after a game patch needs no Nexus account, only the automatic check does; an empty EDGEdeck shows "No mods yet" with buttons; a new mod arrives switched on; and what an assistant can and can't do in EDGEdeck: https://edgemodders.ai/wiki/edgedeck/frameworks.html#after-a-game-update
- Wiki: REDnode's pages gave three different current versions, and now give one. RED Hot Tools is no longer listed as something to install on game 2.5. Pressing F10 in interactive mode hides everything, and the overlay page says so: https://edgemodders.ai/wiki/rednode/overlay.html#f10-and-the-three-modes
- Wiki: in REDnode's maker pages, `game.state()` is shown with `await`, the secrets example runs, the release's twelve samples are listed apart from the repo-only ones, and UI Tools, world pins and quickhack functions each give one minimum version: https://edgemodders.ai/wiki/rednode/game-api.html
- Wiki: EDGEchat's safety page states exactly what asks every time (the EDGE tools' changes to the game, the save and the game folder) and what follows Claude Code's own permission setting, including a REDnode package built in the apps folder: https://edgemodders.ai/wiki/edgechat/safety.html
- Wiki: EDGEchat's EDGEkit install route no longer has you rely on `/edge:setup` before the settings and restart; "Recolor a jacket" lists REDnode 0.49.5 for its Console step; sharing a REDnode package from "Your first mod" gives the right zip layout: https://edgemodders.ai/wiki/edgechat/install.html
- Wiki: EDGEhack's pages are in the sidebar, where they were missing, and in Getting started's "I want to..." table: https://edgemodders.ai/wiki/edgehack/
- Wiki: two links from EDGEmat's Troubleshooting to "Your mod in the game" go to their headings again.

**Changed**

- Wiki: REDagent's section is rewritten for newcomers: what it can and can't make, a first-mod walkthrough that covers typing in the game, approving files, testing, and keeping or removing the mod, and every control in one table: https://edgemodders.ai/wiki/redagent/
- Wiki: EDGEdeck's section is rewritten for newcomers and checked against EDGEdeck 0.31.0, in the order a new user needs it: frameworks before the full tour of the Mods view, Nexus sign-in with an API key step by step, downloads one at a time with Cancel, and troubleshooting as "You see / Do this" tables: https://edgemodders.ai/wiki/edgedeck/
- Landing page and platform page: EDGEdeck 0.31.0
- Wiki: REDnode's section is rewritten for newcomers and checked against REDnode 0.62.4. The overview has routes, a short status and a page map for players and for mod makers; the game API page is a short guide; first examples say what you should see; Agents and MCP leads with EDGEchat; Troubleshooting is grouped by where you are stuck: https://edgemodders.ai/wiki/rednode/
- Landing page, platform page, wiki home and FAQ: REDnode 0.62.4
- Wiki: EDGEchat's section is revised for newcomers: jump lists, "what you should see" tables, terms explained where they first appear, how to get Node.js and Claude Code, settings for terminal and EDGEkit users, and troubleshooting split by topic: https://edgemodders.ai/wiki/edgechat/
- Wiki: EDGEkit 1.140.6 and extension pack 0.6.0, with EDGEquest, EDGEhack and REDsave built in, and what is and isn't inside the app: https://edgemodders.ai/wiki/edgekit/
- EDGEmat's wiki follows its 0.3.2 release: a new page for **the Desk**, https://edgemodders.ai/wiki/edgemat/desk.html; the Library page is now **Game Materials**, https://edgemodders.ai/wiki/edgemat/game-materials.html, with its filter; Find's Add to Desk and Copy REDnode Command; which item to give V on "Your mod in the game", every 0.3.2 command on "Settings and commands", and four more assistant tools. EDGEmat's status says 0.3.2 on the landing and platform pages and the wiki home.

## 0.1.0 (2026-11-12)

The site's first release: everything since the changelog began on 3 November 2026.

**New**

- Wiki: EDGEhack's last three screenshots: its editor, Claude Code changing a quickhack, and a made quickhack in the game: https://edgemodders.ai/wiki/edgehack/
- EDGEbuilder 0.10.9: people (NPCs) in the wiki: how to place them, https://edgemodders.ai/wiki/edgebuilder/browsing.html#people-npcs, scenes other mods load with their people, and three new troubleshooting entries (a person and the gizmo, REDcode's package, a project the Bake tab doesn't see).
- EDGEhack 0.1.1, its first release, on Nexus Mods and Open VSX, and the wiki's install steps for it: https://edgemodders.ai/wiki/edgehack/install.html
- Wiki: EDGEhack, the quickhack editor, with eight pages: install, a first quickhack, the editor, scripts, Try Live, the Desk and the Library, assistants and troubleshooting, ahead of its first release; and EDGEhack on the home and platform pages: https://edgemodders.ai/wiki/edgehack/
- A screenshot a page names now shows as a placeholder until its file is there, so pages can name their screenshots before they are taken.
- Wiki: EDGEhack's quickhacks in The EDGE Library, with Add to Library and Add to Project: https://edgemodders.ai/wiki/library.html
- EDGEbuilder 0.9.2, which hides its window while a game menu is open, and a troubleshooting entry for it: https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#edgebuilder-disappears-when-i-open-a-menu
- EDGEbuilder's first public preview, 0.9.1, on Nexus Mods, and the wiki's install page with its Nexus and Vortex install: https://www.nexusmods.com/cyberpunk2077/mods/36627
- Wiki: screenshots on every EDGEbuilder page, 32 of them, from the panel and the game: https://edgemodders.ai/wiki/edgebuilder/
- Wiki: Bakes in the Library in EDGEbuilder 0.9.0: one or more scenes baked into the EDGE Library, Include in project, Update and the tags: https://edgemodders.ai/wiki/edgebuilder/scenes.html#bakes-in-the-library
- Wiki: Troubleshooting EDGEbuilder's bakes: not in the game, not solid, popping in, standing twice, the wrong project: https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#baking
- Wiki: Try it exercises on EDGEbuilder's pages (dropping from your mods, positioning, the camera, arranging, the Library, Solid and Seen from), and how to use the Library tab, the Scene tab's buttons and the Objects drawer: https://edgemodders.ai/wiki/edgebuilder/scenes.html#named-scenes-and-the-library
- Wiki: Your first scene, a walk through EDGEbuilder from an empty scene to crates baked into the world: https://edgemodders.ai/wiki/edgebuilder/first-scene.html
- Wiki: EDGEbuilder's Solid switch and Seen from, and the frame rate with 200 solid crates: https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-solid-switch
- Wiki: Bake in EDGEbuilder, with the Bake tab, what stands and what is solid, and changing or taking out a bake: https://edgemodders.ai/wiki/edgebuilder/scenes.html#bake
- Wiki: REDbridge's Reading and building the world, with its 0.12.0 calls and solid objects: https://edgemodders.ai/wiki/redbridge/index.html#reading-and-building-the-world
- Wiki: REDnode's title-bar buttons and window views for Node mods: https://edgemodders.ai/wiki/rednode/node-mods.html#title-bar-buttons-and-views
- Wiki: REDnode's objects far from V, and its scene and near-V calls, which had been missing since 0.40.1: https://edgemodders.ai/wiki/rednode/game-api.html#objects-far-from-v
- Wiki: The EDGE Library, the folder of your own the EDGE tools share for scenes, bakes and assets, and the rules every tool follows there: https://edgemodders.ai/wiki/library.html
- EDGEquest, the quest maker, on the landing page, the platform page and in the wiki, with a ten-page section from reading the game's quests to writing, music and checking your own (https://github.com/Edgemodders/EDGEweb/issues/5): https://edgemodders.ai/wiki/edgequest/
- Wiki: an EDGEchat section, from installing the EDGE plugin for Claude Code to a first mod, a recolor and live swaps (https://github.com/Edgemodders/EDGEweb/issues/4): https://edgemodders.ai/wiki/edgechat/
- Wiki: Arranging a scene in EDGEbuilder: select several objects, groups, copy and paste, undo: https://edgemodders.ai/wiki/edgebuilder/arranging.html

**Changed**

- Landing page, platform page and wiki: EDGEbuilder 0.8.1, with Ctrl+A, and REDbridge 0.12.1's hide distance
- Landing page and platform page: EDGEbuilder's status lines, 0.7.3
- Wiki: EDGEbuilder 0.6.7, with named scenes, the Library tab, Close, the Objects drawer and objects in the world wherever V is; it needs REDnode 0.58.0: https://edgemodders.ai/wiki/edgebuilder/scenes.html
- Landing page and platform page: EDGEbuilder's status lines, 0.6.7
- Wiki: REDcode 0.10.5 and redcode-mcp 0.4.0, with Pack and Play (the new name of Pack and Try, https://github.com/Edgemodders/EDGEweb/issues/3), Find Items, Open in EDGEmat and EDGEbuilder scenes: https://edgemodders.ai/wiki/redcode/
- Wiki: Connect Claude Code describes EDGEchat 0.1.1, with three ways to install and sign-in with no token: https://edgemodders.ai/wiki/connect-claude-code.html
- Wiki: EDGEdeck 0.30.0, with Get the frameworks, Update all, Move library, deploying one mod and several files from one Nexus page: https://edgemodders.ai/wiki/edgedeck/
- Wiki: EDGEkit app 1.140.3 and extension pack 0.3.0, which now installs EDGEmat and EDGEwave too, and the one-click setup of Claude Code for EDGE: https://edgemodders.ai/wiki/edgekit/
- Wiki: EDGEbuilder 0.5.8 on game 2.5, with your mods' and your REDcode project's assets, and REDbridge 0.11.0, built for game 2.5: https://edgemodders.ai/wiki/edgebuilder/ and https://edgemodders.ai/wiki/redbridge/
- Landing page, platform page, wiki home, Getting started and FAQ: the status lines of REDcode 0.10.5, EDGEdeck 0.30.0, REDbridge 0.11.0, EDGEbuilder 0.5.8 and EDGEkit 1.140.3 with pack 0.3.0, and EDGEchat 0.1.1 in the wiki's toolkit list: https://edgemodders.ai/
