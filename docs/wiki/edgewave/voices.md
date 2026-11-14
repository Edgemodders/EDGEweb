---
title: EDGEwave's voice tools
nav_title: Voice tools
section: EDGEwave
order: 6
description: "Generate Sound, Speak Line and Re-Voice in EDGEwave, through ElevenLabs with your own key: what it costs and to whom, what is sent, where the key is kept, how to use each tool, and what to know about voice clones."
reviewed: 2026-11-13
---

# Voice <span class="y">tools</span>

Three buttons in EDGEwave's editor make new sound instead of editing old sound: **Generate Sound** makes a sound effect from a description, **Speak Line** speaks a line of text in a voice, and **Re-Voice** gives an existing line another voice. They work through [ElevenLabs](https://elevenlabs.io), an AI sound service, with your own account there.

They are optional. Everything else in EDGEwave works without an account.

| On this page | |
|---|---|
| [Cost, privacy and your key](#cost-privacy-and-your-key) | Who pays, what is sent, where the key lives |
| [Your key](#your-key) | Getting one and setting it |
| [Where the buttons are](#where-the-buttons-are) | And why Re-Voice is sometimes missing |
| [Generate Sound](#generate-sound) | A sound effect from words, with a Try it |
| [Speak Line](#speak-line) | Text, spoken |
| [Re-Voice](#re-voice) | The same line in another voice |
| [Voice clones](#voice-clones) | Read this before you use a game line's voice |
| [Into the game](#into-the-game) | What you can do with the result today |

## Cost, privacy and your key

| | |
|---|---|
| **Who pays, and whom** | You pay ElevenLabs. EDGEwave is free, and neither it nor EDGEmodders takes or sees any payment. What your ElevenLabs plan includes is between you and ElevenLabs |
| **What costs** | Making sound: each **Generate**, each **Speak**, each set of Re-Voice previews and each **Re-Voice** spends credits from your ElevenLabs account. A request that fails because the key is wrong spends nothing |
| **What is sent to ElevenLabs** | **Generate Sound**: your description and its options. **Speak Line**: the line's text and the voice you chose. **In the selected line's voice**, and **Re-Voice**: also the recording of the selected line, as you edited it. For a game line that is a piece of the game's audio, a voice actor's performance. Nothing else leaves your PC: not your project, not other game files |
| **Where the key is kept** | In VS Code's secret storage, which uses Windows' own store for passwords. It is never written into a settings file, a sound document or your project |
| **Which server** | `api.elevenlabs.io`, unless you change the [setting](settings.html#settings) |

One exception to where the key is kept: if you connect an AI assistant and choose to give it the key, that assistant keeps it in its own settings file, in plain text. See [Assistants](assistants.html#the-elevenlabs-key).

## Your key

An **API key** is a password that lets a program use your account.

1. Make an account at [elevenlabs.io](https://elevenlabs.io).
2. On the ElevenLabs site, go to **Developers**, then **API Keys**, and make a key. A new key is restricted by default: switch on **text to speech**, **voices**, **sound effects** and **voice changer** for it.
3. Copy the key. The first time you use a voice tool, EDGEwave asks for it in a password box: paste it there.

| Command (`Ctrl+Shift+P`) | Does |
|---|---|
| **EDGEwave: Set ElevenLabs API Key** | Sets or replaces the key |
| **EDGEwave: Clear ElevenLabs API Key** | Forgets it |

If the key is missing, or ElevenLabs refuses it, the tool's window says so and shows two buttons: **Set ElevenLabs API Key...** and **Where to make one**, which opens ElevenLabs' help page.

## Where the buttons are

Open any sound in the [editor](editing.html). The buttons are at the right of the header, the top line of the editor's page.

| Button | Shows |
|---|---|
| **Generate Sound...** | Always |
| **Speak Line...** | Always |
| **Re-Voice...** | Only while the selected track is a voice line |
| **Translate** | Only on a voice line. It is planned: pressing it says so |

A track counts as a **voice line** when the header's **Voice line** box is ticked. EDGEwave ticks it by itself for a game voice line, by the line's folder or file name. Tick it yourself for a recording of your own.

To get a game voice line onto a track: in **Game Assets**, unfold **Voice lines**, find the line and press **+** (to add it to the open sound) or **Open in EDGEwave**. See [Find and play sounds](finding.html#open-a-sound-in-the-editor).

## Generate Sound

A sound effect from a description.

1. Click where the sound should start: an empty part of a lane, or the ruler above the lanes. That places the mix cursor.
2. Press **Generate Sound...** and describe the sound, such as `a heavy metal door slams in a concrete corridor, short echo`.
3. Set the options if you like, and press **Generate**.
4. Play **Take 1**. Not right? Change the description and press **Generate again**: Take 2 appears above Take 1. Play both.
5. Press **Add** on the take you want.

| Option | Means |
|---|---|
| Length | From half a second to 30 seconds. Left empty, the service decides from your description |
| **Loop** | Asks for a sound whose end runs into its start without a gap, for something that repeats, such as a hum |
| **Follow the prompt** | From 0 to 1. Higher keeps closer to your words. Lower leaves the service more freedom |

| What you should see | |
|---|---|
| After step 3 | "Generating...", then **Take 1** with a play button. No new track yet |
| After step 5 | The window closes. A new track at the mix cursor, selected, with that take |

Each take costs credits. Only the take you add is saved, as a WAV in a `<name>.gen` folder beside the sound document. The other takes are gone when you close the window.

### Try it: a door slam

It spends a few seconds' worth of ElevenLabs credits.

1. In the **Sounds** view, press **+** (**Create a Sound...**) and save the new sound.
2. Press **Generate Sound...**, type `a heavy metal door slams in a concrete corridor`, set the length to 2 and press **Generate**.
3. Play the take, press **Add**, then press `Space`.

You now have a sound of your own. [A new sound for this project](into-the-game.html#a-new-sound-for-this-project) gives it a name a quest can play.

## Speak Line

A line of text, spoken.

1. Press **Speak Line...** and type what the line says.
2. Choose **In one of your ElevenLabs voices**. Search the list by name, gender or accent, and press the play button beside a voice to hear its sample.
3. Leave the model on the one offered, unless you know you want another.
4. Press **Speak**.

| What you should see | |
|---|---|
| The window | The voices from your ElevenLabs account. With no key, a line saying so, and the buttons to set one |
| After step 4 | A new track at the mix cursor with the spoken line, marked as a voice line |

The other choice, **In the selected line's voice**, speaks your text in the voice of the voice line you had selected. That makes a [voice clone](#voice-clones).

## Re-Voice

The same line, said the same way, in another voice. Select a voice line's track and press **Re-Voice...**.

| Choice | What happens |
|---|---|
| **Describe the change** | Type what should change, such as `female`, `older and raspy` or `shouting, angry`, and press **Make previews**. EDGEwave clones the line's voice and asks ElevenLabs for versions of it. Play the previews, pick one and press **Re-Voice** |
| **Into one of your ElevenLabs voices** | Pick a voice from your account and press **Re-Voice**. No clone is made |

| What you should see | |
|---|---|
| The result | A new track at the same place as the original line, with the same words and timing in the new voice |
| The original | Unticked, so it is out of the mix. Tick its lane to keep it in. The window's **Mute the original** box decides this |

## Voice clones

A **voice clone** is a copy of a voice that ElevenLabs makes from a recording. **Speak Line** in the selected line's voice, and **Re-Voice** by description, clone the voice in the selected line, in your ElevenLabs account.

> **A game line's voice is a real voice actor's.** ElevenLabs' rules forbid cloning a real person's voice without their consent, and ElevenLabs may block some voices. Only go on with a voice you have the right to clone, such as your own, or one whose owner agreed. EDGEwave asks you to confirm this once, before the first clone, with a link to [ElevenLabs' policy](https://elevenlabs.io/use-policy). Read the policy yourself: these pages don't quote it.

| | |
|---|---|
| **How many** | One clone per line. Using the same line again makes no new clone |
| **How good** | A longer line makes a better clone. How well a single short game line clones has not been measured |
| **Where they are** | In your ElevenLabs account, where they take up voice slots |
| **Deleting them** | **EDGEwave: ElevenLabs Voices Made by EDGEwave...** lists the clones and saved versions EDGEwave made. Tick the ones to delete. If you delete one on the ElevenLabs site instead, EDGEwave makes it again the next time it is needed |

## Into the game

A made sound or line is a track like any other: edit it, add effects, mix it.

| You made | Into the game |
|---|---|
| A sound effect | Any route in [Into the game](into-the-game.html): let it replace a game sound, or make it a new sound for your project |
| A spoken line | Not as real dialogue yet: see [Voice lines](into-the-game.html#voice-lines). Today it can replace a sound event, become a new sound a quest plays, or go into a REDnode package |
| Lines for a whole quest | [Voice Lines](voice-lines.html#voice-a-quest) does them in one go |

The tools ask ElevenLabs for sound at the rate in the setting `edgewave.elevenlabs.sampleRate`. If your plan refuses that rate, EDGEwave uses a lower one from then on, by itself. Add to Project converts to what the game needs either way.
