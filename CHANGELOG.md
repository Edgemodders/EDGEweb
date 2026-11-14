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
- Wiki: "Your first mod with REDcode", a walkthrough that renames an item, from a new project to the game: https://edgemodders.ai/wiki/redcode/first-mod.html
- Wiki: "Finding what you want to change" in REDcode, from an item you know to its text, record and files: https://edgemodders.ai/wiki/redcode/finding.html
- Wiki: "Try it" sections on REDcode's editing, TweakDB, export and LocKeys pages, with the tweak file that New Tweak writes: https://edgemodders.ai/wiki/redcode/tweakdb.html#try-it-change-a-price
- Wiki: EDGEbuilder's baking has a page of its own, with what you need, every Bake tab check, sharing a baked scene and bakes in the Library: https://edgemodders.ai/wiki/edgebuilder/baking.html
- Wiki: REDbridge's install page says which copy each tool uses and how to remove one: https://edgemodders.ai/wiki/redbridge/install.html#do-i-need-several-copies
- Wiki: a by-hand recolor tutorial for EDGEmat, from a jacket's name to the blue jacket on V, with no key: https://edgemodders.ai/wiki/edgemat/tutorial-recolor.html
- Wiki: the two ways to get a recolor into a project, compared, with which body types each one changes: https://edgemodders.ai/wiki/edgemat/find.html#two-ways-into-a-project
- Wiki: EDGEhack has a five-minute first walk-through, Change a game quickhack: https://edgemodders.ai/wiki/edgehack/edit-quickhack.html
- Wiki: EDGEhack has a Settings and commands page, with every setting, command, button and where things are kept: https://edgemodders.ai/wiki/edgehack/settings.html
- Wiki: "Your first quest", a walkthrough for EDGEquest from an empty project to your quest in the game: https://edgemodders.ai/wiki/edgequest/first-quest.html
- Wiki: in EDGEquest's section, Try it sections for reading a game quest, the checker, a music cue and an assistant; how to copy a place from a game quest; and how to share or remove a quest: https://edgemodders.ai/wiki/edgequest/reading.html#copying-a-place-from-a-game-quest
- Wiki: EDGEwave has a tutorial, "Your first sound mod", from finding the katana's draw sound to hearing your version in the game: https://edgemodders.ai/wiki/edgewave/tutorial.html
- Wiki: new EDGEwave pages for finding and playing sounds, editing and mixing, Add to Project, the voice tools, voices for quests and REDnode mods, assistants, settings and commands, and troubleshooting: https://edgemodders.ai/wiki/edgewave/
- Your first hour: one route from nothing installed to a first mod, at your desk or inside the game, with the time and cost of each step: https://edgemodders.ai/wiki/first-hour.html
- A Get started button on the landing page, and a line that says what EDGE costs and needs: https://edgemodders.ai/
- EDGEchat has a card on the landing page and a section on the platform page: https://edgemodders.ai/platform.html#edgechat
- FAQ: what EDGE costs, what the AI can change, saves, bans, uninstalling, Vortex and Nexus mods, game versions and stores: https://edgemodders.ai/wiki/faq.html
- Glossary: about 125 terms in ten groups, each with its own link, such as https://edgemodders.ai/wiki/glossary.html#framework
- Wiki: a Troubleshooting page for REDagent: https://edgemodders.ai/wiki/redagent/troubleshooting.html

**Fixed**

