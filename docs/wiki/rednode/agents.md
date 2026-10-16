---
title: Agents and MCP
section: REDnode
order: 10
description: "REDnode and AI agents: the MCP server that lets Claude Code see and call the running game, packages that use it, and asking REDagent from your own mod."
reviewed: 2026-10-16
---

# Agents and <span class="y">MCP</span>

REDnode was built with AI agents in mind. It talks to them in two ways:

| Way | For | Status |
|---|---|---|
| **The MCP server** | Claude Code on your PC, or an agent inside a package (REDagent), uses REDnode's tools: logs, windows, pictures of the game, game types, TweakDB, live game calls | Passed in game |
| **`agent.ask`** | Your mod asks REDagent a question and shows the answer | Passed in game |

MCP, the Model Context Protocol, is the standard way to give an AI agent tools. See the [glossary](../glossary.html).

## The MCP server

### Connect Claude Code

1. In the game, press **F10**, open the launcher and switch **MCP server** on.
2. Press **Copy setup**.
3. In a terminal on the same PC, paste and run the copied command once. It adds REDnode to Claude Code as `rednode`.
4. Start a **new** Claude Code session while the game runs, and ask, for example: "Using the rednode tools, what are V's health, level and money?"

`claude mcp list` shows `rednode` as connected while the game runs, and as failing while it's closed, which is normal: the server lives in the overlay host, which runs with the game.

[Connect Claude Code](../connect-claude-code.html) covers REDnode beside the REDcode and REDdeck servers.

{% include shot.html caption="MCP server switch" shows="The bottom of the REDnode launcher with the MCP server switch on and the Copy setup button." %}

### What the tools do

| Tool | Gives the agent | Changes anything |
|---|---|---|
| `logs` | What Node mods printed: all, one mod, or errors | No |
| `apps` | Your packages, their state, memory, pins, requirements and windows. Can open, close, restart and pin them | Only when asked to |
| `game_state` | What the game shows (menu, photo mode, scene, main menu) and the overlay mode | No |
| `perf` | Frame rate, the overlay's cost, memory | No |
| `gameapi_lookup` | Game types and functions, with REDnode's notes | No |
| `window_text` | The text in an overlay window | No |
| `window_image` | A picture of one overlay window | No |
| `window_console` | A window's console messages and errors | No |
| `game_image` | A picture of the game's screen, with or without the overlay. On an HDR screen the colours are approximate; HDR capture is not yet confirmed in game | No |
| `tweakdb` | TweakDB values and records from the running game | No |
| `api_get` | A property of a game object | No |
| `api_call` | A live call into the game | **Yes.** It can change your game, such as money or health |

Claude Code asks before it uses a tool, unless you tell it not to. Allow the read-only tools freely; keep `api_call` on ask.

### Safety

- The server listens only on your own PC (`127.0.0.1`, port 41820), and every request needs the token in the setup command. The token is kept, so the setup keeps working.
- It only answers while the game is running.
- Switching **MCP server** off closes it to Claude Code and other outside programs.

Every tool and its options are on REDnode's [MCP server page](https://edgemodders.github.io/REDnode/mcp.html).

### For packages

A package can use the same tools for an AI agent of its own. It asks for the `mcp` permission in its manifest; once the player allows it, `kernel.mcp()` gives it the server's address and its own token:

```js
import { kernel } from 'rednode';

const { url, headers } = await kernel.mcp(); // fails until the player allows it
```

For a package, the server runs even with the **MCP server** switch off: that switch only controls access from outside REDnode. [REDagent](../redagent/) works this way.

## Asking REDagent from a mod

Any package can ask [REDagent](../redagent/) a question and stream the answer into its window: a build suggestion, an explanation of an error, a summary of what's happening. REDagent must be installed and on, and the package needs the `agent` permission ("questions to the AI assistant").

```js
import { agent, ui } from 'rednode';

const out = ui.text('');
let text = '';
await agent.ask('Suggest a build for a netrunner at level 12.', {
  context: { level: 12 },                        // your mod's state, sent with the question
  onText: (t) => out.set({ text: (text += t) }), // the answer as it arrives
});
```

| Rule | Why |
|---|---|
| Every answer costs the player | It's their Claude API account. Ask when the player wants it, never on a timer. REDagent gives each package a daily limit ($0.25 unless the player changes it); past it, `ask` fails and says so |
| The assistant only reads | When answering a package, REDagent can look at logs, the game state and the game API, but never changes files or the game |
| Send what it needs in `context` | So it doesn't spend time and money finding it |
| Let the player cancel | Pass an `AbortSignal` as `signal` |

The **Ask mod** sample asks whatever you type and streams the answer. A package that wants to *answer* questions itself, as REDagent does, uses `agent.serve` and says `"provides": ["agent"]` in its manifest.

## REDagent

REDagent is the agent that lives in the game: a chat window, powered by Claude, that writes, runs and fixes REDnode packages with you. It's a REDnode package with the `mcp` permission. See the [REDagent section](../redagent/).
