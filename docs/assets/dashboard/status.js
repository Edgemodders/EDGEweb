// The EDGE dashboard's data. See CLAUDE.md, Dashboard. Plain JSON after the equals sign.
window.EDGE_STATUS = {
 "asOf": "2026-11-17",
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
      "title": "REDagent in REDcode",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "Nothing unreleased",
     "No next phase agreed: C6 has not started"
    ]
   },
   "handTests": [
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
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [],
   "ownerActions": [
    "Decide whether and when to start C6 (REDagent in REDcode)"
   ],
   "risks": [
    "EDGEmobile's Chooms! will need a choice of model in agent.ask for C3; no issue is filed for it yet",
    "A first question that reads the game cost about $0.45 on Opus"
   ],
   "checkedBy": "REDnode session, 2026-11-16"
  },
  {
   "name": "REDnode",
   "group": "Core toolkits",
   "role": "The runtime: a Node.js API and an in-game HTML overlay for scripting the game, with REDswap for hot archive swaps",
   "stage": "released",
   "version": "0.67.0 (test build)",
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
      "id": "N2",
      "title": "World nodes, full (#24)",
      "status": "planned"
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
      "title": "Weather API, for EDGEdir",
      "status": "built, tests pending"
     },
     {
      "id": "#46c",
      "title": "Blend at a workspot jump, for EDGEdir's D4 and D5",
      "status": "planned"
     },
     {
      "id": "L1-L3",
      "title": "Localization",
      "status": "planned"
     },
     {
      "id": "AK",
      "title": "App keys: a key per app shows only it with the cursor, or hides it",
      "status": "built, tests pending"
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
    "version": null,
    "needs": [
     "The App keys test in the game (0.67.0): not run",
     "The Weather (#46) test in the game: not run; 0.67.0 carries it",
     "The 'Update REDbridge while it runs' fix needs its retest in the game; 0.67.0 carries it",
     "S24's street lamp step is open: decide whether it blocks the gate or moves to N2",
     "world.jumpWorkspot answering false outside a workspot: untested",
     "Admin Tools has unreleased changes (0.2.0): release it first or the run stops",
     "The owner's GIF on REDswap's Nexus page must be pulled first"
    ]
   },
   "handTests": [
    {
     "name": "App keys, REDnode 0.67.0",
     "steps": 9,
     "status": "not run",
     "ranBy": null,
     "note": "Stand-in checks passed (24, dev and packaged host); waiting for the owner to say which machine gets the build"
    },
    {
     "name": "Weather (#46), REDnode 0.66.10",
     "steps": 10,
     "status": "not run",
     "ranBy": null,
     "note": "Stand-in checks passed; 0.67.0 carries it too"
    },
    {
     "name": "Update REDbridge while it runs (W3 retest)",
     "steps": null,
     "status": "failed",
     "ranBy": "owner",
     "note": "Found 2026-11-16: the old copy kept running. Fixed in 0.67.0, not retested"
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
     "note": "Steps 1 to 8 passed 2026-11-16; step 9, the MCP route, is optional"
    },
    {
     "name": "S24 world node registry (#24), 0.66.7",
     "steps": 11,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Passed except the street lamp (entity nodes, left to N2)"
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
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Say which machine gets REDnode 0.67.0, then run its App keys, Weather and Update REDbridge tests",
     "ref": "docs/overlay.md, docs/world.md"
    },
    {
     "who": "owner",
     "what": "Talk through semi-native apps before its first spike starts",
     "ref": "docs/semi-native.md"
    }
   ],
   "ownerActions": [
    "Run the App keys, Weather (#46) and Update REDbridge tests on 0.67.0",
    "Release Admin Tools 0.2.0",
    "Start the next release run once the gate is met",
    "Agree the order after EDGEdir's requests (Console resizing, N2 and others are asked for, not built)"
   ],
   "risks": [
    "Five features sit unreleased since 0.65.3 (the count of commits is on this card)",
    "Native code reads game memory at offsets found by reading the exe; a wrong one crashes the game (the node registry did on 0.66.0 to 0.66.6). Newer code finds them at run time",
    "Four requests from other tools are open on it: #24, #39, #46, #47"
   ],
   "checkedBy": "REDnode session, 2026-11-17"
  },
  {
   "name": "REDcode",
   "group": "Core toolkits",
   "role": "The IDE: a VS Code extension for the game's files, on WolvenKit's engine through REDbridge",
   "stage": "released",
   "version": "0.10.13",
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
      "title": "Animations: synced sets",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "Nothing unreleased: no changes since 0.10.13",
     "#24: Run Game drops ELECTRON_RUN_AS_NODE on the exe route (a small fix, not built)",
     "The next planned work is Animations A3, which closes #21"
    ]
   },
   "handTests": [
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
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEmat",
     "what": "Ship renderMaterials, so the mesh viewer's material hook can be tested (unverified whether it has since)",
     "ref": "docs/testing.md"
    }
   ],
   "ownerActions": [
    "Agree a start on A3 (synced sets)"
   ],
   "risks": [
    "Run Game's exe route stops REDnode's overlay for players on REDnode 0.58.0 or older (#24, not fixed yet)",
    "REDcode #21 stays open on purpose: it closes when A3 ships",
    "REDbridge answers one call at a time"
   ],
   "checkedBy": "REDcode session, 2026-11-16"
  },
  {
   "name": "REDbridge",
   "group": "Core toolkits",
   "role": "The engine host: WolvenKit's libraries behind JSON-RPC for REDcode, EDGEdeck, REDnode and the rest (GPL-3.0)",
   "stage": "released",
   "version": "0.14.0",
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
      "title": "Animations: export with rigs (0.13.0) and anims.info (0.14.0) done; .anims and rig import to do",
      "status": "in progress"
     },
     {
      "id": "Linux",
      "title": "Linux build (not scheduled)",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "Nothing unreleased",
     "#14's remaining parts for EDGEfab: .anims import and rig import"
    ]
   },
   "handTests": [
    {
     "name": "Probe and REDcode's smoke test on the 0.14.0 build",
     "steps": null,
     "status": "passed",
     "ranBy": "script",
     "note": "2026-11-16"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEbuilder",
     "what": "#11 is used when B3b or B7 starts (B3b itself waits on REDnode #24)",
     "ref": "REDbridge #11"
    }
   ],
   "ownerActions": [
    "Ask for release runs: it is released at the owner's request from the REDnode session",
    "Decide when to schedule Linux support",
    "Close REDbridge #15 and #16: both passed in the game 2026-11-08 (EDGEbuilder 0.8.1)"
   ],
   "risks": [
    "Two of its four open requests (#15, #16) are done and only left open; #11 waits on a later EDGEbuilder phase",
    "No session of its own: the REDnode session releases it",
    "Built on a WolvenKit beta"
   ],
   "checkedBy": "REDnode and EDGEbuilder sessions, 2026-11-16"
  },
  {
   "name": "EDGEdeck",
   "group": "Core toolkits",
   "role": "Mod manager: a library of mods outside the game folder, deployed with hardlinks; extension, command line and MCP server",
   "stage": "released",
   "version": "0.32.0",
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
     "No next version named; nothing unreleased",
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
    }
   ],
   "ownerSpotTests": [
    {
     "id": "31 to 33",
     "feature": "FOMOD installs: 0.32.0 shipped on a contributor's tests only",
     "status": "not run"
    },
    {
     "id": "35",
     "feature": "FOMOD in Update all, which needs a Premium account",
     "status": "not run"
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
     "what": "Its request to install from a downloaded archive (not filed yet)",
     "ref": "docs/design.html"
    }
   ],
   "ownerActions": [
    "Run the FOMOD hand tests 31 to 35",
    "Meet Nexus, so the OAuth client id can become the default",
    "Delete the unused RELEASE_TOKEN organization secret and its token",
    "Deprecate the old REDdeck listings (Marketplace, Open VSX, npm): unverified whether done",
    "Decide when to drop the stores' preview flag"
   ],
   "risks": [
    "The FOMOD installer (a contributor's PR) was released before the owner ran any of tests 31 to 35"
   ],
   "checkedBy": "EDGEdeck session, 2026-11-16"
  },
  {
   "name": "EDGEbuilder",
   "group": "Specialist toolkits",
   "role": "World builder on REDnode: pick game or mod assets, place them in the running game, bake scenes into the world",
   "stage": "released",
   "version": "0.11.0",
   "lastTag": "v0.10.9",
   "lastTagDate": "2026-11-12",
   "lastCommit": "2026-11-13",
   "commitsSinceTag": 5,
   "sessions": [
    "EDGEbuilder"
   ],
   "wiki": "wiki/edgebuilder/",
   "plan": {
    "name": "Roadmap B0 to B7",
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
      "status": "built, tests pending"
     },
     {
      "id": "B2d-2",
      "title": "Watch: re-import on save",
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
      "title": "Lights and more kinds",
      "status": "planned"
     },
     {
      "id": "B6",
      "title": "Comfort",
      "status": "planned"
     },
     {
      "id": "B7",
      "title": "Project builder: VS Code, world map",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "0.11.0",
    "needs": [
     "The B2d-1 Import test in the game (10 steps), not run",
     "EDGEfab's first release, so edgefab-core is on npm (EDGEfab #5)",
     "Rebuild from the npm package, not EDGEfab's checkout"
    ]
   },
   "handTests": [
    {
     "name": "B2d-1 Import a model (in game)",
     "steps": 10,
     "status": "not run",
     "ranBy": null,
     "note": "0.11.0 is deployed on the desktop since 2026-11-15, so it can be run now"
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
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "EDGEfab",
     "what": "edgefab-core on npm with EDGEfab's first release: it gates 0.11.0",
     "ref": "EDGEfab #5"
    },
    {
     "who": "EDGEfab",
     "what": "Keep unchanged textures on a second Add to Project, for Watch (B2d-2)",
     "ref": "EDGEfab #6"
    },
    {
     "who": "REDnode",
     "what": "World node registry, for the World inspector (B3b)",
     "ref": "REDnode #24"
    },
    {
     "who": "REDbridge",
     "what": "sector.find and sector.nodes, for the world inspector (B3b) and the world view (B7)",
     "ref": "REDbridge #11"
    }
   ],
   "ownerActions": [
    "Run the B2d-1 test in the game (0.11.0 is on the desktop; allow the new Archives permission for EDGEbuilder in REDnode's Mod Manager; keep a REDcode project open)",
    "Ask for the 0.11.0 release run once B2d-1 passes and edgefab-core is on npm",
    "Close EDGEbuilder #1 (mod archives index): done in B2c, passed in the game 2026-10-30"
   ],
   "risks": [
    "Import is slow: about 2 minutes for a 4096 px model",
    "Watch (B2d-2) cannot work until EDGEfab #6 keeps unchanged textures",
    "Tripo models look rough up close in the game: EDGEfab's quality research, not a B2d blocker",
    "EDGEbuilder #3 (quest places) waits on purpose: it is phase B4c, planned with EDGEquest's Q4"
   ],
   "checkedBy": "EDGEbuilder session, 2026-11-16"
  },
  {
   "name": "EDGEwave",
   "group": "Specialist toolkits",
   "role": "Sound studio: edit, mix and re-voice game sounds into a mod, with voice tools, an API and an MCP server",
   "stage": "released",
   "version": "0.2.0",
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
     "Desk, Project and Library: built and hand-tested 2026-11-16; the smoke test still to run on it, with the PC left alone",
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
     "steps": 15,
     "status": "passed",
     "ranBy": "owner",
     "note": "2026-11-16, one round, steps 1 to 15; four findings fixed during it. A step 16 (Reveal in File Explorer) was added after and is still to run"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "REDnode",
     "what": "Sound API steps S2 to S4, for the in-game features (A6)",
     "ref": "REDnode docs/sound.md"
    }
   ],
   "ownerActions": [
    "Leave the PC alone about 5 minutes so the EDGEwave session can run its smoke test on the Desk and Library",
    "Say whether to build Add to Project's Pick a game sound to replace… row next",
    "Say whether to file requests: REDcode's Library view buttons for sounds; Reveal in File Explorer wording for EDGEdeck and EDGEmat"
   ],
   "risks": [
    "Voice lines have no route into the game yet (the .wem route)",
    "Desk, Project and Library are on main, not in a release yet"
   ],
   "checkedBy": "EDGEwave session, 2026-11-16"
  },
  {
   "name": "EDGEmat",
   "group": "Specialist toolkits",
   "role": "Material editor: read, edit, generate and apply game materials, and the Wardrobe Designer app",
   "stage": "released",
   "version": "0.3.2",
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
    "version": "0.3.3",
    "needs": [
     "The hand test 'The bake: color' (4 steps), not run",
     "A short check that new bumps are no longer backwards: no test row yet",
     "#3: about 35 places still say Pack and Try",
     "Wardrobe Designer 0.1.0, its own release: fixes built, Reshape and keys rerun, install test, three Nexus screenshots"
    ]
   },
   "handTests": [
    {
     "name": "The bake: color",
     "steps": 4,
     "status": "not run",
     "ranBy": null,
     "note": "Built 2026-11-16"
    },
    {
     "name": "Wardrobe Designer: Reshape and keys (in game)",
     "steps": 12,
     "status": "partly run",
     "ranBy": "owner",
     "note": "Steps 1 to 8 run 2026-11-16; 9 to 12 open; faults found, fixes not built yet; reruns after them"
    },
    {
     "name": "Wardrobe Designer: install from the release zip",
     "steps": 5,
     "status": "not run",
     "ranBy": null,
     "note": "Gate for Wardrobe Designer's first release"
    },
    {
     "name": "Install of 0.3.2 from the Marketplace",
     "steps": null,
     "status": "partly run",
     "ranBy": "owner",
     "note": "The test build passed 2026-11-13; the Marketplace install is still open"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [],
   "ownerActions": [
    "Finish steps 9 to 12 of Wardrobe Designer's Reshape and keys; answer its session about the screen resolution and the picture click",
    "Run 'The bake: color'",
    "Install 0.3.2 from the Marketplace in a normal VS Code",
    "Close EDGEmat #1 and #2, or say its session may: both are done",
    "Narrow the Azure DevOps token and plan the move to Entra ID publishing before it expires (about February 2027)",
    "Three screenshots for Wardrobe Designer's Nexus page"
   ],
   "risks": [
    "A made piece of clothing can come out off-color until the bake is checked in the game (the first made hat was too dark)",
    "The Marketplace token lasts to about February 2027, and the next renewal may need Entra ID publishing",
    "Two of its four open requests (#1, #2) are done and only left open; #3 and #9 are real"
   ],
   "checkedBy": "EDGEmat session, 2026-11-16"
  },
  {
   "name": "EDGEquest",
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
     "status": "not run"
    },
    {
     "id": "Test 8",
     "feature": "An attribute check V passes",
     "status": "not run"
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
    "Run the end-to-end test with a non-Corpo save (test 8 leftovers)",
    "Release EDGEwave 0.2.0, or approve a 'needs EDGEwave 0.2.0' note on EDGEquest's pages",
    "Ask for the next release run when phone calls and Copy Scene are ready"
   ],
   "risks": [
    "Store and Nexus pages describe sound features that need EDGEwave 0.2.0, not yet on the stores",
    "Two quests at the same place both fire their scenes; nothing warns yet"
   ]
  },
  {
   "name": "EDGEhack",
   "group": "Specialist toolkits",
   "role": "Quickhack editor: edits and creates quickhacks as TweakXL and ArchiveXL files",
   "stage": "released",
   "version": "0.1.2",
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
     "The VS Code Marketplace to accept the extension (it refused 0.1.0, 0.1.1 and 0.1.2; retry after about 2026-11-19)",
     "Nexus page 37293 published by the owner"
    ]
   },
   "handTests": [
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
     "status": "not run"
    },
    {
     "id": "H3.1",
     "feature": "A status effect from a script function, and spread",
     "status": "not run"
    }
   ],
   "waitingOn": [
    {
     "who": "upstream",
     "what": "The VS Code Marketplace: the refusal has a cooldown, so retry after about 2026-11-19",
     "ref": "CHANGELOG 0.1.2"
    },
    {
     "who": "EDGEchat",
     "what": "List edgehack-mcp in the plugin",
     "ref": "EDGEchat #4"
    }
   ],
   "ownerActions": [
    "Take the Marketplace refusals to Marketplace support",
    "Publish Nexus page 37293 (files are uploaded, the page is held back)",
    "Supply the screenshots the wiki guide names"
   ],
   "risks": [
    "The VS Code Marketplace refused three versions with no reason given; retry after about 2026-11-19",
    "Try Live cannot change names: the game reads its text tables at load"
   ],
   "checkedBy": "REDnode session (its REDnode side), 2026-11-16"
  },
  {
   "name": "EDGEkit",
   "group": "Specialist toolkits",
   "role": "The Edgemodders editor: a branded Code - OSS build with the EDGE extensions built in, and an extension pack",
   "stage": "released",
   "version": "1.140.6",
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
      "title": "Track upstream",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "The onboarding sign-in toast fix is applied but not built or tested",
     "EDGEquest built in (EDGEkit #7 is still open)"
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
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "upstream",
     "what": "The VS Code Marketplace refused EDGEhack, so the Marketplace pack lacks it",
     "ref": "CLAUDE.md"
    },
    {
     "who": "owner",
     "what": "Review of the onboarding and Welcome text",
     "ref": "CLAUDE.md, K3"
    }
   ],
   "ownerActions": [
    "Review the onboarding and Welcome page text",
    "Click Restart to Update on an older install: the first real click",
    "Close EDGEkit #7 (EDGEquest), left to the owner",
    "Decide on a code-signing certificate: the installer is unsigned"
   ],
   "risks": [
    "The installer is not signed, so Windows SmartScreen may warn",
    "Three releases in a row shipped with no installer hand test",
    "Upstream is pinned at 1.140 and tracking it (K5) has not started"
   ]
  },
  {
   "name": "EDGEchat",
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
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": null,
    "needs": [
     "List edgequest-mcp and edgehack-mcp (EDGEchat #3, #4)",
     "Move to newer servers: the plugin runs edgedeck-mcp 0.30.0 and EDGEdeck is at 0.32.0"
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
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "REDcode",
     "what": "redcode-mcp should read EDGEkit's settings folder too (no issue filed)",
     "ref": "CLAUDE.md"
    }
   ],
   "ownerActions": [
    "Run the next release with Update Nexus Mods: the first since the move to the shared Nexus tool"
   ],
   "risks": [
    "Two requests to list new servers have been open since 2026-11-04 and 2026-11-11",
    "The check-mod and new-mod skills do not fire on plain prompts",
    "The eval judge is flaky"
   ]
  },
  {
   "name": "REDsave",
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
    "Upload the GitHub social preview, and set the Nexus tags by hand",
    "Pick a next phase from the design's Later list, or leave it idle"
   ],
   "risks": [
    "Plan complete and idle since 2026-11-08",
    "Saves cannot be made again: sessions never write to the real save folder"
   ]
  },
  {
   "name": "EDGEfab",
   "group": "In development",
   "role": "Asset maker: turns a GLB or a text prompt into game-ready props, added to a REDcode project or the EDGE Library",
   "stage": "in development",
   "version": "0.1.0",
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
      "title": "Props: GLB or Tripo into a project, placed with EDGEbuilder (passed its tests; release pending)",
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
      "id": "F5a",
      "title": "Characters, seen (uses EDGEdir's animation index)",
      "status": "planned"
     },
     {
      "id": "F7b-1",
      "title": "Small animation edits",
      "status": "planned"
     },
     {
      "id": "F4",
      "title": "Clothing",
      "status": "planned"
     },
     {
      "id": "F5b",
      "title": "Characters, heard and read",
      "status": "planned"
     },
     {
      "id": "F7b-2",
      "title": "Character animation",
      "status": "planned"
     },
     {
      "id": "FA",
      "title": "The agent",
      "status": "planned"
     },
     {
      "id": "F6",
      "title": "Characters, edited",
      "status": "planned"
     },
     {
      "id": "F8",
      "title": "Unreal assets",
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
    "version": "0.1.0",
    "needs": [
     "The owner asks for the release run (extension, MCP server and edgefab-core to npm, which closes #5)",
     "The owner's video on Nexus page 38605 before the page goes live",
     "If the run is not on 2026-11-16, the date in the README and changelog changes first"
    ]
   },
   "handTests": [
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
     "name": "Release tests on the final build: smoke, core package, package check",
     "steps": 3,
     "status": "passed",
     "ranBy": "script",
     "note": "All three passed 2026-11-16"
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Start the 0.1.0 release run: the only thing 0.1.0 waits on",
     "ref": "CLAUDE.md"
    },
    {
     "who": "REDbridge",
     "what": "Later phases, not blocking: .anims import and rig import, for characters and animation",
     "ref": "REDbridge #14"
    },
    {
     "who": "REDcode",
     "what": "Later phase (F5a), not blocking: play a game animation in the mesh viewer",
     "ref": "REDcode #21"
    },
    {
     "who": "REDnode",
     "what": "Later phase (F7b-1), not blocking: play an animation on a spawned character",
     "ref": "REDnode #39"
    },
    {
     "who": "EDGEmat",
     "what": "Not blocking: generateImage takes a size; EDGEfab makes its own image call until then",
     "ref": "EDGEmat #9"
    }
   ],
   "ownerActions": [
    "Ask for the 0.1.0 release run",
    "Add the video to Nexus page 38605 before it goes live (the shot script is nexus/video-script.md)",
    "Fill the Nexus page's form fields and tags by hand (nexus/README.md lists them)"
   ],
   "risks": [
    "The README and changelog are dated 2026-11-16 for 0.1.0: the date changes if the release run is later",
    "EDGEbuilder is blocked on #5 (edgefab-core on npm) now, and on #6 for Watch; #5 closes with the 0.1.0 release",
    "Generate from Words uses paid AI services with the modder's own keys; it is optional, and the rest needs no key"
   ],
   "checkedBy": "EDGEfab session, 2026-11-16"
  },
  {
   "name": "EDGEdir",
   "group": "In development",
   "role": "Animation director: timelines that put the game's animations onto actors, as sequences and scenes",
   "stage": "early build",
   "version": "0.0.20",
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
      "title": "Play in game (plan agreed 2026-11-17; D5b the cue sheet and D5a sets built and passed by script, 0.0.20; the player package and the button not built)",
      "status": "in progress"
     },
     {
      "id": "D6",
      "title": "Audio, camera, weather",
      "status": "planned"
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
     "The owner's spot tests S1 to S12 (about 35 minutes): none run",
     "GitHub setup: Pages source, social preview; whether the publish secrets reach the repo is unchecked",
     "A Nexus page"
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
     "note": "11 of 14 on 0.0.18; the three misses were fixed in 0.0.19 and passed their rerun. One small change in 0.0.20, not run"
    }
   ],
   "ownerSpotTests": [
    {
     "id": "S1",
     "feature": "The timeline",
     "status": "not run"
    },
    {
     "id": "S2",
     "feature": "Play, save, the Desk",
     "status": "not run"
    },
    {
     "id": "S3",
     "feature": "The game's animations",
     "status": "not run"
    },
    {
     "id": "S4",
     "feature": "The actor picker",
     "status": "not run"
    },
    {
     "id": "S5",
     "feature": "Animations on a track",
     "status": "not run"
    },
    {
     "id": "S6",
     "feature": "The rig rule",
     "status": "not run"
    },
    {
     "id": "S7",
     "feature": "A made animation",
     "status": "not run"
    },
    {
     "id": "S8",
     "feature": "The 3D preview",
     "status": "not run"
    },
    {
     "id": "S9",
     "feature": "Transitions",
     "status": "not run"
    },
    {
     "id": "S10",
     "feature": "Sequences",
     "status": "not run"
    },
    {
     "id": "S11",
     "feature": "What the game will not match",
     "status": "not run"
    },
    {
     "id": "S12",
     "feature": "Sets",
     "status": "not run"
    }
   ],
   "waitingOn": [
    {
     "who": "REDnode",
     "what": "A weather setter, and blend times at a jump measured in the game",
     "ref": "REDnode #46"
    },
    {
     "who": "REDnode",
     "what": "V as an actor in the game, for D5",
     "ref": "REDnode #47"
    },
    {
     "who": "REDnode",
     "what": "A call on the editor channel that reaches a package, for Play in game; directing a person not spawned with the workspot",
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
    }
   ],
   "ownerActions": [
    "Run spot tests S1 to S12",
    "GitHub: social preview, Pages source; create a Nexus page",
    "Later, after REDnode's spike: decide whether the real player acts in the game or a stand-in copy"
   ],
   "risks": [
    "Seen once in a scripted round: a message that unsaved changes were put back, with no window reload; not reproduced, nothing lost",
    "Every hand test was run by script with nobody watching",
    "V has no head in the preview: no V with a head can be exported",
    "The first read of the game is slow: about 3.5 minutes for the animation index",
    "Which way an actor's Turn turns against the game is unverified until D5",
    "How the game's own join at a jump compares with the preview's transitions is not measured yet"
   ],
   "checkedBy": "EDGEdir session, 2026-11-17"
  },
  {
   "name": "EDGEmobile",
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
      "title": "Chooms!: the game's story (code parts built, waiting on the owner's test; knowledge cards not started)",
      "status": "in progress"
     },
     {
      "id": "C3",
      "title": "Chooms!: posts by AI through REDagent",
      "status": "planned"
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
      "id": "Release",
      "title": "Zips, Nexus pages, changelog (tooling built 2026-11-10, never run)",
      "status": "planned"
     }
    ]
   },
   "nextRelease": {
    "version": "first release",
    "needs": [
     "The owner's C2 code test (9 steps) and the C2 knowledge cards",
     "C3: people and corporations post by themselves through REDagent",
     "Nexus pages for EDGEmobile and Chooms!",
     "A first run of the release workflow",
     "README status line and badge naming the version"
    ]
   },
   "handTests": [
    {
     "name": "C2 code test (Chooms! reads the save's story)",
     "steps": 9,
     "status": "not run",
     "ranBy": null,
     "note": "Waiting for the owner, on the two scanned Corpo saves"
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
     "status": "not run"
    },
    {
     "id": "Lifepath",
     "feature": "The story read on a non-Corpo save",
     "status": "not run"
    }
   ],
   "waitingOn": [
    {
     "who": "owner",
     "what": "The C2 code test, 9 steps, with log lines and the read time",
     "ref": "docs/design.md, C2"
    },
    {
     "who": "REDagent",
     "what": "For C3, not blocking today: a choice of model in agent.ask; no issue filed yet",
     "ref": "docs/design.md"
    }
   ],
   "ownerActions": [
    "Run the C2 code test: mostly in the game, steps 3 to 6 on the phone",
    "Review the knowledge cards once drafted",
    "Create the Nexus pages for EDGEmobile and Chooms!",
    "Optional: photo mode pictures for Chooms!'s people and places (for C4)"
   ],
   "risks": [
    "Never tested on an iPhone, only Android",
    "Only Corpo saves tested; some character ids are unverified (River, Kerry's contact)",
    "Relies on Cloudflare quick tunnels: a private web address",
    "How long the story read takes in the game is unverified (about 350 calls)",
    "A game patch that renames quest paths would need Chooms!'s story file updated"
   ],
   "checkedBy": "EDGEmobile session, 2026-11-16"
  },
  {
   "name": "EDGEmods",
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
      "title": "Accounts, likes, Profile",
      "status": "planned"
     },
     {
      "id": "R3d",
      "title": "Downloads",
      "status": "planned"
     },
     {
      "id": "R3e",
      "title": "Admin",
      "status": "planned"
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
      "status": "planned"
     },
     {
      "id": "R4",
      "title": "Browse and install (extension)",
      "status": "planned"
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
     "R3c accounts, once the owner sets up the Auth0 tenant",
     "R3d to R3h: downloads, admin, Stripe, webhooks, deploy",
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
    }
   ],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "Set up the Auth0 development tenant, for R3c",
     "ref": "docs/auth0-setup.md"
    },
    {
     "who": "owner",
     "what": "Agree the first request issues (EDGEdeck install from an archive, REDcode publish button)",
     "ref": "CLAUDE.md"
    },
    {
     "who": "EDGEweb",
     "what": "Where the mod website lives: EDGEweb owns the domain",
     "ref": "CLAUDE.md"
    }
   ],
   "ownerActions": [
    "Set up the Auth0 development tenant",
    "Review and agree design draft 0.2 and the edgemods.json format",
    "Decide the subscription price and the free download speed",
    "Get a legal reading on non-commercial mod licences before launch"
   ],
   "risks": [
    "No commits since 2026-11-03: waiting on the owner's review and the Auth0 tenant",
    "No release and no live site yet; the design is still a proposal"
   ]
  },
  {
   "name": "EDGEguide",
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
      "status": "in progress"
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
     "The G0 decisions with the owner",
     "G1 to G3 built and tested"
    ]
   },
   "handTests": [],
   "ownerSpotTests": [],
   "waitingOn": [
    {
     "who": "owner",
     "what": "The G0 questions: all have proposed answers since 2026-10-26, none decided",
     "ref": "docs/design.md"
    },
    {
     "who": "EDGEkit",
     "what": "A command to outline toolbar buttons",
     "ref": "EDGEkit #6"
    }
   ],
   "ownerActions": [
    "Decide G0: the port, sign-in, which window answers, the contract's shape"
   ],
   "risks": [
    "No code yet, and no commits since 2026-11-03: stalled on the owner's decisions"
   ]
  },
  {
   "name": "VATS",
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
    "Retest V13 and test PartLine in game",
    "Decide the open design questions: duration clock, moving between enemies, zoom"
   ],
   "risks": [
    "One redscript compile error stops every script in the game; it happened on 2026-11-14",
    "Spikes V1 to V12 are checked by the REDnode session; V13 onward is VATS-repo work nobody has confirmed"
   ],
   "checkedBy": "REDnode session (V1 to V12 only), 2026-11-16"
  },
  {
   "name": "EDGErepo",
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
    "Approve any move of the v1 tag: it reaches every tool's next release"
   ],
   "risks": [
    "Anyone who can move v1 can run code with the organization's Nexus key",
    "A bad tag move breaks every tool's next release"
   ]
  },
  {
   "name": "EDGEweb",
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
    "Supply screenshots for the wiki placeholders still waiting"
   ],
   "risks": [
    "No wiki section yet for EDGEfab, EDGEdir, EDGEmobile or EDGEmods",
    "EDGEweb #6 (a home for the rules the tools share) is open since 2026-11-04"
   ]
  }
 ]
};
