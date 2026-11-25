// The EDGE dashboard's data. See CLAUDE.md, Dashboard. Plain JSON after the equals sign.
window.EDGE_STATUS = {
 "asOf": "2026-11-17",
 "ownerSummary": {
  "url": "https://claude.ai/artifact/2DWnvpnWxwxYkSgvLWDa2w",
  "refs": [
   "RA1",
   "RN1",
   "RN2",
   "RN3",
   "RC1",
   "RC10",
   "RN6",
   "RN7"
  ]
 },
 "note": "Snapshot for the EDGE dashboard. issues and each tool's lastTag, lastTagDate, lastCommit, commitsSinceTag are written by tools/dashboard/refresh.py; the rest is curated by hand from each tool's CLAUDE.md, docs/testing.md and changelog. sessions are local Claude session names seen in ListAgents on asOf: a hint to match on, since names change when a session restarts. checkedBy names the tool's own session that confirmed the entry, and when; an entry without it is a first pass by a reader.",
 "issues": [
  {
   "repo": "EDGEbuilder",
   "number": 1,
   "title": "Index the user's mod archives, so custom objects can be placed",
   "labels": [
    "request"
   ],
   "created": "2026-10-16",
   "updated": "2026-11-04"
  },
  {
   "repo": "EDGEbuilder",
   "number": 3,
   "title": "Quest places: spots, trigger areas, map markers and NPC spawns with NodeRefs (for EDGEquest Q4)",
   "labels": [
    "request"
   ],
   "created": "2026-10-21",
   "updated": "2026-11-04"
  },
  {
   "repo": "EDGEchat",
   "number": 3,
   "title": "List edgequest-mcp 0.1.0 (EDGEquest, the quest maker) in the plugin",
   "labels": [
    "request"
   ],
   "created": "2026-11-04",
   "updated": "2026-11-04"
  },
  {
   "repo": "EDGEchat",
   "number": 4,
   "title": "List edgehack-mcp (EDGEhack, the quickhack editor) in the plugin, once it is on npm",
   "labels": [
    "request"
   ],
   "created": "2026-11-11",
   "updated": "2026-11-11"
  },
  {
   "repo": "EDGEfab",
   "number": 3,
   "title": "Fit a generated mesh onto a game garment, replacing it (Wardrobe Designer's Reshape)",
   "labels": [
    "request"
   ],
   "created": "2026-10-31",
   "updated": "2026-11-03"
  },
  {
   "repo": "EDGEfab",
   "number": 5,
   "title": "Publish the core as @edgemodders/edgefab-core, for EDGEbuilder's GLB import (B2d)",
   "labels": [
    "request"
   ],
   "created": "2026-11-12",
   "updated": "2026-11-13"
  },
  {
   "repo": "EDGEfab",
   "number": 6,
   "title": "Keep unchanged textures on a second Add to Project, for EDGEbuilder's Watch (B2d-2)",
   "labels": [
    "request"
   ],
   "created": "2026-11-13",
   "updated": "2026-11-13"
  },
  {
   "repo": "EDGEfab",
   "number": 7,
   "title": "Animations: the split with EDGEdir, and a single animation as a Library and project item",
   "labels": [
    "request"
   ],
   "created": "2026-11-16",
   "updated": "2026-11-17"
  },
  {
   "repo": "EDGEkit",
   "number": 1,
   "title": "EDGE extensions: status",
   "labels": [
    "watch"
   ],
   "created": "2026-10-15",
   "updated": "2026-11-16"
  },
  {
   "repo": "EDGEkit",
   "number": 4,
   "title": "Keep a changelog that feeds the release notes and Nexus (convention for every Edgemodders repo)",
   "labels": [
    "request"
   ],
   "created": "2026-10-19",
   "updated": "2026-10-19"
  },
  {
   "repo": "EDGEkit",
   "number": 6,
   "title": "Let Claude Code show the EDGE tools in the editor: a local 'show me' MCP server",
   "labels": [],
   "created": "2026-10-26",
   "updated": "2026-10-26"
  },
  {
   "repo": "EDGEkit",
   "number": 7,
   "title": "Build in EDGEquest 0.1.0 and add it to the extension pack",
   "labels": [
    "request"
   ],
   "created": "2026-11-04",
   "updated": "2026-11-04"
  },
  {
   "repo": "EDGEmat",
   "number": 1,
   "title": "Keep a changelog that feeds the release notes and Nexus (convention for every Edgemodders repo)",
   "labels": [
    "request"
   ],
   "created": "2026-10-19",
   "updated": "2026-10-19"
  },
  {
   "repo": "EDGEmat",
   "number": 2,
   "title": "Open Material in EDGEmat on .mlsetup files in REDcode's Project view",
   "labels": [
    "request"
   ],
   "created": "2026-10-21",
   "updated": "2026-10-21"
  },
  {
   "repo": "EDGEmat",
   "number": 3,
   "title": "REDcode's Pack and Try is now Pack and Play",
   "labels": [
    "request"
   ],
   "created": "2026-10-27",
   "updated": "2026-10-27"
  },
  {
   "repo": "EDGEmat",
   "number": 9,
   "title": "generateImage takes a size (2048² for EDGEfab's four-view pictures), and says its usage",
   "labels": [
    "request"
   ],
   "created": "2026-11-10",
   "updated": "2026-11-10"
  },
  {
   "repo": "EDGEquest",
   "number": 2,
   "title": "Raw nodes: open them at the node with REDcode's openFile (REDcode #12)",
   "labels": [
    "request"
   ],
   "created": "2026-10-26",
   "updated": "2026-10-26"
  },
  {
   "repo": "EDGEquest",
   "number": 3,
   "title": "Quest index: read sector nodeData with REDbridge 0.11.0's field names (game 2.5)",
   "labels": [
    "request"
   ],
   "created": "2026-10-26",
   "updated": "2026-10-26"
  },
  {
   "repo": "EDGEquest",
   "number": 4,
   "title": "REDcode's Pack and Try is now Pack and Play",
   "labels": [
    "request"
   ],
   "created": "2026-10-27",
   "updated": "2026-10-27"
  },
  {
   "repo": "EDGEquest",
   "number": 5,
   "title": "EDGEquest_Q2.archive replaces the game's female jeans mesh",
   "labels": [],
   "created": "2026-10-31",
   "updated": "2026-10-31"
  },
  {
   "repo": "EDGEquest",
   "number": 6,
   "title": "Animation index: EDGEfab owns it, EDGEquest's picker uses it; the scenes' side from EDGEquest (from EDGEfab)",
   "labels": [
    "request"
   ],
   "created": "2026-11-04",
   "updated": "2026-11-16"
  },
  {
   "repo": "EDGEquest",
   "number": 7,
   "title": "Voice lines and sounds: Storyboard play buttons, tags in the line box, an id change, where a sound plays (from EDGEwave)",
   "labels": [
    "request"
   ],
   "created": "2026-11-07",
   "updated": "2026-11-07"
  },
  {
   "repo": "EDGEwave",
   "number": 5,
   "title": "Voice a list of dialogue lines for another tool, and the .wem route (for EDGEquest Q4)",
   "labels": [
    "request"
   ],
   "created": "2026-10-21",
   "updated": "2026-10-24"
  },
  {
   "repo": "EDGEwave",
   "number": 6,
   "title": "Open Sound in EDGEwave shows on every REDcode project file: match projectFile.sound",
   "labels": [
    "request"
   ],
   "created": "2026-10-21",
   "updated": "2026-10-21"
  },
  {
   "repo": "EDGEwave",
   "number": 7,
   "title": "Music and sound for quests: find, hear and make sound events (for EDGEquest Q4)",
   "labels": [
    "request"
   ],
   "created": "2026-10-24",
   "updated": "2026-11-03"
  },
  {
   "repo": "EDGEwave",
   "number": 9,
   "title": "Release workflow: Update Nexus Mods, as the other EDGE tools",
   "labels": [
    "request"
   ],
   "created": "2026-10-26",
   "updated": "2026-10-26"
  },
  {
   "repo": "EDGEwave",
   "number": 10,
   "title": "REDcode's Pack and Try is now Pack and Play",
   "labels": [
    "request"
   ],
   "created": "2026-10-27",
   "updated": "2026-10-27"
  },
  {
   "repo": "EDGEweb",
   "number": 6,
   "title": "A home for the rules EDGE tools follow to work together (packages, extension APIs, MCP, REDbridge), from EDGEfab's proposal",
   "labels": [
    "request"
   ],
   "created": "2026-11-04",
   "updated": "2026-11-04"
  },
  {
   "repo": "REDagent",
   "number": 2,
   "title": "Keep a changelog that feeds the release notes and Nexus (convention for every Edgemodders repo)",
   "labels": [
    "request"
   ],
   "created": "2026-10-19",
   "updated": "2026-10-19"
  },
  {
   "repo": "REDagent",
   "number": 3,
   "title": "Where knowledge lives: REDagent and EDGEchat share only each tool's own docs (owner's decision, 2026-10-23)",
   "labels": [],
   "created": "2026-11-03",
   "updated": "2026-11-03"
  },
  {
   "repo": "REDbridge",
   "number": 11,
   "title": "sector.find and sector.nodes: the game's sectors with their boxes, and a sector's nodes (for EDGEbuilder's world map and inspector)",
   "labels": [
    "request"
   ],
   "created": "2026-10-30",
   "updated": "2026-11-05"
  },
  {
   "repo": "REDbridge",
   "number": 14,
   "title": "Animations and whole characters: .anims import from GLB, anims.info, an entity's appearance on one rig (for EDGEfab F5a and F7b-1)",
   "labels": [
    "request"
   ],
   "created": "2026-11-04",
   "updated": "2026-11-15"
  },
  {
   "repo": "REDbridge",
   "number": 15,
   "title": "sector.build: a solid mesh, and mesh.info: whether a mesh has collision (for EDGEbuilder's B4-2)",
   "labels": [
    "request"
   ],
   "created": "2026-11-05",
   "updated": "2026-11-05"
  },
  {
   "repo": "REDbridge",
   "number": 16,
   "title": "sector.build: write forceAutoHideDistance from a scene object's streaming distance",
   "labels": [
    "request"
   ],
   "created": "2026-11-08",
   "updated": "2026-11-08"
  },
  {
   "repo": "REDcode",
   "number": 21,
   "title": "Play a game animation on its rig in the mesh viewer, with an API entry point (from EDGEquest)",
   "labels": [
    "request"
   ],
   "created": "2026-11-03",
   "updated": "2026-11-16"
  },
  {
   "repo": "REDcode",
   "number": 24,
   "title": "Run game (exe route) passes VS Code's ELECTRON_RUN_AS_NODE to the game, which stops REDnode's overlay",
   "labels": [
    "request"
   ],
   "created": "2026-11-10",
   "updated": "2026-11-10"
  },
  {
   "repo": "REDnode",
   "number": 24,
   "title": "World node registry: which sector and node a world object comes from, outline, hide, stream around a point (for EDGEbuilder's inspector)",
   "labels": [
    "request"
   ],
   "created": "2026-10-30",
   "updated": "2026-10-30"
  },
  {
   "repo": "REDnode",
   "number": 39,
   "title": "Play an animation or a workspot on a spawned character beside V (from EDGEquest)",
   "labels": [
    "request"
   ],
   "created": "2026-11-03",
   "updated": "2026-11-16"
  },
  {
   "repo": "REDnode",
   "number": 46,
   "title": "A written .workspot for an actor's clips, timed jumps, and setting the weather (a spike for EDGEdir's D0)",
   "labels": [
    "request"
   ],
   "created": "2026-11-16",
   "updated": "2026-11-17"
  },
  {
   "repo": "REDnode",
   "number": 47,
   "title": "V as an actor: a workspot on the player, or a stand-in copy (EDGEdir, for D5)",
   "labels": [
    "request"
   ],
   "created": "2026-11-16",
   "updated": "2026-11-16"
  }
 ],
 "tools": [
  {
   "name": "REDagent",
   "code": "RA",
   "ownerSeq": 2,
   "group": "Core toolkits",
   "role": "The in-game modding agent: Claude in the game, writing, running and fixing REDnode mods with the player",
   "stage": "released",
   "version": "0.4.4",
   "lastTag": "v0.4.4",
   "lastTagDate": "2026-11-15",
   "lastCommit": "2026-11-15",
   "commitsSinceTag": 1,
   "sessions": [
    "REDnode, EDGEHack & REDagent"
   ],
   "wiki": "wiki/redagent/",
   "plan": {
    "name": "Phases C1 to C6",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "C1",
      "title": "Kernel MCP server (in REDnode)",
      "status": "done"
     },
     {
      "id": "C2",
      "title": "Chat in the game",
      "status": "done"
     },
     {
      "id": "C3",
      "title": "Authoring with diff cards and Undo",
      "status": "done"
     },
     {
      "id": "C4",
      "title": "Polish: history, game screen",
      "status": "done"
     },
     {
      "id": "C5",
      "title": "Agent API for mods",
      "status": "done"
     },
     {
      "id": "0.3.1",
      "title": "Mods' tools",
      "status": "done"
     },
     {
      "id": "C6",
      "title": "REDagent and the editor, option B (chosen 2026-11-23): a handoff to Claude Code with EDGEchat",
      "status": "in progress"
     },
     {
      "id": "C6a",
      "title": "Continue in VS Code: the chat's VS Code button writes a handoff for EDGEchat's /edge:continue (REDagent 0.4.5)",
      "status": "built, tests pending"
     },
     {
      "id": "C6b",
      "title": "One source for REDagent's briefing and EDGEchat's rednode-mods skill",
      "status": "planned"
     },
     {
      "id": "C6c",
      "title": "REDagent's chats listed in REDcode, each opened in Claude Code",
      "status": "planned"
     },
     {
      "id": "#54",
      "title": "Mods choose how REDagent answers: tools: false and a model family (sonnet, opus, haiku), the context sent whole up to 64 KB (REDnode #54, with REDnode 0.72.0); REDagent 0.4.5",
      "status": "done"
     },
     {
      "id": "limit",
      "title": "A mod's daily limit $2.00 by default (was $0.25); mods never set by the player move up once (asked for by the owner through EDGEmobile on 2026-11-25, for Chooms!); REDagent 0.4.6",
      "status": "done"
     }
    ]
   },
   "nextRelease": {
    "version": "0.4.6",
    "needs": [
     "redcode-mcp released with it (the owner, 2026-11-24): anim_edit, sector, script and game tools for REDagent and the edge plugin",
     "EDGEchat's /edge:continue (EDGEchat #8)",
     "C6a's in-game test (5 steps)"
    ]
   },
   "handTests": [
    {
     "name": "agent.ask options in the game (REDnode #54)",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-25 with REDnode 0.73.0 and REDagent 0.4.6, all 6 steps; the $2.00 default limit seen on Ask mod and the Wardrobe Designer"
    },
    {
     "name": "#54 with a stand-in Agent SDK",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-25: 18 checks (scratchpad r71/a54check/check.mjs)"
    },
    {
     "name": "0.4.4 Replace the key",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-15"
    },
    {
     "name": "EDGEhack's tools for REDagent",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-11"
    },
    {
     "name": "C6a handoff, stand-in check",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-23: 15 checks (scratchpad c6a/check.mjs)"
    },
    {
     "name": "C6a test: a chat continued in VS Code",
     "steps": 5,
     "status": "not run",
     "ranBy": "owner",
     "note": "Waits for EDGEchat's /edge:continue (EDGEchat #8)"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEchat",
     "what": "/edge:continue, which reads REDagent's handoff file",
     "ref": "EDGEchat #8"
    }
   ],
   "ownerActions": [
    {
     "ref": "RA1",
     "what": "Decide whether and when to start C6 (REDagent in REDcode)",
     "since": "2026-11-16",
     "done": "2026-11-23",
     "outcome": "Decided: go ahead with C6"
    },
    {
     "ref": "RA2",
     "what": "Choose C6's option: A a REDagent chat view in REDcode (2 to 3 weeks), B a handoff from REDagent to Claude Code with EDGEchat (a few days, recommended), or C drop it. REDagent's docs/design.md, \"C6 plan\"",
     "since": "2026-11-23",
     "done": "2026-11-23",
     "outcome": "Chose B, a handoff from REDagent to Claude Code with EDGEchat; C6a under way"
    }
   ],
   "risks": [
    {
     "what": "EDGEmobile's Chooms! needs more context and a choice of model in agent.ask (REDnode #54); its first part, #54a, is on REDnode's list: built in REDnode 0.72.0 with REDagent 0.4.5, passed in game with 0.73.0 and 0.4.6 on 2026-11-25, #54 closed",
     "done": "2026-11-25"
    },
    "A first question that reads the game cost about $0.45 on Opus",
    {
     "what": "EDGEmobile's Chooms! will need a choice of model in agent.ask for C3; no issue is filed for it yet",
     "done": "2026-11-21"
    }
   ],
   "checkedBy": "REDnode session, 2026-11-25 (risk rows brought up to date after #54, #58, #59 passed)"
  },
  {
   "name": "REDnode",
   "code": "RN",
   "ownerSeq": 7,
   "group": "Core toolkits",
   "role": "The runtime: a Node.js API and an in-game HTML overlay for scripting the game, with REDswap for hot archive swaps",
   "stage": "released",
   "version": "0.69.0",
   "lastTag": "v0.65.3",
   "lastTagDate": "2026-11-15",
   "lastCommit": "2026-11-16",
   "commitsSinceTag": 34,
   "sessions": [
    "REDnode, EDGEHack & REDagent",
    "rednode-95"
   ],
   "wiki": "wiki/rednode/",
   "plan": {
    "name": "Roadmap: overlay, world, sound, TweakDB, ink, services, and requests from other tools",
    "source": "docs/index.md, docs/testing.md",
    "phases": [
     {
      "id": "P0-P1",
      "title": "Research and proof",
      "status": "done"
     },
     {
      "id": "O1-O6",
      "title": "Overlay windows, UI kit, apps, HUD, performance",
      "status": "done"
     },
     {
      "id": "O7",
      "title": "Display",
      "status": "planned"
     },
     {
      "id": "O8-O12",
      "title": "Mod Manager, Debugger, Layers, Spaces, Console",
      "status": "done"
     },
     {
      "id": "W1-W3",
      "title": "World API, packaging, REDbridge for players",
      "status": "done"
     },
     {
      "id": "T1-T2",
      "title": "TweakDB read and write",
      "status": "done"
     },
     {
      "id": "T3",
      "title": "TweakDB offline reads through REDbridge",
      "status": "planned"
     },
     {
      "id": "S1",
      "title": "Sound: play",
      "status": "done"
     },
     {
      "id": "S2",
      "title": "Sound: space",
      "status": "planned"
     },
     {
      "id": "SP1-SP4",
      "title": "Sound Tools app pack",
      "status": "done"
     },
     {
      "id": "H1-H3",
      "title": "Archive hot swap and REDswap",
      "status": "done"
     },
     {
      "id": "I1-I2d",
      "title": "Native game UI (ink) API",
      "status": "done"
     },
     {
      "id": "I3",
      "title": "Input: the controller is the first piece",
      "status": "in progress"
     },
     {
      "id": "UT1-UT3",
      "title": "UI Tools pack",
      "status": "done"
     },
     {
      "id": "SV1-SV3",
      "title": "Mod services",
      "status": "done"
     },
     {
      "id": "Q-A",
      "title": "Quest API",
      "status": "done"
     },
     {
      "id": "G1",
      "title": "Game 2.5 port",
      "status": "done"
     },
     {
      "id": "WP1-WP3",
      "title": "World pins",
      "status": "done"
     },
     {
      "id": "S24",
      "title": "World node registry spike (#24)",
      "status": "done"
     },
     {
      "id": "A1-A2",
      "title": "Animations on spawned people (#39)",
      "status": "done"
     },
     {
      "id": "#46a",
      "title": "Written workspots, for EDGEdir",
      "status": "done"
     },
     {
      "id": "#46b",
      "title": "Weather API, for EDGEdir: passed in game (0.67.2: giving it back blends back to the weather from before)",
      "status": "done"
     },
     {
      "id": "L1-L3",
      "title": "Localization",
      "status": "planned"
     },
     {
      "id": "AK",
      "title": "App keys: passed in game with 0.67.1 (a full-screen app keeps its view, the key hides its panels)",
      "status": "done"
     },
     {
      "id": "PM",
      "title": "Hide in the pause menu (on by default, F10 still works there) and the launcher's filter taking the keyboard: passed in game (0.67.3)",
      "status": "done"
     },
     {
      "id": "DD",
      "title": "Dropdown: rn-select in the UI kit and ui.select: passed in game (0.68.0)",
      "status": "done"
     },
     {
      "id": "ML",
      "title": "The Mod log window resizable (REDnode 0.68.1)",
      "status": "done"
     },
     {
      "id": "TV",
      "title": "Each app's version beside its title, with the launcher's Versions in title bars switch (REDnode 0.68.2)",
      "status": "done"
     },
     {
      "id": "HC",
      "title": "Hide on a click in the game, a launcher switch: passed in game, released in 0.69.0 (2026-11-21)",
      "status": "done"
     },
     {
      "id": "WL",
      "title": "world.load kinds and skip filters, the editor channel's service call (#48, #49), with a pin's id and facing (#50 part 3): passed in game with REDnode 0.70.0 (2026-11-23)",
      "status": "done"
     },
     {
      "id": "#47",
      "title": "V as an actor, the spike: answered in game 2026-11-23 (REDnode 0.70.0): the real V plays the game's player workspots; NPC clips do not play on V; the photo mode copy spawned as a plain entity crashes the game (a copy is left for the scene spike)",
      "status": "done"
     },
     {
      "id": "#56",
      "title": "The overlay cursor follows the Windows pointer in a windowed game, for REDcode's Game view: passed in game with REDnode 0.70.0 (2026-11-23)",
      "status": "done"
     },
     {
      "id": "0.71",
      "title": "The requests of 2026-11-24 and 25, built ahead of SC1 at the owner's word: a person spawned on the ground (#59), world.ray and world.pick's collision groups (#60), service.providers and onProviders (#58); REDnode 0.71.0, deployed in 0.72.0",
      "status": "done"
     },
     {
      "id": "SC1",
      "title": "Scene spike for EDGEdir: a walk for a spawned person (#50), world.move during a workspot, a workspot on V (#47); after WL; the first build after 0.70.0's tests (order agreed with the owner on 2026-11-23)",
      "status": "planned"
     },
     {
      "id": "#51a",
      "title": "world.load reads scene format 3 (EDGEbuilder's world edits listed in notes, not applied); a few hours",
      "status": "planned"
     },
     {
      "id": "#57",
      "title": "Tests run by an assistant, for REDcode: load a save, a consent per test session, input to the game; several days",
      "status": "planned"
     },
     {
      "id": "CON",
      "title": "The Console resizable, and a warning before it closes with TweakDB changes in place; half a day",
      "status": "planned"
     },
     {
      "id": "#54a",
      "title": "agent.ask: the whole context with its limit stated, tools: false and a model family (#54, for EDGEmobile's Chooms! C3 and C5), with REDagent 0.4.5; REDnode 0.72.0, asked for by the owner on 2026-11-25",
      "status": "done"
     },
     {
      "id": "#61",
      "title": "Fight events for EDGEmobile's Chooms! C3: game.on('combat') and game.on('npcDowned') (entity, record, affiliation, killed, byPlayer) from the game's own handlers, never polled; sample Fight test; REDnode 0.73.0, asked for by the owner on 2026-11-25",
      "status": "built, tests pending"
     },
     {
      "id": "N2",
      "title": "World nodes, full (#24), with #52 (an entity shown again after a load) and #51 step 2 (a scene's removals applied); several days",
      "status": "planned"
     },
     {
      "id": "#46c",
      "title": "Blend at a workspot jump, for EDGEdir's D4 and D5",
      "status": "planned"
     },
     {
      "id": "SN0-SN5",
      "title": "Semi-native overlay apps",
      "status": "planned"
     },
     {
      "id": "P2",
      "title": "Tier 2",
      "status": "in progress"
     },
     {
      "id": "P3-P4",
      "title": "Rules, and sync interceptors",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "0.73.1",
    "needs": [
     "Step 9 of the fight events test (#61) on 0.73.1 (RN6)"
    ]
   },
   "handTests": [
    {
     "name": "Fight events (#61), REDnode 0.73.0 and 0.73.1",
     "steps": 9,
     "status": "partly run",
     "ranBy": "owner",
     "note": "First run 2026-11-25 (dev PC, 0.73.0; C3's step 12 did not run, Chooms!'s fights code was not deployed): steps 1 to 8 passed (full names, a System Collapse target credited to V, defeated then killed counted once; the grenade not told apart); step 9 failed: a save load sent 'V left combat' with no fight. Fixed in 0.73.1 (built, mock check passed, not deployed yet): retest step 9"
    },
    {
     "name": "agent.ask options (#54), REDnode 0.73.0 with REDagent 0.4.6",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-25 (dev PC, REDnode 0.73.0, REDagent 0.4.6), all 6 steps; REDagent's record: Sonnet with tools $0.088, Haiku no tools $0.00014, Opus with tools $0.265; #54 closed"
    },
    {
     "name": "Providers of a role (#58), REDnode 0.71.0",
     "steps": 5,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-25 (dev PC, 0.73.0), all 5 steps (step 4 in a second run); #58 closed"
    },
    {
     "name": "A person on the ground, a ray, pick groups (#59, #60), REDnode 0.71.0",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-25 (dev PC, 0.72.0), all 6 steps: no T pose at step 4's start; step 6 on a baked floor, Static passed through it and Dynamic stopped at V's feet. #59 closed; #60 waits for EDGEbuilder's Pick"
    },
    {
     "name": "Tooltips on ui controls (#55), REDnode 0.70.0",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-23 (dev PC), all 6 steps; #55 closed"
    },
    {
     "name": "V as an actor (#47), REDnode 0.70.0",
     "steps": 17,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Run 2026-11-23 with spike 0.2.1: the real V plays the game's player workspots in first person; NPC clips give a T pose; Spawn the copy (the photo mode puppet as a plain entity) crashed the game, so steps 9 to 11 and 16 were not run. The spike is not in the player zip"
    },
    {
     "name": "The WL build, REDnode 0.70.0",
     "steps": 8,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-23 (dev PC), all 8 steps, Claude driving the calls; #49 closed"
    },
    {
     "name": "Hide on a click in the game, REDnode 0.69.0",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-21, dev PC, 0.69.0, all six steps"
    },
    {
     "name": "Versions in title bars, REDnode 0.68.2",
     "steps": 5,
     "status": "passed",
     "ranBy": null,
     "note": "2026-11-19, laptop, 0.68.2"
    },
    {
     "name": "The Mod log resizable, REDnode 0.68.1",
     "steps": 4,
     "status": "passed",
     "ranBy": null,
     "note": "2026-11-19, laptop, 0.68.2"
    },
    {
     "name": "The dropdown, REDnode 0.68.0",
     "steps": 9,
     "status": "passed",
     "ranBy": null,
     "note": "2026-11-18, dev PC, all steps"
    },
    {
     "name": "App keys, REDnode 0.67.0",
     "steps": 9,
     "status": "passed",
     "ranBy": null,
     "note": "2026-11-18 on 0.67.1 (0.67.0 failed step 4)"
    },
    {
     "name": "Weather (#46), REDnode 0.66.10",
     "steps": 10,
     "status": "passed",
     "ranBy": null,
     "note": "2026-11-18: 0.67.0 all but step 9; 0.67.2's retest of giving it back passed"
    },
    {
     "name": "Update REDbridge while it runs (W3 retest)",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "Fixed in 0.67.0; passed its retest on 2026-11-18 with REDbridge 0.14.0 running"
    },
    {
     "name": "A written workspot: the call (#46), 0.66.9",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-16"
    },
    {
     "name": "A2 animations on a spawned person (#39), 0.66.8",
     "steps": 9,
     "status": "passed",
     "ranBy": "owner",
     "note": "Steps 1 to 8 passed 2026-11-16; step 9, the MCP route, passed 2026-11-18"
    },
    {
     "name": "S24 world node registry (#24), 0.66.7",
     "steps": 11,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Passed except the street lamp (an entity node), moved to N2 by the owner on 2026-11-18"
    },
    {
     "name": "Calls from mods (#22), 0.66.7",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-15"
    },
    {
     "name": "The controller (0.65.1)",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-15, Xbox pad"
    },
    {
     "name": "The pause menu and the launcher's filter, REDnode 0.67.2",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-18: 0.67.2 failed step 6 (every other open), 0.67.3 passed; the filter passed on 0.67.2"
    },
    {
     "name": "world.jumpWorkspot answering false outside a workspot",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-18"
    },
    {
     "name": "The cursor in a windowed game (#56), 0.70.0",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-23 (dev PC), all 7 steps; #56 closed"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Talk through semi-native apps before its first spike starts",
     "ref": "docs/semi-native.md"
    }
   ],
   "ownerActions": [
    {
     "ref": "RN1",
     "what": "Agree the order after the WL build (Console resizing, N2 and others are asked for, not built)",
     "since": "2026-11-18",
     "done": "2026-11-23",
     "outcome": "Agreed: the order REDnode's session proposed on 2026-11-23, 0.70.0's in-game tests first"
    },
    {
     "ref": "RN2",
     "what": "Remove packs/admin-tools/apps from the dev PC's development folders when convenient (Admin Tools 0.2.0 is released)",
     "since": "2026-11-18",
     "done": "2026-11-23",
     "outcome": "Removed from the overlay's settings by the EDGEweb session at the owner's request. The installed Admin Tools on the dev PC is older than 0.2.0 (Task Manager 0.1.0, Tools Manager 0.1.1): update it in EDGEdeck"
    },
    {
     "ref": "RN3",
     "what": "Run REDnode 0.70.0's four in-game tests in one session (deployed to the dev PC on 2026-11-23): the WL build, #47's spike, tooltips (#55), the windowed cursor (#56); Claude drives the WL test's calls",
     "since": "2026-11-23",
     "done": "2026-11-23",
     "outcome": "Run: WL, tooltips (#55) and the windowed cursor (#56) passed; #47's spike answered its question, its copy step crashed the game"
    },
    {
     "ref": "RN4",
     "what": "Decide whether REDnode 0.70.0 can be released: every test of it passed except #47's spike, partly run (its Spawn the copy crashes the game; the spike is not in the player zip). Recommended: release",
     "since": "2026-11-23",
     "done": "2026-11-25",
     "outcome": "Released: REDnode 0.70.0 on GitHub and Nexus (run 45621359741, from branch release/0.70.0)"
    },
    {
     "ref": "RN5",
     "what": "Place REDnode #58, #59 and #60 in the order. Recommended: #59 (a person put on the ground) inside SC1, the scene spike, which spawns people for workspots; #60 (pick groups) small, beside #51a; #58 (service.providers) after #54a",
     "since": "2026-11-25",
     "done": "2026-11-25",
     "outcome": "Build the requests now, ahead of the scene spike"
    },
    {
     "ref": "RN6",
     "what": "Retest step 9 of the fight events test (#61) on REDnode 0.73.1 once it is deployed (close the game first): load a save, and no 'V left combat' line should come. Steps 1 to 8 passed on 0.73.0 on 2026-11-25; #59, #60, #58 and #54 passed the same day",
     "since": "2026-11-25"
    },
    {
     "ref": "RN7",
     "what": "Place REDnode #61 in the order: combat and NPC-downed events for EDGEmobile's Chooms! (a short in-game spike first, to find which game handlers fire). Chooms! uses them only once they exist",
     "since": "2026-11-25",
     "done": "2026-11-25",
     "outcome": "Build next (the owner, through EDGEmobile): built in REDnode 0.73.0"
    }
   ],
   "risks": [
    "Native code reads game memory at offsets found by reading the exe; a wrong one crashes the game (the node registry did on 0.66.0 to 0.66.6). Newer code finds them at run time",
    {
     "what": "Twelve requests from other tools are open on it. #58 (service.providers), #59 (a spawned person put on the ground) and #60 (collision groups for world.pick) came in on 2026-11-24 and 25 and are not in the agreed order yet; each says no hurry",
     "done": "2026-11-25"
    },
    "Requests from other tools: #61 (fight events for Chooms!) built in 0.73.0, its test left before the release; #60 stays open until EDGEbuilder's Pick uses its groups (passed in game on REDnode's side); #24, #46 to #48, #50 to #52 and #57 in the agreed order",
    {
     "what": "Requests #54, #58 and #59: built in 0.71.0 and 0.72.0, passed in game and closed",
     "done": "2026-11-25"
    },
    {
     "what": "Four requests from other tools are open on it: #24, #39, #46, #47",
     "done": "2026-11-25"
    }
   ],
   "checkedBy": "REDnode session, 2026-11-25 (#61's first run; 0.73.1 built)"
  },
  {
   "name": "REDcode",
   "code": "RC",
   "ownerSeq": 11,
   "group": "Core toolkits",
   "role": "The IDE: a VS Code extension for the game's files, on WolvenKit's engine through REDbridge",
   "stage": "released",
   "version": "0.10.17",
   "lastTag": "v0.10.13",
   "lastTagDate": "2026-11-16",
   "lastCommit": "2026-11-16",
   "commitsSinceTag": 1,
   "sessions": [
    "REDcode"
   ],
   "wiki": "wiki/redcode/",
   "plan": {
    "name": "Roadmap C0 to C7, and animation steps A1 to A3",
    "source": "docs/index.md, docs/testing.md",
    "phases": [
     {
      "id": "C0",
      "title": "Decide",
      "status": "done"
     },
     {
      "id": "C1",
      "title": "Bridge MVP",
      "status": "done"
     },
     {
      "id": "C2",
      "title": "Browse",
      "status": "done"
     },
     {
      "id": "C3",
      "title": "Edit: the CR2W editor",
      "status": "done"
     },
     {
      "id": "C4",
      "title": "Ship: pack, install, export, import",
      "status": "done"
     },
     {
      "id": "C5",
      "title": "View (the REDnode loop is still to come)",
      "status": "in progress"
     },
     {
      "id": "C6",
      "title": "Parity: graph editors, ink preview",
      "status": "planned"
     },
     {
      "id": "C7",
      "title": "Brand",
      "status": "planned"
     },
     {
      "id": "A1",
      "title": "Animations: bones",
      "status": "done"
     },
     {
      "id": "A2",
      "title": "Animations: bodies, root motion",
      "status": "done"
     },
     {
      "id": "A3",
      "title": "Animations: synced sets (released in 0.10.15)",
      "status": "done"
     },
     {
      "id": "RW",
      "title": "Replace with a WAV, Replace All, titled 3D tabs (#29) and every window's project (#32): released in 0.10.15; voice line (.wem) replacement through EDGEwave to revisit",
      "status": "done"
     },
     {
      "id": "NF",
      "title": "New File: make game files from nothing (released in 0.10.14)",
      "status": "done"
     },
     {
      "id": "SV",
      "title": "Sector view: the @edgemodders/world-view package (0.1.0 on npm since 2026-11-25, released with each REDcode release from now on), a read-only 3D sector mode, openSector, and #31's light in every 3D view (released in 0.10.15)",
      "status": "done"
     },
     {
      "id": "ST",
      "title": "REDcode's half of Sector Tools (the app is EDGEbuilder's, EDGEbuilder #9), agreed 2026-11-25: L1 built 2026-11-25 (Show in Game and each pick through EDGEbuilder's focus and select, Open in REDcode from the game, EDGEbuilder offered once), hand test H1 to H9 pending; L2 live previews and the replaced-sector warning after EDGEbuilder's S3",
      "status": "built, tests pending"
     },
     {
      "id": "K4",
      "title": "Keys (#33, closed): the Keys view and REDcodeApi.keys with status, released in REDcode 0.10.16 (2026-11-22) with the joint K4d release, complete the same day: EDGEhack 0.1.3, EDGEfab 0.2.0, EDGEmat 0.3.4, EDGEwave 0.3.0",
      "status": "done"
     },
     {
      "id": "AR",
      "title": "Animation authoring research (docs/research/animation-authoring.md): Probe A passed in the game 2026-11-21, Probe D (Uthana, text to motion on the game's skeleton) passed 2026-11-22; continued as Animation Tools (AT)",
      "status": "done"
     },
     {
      "id": "SM",
      "title": "Sector materials: M1 done (released in 0.10.16, with the camera row and selection); M2 live from EDGEmat's Desk next (EDGEmat #17 passed); M3a, M3b; every copy of a mesh agreed",
      "status": "in progress"
     },
     {
      "id": "SS",
      "title": "Sector selection: many things at once, a screen box and a volume, the selected list (docs/design/sector-selection.md, agreed and built 2026-11-21) (released in 0.10.16)",
      "status": "done"
     },
     {
      "id": "SC",
      "title": "Sector scripts (docs/design/sector-scripts.md): a Scripts button in the sector view, scripts in their own process, preview and one-undo Apply, on the game's sector one answer that adds it to the project and applies there, Debug, requests for assistants; sector_*, script_* and request_* in redcode-mcp 0.7.0 (released in 0.10.17)",
      "status": "done"
     },
     {
      "id": "AT",
      "title": "Animation Tools: AT1 anim-core and AT2 Make in REDcode done (released in 0.10.16); AT3 the REDnode pack built and passed in the game (2026-11-24); AT3r the pack release (own Nexus page); takes for made clips agreed; AT4 V",
      "status": "in progress"
     },
     {
      "id": "AE",
      "title": "Animation Editor (agreed 2026-11-24): AE1 the steps in anim-core and anim_edit_info, anim_edit; AE2 the Edit tab; AE5 Edit in Blender, all released in 0.10.17. The Animation Timeline (docs/design/animation-timeline.md, draft 0.4 agreed 2026-11-25, any rig, not only people): TL1 the blocks in anim-core; TL2 to TL4 built 2026-11-25 (the timeline under the animation view, live preview, blocks edited on it, a joint grabbed and posed at the playhead; checked in Chrome), hand test T1 to T11 pending; then TL6 (a spoken line with the head, for The Speaking Scene), AE3 in the game, AE4",
      "status": "in progress"
     },
     {
      "id": "LS",
      "title": "Lip Sync editor (docs/design/lipsync.md): L1 released in 0.10.17 (REDcode: Open Lip Sync, the tab, links from the audio player and the animation view, openLipSync, lipsync_* in redcode-mcp 0.7.0; Add a Line shipped untested). Next L2, the editing loop (the owner, 2026-11-25: swap heads, edit the lip sync, the voice and takes, change the line, start from scratch, each into a project; its own design page), L3 Audio2Face for any line, L4 live",
      "status": "in progress"
     },
     {
      "id": "GT",
      "title": "Game tests by an assistant (docs/design/game-testing.md, agreed 2026-11-23): game_start, game_stop and game_status in redcode-mcp, built, not run against the game; loading a save, a session consent and input asked of REDnode (#57)",
      "status": "built, tests pending"
     },
     {
      "id": "GV",
      "title": "The game in an editor tab (docs/design/game-view.md, agreed 2026-11-22): spikes done with the owner; G2 Run Game in Tab built on REDcode's side against an interim script, hand test passed by the owner on 2026-11-23 (steps 1 to 8), two fixes wait on retests R1 and R2; a Size selector through the redcode REDnode package 0.3.0 built the same day, not run (S1 to S5); next the swap to REDbridge window.* (built on its main, not released)",
      "status": "built, tests pending"
     },
     {
      "id": "SL",
      "title": "Sector layers (docs/design/sector-layers.md, agreed 2026-11-24): L1 the Overlaps tab released in 0.10.17; L2 across layers (scripts over the layers on, changes into several sectors each in its own tab), L3 Links (node, placements, inner record, files; Select Placements in 3D) and L4 Open in REDcode (the redcode REDnode package 0.4.0's openSector and place, EDGEworld: Open Sector Here) built 2026-11-25, hand tests pending; not built: the Properties tab across layers; requests REDbridge #23, EDGEbuilder #11",
      "status": "in progress"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
"Hand tests of what is built since 0.10.17: Sector scripts known by their text (H1 to H4), Sector layers L2 and L3 (L2-1 to L3-6), Sector layers L4 and Sector Tools L1 (H1 to H9, with the game and EDGEbuilder), the Animation Timeline TL2 to TL4 (T1 to T11). Next, agreed: sector materials M2, Lip Sync L2's design page"
    ]
   },
   "handTests": [
{
 "name": "Sector layers L2 and L3",
 "steps": 10,
 "status": "not run",
 "note": "Built 2026-11-25: scripts over layers, changes into several sectors, the Links row, Select Placements in 3D; checked by unit checks (94) and on exterior_-22_7_0_0 through REDbridge (docs/testing.md, Sector layers L2 and L3)"
},
{
 "name": "Animation Timeline TL2 to TL4",
 "steps": 11,
 "status": "not run",
 "note": "Built 2026-11-25: the timeline under the animation view, live preview, editing blocks, grabbing a joint; checked in Chrome on Probe D's made clip (docs/testing.md, Animation Timeline TL2 to TL4, T1 to T11)"
},
    {
     "name": "Sector layers L4 and Sector Tools L1",
     "steps": 9,
     "status": "not run",
     "note": "Built 2026-11-25: Open Sector Here, openSector from the game, Show in Game with EDGEbuilder, the offer; checked by script, 93 unit checks (docs/testing.md, Sector layers L4 and Sector Tools L1, H1 to H9; needs the game with REDnode and EDGEbuilder)"
    },
    {
     "name": "Sector scripts: a changed script",
     "steps": 4,
     "status": "not run",
     "note": "Built 2026-11-25: a script changed outside REDcode is asked about again before it runs; checked by script (docs/testing.md, Sector scripts: a changed script, H1 to H4)"
    },
    {
     "name": "Sector Properties tab",
     "steps": 6,
     "status": "passed",
     "note": "Passed: P1 to P6 by script 2026-11-24 (EDGEweb's session), the two fixes retested by the owner 2026-11-25 (docs/testing.md, Sector Properties tab)"
    },
    {
     "name": "Animation view: tabs, transport, Redo",
     "steps": 7,
     "status": "passed",
     "note": "Passed 2026-11-25 (the owner), with the Blender and sector tests (docs/testing.md, Animation view: tabs, transport, Redo)"
    },
    {
     "name": "Animation Editor (AE5)",
     "steps": 5,
     "status": "passed",
     "note": "Passed 2026-11-25 (the owner, B1 to B5, Blender 5.2.2). Asked for in the run and built the same day: the side column's tabs Clip, Edit and Animations, the transport as media buttons, Redo (docs/testing.md, Animation Editor (AE5))"
    },
    {
     "name": "Animation Editor (AE2)",
     "steps": 7,
     "status": "passed",
     "note": "Passed 2026-11-24 (the owner, D1 to D7), with what the run asked for: scrolling panels, a marker on the bone, the chosen step in yellow, steps changed in place, Apply rebuilding the view in place"
    },
    {
     "name": "Sector scripts",
     "steps": 15,
     "status": "passed",
     "note": "Passed 2026-11-24 (the owner, steps 1 to 15 with 3b and 3c), with what run 1 raised: ctx.selected() however a script runs, cooked nodes' meshes, Only, Back and Forward, icon buttons, the selection change on the line, and Add to Project and Apply on the game's sector. Not retested: the line under the copy's view (fixed after the run)"
    },
    {
     "name": "Sector layers (L1)",
     "steps": 9,
     "status": "passed",
     "note": "Passed: L1 to L9 by script 2026-11-24 (EDGEweb's session), the ghosted look by the owner 2026-11-25 (docs/testing.md, Sector layers (L1))"
    },
    {
     "name": "Lip Sync L1",
     "steps": 10,
     "status": "partly run",
     "note": "Steps 1 to 8 and 10 pass (scripts, MCP, EDGEweb's script; the owner 2026-11-25: sound, mouth and head fine); step 9 not run, shipped untested in 0.10.17 at the owner's word (docs/testing.md, Lip Sync L1)"
    },
    {
     "name": "Key status",
     "steps": 7,
     "status": "passed",
     "note": "S1 to S7 pass; closing the question saves nothing (docs/testing.md, Key status)",
     "ranBy": "owner, 2026-11-22"
    },
    {
     "name": "Animation Tools pack (AT3)",
     "steps": 11,
     "status": "passed",
     "note": "Passed 2026-11-24 (the owner, all 11 steps, run 2), with the fixes it raised: the respawn followed, feet in place without sliding, the Root held still, the character spawned on the ground (REDnode #59 asked). Next: AT3r, the pack release, on the owner's go"
    },
    {
     "name": "Animation Tools AT2",
     "steps": 9,
     "status": "passed",
     "note": "All steps pass with 3b, after fixes: the busy panel and notification, the made clip's words, New Clip and Replace Clip, Add a Clip from GLB in the menu; the drop and 45-degree turn in step 8 measured as the game's side (docs/testing.md)",
     "ranBy": "owner, 2026-11-22"
    },
    {
     "name": "Animation Probe D (in the game)",
     "steps": 6,
     "status": "passed",
     "note": "Run 2 passes: a clip Uthana made from a text prompt on the game's own skeleton plays in the game, added and replacing a game clip, no Blender. Run 1 warped the body (translation keyed on Hips only); fixed by keying every channel the game clip has (docs/testing.md, Animation Probe D)",
     "ranBy": "owner, 2026-11-22"
    },
    {
     "name": "Sector selection",
     "steps": 12,
     "status": "passed",
     "note": "All 12 steps pass, with two fixes: Ctrl+A in VS Code (its Select All ran in the page), and the volume and Isolate with Ctrl+A and Esc (docs/testing.md, Sector selection)",
     "ranBy": "owner, 2026-11-22"
    },
    {
     "name": "Sector camera",
     "steps": 10,
     "status": "passed",
     "note": "All 10 steps pass (docs/testing.md, Sector camera)",
     "ranBy": "owner, 2026-11-22"
    },
    {
     "name": "Animation Probe A (in the game)",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner, 2026-11-21",
     "note": "Run 2 passes: an imported clip plays in the game, unchanged and edited in Blender. Run 1 crashed on the imported clip: WolvenKit's new set has empty fallback tables while each clip keeps fallbackFrameIndices; clearing them fixed it (docs/testing.md, Animation Probe A)"
    },
    {
     "name": "Keys (K4b)",
     "steps": 9,
     "status": "passed",
     "ranBy": "owner, 2026-11-21",
     "note": "Steps 1 to 8 pass on REDbridge 0.18.0 (the optional step 9 not run). Next for the key API: K4c, EDGEwave's pilot (EDGEwave #12), before any REDcode release with it"
    },
    {
     "name": "Edit in Blender: the warning for objects the import leaves out",
     "steps": 2,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20 (W1, W2)"
    },
    {
     "name": "Replace All (an event's sound variations)",
     "steps": 5,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20, all 5 steps, with one fix (archives swapped in through REDnode now count as the project's for Pack and Install)"
    },
    {
     "name": "Edit in Blender: skinned meshes",
     "steps": 4,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20, all 4 steps, on the base male body in Blender 5.3"
    },
    {
     "name": "Run Game without ELECTRON_RUN_AS_NODE (#24)",
     "steps": 4,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20, all four steps, with REDcode: Launch set to exe. On REDnode 0.59.1 or later it shows only that nothing broke"
    },
    {
     "name": "Library view (#23)",
     "steps": 12,
     "status": "passed",
     "ranBy": "script",
     "note": "By the EDGEweb session 2026-11-15; not tried: the unsaved-editor question, and EDGEfab refreshing its own prop"
    },
    {
     "name": "Animations A2 (#21)",
     "steps": 12,
     "status": "passed",
     "ranBy": "script",
     "note": "By the EDGEweb session 2026-11-15"
    },
    {
     "name": "Item search (#28)",
     "steps": 11,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-15, plus the owner's check"
    },
    {
     "name": "Reveal in Project (#27)",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-15"
    },
    {
     "name": "Pack and Try through REDnode (#11)",
     "steps": 6,
     "status": "partly run",
     "ranBy": "owner",
     "note": "A and B pass on 2.5; steps 1 and 2 (through REDswap) can run now and have not; 3 to 6 retired"
    },
    {
     "name": "The never-run list, six items (EDGEmat hook, .NET prompt, EDGEwave from a store, sound in game, template, Blender search)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Each needs a special setup or another tool"
    },
    {
     "name": "New File",
     "steps": 15,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20 on the laptop, steps 1 to 13 with four fixes (odd-sided images: Resize or Import Uncompressed; atlas picker wording; parts filter style; a message after Pack). The game reading the new files is not tried yet (docs/testing.md, Never run)"
    },
    {
     "name": "New File hover button",
     "steps": 3,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20, all three steps. On main, unreleased"
    },
    {
     "name": "Animations A3 (#21)",
     "steps": 11,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20 on REDbridge 0.17.0, all 11 steps, with three fixes (list splitter, clip length from the file, themed checkboxes)"
    },
    {
     "name": "Replace with a WAV, titled models (#29), every window's project (#32)",
     "steps": 12,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20, all 12 steps, with two fixes (Replace without a project; no REDnode package downgrade)"
    },
    {
     "name": "Sector view (and #31 light)",
     "steps": 16,
     "status": "passed",
     "ranBy": "the owner",
     "note": "Passed 2026-11-20: steps 1 to 10b and R1 to R5, with two fixes and five changes the owner asked for, each retested"
    },
    {
     "name": "Sector materials (M1)",
     "steps": 10,
     "status": "passed",
     "ranBy": "owner, 2026-11-21",
     "note": "All 10 steps pass. Found: Add to Project wrote over a file already in the project without asking; fixed the same day (it asks: open the project's copy or replace it), retest R1 to R3 not run (docs/testing.md, Sector materials (M1))"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEmat",
     "what": "Ship renderMaterials, so the mesh viewer's material hook can be tested (unverified whether it has since)",
     "ref": "docs/testing.md"
    },
    {
     "who": "EDGEbuilder",
     "what": "Sector Tools S1, before REDcode's half (docs/design/sector-tools.md, three owner decisions)",
     "ref": "https://github.com/Edgemodders/EDGEbuilder/issues/9"
    },
    {
     "who": "EDGEmat",
     "what": "Sector materials M2: say which game mesh a Desk change is for, and render the world's multilayered materials (flat grey now)",
     "ref": "https://github.com/Edgemodders/EDGEmat/issues/17"
    },
    {
     "who": "EDGEhack",
     "what": "K4d: built on its main (2026-11-22); waits on the owner's hand test, then the joint release",
     "ref": "https://github.com/Edgemodders/EDGEhack/issues/3"
    },
    {
     "who": "EDGEmat",
     "what": "K4d: built on its main (2026-11-22); waits on the owner's hand test, then the joint release",
     "ref": "https://github.com/Edgemodders/EDGEmat/issues/18"
    },
    {
     "who": "EDGEfab",
     "what": "K4d: built on its main (2026-11-22); waits on the owner's hand test, then the joint release",
     "ref": "https://github.com/Edgemodders/EDGEfab/issues/10"
    },
    {
     "who": "REDnode",
     "what": "#47 V as an actor: the V actor spike (REDnode 0.70.0, spike 0.2.0 with REDcode's written-workspot test) waits for the owner's game session; Animation Tools AT4 (V) needs it",
     "ref": "https://github.com/Edgemodders/REDnode/issues/47"
    },
    {
     "who": "REDnode",
     "what": "#56 the overlay cursor in a windowed game follows the real pointer; the game in a tab (G2) needs it",
     "ref": "https://github.com/Edgemodders/REDnode/issues/56"
    },
    {
     "who": "REDbridge",
     "what": "#22 window.*: keep the game window docked on a webview tab; the game in a tab (G1, G2) needs it",
     "ref": "https://github.com/Edgemodders/REDbridge/issues/22"
    }
   ],
   "ownerActions": [
    {
     "ref": "RC1",
     "what": "Make the Animation Tools pack's Nexus page and say when to release it (AT3r; the in-game test AT3 passed 2026-11-24)",
     "since": "2026-11-22"
    },
    {
     "ref": "RC2",
     "what": "Agree REDcode's half of Sector Tools (docs/design/sector-tools.md, three decisions)",
     "since": "2026-11-20",
     "done": "2026-11-25",
     "outcome": "Agreed with the three recommendations: the request file, a dismissable warning for a replaced sector, EDGEbuilder offered once; REDcode's half waits on EDGEbuilder's S1 (#9, nudged)"
    },
    {
     "ref": "RC11",
     "what": "Run the hand test Sector scripts: a changed script, H1 to H4 (docs/testing.md): a script changed outside REDcode is asked about again, one you save in the editor is not",
     "since": "2026-11-25"
    },
    {
     "ref": "RC3",
     "what": "Decide when to publish @edgemodders/world-view to npm (EDGEbuilder will build on it)",
     "since": "2026-11-20",
     "done": "2026-11-25",
     "outcome": "Published: @edgemodders/world-view 0.1.0 on npm with provenance (release world-view-v0.1.0); a REDcode release now takes world-view with it"
    },
    {
     "ref": "RC5",
     "what": "Run retests R1 and R2 of Run Game in Tab (docs/testing.md): the release key while the game loads and in the main menu, and the status line below the game",
     "since": "2026-11-23"
    },
    {
     "ref": "RC6",
     "what": "Run the hand tests S1 to S5 (the game tab's Size selector) and T1 to T5 (the game tools for assistants) in docs/testing.md",
     "since": "2026-11-23"
    },
    {
     "ref": "RC4",
     "what": "Run the hand tests Sector camera, Sector selection and the Add to Project retest R1 to R3 (docs/testing.md)",
     "since": "2026-11-21",
     "done": "2026-11-22"
    },
    {
     "ref": "RC8",
     "what": "Look at the sector view's Overlaps tab yourself: how a ghosted layer looks and how it feels to use (the rest of Sector layers L1 passed by script); your notes shape L2 to L4",
     "since": "2026-11-24",
     "done": "2026-11-25",
     "outcome": "Passed: the ghosted look is fine"
    },
    {
     "ref": "RC9",
     "what": "Finish Lip Sync L1 (docs/testing.md, Lip Sync L1): steps 3 to 8 and 10 passed by script; left for you are whether the sound plays, the mouth against the voice and the head's look, and step 9 (Add a Line, EDGEwave 0.3.0 and an ElevenLabs key), or ship with step 9 untested",
     "since": "2026-11-24",
     "done": "2026-11-25",
     "outcome": "Sound, mouth and head fine; shipped in 0.10.17 with step 9 untested"
    },
    {
     "ref": "RC10",
     "what": "Finish the Sector scripts hand test: run 1 stopped at step 3, which was fixed, so step 3 again, then steps 4 to 15 (docs/testing.md, Sector scripts); step 15 is new, a script an assistant writes with script_write showing in the Scripts menu",
     "since": "2026-11-24",
     "done": "2026-11-24"
    }
   ],
   "risks": [
    "REDbridge answers one call at a time"
   ],
   "checkedBy": "REDcode session, 2026-11-25"
  },
  {
   "name": "REDbridge",
   "code": "RB",
   "ownerSeq": 4,
   "group": "Core toolkits",
   "role": "The engine host: WolvenKit's libraries behind JSON-RPC for REDcode, EDGEdeck, REDnode and the rest (GPL-3.0)",
   "stage": "released",
   "version": "0.19.0",
   "lastTag": "v0.14.0",
   "lastTagDate": "2026-11-16",
   "lastCommit": "2026-11-16",
   "commitsSinceTag": 0,
   "sessions": [
    "REDnode, EDGEHack & REDagent"
   ],
   "wiki": "wiki/redbridge/",
   "plan": {
    "name": "The bridge side of REDcode's roadmap, and requests from other tools",
    "source": "docs/index.md",
    "phases": [
     {
      "id": "C0",
      "title": "Decide",
      "status": "done"
     },
     {
      "id": "C1",
      "title": "Bridge MVP",
      "status": "done"
     },
     {
      "id": "C2",
      "title": "Browse",
      "status": "done"
     },
     {
      "id": "C3",
      "title": "Edit: document sessions",
      "status": "done"
     },
     {
      "id": "C4",
      "title": "Ship: pack, export, import",
      "status": "done"
     },
     {
      "id": "C5",
      "title": "View: sound, tweakdb, loc, mesh items",
      "status": "done"
     },
     {
      "id": "2.5",
      "title": "Game 2.5, on WolvenKit 10.0.0-beta.1",
      "status": "done"
     },
     {
      "id": "#14",
      "title": "Animations: export with rigs (0.13.0), anims.info (0.14.0), .anims import (0.15.0) done; rig import parked until EDGEfab's F7a",
      "status": "in progress"
     },
     {
      "id": "#18",
      "title": "sector.build removals (ArchiveXL node deletions of entries, with an entity's proxy meshes) for EDGEbuilder's doors; passed in game with EDGEbuilder's D1b; released in 0.16.0 on 2026-11-19",
      "status": "done"
     },
     {
      "id": "Linux",
      "title": "Linux build (not scheduled)",
      "status": "planned"
     },
     {
      "id": "#19",
      "title": "anims.sync and spline root motion in seconds, for REDcode's A3; released in 0.17.0 on 2026-11-20; passed in REDcode's A3 hand test, closed",
      "status": "done"
     },
     {
      "id": "#20",
      "title": "SIMD clips with sync joints exported as the game stores them (WolvenKit issue 3306), and their sync tracks read; released in 0.17.0; passed in REDcode's A3 hand test, closed",
      "status": "done"
     },
     {
      "id": "K4a",
      "title": "keys.* on the shared key store, decrypted in .NET, off unless started with --keys; released in 0.18.0 on 2026-11-21, for REDcode's Keys (REDcode #33)",
      "status": "built, tests pending"
     },
     {
      "id": "#22",
      "title": "window.* for REDcode's Game view: the game's window docked on a VS Code webview, off unless started with --windows; on main, not released",
      "status": "built, tests pending"
     },
     {
      "id": "#24",
      "title": "cr2w.getNode, getNodes, search and patch walk into parsed buffer classes (worldInstancedMeshNodeBuffer, WorldTransformsBuffer and the rest), for REDcode's CR2W editor; on main, not released",
      "status": "built, tests pending"
     },
     {
      "id": "#23",
      "title": "sector.find's variants with their ranges, sector.nodes' ranges, and sectors from mods' .xl files and a project, for REDcode's sector layers (item 3 not needed); on main, not released",
      "status": "built, tests pending"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "#22, #23 and #24 are on main: a release when the owner asks (RB1)"
    ]
   },
   "handTests": [
    {
     "name": "Probe and REDcode's smoke test on the 0.15.0 build",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-18, game 2.5"
    },
    {
     "name": "Probe on #18's build (sector.build removals)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-19, game 2.5"
    },
    {
     "name": "Probe on #18's correction (entries, proxies)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-19, game 2.5: D0's door and its proxy written as D0's working .xl"
    },
    {
     "name": "EDGEbuilder D1b: doors baked through sector.build",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-19, game 2.5, a build of main: four deletions with two stand-ins; both doorways stayed open"
    },
    {
     "name": "Probe on #19 (anims.sync, spline root motion)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-19, game 2.5: the probe set's tracks; the AV's Root ends at 7.3 s; a round trip keeps its keys"
    },
    {
     "name": "Probe on #20 (SIMD clip with sync joints)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-20, game 2.5: injector__fpp exports with the rig's translations and scale 1; its sync rotations match Sandra's"
    },
    {
     "name": "keys-check.mjs (K4a)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-20: 23 checks both ways against REDnode's keys.mjs; the dev PC's own store reads the same"
    },
    {
     "name": "REDcode A3 on REDbridge 0.17.0 (#19, #20)",
     "steps": 11,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-20: synced sets, the SIMD player whole"
    },
    {
     "name": "window-check.mjs (#22)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-22: 24 checks against two Electron stand-ins; the probe passes on the same build"
    },
    {
     "name": "REDcode's Run in Tab with the game (#22)",
     "steps": null,
     "status": "not run",
     "ranBy": "owner",
     "note": "REDcode's G1 and G2 are not started"
    },
    {
     "name": "Scratch check and probe on #24's build",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-25, game 2.5: 15 checks on the issue's sector (buffers walked, searched, patched, saved and read back); probe and REDcode's smoke test pass"
    },
    {
     "name": "Scratch check and probe on #23's build",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-25, game 2.5: 20 checks; 5,190 sectors with 21,079 variants, the dev PC's EDGEbuilder bake found in its own archive"
    },
    {
     "name": "REDcode's use of #23 and #24 (sector layers, buffer edits)",
     "steps": null,
     "status": "not run",
     "ranBy": "owner",
     "note": "Waits for REDcode to use them and for a REDbridge release"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEbuilder",
     "what": "#11 is used when B3b or B7 starts (B3b itself waits on REDnode #24)",
     "ref": "REDbridge #11",
     "done": "2026-11-20"
    },
    {
     "who": "EDGEfab",
     "what": "An in-game check that an imported clip plays; for rig import, F7a's prop and bones (F7a, after its F3 and F2, may need no writer)",
     "ref": "REDbridge #14"
    },
    {
     "who": "REDcode",
     "what": "Its Game view (G1, G2) to use window.* and start REDbridge with --windows",
     "ref": "REDbridge #22"
    }
   ],
   "ownerActions": [
    {
     "ref": "RB1",
     "what": "Ask for release runs: it is released at the owner's request from the REDnode session",
     "since": "2026-11-16"
    },
    {
     "ref": "RB2",
     "what": "Decide when to schedule Linux support",
     "since": "2026-11-16"
    },
    {
     "ref": "RB3",
     "what": "Close REDbridge #15 and #16: both passed in the game 2026-11-08 (EDGEbuilder 0.8.1)",
     "since": "2026-11-16",
     "done": "2026-11-17",
     "outcome": "Both closed on GitHub on 2026-11-17"
    },
    {
     "ref": "RB4",
     "what": "Place REDbridge #23 (items 1 and 2) and #24 in the order; neither is urgent. Recommended: #24 first (it lets REDcode edit inside sector buffers and drop a workaround), then #23",
     "since": "2026-11-25",
     "done": "2026-11-25",
     "outcome": "Build the requests now, ahead of the scene spike"
    }
   ],
   "risks": [
    {
     "what": "Open requests: #14 (EDGEfab, waits on its F7a), #21 (the wiki rule: followed for 0.19.0, not yet written in its CLAUDE.md), #22 (built, waits on REDcode's Game view), #23 (REDcode's sector layers: variants with their ranges and mods' sectors; its item 3 dropped after REDcode's probe), #24 (cr2w walking into parsed buffers such as worldInstancedMeshNodeBuffer, from a modder's report)",
     "done": "2026-11-25"
    },
    "Open requests: #14 (EDGEfab, waits on its F7a), #22 (built, waits on REDcode's Game view), #23 and #24 (built on main 2026-11-25, wait for REDcode to use them and a release)",
    {
     "what": "#22's window.* is on main after 0.19.0: the next release carries it",
     "done": "2026-11-25"
    },
    "#22, #23 and #24 are on main after 0.19.0: the next release carries them",
    "No session of its own: the REDnode session releases it",
    "Built on a WolvenKit beta",
    {
     "what": "Two of its four open requests (#15, #16) are done and only left open; #11 waits on a later EDGEbuilder phase",
     "done": "2026-11-20"
    }
   ],
   "checkedBy": "REDnode session, 2026-11-25 (#21 closed; #23, #24 built)"
  },
  {
   "name": "EDGEdeck",
   "code": "ED",
   "ownerSeq": 7,
   "group": "Core toolkits",
   "role": "Mod manager: a library of mods outside the game folder, deployed with hardlinks; extension, command line and MCP server",
   "stage": "released",
   "version": "0.34.1",
   "lastTag": "v0.32.0",
   "lastTagDate": "2026-11-15",
   "lastCommit": "2026-11-17",
   "commitsSinceTag": 2,
   "sessions": [
    "EDGEdeck"
   ],
   "wiki": "wiki/edgedeck/",
   "plan": {
    "name": "Roadmap M0 to M6",
    "source": "docs/design.html, docs/testing.md",
    "phases": [
     {
      "id": "M0",
      "title": "Decide",
      "status": "done"
     },
     {
      "id": "M1",
      "title": "Library: add, on and off, deploy, undo",
      "status": "done"
     },
     {
      "id": "M2",
      "title": "Kinds: frameworks, REDmod, conflicts",
      "status": "done"
     },
     {
      "id": "M3",
      "title": "Nexus: links, metadata, updates",
      "status": "done"
     },
     {
      "id": "M4",
      "title": "Loop with REDcode and REDnode",
      "status": "done"
     },
     {
      "id": "M5",
      "title": "Share: loadouts, CLI, MCP, stores",
      "status": "done"
     },
     {
      "id": "M6",
      "title": "Setup: Move library and Get frameworks shipped; requirements to do",
      "status": "in progress"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "No next version named; nothing unreleased on main",
     "M6's last part (requirements) waits on Nexus"
    ]
   },
   "handTests": [
    {
     "name": "Hand tests 1 to 30 (through 0.31.0)",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "By 2026-11-10, except test 25 and the free-account half of 23"
    },
    {
     "name": "23 (free half) and 25: a free Nexus account",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "The owner's account is Premium; covered by the smoke test and a contributor's use"
    },
    {
     "name": "31 FOMOD, first install",
     "steps": null,
     "status": "passed",
     "ranBy": "contributor",
     "note": "One mod, by a contributor; the owner has not run it"
    },
    {
     "name": "32 FOMOD, the same file again",
     "steps": null,
     "status": "partly run",
     "ranBy": "contributor",
     "note": "The case with REDbridge running is not tried"
    },
    {
     "name": "33 FOMOD choices from Vortex",
     "steps": null,
     "status": "passed",
     "ranBy": "contributor",
     "note": "15 of 15; the owner has not run it"
    },
    {
     "name": "34 FOMOD, options to review from a real update",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "No FOMOD mod has had such an update yet"
    },
    {
     "name": "35 FOMOD in Update all (Premium)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "The contributor's account is free"
    },
    {
     "name": "36 Changed files: Keep all / Put all back",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Since 0.33.0"
    },
    {
     "name": "38 Nexus links after the forwarder fix",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Since 0.33.0; on a PC where EDGEdeck held Nexus links with 0.32.0 or older"
    },
    {
     "name": "37 EDGEmods link from a browser click (EDGEdeck#16 part 1)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Since 0.33.0; without the EDGEmods extension (R4) only the 'needs the extension' message can be seen"
    },
    {
     "name": "39 Mods view row icons: Deploy, Check for updates, Update",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "With the test build before 0.34.0, 2026-11-23"
    }
   ],
   "ownerSpotTests": [
    {
     "id": "31 to 33",
     "feature": "FOMOD installs: 0.32.0 shipped on a contributor's tests only",
     "status": "not run",
     "ref": "ED6",
     "since": "2026-11-16"
    },
    {
     "id": "35",
     "feature": "FOMOD in Update all, which needs a Premium account",
     "status": "not run",
     "ref": "ED7",
     "since": "2026-11-16"
    }
   ],
   "waitingOn": [
    {
     "who": "upstream",
     "what": "Nexus has not issued an OAuth client id; it asked to meet first",
     "ref": "CLAUDE.md, Nexus OAuth"
    },
    {
     "who": "EDGEmods",
     "what": "Its extension (R4c) to call installMods and edgemodsMods end to end; EDGEdeck#16 parts 1 to 3 released (0.33.0, 0.34.0)",
     "ref": "EDGEdeck#16"
    }
   ],
   "ownerActions": [
    {
     "ref": "ED1",
     "what": "Run the FOMOD hand tests 31 to 35",
     "since": "2026-11-16"
    },
    {
     "ref": "ED2",
     "what": "Meet Nexus, so the OAuth client id can become the default",
     "since": "2026-11-16"
    },
    {
     "ref": "ED3",
     "what": "Delete the unused RELEASE_TOKEN organization secret and its token",
     "since": "2026-11-16"
    },
    {
     "ref": "ED4",
     "what": "Deprecate the old REDdeck listings (Marketplace, Open VSX, npm): unverified whether done",
     "since": "2026-11-16"
    },
    {
     "ref": "ED5",
     "what": "Decide when to drop the stores' preview flag",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "0.27.0 to 0.32.0: a crafted nxm:// link could run code through EDGEdeck's PowerShell forwarder; fixed in 0.33.0 (advisory GHSA-crv2-8m58-wxvv), players on older versions stay exposed until they update",
    "The FOMOD installer (a contributor's PR) was released before the owner ran any of tests 31 to 35"
   ],
   "checkedBy": "EDGEbuilder session, 2026-11-25"
  },
  {
   "name": "EDGEbuilder",
   "code": "EB",
   "ownerSeq": 2,
   "group": "Specialist toolkits",
   "role": "World builder on REDnode: pick game or mod assets, place them in the running game, bake scenes into the world",
   "stage": "released",
   "version": "0.13.2",
   "lastTag": "v0.10.9",
   "lastTagDate": "2026-11-12",
   "lastCommit": "2026-11-13",
   "commitsSinceTag": 5,
   "sessions": [
    "EDGEbuilder"
   ],
   "wiki": "wiki/edgebuilder/",
   "plan": {
    "name": "Roadmap B0 to B7, G0 to G3",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "B0",
      "title": "Decide",
      "status": "done"
     },
     {
      "id": "B1",
      "title": "Browse and drop",
      "status": "done"
     },
     {
      "id": "B2a",
      "title": "Position",
      "status": "done"
     },
     {
      "id": "B2b",
      "title": "Camera",
      "status": "done"
     },
     {
      "id": "B2c",
      "title": "Mod assets",
      "status": "done"
     },
     {
      "id": "B3-1",
      "title": "Arrange",
      "status": "done"
     },
     {
      "id": "B3-2",
      "title": "Save: scenes, Library",
      "status": "done"
     },
     {
      "id": "B4-1",
      "title": "Bake to project",
      "status": "done"
     },
     {
      "id": "B4-2",
      "title": "Solid switch",
      "status": "done"
     },
     {
      "id": "B4-3",
      "title": "Library bakes",
      "status": "done"
     },
     {
      "id": "B3c",
      "title": "NPCs",
      "status": "done"
     },
     {
      "id": "B2d-0",
      "title": "Import probe",
      "status": "done"
     },
     {
      "id": "B2d-1",
      "title": "Import a model",
      "status": "done"
     },
     {
      "id": "D0",
      "title": "Doors probe",
      "status": "done"
     },
     {
      "id": "D1a",
      "title": "Remove a door (live, World tab)",
      "status": "done"
     },
     {
      "id": "D1b",
      "title": "Bake door removals",
      "status": "done"
     },
     {
      "id": "RD",
      "title": "Remove Doors app 0.1.0 (Nexus 39060)",
      "status": "done"
     },
     {
      "id": "D2",
      "title": "Open, close, lock a door",
      "status": "done"
     },
     {
      "id": "PV",
      "title": "Explorer and the Preview switch, Pick under the cursor (drawer at the screen left, solid or not), Previews drawer, the Library in a drawer, Drop at click with the object own outline, the Library drawer width buttons, Import file picker, About tab as a Markdown quickstart, a picture details before Drop, the Objects drawer eye with Drop a copy, Explorer width arrows and reveal, Show tooltip, pick spinner (0.14.0)",
      "status": "built, tests pending"
     },
     {
      "id": "B2d-2",
      "title": "Watch: re-import on save",
      "status": "planned"
     },
     {
      "id": "ST",
      "title": "Sector Tools under World (S1 Sectors released in 0.13.2; S2 3D view, S3 previews; EDGEbuilder #9)",
      "status": "in progress"
     },
     {
      "id": "PP",
      "title": "Project picker (REDcode #32), released in 0.13.2",
      "status": "done"
     },
     {
      "id": "G0",
      "title": "Generated scenes probe: a 5,000-object scene baked and loaded (offline half done)",
      "status": "in progress"
     },
     {
      "id": "G1",
      "title": "Generated scenes: the format contract and a command line (check, bake, game closed); first slice built on the cosmic branch, not released",
      "status": "in progress"
     },
     {
      "id": "B4-4",
      "title": "Detail: a level-of-detail setting on baked meshes, after a probe",
      "status": "planned"
     },
     {
      "id": "B3b",
      "title": "World objects, inspector",
      "status": "planned"
     },
     {
      "id": "B4b",
      "title": "Edit the world",
      "status": "planned"
     },
     {
      "id": "B4c",
      "title": "Quest places",
      "status": "planned"
     },
     {
      "id": "B5",
      "title": "Lights and more kinds, split by kind: B5-1 lights, B5-2 decals, B5-3 particles and fog, B5-4 colliders, B5-5 sounds",
      "status": "planned"
     },
     {
      "id": "G2",
      "title": "Generated scenes: big scenes in an editor (in game or REDcode's sector view)",
      "status": "planned"
     },
     {
      "id": "G3",
      "title": "Generated scenes: hand edits back as a diff",
      "status": "planned"
     },
     {
      "id": "T0-T3",
      "title": "Tools: plugins in a drawer, with an API (agreed 2026-11-24; T0 probe built the same day, its game check pending)",
      "status": "in progress"
     },
     {
      "id": "B6",
      "title": "Comfort",
      "status": "planned"
     },
     {
      "id": "E0",
      "title": "Sector view probe",
      "status": "done"
     },
     {
      "id": "B7",
      "title": "Project builder: VS Code, world map",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "0.14.0",
    "needs": [
     "0.14.0 in-game test: Previews, the Explorer and the Preview switch, Pick under the cursor, the Library drawer, Drop at click outline, Library drawer widths, Import file picker, About guide, a picture details before Drop, Objects eye, Explorer widths and reveal, Show tooltip, pick spinner, the Scene tab's list, minimize and Bring V (59 steps, P1 to P7; steps 1 to 35 passed, 36 to 59 and four rechecks to run)",
     "G0's look in the game (the owner)",
     "The rest of G1 on the cosmic branch, then its merge into main"
    ]
   },
   "handTests": [
    {
     "name": "Previews, Explorer, Pick under the cursor, Library drawer, Drop at click outline, Import file picker, About guide (0.14.0, in game)",
     "steps": 51,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Built 2026-11-23 on main; checked in REDnode host with REDbridge 0.18.0 (Previews pictures, the Explorer's folders and counts, a crate's 3D preview with drag and zoom, a filter, Drop; the Preview switch for search results; the search box clear button; Pick under the cursor (its switch only: the pick needs the game); the Library drawer). The crosshair and the object's outline need the game. Steps 1 to 35 passed in game on 2026-11-24 on the morning build (dbb20bf). Added the same day at the owner ask, checked in REDnode host: picture details before Drop, right button tap or hold in Drop at click, the Objects drawer eye, Explorer widths and reveal, Preview drawer headers, Show tooltip, pick spinner, and the Drop a copy cursor fix. Steps 36 to 59, and 6, 9, 11 and 33 again, to run on the newest build. Fixed 2026-11-24 from the G0 look: Solid and Collision data lines, a click picks instanced destructibles (a bake's solid objects), raycasts ask the Dynamic group so Drop at click lands on solid bakes, the drawer closes in place. Deployed 2026-11-25 (test-17). Added 2026-11-25 at the owner ask, checked in REDnode host, deployed 2026-11-25 as test-18 with the panels renamed (Selected Asset, Object, Scene, Node; step 59): the Scene tab's Objects title with out of the window, one click previews and two fly, Selected minimizes, Bring V (steps 53 to 59)"
    },
    {
     "name": "G0 Generated scenes probe (offline bake, then in game)",
     "steps": null,
     "status": "partly run",
     "ranBy": "script + owner",
     "note": "2026-11-22, offline half only: a modding team's own scene (4,965 objects) read as format 1; the 3,774 objects on the game's files baked in 9.0 s and packed, REDbridge 0.17.0; the whole scene was refused without bounds. 2026-11-23: their second sample has bounds for their own files, and all 4,965 objects baked in 7.5 s. The look in the game is not run"
    },
    {
     "name": "D2 Open, close, lock (0.13.0 and 0.13.1, in game)",
     "steps": 12,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-23: steps 1 to 11 on 0.13.0; step 12 failed there (an elevator force-unlocks its doors) and passed as R1 to R5 on 0.13.1, where Lock seals an elevator's door"
    },
    {
     "name": "S1 Sectors (0.13.0 to 0.13.2, in game)",
     "steps": 11,
     "status": "passed",
     "ranBy": "owner + Claude",
     "note": "Passed in game 2026-11-23 (the owner: all 11 steps). The drawer scrolls to a picked row (0.13.1) and shows one past the 300 rows (0.13.2): both checked in game through the service"
    },
    {
     "name": "Project picker (0.13.1, with REDcode 0.10.15)",
     "steps": 5,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in game 2026-11-23 on 0.13.1, all five steps. The bake list is titled \"Bakes for <project>\" in 0.13.2, seen in game by the owner"
    },
    {
     "name": "Remove Doors 0.1.0 (in game)",
     "steps": 11,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-19, three runs: Scan Doors with the eye, Jump, Remove, a load, Bring back, the app off and on all passed; a door's outline is white whatever colour, the red PICKED pin marks it. Released as 0.1.0 (GitHub remove-doors-v0.1.0, Nexus 39060)"
    },
    {
     "name": "0.12.3 to 0.12.5 checks (in game)",
     "steps": 4,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-19 with REDbridge 0.16.0: the removal bake seen as in the game and listed; the counts \"0 added, 2 removed\"; long paths wrap in tooltips. Released as 0.12.5"
    },
    {
     "name": "D1b Bake removals (in game)",
     "steps": 10,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-19 on 0.12.2 with REDbridge from its main: V's door and the elevator door baked with both stand-ins, gone with EDGEbuilder off; F10 pauses and resumes. 0.12.3 finds a bake of removals alone by its .xl"
    },
    {
     "name": "E0 sector view probe (outside the game)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-19: City Center level 0 is 6,522 unique meshes in 605,801 copies; plain GLB exports 20 to 35 ms a mesh, textured 0.8 s and 6 MB; instancing draws a busy sector in 190 to 710 calls. Numbers on EDGEbuilder #8"
    },
    {
     "name": "D1a Remove from world (in game)",
     "steps": 13,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-19 on 0.12.1 (0.12.0 found the proxy in the doorway after a load): every retest step as written; a door shown again after a load comes back as its proxy until its area reloads (for D1b)"
    },
    {
     "name": "0.11.1 import probe with the npm core (outside the game)",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-19: edgefab-core 0.1.0 from npm with EDGEmat's core 0.3.3, exactly as the zip bundles it; prepared, 24 textures in about 150 s, packed"
    },
    {
     "name": "D0 Doors probe (in game)",
     "steps": 13,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-19 on probe 0.1.1, the desktop: a door hidden live with its collision, also after a fast travel; baked removal works as ArchiveXL deletions of node data entries, with the door's proxy mesh; open, close, lock work and stay in the save; a bake cannot set a starting state in place"
    },
    {
     "name": "0.11.1 retest (in game)",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-18 on 0.11.1, the desktop: a refused swap retried by Drop, Stop within one texture, the outline after Edit"
    },
    {
     "name": "B2d-1 Import a model (in game)",
     "steps": 10,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-18 on 0.11.0, the desktop; 224 s an Import for 29 textures; three findings fixed in 0.11.1"
    },
    {
     "name": "B2d-0 Import probe",
     "steps": null,
     "status": "passed",
     "ranBy": "script + owner",
     "note": "2026-11-13; about 2 minutes a model, mostly textures; swap and spawn passed in the game"
    },
    {
     "name": "B3c NPCs (in game)",
     "steps": 17,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-12 on 0.10.9, the owner's laptop"
    },
    {
     "name": "T0 Tools probe (in game)",
     "steps": 10,
     "status": "not run",
     "ranBy": "owner",
     "note": "2026-11-24: checked in REDnode's host; the newest 0.14.0 build and edgebuilder-tool-probe deployed 2026-11-25, the game steps not run"
    }
   ],
   "ownerSpotTests": [
    {
     "id": "B4-1 step 17",
     "feature": "0.7.3's New tooltip on the Scene tab says press \"New Scene Here\" in quotes (released without its own look)",
     "status": "passed"
    }
   ],
   "waitingOn": [
    {
     "who": "REDnode",
     "what": "service.providers(role): every installed tool with its manifest and whether it is on, for the Tools tab (T1); passed in game and closed, ships in REDnode 0.73.0 (EDGEbuilder then requires it)",
     "ref": "REDnode #58",
     "done": "2026-11-25"
    },
    {
     "who": "REDnode",
     "what": "Collision groups for world.pick's physics line: a bake's solid objects are Dynamic, so holdsHit misses them. REDnode side passed in game 2026-11-25, ships in 0.73.0; open until EDGEbuilder Pick drops its own line and requires REDnode 0.73.0",
     "ref": "REDnode #60"
    },
    {
     "who": "EDGEfab",
     "what": "Keep unchanged textures on a second Add to Project, for Watch (B2d-2)",
     "ref": "EDGEfab #6"
    },
    {
     "who": "REDnode",
     "what": "World node registry for the inspector (B3b): pick, outline and hide shipped experimental in REDnode 0.67.3; entities and streaming around the camera wait on its N2",
     "ref": "REDnode #24"
    },
    {
     "who": "REDnode",
     "what": "A kinds option on world.load, so a script spawns only a baked scene's people (not urgent; a filter works meanwhile)",
     "ref": "REDnode #49"
    },
    {
     "who": "REDnode",
     "what": "world.load reads scene format 3 (world edits), for other packages loading a scene that removes something",
     "ref": "REDnode #51"
    },
    {
     "who": "REDnode",
     "what": "An entity node shown again after a load brings back the working entity, not its proxy (not urgent)",
     "ref": "REDnode #52"
    },
    {
     "who": "REDcode",
     "what": "A plugin contract in its sector view, so EDGEbuilder for VS Code adds scenes on top of it (not urgent; REDcode's to design)",
     "ref": "REDcode #35"
    }
   ],
   "ownerActions": [
    {
     "ref": "EB1",
     "what": "Add the EDGEmodders header to Remove Doors' nexus.png and upload it as its Nexus page's primary image; fill in the form from packs/remove-doors/nexus/README.md; add screenshots of the window",
     "since": "2026-11-19"
    },
    {
     "ref": "EB2",
     "what": "G0: look at the baked generated scene in the game (0.13's tests are done); the team was asked for their archives on 2026-11-23, and the look can start without them",
     "since": "2026-11-23"
    }
   ],
   "risks": [
    "Import is slow: about 2 minutes for a 4096 px model",
    "Watch (B2d-2) cannot work until EDGEfab #6 keeps unchanged textures",
    "Tripo models look rough up close in the game: EDGEfab's quality research, not a B2d blocker",
    "EDGEbuilder #3 (quest places) waits on purpose: it is phase B4c, planned with EDGEquest's Q4"
   ],
   "checkedBy": "EDGEbuilder session, 2026-11-25"
  },
  {
   "name": "EDGEwave",
   "code": "EW",
   "ownerSeq": 2,
   "group": "Specialist toolkits",
   "role": "Sound studio: edit, mix and re-voice game sounds into a mod, with voice tools, an API and an MCP server",
   "stage": "released",
   "version": "0.3.0",
   "lastTag": "v0.2.0",
   "lastTagDate": "2026-11-07",
   "lastCommit": "2026-11-17",
   "commitsSinceTag": 6,
   "sessions": [],
   "wiki": "wiki/edgewave/",
   "plan": {
    "name": "Phases A0 to A6, V1 and V2",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "A0",
      "title": "Scaffold",
      "status": "done"
     },
     {
      "id": "A1",
      "title": "Edit",
      "status": "done"
     },
     {
      "id": "A2",
      "title": "Mix",
      "status": "done"
     },
     {
      "id": "A3",
      "title": "Into the game",
      "status": "done"
     },
     {
      "id": "V1",
      "title": "Voice tools",
      "status": "done"
     },
     {
      "id": "V2",
      "title": "Voice a quest, and sound events",
      "status": "in progress"
     },
     {
      "id": "DL",
      "title": "Desk, Project and Library",
      "status": "done"
     },
     {
      "id": "#13",
      "title": "speakLine with ElevenLabs timings, for EDGEfab Lip Sync",
      "status": "built, tests pending"
     },
     {
      "id": "#12",
      "title": "Shared keys: the ElevenLabs key from REDcode's key store (its pilot), and Don't Allow (#14)",
      "status": "done"
     },
     {
      "id": "A4",
      "title": "Index: sound banks, full search",
      "status": "planned"
     },
     {
      "id": "A5",
      "title": "Voices and objects",
      "status": "planned"
     },
     {
      "id": "A6",
      "title": "EDGE: in game, MCP, REDnode",
      "status": "in progress"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "#13 speakLine with timings: hand test passed but for step 3, which waits for the Lip Sync tab in REDcode",
     "Add to Project's Pick a game sound to replace… row: agreed 2026-11-06, not built",
     "The .wem voice route through Wwise, not yet seen in the game"
    ]
   },
   "handTests": [
    {
     "name": "A2 Mix",
     "steps": 15,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-06"
    },
    {
     "name": "A3 Into the game",
     "steps": 12,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-06"
    },
    {
     "name": "V1 Voice tools",
     "steps": 11,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-06"
    },
    {
     "name": "V2 Voice a quest",
     "steps": 13,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-06, with EDGEquest"
    },
    {
     "name": "EDGEwave Voice for REDnode (in game)",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-06"
    },
    {
     "name": "Desk, Project and Library",
     "steps": 16,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-16, round 1, steps 1 to 15, four findings fixed during it; round 2, 2026-11-22, step 16 (Reveal in File Explorer)"
    },
    {
     "name": "Speaking a line with timings (#13)",
     "steps": 8,
     "status": "partly run",
     "ranBy": "owner",
     "note": "2026-11-22: every step but 3 passed (1, 1b, 2, 4, 5, 6, 7); step 3 waits for the Lip Sync tab in REDcode (moving from EDGEfab, after REDcode's next release)"
    },
    {
     "name": "Shared keys (#12, #14)",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Steps 1 to 5 passed 2026-11-21 (moved, asked, read by the MCP server, changed, cleared); step 6, Don't Allow (#14), passed 2026-11-22"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "REDnode",
     "what": "Sound API steps S2 to S4, for the in-game features (A6)",
     "ref": "REDnode docs/sound.md"
    },
    {
     "who": "REDcode",
     "what": "The Lip Sync tab, moving from EDGEfab into REDcode (a branch, merged after REDcode's next release), for #13 hand test step 3",
     "ref": "EDGEwave docs/testing.md, Speaking a line with timings"
    }
   ],
   "ownerActions": [
    {
     "ref": "EW1",
     "what": "Say whether to build Add to Project's Pick a game sound to replace… row next",
     "since": "2026-11-16"
    },
    {
     "ref": "EW2",
     "what": "Say whether to file requests: REDcode's Library view buttons for sounds; Reveal in File Explorer wording for EDGEdeck and EDGEmat",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "Voice lines have no route into the game yet (the .wem route)"
   ],
   "checkedBy": "EDGEwave session, 2026-11-22"
  },
  {
   "name": "EDGEmat",
   "code": "EM",
   "ownerSeq": 5,
   "group": "Specialist toolkits",
   "role": "Material editor: read, edit, generate and apply game materials, and the Wardrobe Designer app",
   "stage": "released",
   "version": "0.3.4",
   "lastTag": "v0.3.2",
   "lastTagDate": "2026-11-13",
   "lastCommit": "2026-11-17",
   "commitsSinceTag": 14,
   "sessions": [
    "EDGEmat"
   ],
   "wiki": "wiki/edgemat/",
   "plan": {
    "name": "Phases M0 to M7, Wardrobe Designer W0 to W3",
    "source": "docs/design.md, docs/progress.md",
    "phases": [
     {
      "id": "M0",
      "title": "Spec",
      "status": "done"
     },
     {
      "id": "M1",
      "title": "Library (Game Materials)",
      "status": "done"
     },
     {
      "id": "M2",
      "title": "Read",
      "status": "done"
     },
     {
      "id": "M3",
      "title": "Edit",
      "status": "done"
     },
     {
      "id": "M4",
      "title": "Make: materials for new meshes",
      "status": "in progress"
     },
     {
      "id": "M5",
      "title": "Preview: the bake",
      "status": "in progress"
     },
     {
      "id": "M6",
      "title": "Beyond mlsetup",
      "status": "planned"
     },
     {
      "id": "M7",
      "title": "Ship (parts done early: stores, npm, Nexus page; its own criterion not started)",
      "status": "planned"
     },
     {
      "id": "W0",
      "title": "Wardrobe Designer: checks",
      "status": "done"
     },
     {
      "id": "W1",
      "title": "Wardrobe Designer: restyle by words",
      "status": "done"
     },
     {
      "id": "W2",
      "title": "Wardrobe Designer: patterns (first slice; pattern masks later)",
      "status": "done"
     },
     {
      "id": "W3",
      "title": "Wardrobe Designer: reshape",
      "status": "in progress"
     }
    ]
   },
   "nextRelease": {
    "version": "0.3.5",
    "needs": [
     "Separately, Wardrobe Designer 0.1.0, its own release: fixes built, Reshape and keys rerun, install test, three Nexus screenshots"
    ]
   },
   "handTests": [
    {
     "name": "Glow and tint in the 3D view",
     "steps": 4,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-22 (owner, all 4 steps). Built 2026-11-22 (owner's ask): View in 3D draws a textured material's BaseColorScale tint and its glow's color (z emissive blue is blue, the sneakers' lights amber), until REDcode draws glow"
    },
    {
     "name": "Shared keys",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-22 (owner, all 7 steps) for #18 (K4d): Gemini and OpenAI from REDcode's Keys, the move, Set and Clear, the MCP server reading the store, and after Don't Allow no password box (REDcode's keys.status)"
    },
    {
     "name": "The Desk's edits in the 3D view",
     "steps": 8,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-22 (owner, all 8 steps) for #17 (REDcode's sector view)"
    },
    {
     "name": "View in 3D follows a part's change",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-22 (owner, all 6 steps). Step 6 found New Material Here did not refresh the Desk's copy of the mesh; fixed the same day"
    },
    {
     "name": "The bake: color",
     "steps": 4,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-18, all 4 steps"
    },
    {
     "name": "Zoom on the setup map",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-18"
    },
    {
     "name": "Bumps the right way round",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-18 on the rerun, after the fix for bumps on a garment (the first run showed none); the studs read raised in the game"
    },
    {
     "name": "Wardrobe Designer: Reshape and keys (in game)",
     "steps": 12,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Steps 1 to 8 run 2026-11-16; 9 to 12 open; faults found, fixes not built yet; reruns after them"
    },
    {
     "name": "Reshape with the game's materials (in game)",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-18 (three cowboy hats): the game's own textures, bright; the band a little distorted by the fit's bend, to improve later"
    },
    {
     "name": "Game materials on a prop's parts (#12)",
     "steps": 11,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-18, all 11 steps, in the game: glossy car paint at the right size, glass, blue glow. #12 closed; EDGEfab 0.1.0 waits on the EDGEmat release"
    },
    {
     "name": "Wardrobe Designer: install from the release zip",
     "steps": 5,
     "status": "not run",
     "ranBy": null,
     "note": "Gate for Wardrobe Designer's first release"
    },
    {
     "name": "Install of 0.3.4 from the Marketplace, and Connect an assistant",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Released 2026-11-22 (the joint K4d release, run 45083176318); the test build's VSIX was not installed before the run"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [],
   "ownerActions": [
    {
     "ref": "EM1",
     "what": "Install EDGEmat 0.3.4 from the Marketplace in a normal VS Code, then Connect an assistant",
     "since": "2026-11-22"
    },
    {
     "ref": "EM2",
     "what": "Finish steps 9 to 12 of Wardrobe Designer's Reshape and keys; answer its session about the screen resolution and the picture click",
     "since": "2026-11-16"
    },
    {
     "ref": "EM3",
     "what": "Delete EDGEmat_ReshapeGame.archive and EDGEmat_Bumps.archive from the game's archive\\pc\\mod (tests done)",
     "since": "2026-11-18"
    },
    {
     "ref": "EM4",
     "what": "Narrow the Azure DevOps token and plan the move to Entra ID publishing before it expires (about February 2027)",
     "since": "2026-11-16"
    },
    {
     "ref": "EM5",
     "what": "Three screenshots for Wardrobe Designer's Nexus page",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "Reshape's game materials passed in the game, but the band bends a little out of shape on the new crown (EDGEmat's fit); Tripo on the new dark background is untested",
    "The Marketplace token lasts to about February 2027, and the next renewal may need Entra ID publishing",
    "The 3D view shows color only: car paint looks flat and glass shows REDcode's swatch there. Shine (roughness, metal) is next, at the owner's request"
   ],
   "checkedBy": "EDGEmat session, 2026-11-23 (0.3.4 released 2026-11-22; REDcode #31 shipped in REDcode 0.10.15, so EDGEmat waits on nothing; next: part commands for game meshes on the Desk, then shine in the 3D view)"
  },
  {
   "name": "EDGEquest",
   "code": "EQ",
   "ownerSeq": 5,
   "group": "Specialist toolkits",
   "role": "Quest maker: reads the game's quests in plain words and makes new ones from a story file",
   "stage": "released",
   "version": "0.1.1",
   "lastTag": "v0.1.1",
   "lastTagDate": "2026-11-06",
   "lastCommit": "2026-11-08",
   "commitsSinceTag": 3,
   "sessions": [],
   "wiki": "wiki/edgequest/",
   "plan": {
    "name": "Phases Q0 to Q8, with happening steps H1 to H4",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "Q0",
      "title": "Design",
      "status": "done"
     },
     {
      "id": "Q1",
      "title": "Read",
      "status": "done"
     },
     {
      "id": "Q2",
      "title": "Write",
      "status": "in progress"
     },
     {
      "id": "Q3",
      "title": "Try it",
      "status": "planned"
     },
     {
      "id": "Q4",
      "title": "Voice, sound and world",
      "status": "in progress"
     },
     {
      "id": "Q5",
      "title": "Ship",
      "status": "in progress"
     },
     {
      "id": "Q6",
      "title": "The assistant builds it all",
      "status": "planned"
     },
     {
      "id": "Q7",
      "title": "Mods' tools",
      "status": "planned"
     },
     {
      "id": "Q8",
      "title": "Happenings",
      "status": "planned"
     },
     {
      "id": "H1",
      "title": "Happening file at a game place",
      "status": "planned"
     },
     {
      "id": "H2",
      "title": "Stage from EDGEbuilder",
      "status": "planned"
     },
     {
      "id": "H3",
      "title": "Groups and quest switches",
      "status": "planned"
     },
     {
      "id": "H4",
      "title": "Around V (arrivals, AV)",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "Phone calls in quests",
     "Copy Scene from a game scene into a quest",
     "Store pages describe EDGEwave features that need EDGEwave 0.2.0 on the stores"
    ]
   },
   "handTests": [
    {
     "name": "Q1 Read, and following a game quest without raw files",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-21 to 2026-11-04"
    },
    {
     "name": "Storyboard and Step 3",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-24"
    },
    {
     "name": "Voicing a scene with sounds in it (0.1.1 fix)",
     "steps": 4,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-06"
    },
    {
     "name": "In-game tests 1 to 7",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "By 2026-11-03; test 7 on game 2.5"
    },
    {
     "name": "In-game test 8: kinds of choice options",
     "steps": null,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Passed except the other-lifepath check, left for an end-to-end run"
    },
    {
     "name": "Experiments X1a and X1b (prologue Trauma Team scene)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Not built yet"
    }
   ],
   "ownerSpotTests": [
    {
     "id": "Test 8",
     "feature": "A Corpo-only option is hidden on another lifepath (needs a non-Corpo save)",
     "status": "not run",
     "ref": "EQ4",
     "since": "2026-11-16"
    },
    {
     "id": "Test 8",
     "feature": "An attribute check V passes",
     "status": "not run",
     "ref": "EQ5",
     "since": "2026-11-16"
    }
   ],
   "waitingOn": [
    {
     "who": "EDGEwave",
     "what": "0.2.0 on the stores, and the .wem route for voiced lines in game (Q4)",
     "ref": "EDGEwave #5, #7"
    },
    {
     "who": "EDGEbuilder",
     "what": "Quest places, and the stage for happenings",
     "ref": "EDGEbuilder #3"
    },
    {
     "who": "REDnode",
     "what": "Play an animation on a spawned character (Q8); a switch for calls from mods (Q7)",
     "ref": "REDnode #39"
    },
    {
     "who": "REDcode",
     "what": "Play a game animation on its rig in the mesh viewer",
     "ref": "REDcode #21"
    },
    {
     "who": "EDGEmat",
     "what": "Not blocking: materialsFromModel keeps the textures whose source did not change, so a glow strength change is one .mi write",
     "ref": "EDGEmat #13"
    },
    {
     "who": "EDGEchat",
     "what": "List edgequest-mcp in the plugin",
     "ref": "EDGEchat #3"
    },
    {
     "who": "EDGEkit",
     "what": "Build EDGEquest in and add it to the extension pack",
     "ref": "EDGEkit #7"
    }
   ],
   "ownerActions": [
    {
     "ref": "EQ1",
     "what": "Run the end-to-end test with a non-Corpo save (test 8 leftovers)",
     "since": "2026-11-16"
    },
    {
     "ref": "EQ2",
     "what": "Release EDGEwave 0.2.0, or approve a 'needs EDGEwave 0.2.0' note on EDGEquest's pages",
     "since": "2026-11-16"
    },
    {
     "ref": "EQ3",
     "what": "Ask for the next release run when phone calls and Copy Scene are ready",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "Store and Nexus pages describe sound features that need EDGEwave 0.2.0, not yet on the stores",
    "Two quests at the same place both fire their scenes; nothing warns yet"
   ]
  },
  {
   "name": "EDGEhack",
   "code": "EH",
   "ownerSeq": 4,
   "group": "Specialist toolkits",
   "role": "Quickhack editor: edits and creates quickhacks as TweakXL and ArchiveXL files",
   "stage": "released",
   "version": "0.1.3",
   "lastTag": "v0.1.2",
   "lastTagDate": "2026-11-12",
   "lastCommit": "2026-11-12",
   "commitsSinceTag": 1,
   "sessions": [
    "REDnode, EDGEHack & REDagent"
   ],
   "wiki": "wiki/edgehack/",
   "plan": {
    "name": "Phases H0 to H6",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "H0",
      "title": "Scaffold",
      "status": "done"
     },
     {
      "id": "H1",
      "title": "Read",
      "status": "done"
     },
     {
      "id": "H2",
      "title": "Edit",
      "status": "done"
     },
     {
      "id": "H3",
      "title": "New and Effects",
      "status": "done"
     },
     {
      "id": "H3b",
      "title": "Own icons",
      "status": "done"
     },
     {
      "id": "H3c",
      "title": "Scripts",
      "status": "done"
     },
     {
      "id": "H3d",
      "title": "Feature lines",
      "status": "done"
     },
     {
      "id": "H4",
      "title": "Try Live and MCP",
      "status": "done"
     },
     {
      "id": "H5",
      "title": "Library",
      "status": "done"
     },
     {
      "id": "H6",
      "title": "First release",
      "status": "done"
     },
     {
      "id": "H6.5",
      "title": "After the release: EDGEchat, REDnode pin, REDagent, wiki",
      "status": "in progress"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "Nexus page 37293 published by the owner"
    ]
   },
   "handTests": [
    {
     "name": "Shared keys (#3), the OpenAI key from REDcode's Keys",
     "steps": 5,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed by the owner on 2026-11-22, all 5 steps and step 2b (Don't Allow); Generate's errors moved into its box during the test (a813493); #3 closed"
    },
    {
     "name": "0.1.1 Key in VS Code secret storage",
     "steps": 4,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-11"
    },
    {
     "name": "H6.1 The last game check (with REDagent)",
     "steps": 5,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-11"
    },
    {
     "name": "H5 Library",
     "steps": 10,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-11"
    },
    {
     "name": "H4.5 The MCP server with Claude Code",
     "steps": 8,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Steps 1 to 7 passed; step 8, Try Live through MCP, left for later"
    },
    {
     "name": "H4.3 Try Live",
     "steps": 8,
     "status": "passed",
     "ranBy": "owner",
     "note": "A live name shows only after Pack and Play: a known limit"
    },
    {
     "name": "H4.4 Core outside VS Code",
     "steps": 11,
     "status": "passed",
     "ranBy": "script",
     "note": ""
    }
   ],
   "ownerSpotTests": [
    {
     "id": "H4.5 step 8",
     "feature": "Try Live through the MCP server",
     "status": "not run",
     "ref": "EH3",
     "since": "2026-11-16"
    },
    {
     "id": "H3.1",
     "feature": "A status effect from a script function, and spread",
     "status": "not run",
     "ref": "EH4",
     "since": "2026-11-16"
    }
   ],
   "waitingOn": [
    {
     "who": "EDGEchat",
     "what": "List edgehack-mcp in the plugin",
     "ref": "EDGEchat #4"
    }
   ],
   "ownerActions": [
    {
     "ref": "EH1",
     "what": "Publish Nexus page 37293 (files are uploaded, the page is held back)",
     "since": "2026-11-16"
    },
    {
     "ref": "EH2",
     "what": "Supply the screenshots the wiki guide names",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "The VS Code Marketplace took 0.1.2 on 2026-11-19 after support's review, and 0.1.3 passed on its own on 2026-11-22 (listed minutes after the run)",
    "Try Live cannot change names: the game reads its text tables at load"
   ],
   "checkedBy": "REDnode session, 2026-11-22 (0.1.3 released with the K4d tools)"
  },
  {
   "name": "EDGEkit",
   "code": "EK",
   "ownerSeq": 4,
   "group": "Specialist toolkits",
   "role": "The Edgemodders editor: a branded Code - OSS build with the EDGE extensions built in, and an extension pack",
   "stage": "released",
   "version": "1.143.1",
   "lastTag": "v1.140.6",
   "lastTagDate": "2026-11-12",
   "lastCommit": "2026-11-12",
   "commitsSinceTag": 4,
   "sessions": [],
   "wiki": "wiki/edgekit/",
   "plan": {
    "name": "Phases K0 to K5",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "K0",
      "title": "Decide",
      "status": "done"
     },
     {
      "id": "K1",
      "title": "Build Code - OSS",
      "status": "done"
     },
     {
      "id": "K2",
      "title": "Brand (onboarding and Welcome text await the owner's review)",
      "status": "in progress"
     },
     {
      "id": "K3",
      "title": "Bundle the EDGE extensions",
      "status": "done"
     },
     {
      "id": "K4",
      "title": "Release pipeline, updates, pack",
      "status": "in progress"
     },
     {
      "id": "K5",
      "title": "Track upstream (first move, 1.140.0 to 1.143.1, released 2026-11-19; the next when needed)",
      "status": "in progress"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "The Nexus description (EDGEhack no longer Open VSX only in the pack) goes to Nexus with the next release; pack 0.7.1 published 2026-11-20",
     "The next move to a newer Code - OSS, or a new EDGE tool to build in (EDGEdir)"
    ]
   },
   "handTests": [
    {
     "name": "1.140.2 fresh first start and Claude Code for EDGE setup",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-26"
    },
    {
     "name": "1.140.3 installer's Nexus links box",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-01"
    },
    {
     "name": "Self-update 1.140.1 to 1.140.2",
     "steps": null,
     "status": "partly run",
     "ranBy": "script",
     "note": "Restart to Update was never clicked"
    },
    {
     "name": "Restart to Update on an older real install",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Listed as the next step since 1.140.1"
    },
    {
     "name": "Install beside VS Code",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": ""
    },
    {
     "name": "1.140.4 to 1.140.6 installers",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Each released straight away at the owner's request"
    },
    {
     "name": "1.143.1 smoke test (K5)",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-19 on the dev PC. The first run (run 44432333208's installer) failed: REDcode's REDbridge toast hid behind the onboarding. The second, on run 44497241722's installer with the fix, passed: everything works"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Review of the onboarding and Welcome text",
     "ref": "CLAUDE.md, K3"
    }
   ],
   "ownerActions": [
    {
     "ref": "EK1",
     "what": "Review the onboarding and Welcome page text",
     "since": "2026-11-16"
    },
    {
     "ref": "EK2",
     "what": "Click Restart to Update on an older install (the laptop's 1.140.6 should offer 1.143.1): the first real click",
     "since": "2026-11-19"
    },
    {
     "ref": "EK3",
     "what": "Close EDGEkit #7 (EDGEquest), left to the owner",
     "since": "2026-11-16"
    },
    {
     "ref": "EK4",
     "what": "Code signing: the owner leans to a commercial certificate in Edgemodders' name, which needs Edgemodders registered as a company (a GitHub organization is not enough); decide when it comes up",
     "since": "2026-11-18"
    }
   ],
   "risks": [
    "The installer is not signed, so Windows SmartScreen may warn",
    "The 1.140.4 to 1.140.6 releases shipped with no installer hand test (1.143.1 had one)",
    "Upstream moves about weekly (1.147.0 on 2026-11-18); EDGEkit is on 1.143.1 since 2026-11-19"
   ],
   "checkedBy": "EDGEkit session, 2026-11-20"
  },
  {
   "name": "EDGEchat",
   "code": "EC",
   "ownerSeq": 1,
   "group": "Specialist toolkits",
   "role": "The EDGE plugin for Claude Code: modding skills, commands and the EDGE MCP servers in one install",
   "stage": "released",
   "version": "0.1.1",
   "lastTag": "v0.1.1",
   "lastTagDate": "2026-11-02",
   "lastCommit": "2026-11-08",
   "commitsSinceTag": 7,
   "sessions": [],
   "wiki": "wiki/edgechat/",
   "plan": {
    "name": "Phases P0 to P5",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "P0",
      "title": "Decide",
      "status": "done"
     },
     {
      "id": "P1",
      "title": "Skeleton: manifest, servers, setup",
      "status": "done"
     },
     {
      "id": "P2",
      "title": "Knowledge skills",
      "status": "done"
     },
     {
      "id": "P3",
      "title": "Commands: new-mod, check-mod",
      "status": "done"
     },
     {
      "id": "P4",
      "title": "Ship 0.1.0, EDGEkit one-click",
      "status": "done"
     },
     {
      "id": "P5",
      "title": "Grow: more tools' servers as they ship",
      "status": "in progress"
     }
    ]
   },
   "nextRelease": {
    "version": "0.2.0",
    "needs": [
     "Hand tests: 0.2.0 in a session (seven servers, /edge:setup, one call each) and continue in the game (needs REDagent 0.4.5)",
     "EDGEfab to confirm its wiring on EDGEchat #5"
    ]
   },
   "handTests": [
    {
     "name": "P1 in VS Code with the game",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-21"
    },
    {
     "name": "Asks before changes",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-23; remove-a-mod and default mode not run"
    },
    {
     "name": "new-mod in the game, clean install, EDGEkit one-click",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-26"
    },
    {
     "name": "Swap and restore in the game",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-02"
    },
    {
     "name": "Update from GitHub: the settings form after an update in VS Code",
     "steps": null,
     "status": "partly run",
     "ranBy": "script",
     "note": "The CLI update passed; the form in VS Code was not seen"
    },
    {
     "name": "OAuth token exchange from the CLI",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Needs an interactive sign-in"
    },
    {
     "name": "0.2.0 servers, every option empty",
     "steps": 8,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-25: all six stdio servers answer a read; mesh_items and cr2w_search fixes seen"
    },
    {
     "name": "0.2.0 in a session: seven servers, /edge:setup, edgehack asks before hack_new",
     "steps": 6,
     "status": "not run",
     "ranBy": null,
     "note": "docs/testing.md, \"0.2.0 in a session\""
    },
    {
     "name": "/edge:continue with a REDagent handoff (REDagent C6a test)",
     "steps": 6,
     "status": "not run",
     "ranBy": null,
     "note": "Needs REDagent 0.4.5, on its main"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "REDcode",
     "what": "redcode-mcp should read EDGEkit's settings folder too (no issue filed)",
     "ref": "CLAUDE.md"
    },
    {
     "who": "EDGEfab",
     "what": "Confirm how the plugin wires edgefab-mcp 0.2.0 (EDGEFAB_REDBRIDGE, keys)",
     "ref": "EDGEchat #5"
    },
    {
     "who": "REDagent",
     "what": "Release 0.4.5 with the VS Code handoff, for /edge:continue's test",
     "ref": "EDGEchat #8"
    }
   ],
   "ownerActions": [
    {
     "ref": "EC1",
     "what": "Run the next release with Update Nexus Mods: the first since the move to the shared Nexus tool",
     "since": "2026-11-16"
    },
    {
     "ref": "EC2",
     "what": "Run the 0.2.0 hand tests in docs/testing.md: \"0.2.0 in a session\", then \"continue in the game\" once REDagent 0.4.5 is out",
     "since": "2026-11-25"
    }
   ],
   "risks": [
    "main already says 0.2.0: marketplace users with auto-update get the new servers before the hand tests",
    "The check-mod and new-mod skills do not fire on plain prompts",
    "The eval judge is flaky"
   ],
   "checkedBy": "EDGEchat session, 2026-11-25 (0.2.0 on main; evals: 15 cases pass, mean delta +0.66)"
  },
  {
   "name": "REDsave",
   "code": "RS",
   "ownerSeq": 2,
   "group": "Specialist toolkits",
   "role": "Save game manager: finds saves, keeps loadouts of saves outside the game, swaps them in and titles them",
   "stage": "released",
   "version": "0.1.1",
   "lastTag": "v0.1.1",
   "lastTagDate": "2026-11-08",
   "lastCommit": "2026-11-08",
   "commitsSinceTag": 1,
   "sessions": [],
   "plan": {
    "name": "Phases S0 to S4",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "S0",
      "title": "Repo and scaffold",
      "status": "done"
     },
     {
      "id": "S1",
      "title": "Find",
      "status": "done"
     },
     {
      "id": "S2",
      "title": "Loadouts",
      "status": "done"
     },
     {
      "id": "S3",
      "title": "Titles",
      "status": "done"
     },
     {
      "id": "S4",
      "title": "First release",
      "status": "done"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "No next phase agreed"
    ]
   },
   "handTests": [
    {
     "name": "S1 Find, S2b Swap, S3b Titles",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-03 and 2026-11-04"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [],
   "ownerActions": [
    {
     "ref": "RS1",
     "what": "Upload the GitHub social preview, and set the Nexus tags by hand",
     "since": "2026-11-16"
    },
    {
     "ref": "RS2",
     "what": "Pick a next phase from the design's Later list, or leave it idle",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "Plan complete and idle since 2026-11-08",
    "Saves cannot be made again: sessions never write to the real save folder"
   ]
  },
  {
   "name": "EDGEfab",
   "code": "EF",
   "ownerSeq": 4,
   "group": "In development",
   "role": "Asset maker for props and clothing: turns a GLB or a text prompt into game-ready props (clothing next, proposed), added to a REDcode project or the EDGE Library",
   "stage": "released",
   "version": "0.2.0",
   "lastTag": null,
   "lastTagDate": null,
   "lastCommit": "2026-11-17",
   "commitsSinceTag": 0,
   "sessions": [
    "EDGEfab"
   ],
   "plan": {
    "name": "Build plan F0 to F9",
    "source": "docs/plan.md, docs/index.md",
    "phases": [
     {
      "id": "F0",
      "title": "Decisions and checks",
      "status": "done"
     },
     {
      "id": "F1",
      "title": "Props: GLB or words into a project, placed with EDGEbuilder (released as 0.1.0, 2026-11-18; 0.2.0, keys in REDcode's Keys, 2026-11-22)",
      "status": "done"
     },
     {
      "id": "F3",
      "title": "Blender sources",
      "status": "planned"
     },
     {
      "id": "F2",
      "title": "Workspace and prompts",
      "status": "planned"
     },
     {
      "id": "F7a",
      "title": "Animated props",
      "status": "planned"
     },
     {
      "id": "F4",
      "title": "Clothing",
      "status": "planned"
     },
     {
      "id": "FA",
      "title": "The agent",
      "status": "planned"
     },
     {
      "id": "F8",
      "title": "Unreal assets (props)",
      "status": "planned"
     },
     {
      "id": "F9",
      "title": "Ship",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "0.2.1",
    "needs": [
     "0.2.0 released 2026-11-22 with the K4d tools (keys in REDcode's Keys): Marketplace, Open VSX, npm, GitHub, Nexus. Nothing under Unreleased yet",
     "Next work: F3 Blender sources, then clothing (F4a, F4b; proposed 2026-11-25, waiting on the owner), then F2; a rename that closes a prop's tabs in every window; a part's game material carried back to the Desk and the Library"
    ]
   },
   "handTests": [
    {
     "name": "Keys in REDcode's Keys (EDGEfab #10): moved, asked, read over MCP, changed, cleared, Don't Allow",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed 2026-11-22: part A by Claude (13 offline checks, the real store, 8 checks of the no-key reasons), part B by the owner (6 VS Code steps with REDcode main, step 6 Don't Allow included). EDGEfab #10 closed"
    },
    {
     "name": "F1 the Pictures tab (change a picture by words, its history, Make 3D from any picture)",
     "steps": 11,
     "status": "passed",
     "ranBy": "owner",
     "note": "Part A offline by Claude passed 2026-11-17 (23 checks); part B, 11 VS Code steps, passed 2026-11-17 (owner)"
    },
    {
     "name": "F1 Add to Project again, Open in EDGEmat and Reveal in REDcode",
     "steps": 7,
     "status": "passed",
     "ranBy": "owner",
     "note": "Offline checks passed 2026-11-18 (22 checks over eight adds; 18 checks with parts swapped by EDGEmat's own build). The owner's 7 VS Code steps passed 2026-11-18, after Open in EDGEmat and Reveal in REDcode were added at the owner's ask"
    },
    {
     "name": "F1 check: game materials on a prop's parts (red car paint, blue glow, game glass) in the game",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "Passed in the game 2026-11-17 (owner): all proper by day and night, every level of detail. Whether 0.1.0 waits for its UI (EDGEmat #12) is the owner's call"
    },
    {
     "name": "F1 extension in VS Code",
     "steps": 25,
     "status": "passed",
     "ranBy": "script",
     "note": "By the EDGEweb session 2026-11-14; step 20 by the owner; passed 2026-11-15"
    },
    {
     "name": "F1 phase test: props placed with EDGEbuilder (in game)",
     "steps": 10,
     "status": "passed",
     "ranBy": "owner",
     "note": "Steps 1 to 6 by script, 7 to 10 by the owner"
    },
    {
     "name": "Release tests on the released build: smoke, core package, keys checks, package check",
     "steps": 4,
     "status": "passed",
     "ranBy": "script",
     "note": "Passed 2026-11-22 on the 0.2.0 build (core package run 4, smoke, typecheck, both keys checks, the .vsix with 11 files and no PowerShell)"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Publish Nexus page 38605 if it is not live yet (the 0.2.0 file, changelog and the description with your screenshots are on it). Nothing to test",
     "ref": "nexus/README.md"
    },
    {
     "who": "REDbridge",
     "what": "Later phase (F7a animated props), not blocking: .anims import and rig import",
     "ref": "REDbridge #14"
    },
    {
     "who": "EDGEchat",
     "what": "Not blocking: EDGEfab's MCP server in the plugin, with a Tripo key setting; 0.2.0 on npm reads keys from REDcode's Keys",
     "ref": "EDGEchat #5"
    },
    {
     "who": "REDcode",
     "what": "Not blocking: the 3D view opened with a tab title, so a prop's tab says its name, not view.glb",
     "ref": "REDcode #29"
    },
    {
     "who": "EDGEmat",
     "what": "Not blocking: generateImage takes a size; EDGEfab makes its own image call until then",
     "ref": "EDGEmat #9"
    },
    {
     "who": "EDGEmat",
     "what": "Not blocking: Reveal in REDcode on its messages and its name on every message",
     "ref": "EDGEmat #15"
    },
    {
     "who": "EDGEmat",
     "what": "Not blocking: keep unchanged textures inside a changed material",
     "ref": "EDGEmat #13"
    }
   ],
   "ownerActions": [
    {
     "ref": "EF1",
     "what": "Nexus page 38605: add the video, fill its form fields and tags by hand (nexus/README.md lists them), and publish it if it is not live yet; the 0.2.0 file, changelog and description are on it",
     "since": "2026-11-22"
    },
    {
     "ref": "EF2",
     "what": "Two wiki screenshots are yours: Claude Code using EDGEfab, and the prop in the game",
     "since": "2026-11-18"
    },
    {
     "ref": "EF4",
     "what": "Agree the plan change (plan.md, \"Clothing: where it falls\"): clothing up to right after F3, split into F4a Reshape a game garment and F4b New clothing; F7a narrowed to a prop's rig; 1.0 as props and clothing whole",
     "since": "2026-11-25"
    }
   ],
   "risks": [
    "The Nexus page is not live until the owner publishes it; the wiki says it opens soon",
    "Generate from Words uses paid AI services with the modder's own keys; it is optional, and the rest needs no key",
    "A part's game material lives in the project only: the Desk and Library copies keep the model's textures"
   ],
   "checkedBy": "EDGEfab session, 2026-11-25"
  },
  {
   "name": "EDGEdir",
   "code": "DR",
   "ownerSeq": 12,
   "group": "In development",
   "role": "Animation director: timelines that put the game's animations onto actors, as sequences and scenes",
   "stage": "early build",
   "version": "0.0.31",
   "lastTag": null,
   "lastTagDate": null,
   "lastCommit": "2026-11-17",
   "commitsSinceTag": 0,
   "sessions": [
    "edgedir-49"
   ],
   "plan": {
    "name": "Design phases D0 to D9",
    "source": "docs/design.md, docs/testing.md",
    "phases": [
     {
      "id": "D0",
      "title": "Spikes (done as other work, but the weather: REDnode #46)",
      "status": "done"
     },
     {
      "id": "D1",
      "title": "Timeline",
      "status": "built, tests pending"
     },
     {
      "id": "D2",
      "title": "Cast and clips",
      "status": "built, tests pending"
     },
     {
      "id": "D3",
      "title": "Preview (3D)",
      "status": "built, tests pending"
     },
     {
      "id": "D4",
      "title": "Transitions and sequences (both parts built as 0.0.13)",
      "status": "built, tests pending"
     },
     {
      "id": "D5",
      "title": "Play in game (all four parts built; every hand test in VS Code passed by script, the player against a stand-in; the player has not run in the game)",
      "status": "built, tests pending"
     },
     {
      "id": "DR1",
      "title": "EDGE Director, the window in the game: open and play a scene there, as its own release file (built as 0.0.24 with EDGE Director 0.2.0; not run in the game)",
      "status": "built, tests pending"
     },
     {
      "id": "DR2",
      "title": "EDGE Director: adjust places and facings in the game, saved to the scene's file (built as 0.0.25 with EDGE Director 0.3.0; not run in the game or with VS Code)",
      "status": "built, tests pending"
     },
     {
      "id": "DR3",
      "title": "EDGE Director: pins, in the game and in the editor (built as 0.0.27 with EDGE Director 0.4.0; not run in the game or in VS Code)",
      "status": "built, tests pending"
     },
     {
      "id": "D6",
      "title": "Audio, camera, weather (agreed 2026-11-18). D6a Weather built as 0.0.28 with EDGE Director 0.5.0, not run; D6b Audio and D6c Camera not built",
      "status": "in progress"
     },
     {
      "id": "D7",
      "title": "Pack, Library, baked",
      "status": "planned"
     },
     {
      "id": "D8",
      "title": "Script, video, MCP",
      "status": "planned"
     },
     {
      "id": "D9",
      "title": "AI track",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "first release",
    "needs": [
     "The owner's Tests A to D (in VS Code, about 45 minutes): none run",
     "The owner's Tests E to H (in the game, with EDGE Director; about 70 minutes): E partly run (E1, E2, E3, E5 pass), the rest not run",
     "Three small changes in 0.0.31 from the rerun's notes, not run (the weather list asked for again, a sentence on the last weather clip, a warning for a game path that is no game folder)",
     "GitHub setup: the social preview; whether the publish secrets reach the repo is unchecked (Pages is on since 2026-11-18)",
     "A Nexus page",
     "A Nexus summary block for the release's version in CHANGELOG.md (EDGEdir #1 is done: the notes script checks it)"
    ]
   },
   "handTests": [
    {
     "name": "D1 Timeline",
     "steps": 23,
     "status": "passed",
     "ranBy": "script",
     "note": "Step 23 (a scene file that starts the editor opens as text) is left as VS Code's limit"
    },
    {
     "name": "D2 Cast, part 1",
     "steps": 15,
     "status": "passed",
     "ranBy": "script",
     "note": "15 of 15 on 0.0.6"
    },
    {
     "name": "D2 Clips, part 2",
     "steps": 17,
     "status": "passed",
     "ranBy": "script",
     "note": "17 of 17 on 0.0.6, REDbridge 0.14.0"
    },
    {
     "name": "D2 Made animations, part 3",
     "steps": 6,
     "status": "passed",
     "ranBy": "script",
     "note": "6 of 6 on 0.0.6"
    },
    {
     "name": "D3 Preview",
     "steps": 17,
     "status": "passed",
     "ranBy": "script",
     "note": "17 of 17 on 0.0.9; the four fixes of 0.0.10 passed a rerun"
    },
    {
     "name": "D4a Transitions",
     "steps": 15,
     "status": "passed",
     "ranBy": "script",
     "note": "12 of 15 on 0.0.13; the three failed steps were fixed in 0.0.14 and passed their rerun, by sight too"
    },
    {
     "name": "D4b Sequences",
     "steps": 19,
     "status": "passed",
     "ranBy": "script",
     "note": "19 of 19 on 0.0.13; its five notes fixed in 0.0.14 and rerun"
    },
    {
     "name": "D5b The cue sheet",
     "steps": 10,
     "status": "passed",
     "ranBy": "script",
     "note": "10 of 10 on 0.0.16; the two changes of 0.0.18 from its notes passed too"
    },
    {
     "name": "D5a Sets",
     "steps": 14,
     "status": "passed",
     "ranBy": "script",
     "note": "11 of 14 on 0.0.18; the three misses were fixed in 0.0.19 and passed their rerun; 0.0.20's small change passed too"
    },
    {
     "name": "D5d Play in game, in VS Code",
     "steps": 13,
     "status": "passed",
     "note": "13 of 13 on 0.0.22 and the fix of 0.0.23, against a stand-in. Step 3 as changed in 0.0.24 passed in both its cases on 2026-11-21; Open the Download was not pressed",
     "ranBy": "script"
    },
    {
     "name": "D5 in the game",
     "steps": 10,
     "status": "not run",
     "note": "In the game, on the owner's PC: EDGEdir 0.0.23 with EDGEdir Player 0.1.0; answers G1 to G7"
    },
    {
     "name": "DR1 The Director's window",
     "steps": 13,
     "status": "passed",
     "ranBy": "script",
     "note": "12 of 13 on 0.0.29 with EDGE Director 0.6.0 (2026-11-21); the miss (step 12) was fixed in EDGE Director 0.6.1 and passed its rerun"
    },
    {
     "name": "DR2 Adjust",
     "steps": 12,
     "status": "passed",
     "ranBy": "script",
     "note": "12 of 12 on 0.0.29 with EDGE Director 0.6.0 (2026-11-21), against a stand-in. One sentence changed in 0.6.1 from its notes and passed its rerun"
    },
    {
     "name": "DR3 Pins",
     "steps": 10,
     "status": "passed",
     "ranBy": "script",
     "note": "10 of 10 on 0.0.29 with EDGE Director 0.6.0 (2026-11-21), against a stand-in"
    },
    {
     "name": "DR3 Pins in the editor",
     "steps": 10,
     "status": "passed",
     "ranBy": "script",
     "note": "10 of 10 on 0.0.29 (2026-11-21). With 0.0.30's change from its notes, the round passed again, 10 of 10"
    },
    {
     "name": "D6a Weather",
     "steps": 11,
     "status": "passed",
     "ranBy": "script",
     "note": "8 of 11 on 0.0.29 (2026-11-21); the three misses were fixed in 0.0.30 and passed their rerun. Three small changes in 0.0.31 from its notes are not run"
    }
   ],
   "ownerSpotTests": [
    {
     "id": "A",
     "feature": "The editor: timeline, play, save, the Desk (S1, S2)",
     "status": "not run",
     "ref": "DR5",
     "since": "2026-11-18"
    },
    {
     "id": "B",
     "feature": "Actors and animations (S3 to S7)",
     "status": "not run",
     "ref": "DR6",
     "since": "2026-11-18"
    },
    {
     "id": "C",
     "feature": "The 3D preview, transitions, sequences (S8 to S10)",
     "status": "not run",
     "ref": "DR7",
     "since": "2026-11-18"
    },
    {
     "id": "D",
     "feature": "Sets, what the game will not match, pins in the editor (S11, S12, S15)",
     "status": "not run",
     "ref": "DR8",
     "since": "2026-11-18"
    },
    {
     "id": "E",
     "feature": "EDGE Director in the game: open and play a scene (E1, E2, E3, E5 pass on 2026-11-20, the first run in the game; the rest not run)",
     "status": "partly run",
     "ref": "DR9",
     "since": "2026-11-20"
    },
    {
     "id": "F",
     "feature": "EDGE Director in the game: adjust a scene (10 steps)",
     "status": "not run",
     "ref": "DR10",
     "since": "2026-11-18"
    },
    {
     "id": "G",
     "feature": "EDGE Director in the game: pins (8 steps)",
     "status": "not run",
     "ref": "DR11",
     "since": "2026-11-18"
    },
    {
     "id": "H",
     "feature": "Weather: in the editor, then in the game (8 steps)",
     "status": "not run",
     "ref": "DR12",
     "since": "2026-11-18"
    }
   ],
   "waitingOn": [
    {
     "who": "REDnode",
     "what": "Blend times at a jump measured in the game (the weather calls are done and passed in the game)",
     "ref": "REDnode #46"
    },
    {
     "who": "REDnode",
     "what": "V as an actor in the game: the workspot on the real player (the owner's choice), a stand-in copy as the fallback; in the same spike",
     "ref": "REDnode #47"
    },
    {
     "who": "REDnode",
     "what": "The editor channel call that reaches a package (agreed in principle, not built; Play in game uses a folder until then); a spike on directing a person not spawned with the workspot",
     "ref": "REDnode #48"
    },
    {
     "who": "EDGEbuilder",
     "what": "A vehicle kind in its scenes and an id in a scene file, for EDGEdir's sets",
     "ref": "EDGEbuilder #6"
    },
    {
     "who": "EDGEfab",
     "what": "Its first stored animation, to try EDGEdir's reader on",
     "ref": "EDGEfab #7"
    },
    {
     "who": "REDnode",
     "what": "An optional id and facing on a pin (in REDnode's next build), and one in-game spike: a spawned person walking to a place, and whether a person can be moved while they play",
     "ref": "REDnode #50"
    }
   ],
   "ownerActions": [
    {
     "ref": "DR1",
     "what": "Run Tests E to H in the game with EDGE Director (docs/testing.md, The owner's tests)",
     "since": "2026-11-18"
    },
    {
     "ref": "DR2",
     "what": "Run Tests A to D in VS Code (docs/testing.md, The owner's tests)",
     "since": "2026-11-18"
    },
    {
     "ref": "DR3",
     "what": "GitHub: the social preview; create a Nexus page",
     "since": "2026-11-18"
    },
    {
     "ref": "DR4",
     "what": "Wiki screenshots: nine placeholders in EDGEdir's wiki section wait for shots from VS Code and the game (save them into EDGEweb's docs/assets/shots/inbox/)",
     "since": "2026-11-18"
    }
   ],
   "risks": [
    "EDGE Director has run in the game only as far as playing one scene (2026-11-20). Pause and the last pose held (0.6.0), adjust, pins and the weather are untried there",
    "Seen once in a scripted round: a message that unsaved changes were put back, with no window reload; not reproduced, nothing lost",
    "Every hand test was run by script with nobody watching",
    "V has no head in the preview: no V with a head can be exported",
    "The first read of the game is slow: about 3.5 minutes for the animation index",
    "Which way an actor's Turn turns against the game is unverified until D5",
    "How the game's own join at a jump compares with the preview's transitions is not measured yet",
    "Unverified: that a person in a workspot can be moved while they play (Adjust in the game)"
   ],
   "checkedBy": "EDGEdir session, 2026-11-21"
  },
  {
   "name": "EDGEmobile",
   "code": "MB",
   "ownerSeq": 6,
   "group": "In development",
   "role": "A phone OS for the game as REDnode apps, in game and on the player's real phone; includes the Chooms! social app",
   "stage": "in development",
   "version": "0.1.0",
   "lastTag": null,
   "lastTagDate": null,
   "lastCommit": "2026-11-17",
   "commitsSinceTag": 0,
   "sessions": [
    "EDGEmobile"
   ],
   "plan": {
    "name": "Phases M0 to M6 (M6 is Chooms!, C1 to C5), then Release",
    "source": "docs/design.md",
    "phases": [
     {
      "id": "M0",
      "title": "Repo and design",
      "status": "done"
     },
     {
      "id": "M1",
      "title": "Tunnel spike",
      "status": "done"
     },
     {
      "id": "M2",
      "title": "Onboarding (pairing)",
      "status": "done"
     },
     {
      "id": "M3",
      "title": "The OS, with EDGEphone",
      "status": "done"
     },
     {
      "id": "M4",
      "title": "Mobile apps for modders (parts built in C1; sample app and guide not started)",
      "status": "in progress"
     },
     {
      "id": "M5",
      "title": "Install on the phone (PWA)",
      "status": "planned"
     },
     {
      "id": "C1",
      "title": "Chooms!: the app, hand-written posts",
      "status": "done"
     },
     {
      "id": "C2",
      "title": "Chooms!: the game's story (done 2026-11-21: the save's story read, 59 story points, 82 knowledge cards for 18 people, reviewed by the owner and tested in the game)",
      "status": "done"
     },
     {
      "id": "C3",
      "title": "Chooms!: people, corporations and gangs post by themselves through REDagent, and gangs remember fights with V (content reviewed by the owner and code built 2026-11-25, Chooms! 0.2.0, 157 offline checks; the owner's test in the game next)",
      "status": "built, tests pending"
     },
     {
      "id": "C4",
      "title": "Chooms!: images",
      "status": "planned"
     },
     {
      "id": "C5",
      "title": "Chooms!: DMs",
      "status": "planned"
     },
     {
      "id": "Docs",
      "title": "The wiki and the guides: EDGEmobile and EDGEphone wiki sections (EDGEphone with quickstarts, coding examples, a tutorial), Chooms!'s pages, the modders' guide; marked not released yet until the launch",
      "status": "planned"
     },
     {
      "id": "Release",
      "title": "Zips, Nexus pages, changelog (tooling built 2026-11-10, never run)",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "first release",
    "needs": [
     "C3: the owner's test in the game (people, corporations and gangs posting by themselves, built 2026-11-25)",
     "C4: images (the bundled pictures from the dossiers, generated photos with the player's key)",
     "C5: DMs with Opus",
     "M5: installing on the phone, checked and finished",
     "M4: a sample mobile app and a guide for modders",
     "The modders' guide for mobile apps on EDGEmobile's docs site",
     "Wiki sections in EDGEweb for EDGEmobile and EDGEphone (quickstarts, coding examples, a tutorial with screenshots) and Chooms!'s pages",
     "Nexus pages for EDGEmobile and Chooms!",
     "A first run of the release workflow",
     "README status line and badge naming the version"
    ]
   },
   "handTests": [
    {
     "name": "C3 test (Chooms! posts by themselves)",
     "steps": 12,
     "status": "not run",
     "ranBy": "owner",
     "note": "docs/design.md, C3 test; REDnode 0.73.0 and REDagent 0.4.6 in the game on the PC (2026-11-25), and Chooms! requires 0.73.0; Chooms!'s fights code goes into the game at the next deploy (the game was running)"
    },
    {
     "name": "C2 cards test (the Story tab's knowledge cards)",
     "steps": 2,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-21 on the PC, before the review: the late save 33 of 59 points with every count as expected; another playthrough 21 of 59 with its own counts"
    },
    {
     "name": "Share a post (Chooms! on a real phone)",
     "steps": 6,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-21 on Android: the phone's share sheet with the post as a picture"
    },
    {
     "name": "C2 code test (Chooms! reads the save's story)",
     "steps": 9,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-21 on the laptop: step 9 found a bug (the Story tab not told on a switch back to a playthrough read before), fixed the same day, and steps 7 and 9 passed again"
    },
    {
     "name": "C1 (Chooms! with hand-written posts)",
     "steps": 13,
     "status": "passed",
     "ranBy": "owner",
     "note": "Two runs found problems; the retest passed 2026-11-10, on the laptop and on Android"
    },
    {
     "name": "M2 onboarding on Android",
     "steps": 12,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-29"
    },
    {
     "name": "M3 and EDGEphone",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-30"
    },
    {
     "name": "M1 tunnel spike on Android",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-10-29, after four fixes"
    }
   ],
   "ownerSpotTests": [
    {
     "id": "iPhone",
     "feature": "Pairing and the installed loader on an iPhone",
     "status": "not run",
     "ref": "MB3",
     "since": "2026-11-16"
    },
    {
     "id": "Lifepath",
     "feature": "The story read on a non-Corpo save",
     "status": "not run",
     "ref": "MB4",
     "since": "2026-11-16"
    }
   ],
   "waitingOn": [
    {
     "who": "REDagent",
     "what": "REDnode #54: more context, no tools and a choice of model in agent.ask; built 2026-11-25 in REDnode 0.72.0 and REDagent 0.4.5; passed REDnode's in-game test on 2026-11-25 (REDnode 0.73.0 with REDagent 0.4.6, all six steps) and closed",
     "ref": "https://github.com/Edgemodders/REDnode/issues/54",
     "done": "2026-11-25"
    },
    {
     "who": "REDnode",
     "what": "REDnode 0.73.0 (#61, fight events) and REDagent 0.4.6 ($2.00 daily limit per mod), in the game on the PC 2026-11-25; REDagent's $2.00 limit verified in the game; #61's fight events test is the last REDnode test before 0.73.0's release, not run yet; Chooms! requires 0.73.0 (its fights: step 12 of the C3 test)",
     "ref": "https://github.com/Edgemodders/REDnode/issues/61"
    }
   ],
   "ownerActions": [
    {
     "ref": "MB6",
     "what": "Run the C3 test in the game: Chooms! posts by themselves (docs/design.md, C3 test; 12 steps; step 12, fights, can go with REDnode's fight events test; about 20 minutes; it spends from your Anthropic key, up to the $2 cap)",
     "since": "2026-11-25"
    },
    {
     "ref": "MB1",
     "what": "Create the Nexus pages for EDGEmobile and Chooms!",
     "since": "2026-11-16"
    },
    {
     "ref": "MB2",
     "what": "Drop photo mode pictures into Chooms!'s dossiers (chooms/dossiers/) when you have them (for C4)",
     "since": "2026-11-21"
    }
   ],
   "risks": [
    "Never tested on an iPhone, only Android",
    "Only Corpo saves tested (the story read takes under 2 seconds in the game); some character ids are unverified (River, Kerry's contact)",
    "Relies on Cloudflare quick tunnels: a private web address",
    "A game patch that renames quest paths would need Chooms!'s story file updated"
   ],
   "checkedBy": "EDGEmobile session, 2026-11-25 (#54 passed and closed; Chooms! requires REDnode 0.73.0)"
  },
  {
   "name": "EDGEmods",
   "code": "MD",
   "ownerSeq": 5,
   "group": "In development",
   "role": "The EDGE mod registry: mods in their authors' own git repos, a website and a planned extension",
   "stage": "early build",
   "version": "0.1.0",
   "lastTag": null,
   "lastTagDate": null,
   "lastCommit": "2026-11-03",
   "commitsSinceTag": 0,
   "sessions": [],
   "plan": {
    "name": "Phases R0 to R6 (proposed), R3 in slices",
    "source": "docs/design.md, docs/index.md",
    "phases": [
     {
      "id": "R0",
      "title": "Design (draft 0.2)",
      "status": "in progress"
     },
     {
      "id": "R1",
      "title": "The edgemods.json format (awaits the owner's review)",
      "status": "built, tests pending"
     },
     {
      "id": "R2",
      "title": "Registry and merge checks (awaits review)",
      "status": "built, tests pending"
     },
     {
      "id": "R3a",
      "title": "Indexer",
      "status": "done"
     },
     {
      "id": "R3b",
      "title": "Read-only website",
      "status": "done"
     },
     {
      "id": "R3c",
      "title": "Accounts, likes, Account page",
      "status": "done"
     },
     {
      "id": "R3d",
      "title": "Downloads, Downloaded mods, Mod manager links",
      "status": "built, tests pending"
     },
     {
      "id": "R3e",
      "title": "Admin: mods, users, reports, blocklist, spot review, log",
      "status": "built, tests pending"
     },
     {
      "id": "R3f",
      "title": "Stripe",
      "status": "planned"
     },
     {
      "id": "R3g",
      "title": "Webhooks and talk",
      "status": "planned"
     },
     {
      "id": "R3h",
      "title": "Deploy",
      "status": "in progress"
     },
     {
      "id": "R4a",
      "title": "Extension foundations and sign-in",
      "status": "done"
     },
     {
      "id": "R4b",
      "title": "Browse in VS Code",
      "status": "done"
     },
     {
      "id": "R4c",
      "title": "Install through EDGEdeck",
      "status": "planned"
     },
     {
      "id": "R4d",
      "title": "MCP server",
      "status": "in progress"
     },
     {
      "id": "R5",
      "title": "Publish from REDcode",
      "status": "planned"
     },
     {
      "id": "R6",
      "title": "Ship",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "first release",
    "needs": [
     "R3h: the first install on the server (docs/deploy.md), with free-speed downloads through nginx tested there",
     "Release checks for updates (release-check), so a mod's new releases show",
     "R3f and R3g: Stripe, webhooks",
     "The owner agrees design draft 0.2 and the format"
    ]
   },
   "handTests": [
    {
     "name": "End-to-end publish of a test mod",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-10-17"
    },
    {
     "name": "REDbridge packing on a Windows runner",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-10-18"
    },
    {
     "name": "In-game load of a runner-built mod",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Listed as still to do"
    },
    {
     "name": "Sign in with GitHub, Google and email on the Auth0 development tenant (R3c)",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-21"
    },
    {
     "name": "Free-speed downloads through nginx on the server (R3d, deploy/nginx/edgemods-downloads.conf)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Waits for the deploy (R3h)"
    },
    {
     "name": "Merge checks ask the server's blocklist (POST /api/v1/blocklist/check) before merging",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Connected 2026-11-22: runs once the repository has EDGEMODS_SITE and EDGEMODS_CHECKS_SECRET (docs/deploy.md, step 7)"
    },
    {
     "name": "Sign in from VS Code with GitHub, Google and email; the status bar shows the username (R4a)",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-22"
    },
    {
     "name": "Browse in VS Code: find the test mod in the side panel and with Find a mod, open its tab, like it, download its file; sign in through the site's Back to VS Code page (R4b)",
     "steps": null,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-22"
    },
    {
     "name": "An assistant (an agent in VS Code, or Claude Code) finds the test mod, its details and its install plan through the EDGEmods MCP server (R4d, first part)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "mods_search, mods_info, mods_plan; mods_install comes with R4c"
    },
    {
     "name": "An assistant (an agent in VS Code, or Claude Code) finds the test mod, its details and its install plan through the EDGEmods MCP server (R4d, first part)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "mods_search, mods_info, mods_plan; mods_install comes with R4c"
    },
    {
     "name": "First install on the server from docs/deploy.md: setup-edgemods.sh, add-domain.sh, setup-litestream.sh, the index rebuild workflow, the merge checks connected (R3h)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Not run on the server yet. Tried 2026-11-22 in an Amazon Linux 2023 container: install, update, roll-back, nginx -t, the index handover worked; certbot, Litestream and nginx downloads need the server. The server session does it when the owner says"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEweb",
     "what": "Where the mod website lives: EDGEweb owns the domain",
     "ref": "CLAUDE.md"
    },
    {
     "who": "EDGEdeck",
     "what": "installMods all or nothing and edgemodsMods() (parts 2 and 3, for R4c); part 1, edgemods: links, released in 0.33.0",
     "ref": "EDGEdeck#16"
    },
    {
     "who": "owner",
     "what": "Agree the REDcode request (the Publish button)",
     "ref": "CLAUDE.md"
    }
   ],
   "ownerActions": [
    {
     "ref": "MD1",
     "what": "Review and agree design draft 0.2 and the edgemods.json format",
     "since": "2026-11-16"
    },
    {
     "ref": "MD2",
     "what": "Decide the subscription price and the free download speed",
     "since": "2026-11-16"
    },
    {
     "ref": "MD3",
     "what": "Get a legal reading on non-commercial mod licences before launch",
     "since": "2026-11-16"
    },
    {
     "ref": "MD4",
     "what": "For the deploy: DNS for edgemods.ai and www, the production Auth0 tenant, the S3 bucket and its policy, the two shared secrets (docs/deploy.md, \"Before you start\")",
     "since": "2026-11-22"
    },
    {
     "ref": "MD5",
     "what": "Agree the drafted privacy and terms pages (/privacy, /terms) and fill their gaps: who runs EDGEmods, contact, log and backup days, minimum age, the law (Google sign-in needs them)",
     "since": "2026-11-23"
    }
   ],
   "risks": [
    "No release and no live site yet; the design is still a proposal",
    "Auth0 marks a GitHub sign-in's email unverified, so admin sign-in works through Google or email for now"
   ],
   "checkedBy": "EDGEmods session, 2026-11-23"
  },
  {
   "name": "EDGEguide",
   "code": "EG",
   "ownerSeq": 1,
   "group": "In development",
   "role": "Lets Claude Code show a modder the EDGE tools in the editor: open views, select items, point at buttons",
   "stage": "scaffold",
   "version": null,
   "lastTag": null,
   "lastTagDate": null,
   "lastCommit": "2026-11-03",
   "commitsSinceTag": 0,
   "sessions": [],
   "plan": {
    "name": "Phases G0 to G4",
    "source": "docs/design.md",
    "phases": [
     {
      "id": "G0",
      "title": "Decide",
      "status": "done"
     },
     {
      "id": "G1",
      "title": "Skeleton",
      "status": "planned"
     },
     {
      "id": "G2",
      "title": "Select",
      "status": "planned"
     },
     {
      "id": "G3",
      "title": "Hints",
      "status": "planned"
     },
     {
      "id": "G4",
      "title": "Ship",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "G1 to G3 built and tested",
     "A session of its own for G1 (G0 was done from the EDGEchat session)"
    ]
   },
   "handTests": [],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEkit",
     "what": "A command to outline toolbar buttons (edgekit.pointAt), for G3",
     "ref": "EDGEkit #6"
    }
   ],
   "ownerActions": [
    {
     "ref": "EG2",
     "what": "Open a Claude session on the EDGEguide folder for G1, the skeleton",
     "since": "2026-11-25"
    }
   ],
   "risks": [
    "No code yet; G1 needs a session of its own"
   ],
   "checkedBy": "EDGEchat session, 2026-11-25 (G0 decided by the owner, written into the design: port 41822, OAuth, the focused window, the package.json contract)"
  },
  {
   "name": "VATS",
   "code": "VA",
   "ownerSeq": 2,
   "group": "In development",
   "role": "A REDnode mod: body-part targeting with quickhacks or the smart gun while scanning, in slow motion",
   "stage": "early build",
   "version": null,
   "lastTag": null,
   "lastTagDate": null,
   "lastCommit": "2026-11-15",
   "commitsSinceTag": 0,
   "sessions": [
    "REDnode, EDGEHack & REDagent"
   ],
   "plan": {
    "name": "Research spikes V1 to V17",
    "source": "REDnode docs/vats.md, VATS docs/design.md",
    "phases": [
     {
      "id": "V1",
      "title": "Parts on screen",
      "status": "done"
     },
     {
      "id": "V2",
      "title": "Parts in the engine (outline)",
      "status": "done"
     },
     {
      "id": "V3",
      "title": "Zoom while scanning",
      "status": "done"
     },
     {
      "id": "V4",
      "title": "The crosshair's part",
      "status": "done"
     },
     {
      "id": "V5",
      "title": "Deep slow motion",
      "status": "done"
     },
     {
      "id": "V6",
      "title": "The smart gun's part",
      "status": "planned"
     },
     {
      "id": "V7",
      "title": "Only VATS quickhacks",
      "status": "planned"
     },
     {
      "id": "V8",
      "title": "Exposure",
      "status": "in progress"
     },
     {
      "id": "V9",
      "title": "Triggers while scanning (round 3)",
      "status": "built, tests pending"
     },
     {
      "id": "V10",
      "title": "Framing",
      "status": "done"
     },
     {
      "id": "V11",
      "title": "One enemy, several parts",
      "status": "planned"
     },
     {
      "id": "V12",
      "title": "Upload icon on a part",
      "status": "planned"
     },
     {
      "id": "V13",
      "title": "A VATS tab in the scanner",
      "status": "built, tests pending"
     },
     {
      "id": "V14",
      "title": "Dismember a part",
      "status": "in progress"
     },
     {
      "id": "V15",
      "title": "The part's line under the enemy's name",
      "status": "built, tests pending"
     },
     {
      "id": "V16",
      "title": "Reactions to VATS's cut",
      "status": "in progress"
     },
     {
      "id": "V17",
      "title": "VATS decides a shot's cut",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "Still research: nothing to install yet, and no release plan"
    ]
   },
   "handTests": [
    {
     "name": "Spike test: round 3 (hold RT while scanning)",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Built in REDnode 0.65.1 with VATS spike 0.4.0; no recorded result"
    },
    {
     "name": "V13 (the VATS tab)",
     "steps": 9,
     "status": "partly run",
     "ranBy": "owner",
     "note": "First run 2026-11-14 showed crossed headers; fixed, retest after a game restart pending"
    },
    {
     "name": "PartLine: the lit part's line under the enemy's name",
     "steps": null,
     "status": "not run",
     "ranBy": null,
     "note": "Waits for a deploy with the game closed"
    },
    {
     "name": "V14 and V15",
     "steps": null,
     "status": "partly run",
     "ranBy": "owner",
     "note": "The cut works but the enemy does not react"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Restart the game and retest V13; deploy PartLine with the game closed",
     "ref": "CLAUDE.md"
    },
    {
     "who": "owner",
     "what": "Decide the duration clock, switching enemies, zoom and which parts show",
     "ref": "REDnode docs/vats.md"
    }
   ],
   "ownerActions": [
    {
     "ref": "VA1",
     "what": "Retest V13 and test PartLine in game",
     "since": "2026-11-16"
    },
    {
     "ref": "VA2",
     "what": "Decide the open design questions: duration clock, moving between enemies, zoom",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "One redscript compile error stops every script in the game; it happened on 2026-11-14",
    "Spikes V1 to V12 are checked by the REDnode session; V13 onward is VATS-repo work nobody has confirmed"
   ],
   "checkedBy": "REDnode session (V1 to V12 only), 2026-11-16"
  },
  {
   "name": "EDGErepo",
   "code": "ER",
   "ownerSeq": 1,
   "group": "Shared",
   "role": "Shared scripts for the Edgemodders tools: today the Nexus Mods release tool, used at the tag v1",
   "stage": "released",
   "version": "v1",
   "lastTag": null,
   "lastTagDate": null,
   "lastCommit": "2026-11-06",
   "commitsSinceTag": 0,
   "sessions": [],
   "plan": {
    "name": "Phases R1 to R3",
    "source": "REDnode docs/edgerepo.md",
    "phases": [
     {
      "id": "R1",
      "title": "Nexus machinery at tag v1; every repo moved",
      "status": "built, tests pending"
     },
     {
      "id": "R2",
      "title": "Template scaffolding (parked)",
      "status": "planned"
     },
     {
      "id": "R3",
      "title": "kind in nexus.json, a shared extension workflow",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": []
   },
   "handTests": [
    {
     "name": "Real releases run from the v1 tag",
     "steps": null,
     "status": "partly run",
     "ranBy": null,
     "note": "REDsave 0.1.1 passed; each tool's next Nexus release is its own test"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [],
   "ownerActions": [
    {
     "ref": "ER1",
     "what": "Approve any move of the v1 tag: it reaches every tool's next release",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "Anyone who can move v1 can run code with the organization's Nexus key",
    "A bad tag move breaks every tool's next release"
   ]
  },
  {
   "name": "EDGEweb",
   "code": "WB",
   "ownerSeq": 1,
   "group": "Shared",
   "role": "The website and wiki at edgemodders.ai, and this dashboard",
   "stage": "released",
   "version": "0.1.0",
   "lastTag": "v0.1.0",
   "lastTagDate": "2026-11-12",
   "lastCommit": "2026-11-17",
   "commitsSinceTag": 32,
   "sessions": [
    "EDGEweb",
    "edgeweb-6c"
   ],
   "plan": {
    "name": "No phased plan: the site follows the tools",
    "source": "CLAUDE.md",
    "phases": []
   },
   "planNote": "No phased plan: the site and wiki follow the tools.",
   "nextRelease": {
    "version": null,
    "needs": []
   },
   "handTests": [],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Screenshots for the wiki's remaining placeholders",
     "ref": "CLAUDE.md, Screenshot inbox"
    }
   ],
   "ownerActions": [
    {
     "ref": "WB1",
     "what": "Supply screenshots for the wiki placeholders still waiting",
     "since": "2026-11-16"
    }
   ],
   "risks": [
    "No wiki section yet for EDGEfab, EDGEdir, EDGEmobile or EDGEmods",
    "EDGEweb #6 (a home for the rules the tools share) is open since 2026-11-04"
   ]
  }
 ]
};
