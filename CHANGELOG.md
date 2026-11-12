# Changelog

What changed on https://edgemodders.ai and its wiki, for players and modders. The site has no releases yet: every push to `main` goes live, so changes collect under **Unreleased**. If the site ever gets versioned releases, each takes its notes from its section here.

How to keep it:

- With each change a reader would notice, add a line under **Unreleased**, in its group: **New**, **Changed**, **Fixed** or **Other**. One change per line, in the commit that makes the change. Leave out typo fixes and changes only the build sees.
- For a release, rename **Unreleased** to `## <version> (<date>)` and start a new empty **Unreleased** above it.
- Links are full URLs, since the same text may go to GitHub, Discord and Nexus.

## Unreleased

**New**

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
