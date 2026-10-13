---
title: REDdeck settings and commands
nav_title: Settings and commands
section: REDdeck
order: 12
description: "Every REDdeck setting with its default and when to change it, and every REDdeck command."
reviewed: 2026-10-13
---

# Settings and <span class="y">commands</span>

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `reddeck`. Most people never change any of these: REDdeck finds what it needs on its own.

{% include shot.html caption="REDdeck in VS Code's settings" shows="VS Code's Settings editor filtered to reddeck, showing the game path, library path and Nexus settings." %}

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `reddeck.gamePath` | empty | The Cyberpunk 2077 folder (the one with `bin`, `archive` and `r6`). Empty means find it through Steam, GOG or Epic on every start | The game is somewhere those launchers can't see. **Pick the game folder...** sets it for you |
| `reddeck.libraryPath` | empty | Where your mods are kept. Empty means `%USERPROFILE%\REDdeck` | The game is on another drive. Put the library on the game's drive so deploy can use hardlinks |
| `reddeck.bridgePath` | empty | Path to `REDbridge.exe` or its folder. Empty means the copy **Get REDbridge** fetched, else a REDbridge checkout next to REDdeck's, else REDbridge on your PATH | You build REDbridge yourself |
| `reddeck.dotnetRoot` | empty | The .NET location for the REDbridge process only. Empty means the per-user .NET 10 runtime, else whatever the PC has | Rarely. See the warning below |
| `reddeck.nexusCheckUpdatesOnStart` | on | Asks Nexus once a day whether your mods have newer files. Needs a Nexus sign-in | You don't want daily update checks |
| `reddeck.nexusClientId` | empty | The sign-in id Nexus assigns to REDdeck. With it, sign-in happens in your browser and renews itself | Only when told to in REDdeck's release notes |
| `reddeck.nexusApplication` | empty | The application name for Nexus's older sign-in, used when there's no client id | Only when told to in REDdeck's release notes |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, and it breaks other tools, Vortex among them. If REDbridge needs a different .NET, use `reddeck.dotnetRoot`, which applies to REDbridge alone.

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `REDdeck` to see them all. Most are also buttons in the Mods view, the REDdeck page or a mod's right-click menu.

### Everyday

| Command | Does |
|---|---|
| Open REDdeck | Opens the wide REDdeck page |
| Add mod | Adds a mod from a zip, 7z, rar or folder |
| Deploy | Makes the game folder match your list |
| Undo deploy | Removes everything REDdeck deployed |
| Show pending changes | Lists what the next deploy will do, and why |
| Show conflicts | Opens the Conflicts page |
| Refresh | Re-reads the library and the game folder |

### A single mod

| Command | Does |
|---|---|
| Details | Opens the mod's detail panel |
| Move up (wins conflicts), Move down | Changes its place in the order |
| Switch version... | Makes another version of the mod the active one |
| Open on Nexus Mods | Opens its Nexus page |
| Reveal in File Explorer | Opens its library folder |
| Add to Project | Copies its files into the open REDcode project |
| Remove | Deletes it from the library |

### Nexus Mods

| Command | Does |
|---|---|
| Nexus: sign in | Signs in through the browser, or opens the API Access page |
| Nexus: set API key (paste, instead of signing in) | Uses a personal API key instead |
| Nexus: sign out | Removes the sign-in or key |
| Nexus: check for updates | Checks now instead of waiting for the daily check |
| Nexus: add from a link | Adds a mod from a pasted `nxm://` link |
| Nexus: handle download links (nxm) | Makes **Mod manager download** on Nexus send files to REDdeck |
| Nexus: stop handling download links | Gives the links up |

### Setup and maintenance

| Command | Does |
|---|---|
| REDdeck: Set up... | Lists every setup step, done or not, and brings hidden ones back |
| Pick the game folder... | Chooses the game folder by hand |
| Get REDbridge | Downloads REDbridge for conflicts inside archives |
| Update REDbridge | Checks for and installs a newer REDbridge |
| Import from Vortex | Copies Vortex's mods into the library |
| Add from REDcode project | Adds a project's packed output as a mod |
| Save loadout, Load loadout | Saves or applies a list of mods |
| Open library folder | Opens the library in File Explorer |
| Show log | Opens REDdeck's log |
| REDdeck: Connect an assistant (MCP)... | Sets up Claude Code or another assistant |
