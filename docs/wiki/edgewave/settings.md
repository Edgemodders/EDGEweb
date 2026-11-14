---
title: EDGEwave settings and commands
nav_title: Settings and commands
section: EDGEwave
order: 9
description: "Every EDGEwave setting with its default and when to change it, every command and button by where it is, the editor's buttons, the keys, and the REDcode setting EDGEwave depends on."
reviewed: 2026-11-13
---

# Settings and <span class="y">commands</span>

A reference page. Most people never change a setting: all five are about ElevenLabs, and the voice tools work with the defaults.

| On this page | |
|---|---|
| [Settings](#settings) | The five settings, and one of REDcode's |
| [Commands](#commands) | [In the command palette](#in-the-command-palette), [the Sounds view](#the-sounds-view), [Game Assets](#game-assets), [other views](#from-other-views) |
| [Buttons in the editor](#buttons-in-the-editor) | |
| [Keys](#keys) | |
| [Tools for assistants](#tools-for-assistants) | |

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `edgewave`.

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgewave.elevenlabs.sampleRate` | 48000 | The sound quality the voice tools ask ElevenLabs for, in samples per second: 48000, 44100, 32000, 24000, 22050 or 16000. If your plan refuses the rate, EDGEwave uses 24000 from then on | Rarely. 44100 needs ElevenLabs' Pro plan |
| `edgewave.elevenlabs.speechModel` | empty | The model **Speak Line** starts with, such as `eleven_v3`. Empty means ElevenLabs' default. Speak Line lists your account's models either way | You always pick the same model by hand |
| `edgewave.elevenlabs.voiceChangerModel` | `eleven_multilingual_sts_v2` | The model **Re-Voice** starts with | ElevenLabs brings out a newer voice changer you prefer |
| `edgewave.voiceLines.model` | `eleven_v3` | The model **Voice Lines** speaks a quest's lines with. `eleven_v3` follows delivery tags such as `[softly]`; other models get the tags taken out. An assistant's `voice_lines` uses it too | You want plain delivery, or another language model |
| `edgewave.elevenlabs.baseUrl` | `https://api.elevenlabs.io` | ElevenLabs' server | Only if your ElevenLabs account uses one of its regional servers: `https://api.us.elevenlabs.io`, `https://api.eu.residency.elevenlabs.io`, `https://api.in.residency.elevenlabs.io` or `https://api.sg.residency.elevenlabs.io` |

Your ElevenLabs key is not a setting. It is set with a command, below, and kept in VS Code's secret storage ([Your key](voices.html#your-key)).

**One REDcode setting matters to EDGEwave:**

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.pack.redmod` | off | Packs the whole project as a REDmod | You use **Replace the event**, **Silence the event** or **A new sound for this project**. See [The REDmod setting](into-the-game.html#the-redmod-setting) |

EDGEwave takes the game folder and REDbridge from REDcode. Those settings are on REDcode's [Settings and commands](../redcode/settings.html) page.

## Commands

### In the command palette

Press `Ctrl+Shift+P` and type `EDGEwave`.

| Command | Does |
|---|---|
| **Create a Sound...** | A new, empty sound document ([A new, empty sound](finding.html#a-new-empty-sound)) |
| **Open Sound in EDGEwave...** | Opens a sound file from your PC in the editor |
| **Filter the Game's Sounds** | Narrows Game Assets by words or a pattern ([Filter](finding.html#filter)) |
| **Refresh Game Assets** | Reads the game's sounds again, for example after a game update |
| **Stop Sound** | Stops a sound started with **▶**, or one playing in the game |
| **Set ElevenLabs API Key** | Sets or replaces your key |
| **Clear ElevenLabs API Key** | Forgets your key |
| **ElevenLabs Voices Made by EDGEwave...** | Lists the voice clones and saved voices EDGEwave made in your account, to delete them ([Voice clones](voices.html#voice-clones)) |
| **Voice Lines...** | Reopens the Voice Lines tab of a quest voiced before ([Voice a quest](voice-lines.html#voice-a-quest)) |
| **Voices for REDnode...** | Installs or updates EDGEwave Voice in the game and names its voices ([EDGEwave Voice](voice-lines.html#edgewave-voice-for-rednode)) |
| **Connect an Assistant (MCP)...** | Connects Claude Code to EDGEwave's MCP server, or copies the command or a JSON entry for another client ([Assistants](assistants.html#connect-claude-code)) |

The commands below act on a row or a view. They are buttons or right-click entries there, and are not in the palette.

### The Sounds view

| Command | Where | Does |
|---|---|---|
| Create a Sound... | Title bar (**+**) | As above |
| Open Sound in EDGEwave... | Title bar (folder) | As above |
| Refresh | Title bar | Reads the lists again |
| Hear | Click a named sound under **Project sounds**, or right-click it | Opens it in [the Hear tab](finding.html#the-hear-tab) |
| Copy Name | A named sound's row (copy icon), or right-click | The name a quest, scene or script plays it by |
| Show the WAV | Right-click a named sound | Its WAV file |
| Remove from Recent | A Recent row (**×**), or right-click | Takes it off the list. The file stays |
| Clear Recent | The **Recent** heading, or right-click it | Empties the list |
| Open Folder... | The **No folder open** row | VS Code's Open Folder box |

### Game Assets

| Command | Where | Does |
|---|---|---|
| Filter the Game's Sounds | Title bar (funnel) | As above |
| Clear the Filter | Title bar, while a filter is set | Shows everything again |
| Refresh Game Assets | Title bar | As above |
| Play | A sound's row (**▶**) | Plays it at once, with no tab. Again stops it |
| Add to the Open Sound | A sound's row (**+**), or right-click | A new track on the sound open in the editor |
| Open in EDGEwave | A sound's row (a page with an arrow), or right-click | Opens it as its own sound document |
| Hear | Click a row, or right-click | Opens it in the Hear tab |
| Play in the Game | Right-click an event | Plays the event in the running game, through REDnode ([Play in the Game](finding.html#play-in-the-game)) |
| Copy Name | Right-click | An event's name, a variation's hash, or a file's game path |

### From other views

| Command | Where | Does |
|---|---|---|
| Open Sound in EDGEwave... | Right-click a sound file (`.wav`, `.ogg`, `.mp3`, `.flac`, `.opus`, `.wem`) in VS Code's Explorer, or in REDcode's Project view | Opens it in the editor |
| Open in EDGEwave | REDcode's sound list (**Browse Game Sounds**) and its audio player | Hands the sound that is playing to EDGEwave. It is REDcode's button |

Other EDGE tools also reach EDGEwave directly. EDGEquest's sound pickers search and play sounds through it, and its Storyboard opens Voice Lines.

## Buttons in the editor

| Where | Buttons |
|---|---|
| Header | **Generate Sound...**, **Speak Line...**, and on a voice line **Re-Voice...** and **Translate** (planned). The **Voice line** tick box |
| Mix bar | Previous clip edge, play, stop, next clip edge, loop, **+** (**Add Sound**), **Render WAV**, **Add to Project...** |
| Lanes | A tick box per lane. Right-click a lane: **Only This Track**, **All Tracks**, **Move Up**, **Move Down** |
| Track bar | **Level**, **Pan**, **Rate**, **Start**, **Remove** |
| Clip bar | Play, stop, **+**, **−**, **Fit**, **Sel** |
| Under the waveform | **Trim**, **Cut**, **Copy**, **Paste**, **Silence**, **Fade in**, **Fade out** and their curve, **Apply gain**, **Normalize**, **Mono** or **Stereo**, **Set loop**, **Clear loop** |
| Effects and Master panes | **Preset...**, **Add effect...**, and on each effect a tick box and **×**. Master also has **Gain** and the **Render** sample rate |

What each does: [Edit and mix](editing.html). **Add to Project...** has a page of its own: [Into the game](into-the-game.html).

## Keys

These work in the editor, once you have clicked the waveform.

| Key | Does |
|---|---|
| `Space` | Play or stop the selected clip |
| `Shift+Space` | Play or stop the whole mix |
| `Ctrl+X`, `Delete`, `Backspace` | Cut the selection |
| `Ctrl+C`, `Ctrl+V` | Copy the selection, paste at the cursor |
| `Ctrl+A` | Select the whole clip |
| `Home`, `End` | Cursor to the start, to the end |
| `Ctrl` + mouse wheel | Zoom the waveform |
| `Ctrl+Z`, `Ctrl+Y` | Undo, redo |
| `Ctrl+S` | Save the sound document |
| `Escape` | Closes a voice tool's window, or the right-click menu |

EDGEwave sets no global keyboard shortcuts. To give a command one, use VS Code's **Keyboard Shortcuts** (`Ctrl+K Ctrl+S`) and search for `EDGEwave`.

## Tools for assistants

An AI assistant gets five tools through EDGEwave's MCP server: `sound_events`, `sound_custom`, `voice_lines`, `voice_status` and `voice_voices`. They are listed on [Assistants](assistants.html#the-tools).
