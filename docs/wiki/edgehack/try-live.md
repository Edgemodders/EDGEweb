---
title: Try Live and Pack and Play
nav_title: Try Live and Pack and Play
section: EDGEhack
order: 5
description: "Seeing a quickhack change in the running game with Try Live through REDnode, what shows live and what waits for Pack and Play, and Stop."
reviewed: 2026-11-11
---

# Try Live and <span class="y">Pack and Play</span>

There are two ways to see your quickhack in the game:

| | Try Live | Pack and Play |
|---|---|---|
| What it does | Sends the quickhack's changes into the running game through REDnode | Packs your project and installs the mod (REDcode's) |
| Needs | [REDnode](../rednode/) 0.62.0 or later, the game running with a save loaded | REDcode, and EDGEdeck to install |
| Shows | Numbers, effects, a new quickhack itself, at once | Everything, from the next game start |
| Goes back | **Stop**, or when the game closes | Uninstall the mod |

## Try Live

1. Start the game with REDnode and load a save.
2. On the quickhack's page, pick a tier (click its column header) and press **Try Live**.
3. The first time in a session, REDnode's **Editor request** window asks whether EDGEhack may change the game. Press **Allow**.

The page says how many changes went in. For a new quickhack, the tier you picked is put in V's backpack: put it in the cyberdeck. Each save on the page sends the changes again, so you can change a number, save and upload again. **Stop** puts everything EDGEhack changed back as it was, and refreshes V's quickhacks. Closing the game does the same.

What shows live:

| Change | Live? |
|---|---|
| RAM, upload, damage, duration | Yes, on the next scan |
| Cooldown | Not tested yet |
| Added effects | Yes. A built one (Make New) is not tested live yet |
| A new quickhack | Yes: made in the game, and given to V |
| Names and descriptions | No. The game reads texts only when it starts: a new quickhack shows its text key (`LocKey#...`) as its name, and a changed one its last packed texts, until Pack and Play and a restart |
| Icons of your own | No: they come with the mod's archive, at Pack and Play |

{% include shot.html src="/assets/shots/edgehack/try-live-allow.webp" caption="Static Bloom while it is tried live" alt="EDGEhack's page for Static Bloom while it is tried live: Pack and Play, Try Again and Stop, and the note that 313 changes are in the game and the Legendary++ tier is in V's backpack" shows="EDGEhack's page while a quickhack is tried live: Try Again and Stop, and the note saying how many changes are in the game." %}

Try Live never writes into the game folder: it changes the running game's TweakDB through REDnode's editor channel, which only answers on your own PC, and only after you allow the tool.

## Pack and Play

**Pack and Play** on the page is REDcode's: it packs the project and installs the mod, through EDGEdeck when you have it, for the next start of the game. The mod holds every quickhack in the project, with their names, icons and scripts. Quit the game first, then start it again to play.

When REDnode runs with its MCP server on, Pack and Play swaps the mod's archive into the running game instead (REDnode's hot swap). Names and texts still need a restart.

## Try it

1. With the game running, open a quickhack you made and press **Try Live** on its Rare tier. Allow EDGEhack.
2. Upload it on an enemy and look at its RAM in the Hacking tab.
3. Lower its RAM on the page, save, and scan again: the cost follows.
4. Press **Stop**.