- The old address https://edgemodders.ai/wiki/edgewave/try-it.html leads to Install and set up EDGEwave again.
- Landing and platform pages: seven toolkits offer an MCP server, not four; the toolkits build on each other, where the pages said each works alone; EDGEhack is not on the VS Code Marketplace; swapping sound archives into the running game is untested on game 2.5: https://edgemodders.ai/platform.html
- Get involved and the README list every toolkit, with REDsave: https://edgemodders.ai/community.html
- Wiki: EDGEwave's pages described 0.1.0 with its tests pending; they now give 0.2.0, the button's current name (Add to Project), all five settings, and what the voice tools cost, what is sent to ElevenLabs and where the key is kept: https://edgemodders.ai/wiki/edgewave/voices.html
- Wiki: EDGEquest's assistant server is on npm, where the pages said it was waiting; EDGEwave 0.2.0 is released, so the sound picker, your own sounds and voice takes are described as available; the template quest is described as New Quest really makes it; and installing names RED4ext beside ArchiveXL: https://edgemodders.ai/wiki/edgequest/writing.html
- Wiki: EDGEhack's pages no longer say REDcode installs with it from the Marketplace, that its assistant server is not on npm yet, or that REDagent can make quickhacks today. The editor page says All tiers copies the selected tier's change and that Edit is on the game quickhack's page: https://edgemodders.ai/wiki/edgehack/editor.html
- Wiki: EDGEmat's "Your mod in the game" no longer describes the hot folder or Red Hot Tools; deleting EDGEmat's local data folder deletes the Desk, and both pages now say so; a Desk line changes one body type's mesh, and the Desk page says how to cover both: https://edgemodders.ai/wiki/edgemat/in-the-game.html
- Wiki: EDGEbuilder's pages gave three different newest versions, left the NPCs tab out of Search, and had a "Try it" in Arranging a scene that failed as written: https://edgemodders.ai/wiki/edgebuilder/arranging.html
- Wiki: REDbridge's pages gave 0.12.0 as the latest release and wrong minimum versions for REDcode and EDGEbuilder: https://edgemodders.ai/wiki/redbridge/install.html#which-version-do-i-need
- Wiki: REDcode's pages no longer describe Red Hot Tools and the Hot Folder, which REDcode dropped in 0.10.8: Pack and Play swaps through REDnode. Its example project name is now `my_jacket`, with the capital-letters warning explained, and it needs REDbridge 0.12.0: https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game
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
- Getting started tells the three ways in apart (the EDGEkit app, REDagent, EDGEchat) and says how each tool installs today: https://edgemodders.ai/wiki/getting-started.html
- The landing and platform pages are in plainer words, with every status line brought up to the current releases: https://edgemodders.ai/ and https://edgemodders.ai/platform.html
- The wiki home states each tool's release once, in its tool tables: https://edgemodders.ai/wiki/
- Connect Claude Code leads with EDGEchat and shows which of the seven tools it connects and which you add by hand: https://edgemodders.ai/wiki/connect-claude-code.html
- The EDGE Library page says which tools use it today (EDGEbuilder, EDGEhack, REDcode) and which are planned: https://edgemodders.ai/wiki/library.html
- Wiki: EDGEwave's section is rebuilt for newcomers and checked against EDGEwave 0.2.0, with a "Words you'll meet" table and a status that says what was heard in the game. "Install and use EDGEwave" is now "Install and set up", at https://edgemodders.ai/wiki/edgewave/install.html
- Wiki: EDGEquest's section is rewritten for newcomers and checked against EDGEquest 0.1.1 and EDGEwave 0.2.0: what a quest can hold today and a "Words you'll meet" table on the overview, the Storyboard's buttons, where files are kept, and troubleshooting grouped by where you are stuck: https://edgemodders.ai/wiki/edgequest/
- Wiki: EDGEhack's section is rewritten for newcomers and checked against 0.1.2: a "Words you'll meet" table, one table of what each feature needs, install by editor with updating and uninstalling, "Your first quickhack" installs the mod before trying it live, and troubleshooting grouped by where you are stuck: https://edgemodders.ai/wiki/edgehack/
- Wiki: EDGEmat's section is rewritten for newcomers and checked against 0.3.2: "Words you'll meet" on the overview, jump tables, "what you should see", Try it sections, a sidebar that follows the work, an Assistants page that says what each newer tool needs and how far it was tested, and troubleshooting grouped by where you are stuck: https://edgemodders.ai/wiki/edgemat/
- Wiki: EDGEbuilder's section is rewritten for newcomers and checked against 0.10.9: install as one numbered run with REDbridge, ArchiveXL and both permissions, people (NPCs) and the panel pins throughout, "Scenes and baking" split into Scenes and the Library and Baking (old links still land), troubleshooting grouped by where you are stuck, and version history removed: https://edgemodders.ai/wiki/edgebuilder/
- Wiki: REDbridge's section is rewritten for users and checked against 0.12.1; its call reference now links to REDbridge's own docs: https://edgemodders.ai/wiki/redbridge/
- Landing page, platform page and wiki home: EDGEbuilder 0.10.9 and REDbridge 0.12.1
- Wiki: REDcode's section is rewritten for newcomers and checked against REDcode 0.10.9: a which-button table on Pack, install and run, an assistants page that starts with which assistant fits, Add to Library, the Animations view, Open In... and exporting every LOD, and troubleshooting grouped by where you're stuck: https://edgemodders.ai/wiki/redcode/
- Landing page and platform page: REDcode 0.10.9
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
