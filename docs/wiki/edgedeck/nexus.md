---
title: Nexus Mods in EDGEdeck
nav_title: Nexus Mods
section: EDGEdeck
order: 7
description: "Sign EDGEdeck in to Nexus Mods, handle Mod manager download links, check for updates, update everything at once, keep several files from one page, and switch versions."
reviewed: 2026-11-03
---

# Nexus <span class="y">Mods</span>

[Nexus Mods](https://www.nexusmods.com/cyberpunk2077) is where most Cyberpunk 2077 mods are published. EDGEdeck doesn't need Nexus to work: you can always add mods from files you downloaded. Connecting to Nexus adds update checks and one-click downloads.

## Signing in

| Way | How | Notes |
|---|---|---|
| **Sign in through the browser** | **Nexus: sign in**. Nexus opens in your browser; approve EDGEdeck, and the tab says "Signed in" | The sign-in renews itself. Waiting for Nexus to register EDGEdeck: until then this opens the API Access page instead |
| **Paste a personal API key** | **Nexus: set API key (paste, instead of signing in)**. Create a key on your Nexus [API Access page](https://www.nexusmods.com/users/myaccount?tab=api+access) and paste it | Works the same way. Always available, even after browser sign-in exists |

Either way, EDGEdeck stores the sign-in in VS Code's secret storage, not in a settings file. **Nexus: sign out** removes it.

{% include shot.html caption="Signing in to Nexus" shows="The Sign in to Nexus Mods row in the Set up group, and the prompt where you paste a personal API key." %}

## Download links

On a Nexus mod page, the **Mod manager download** button opens a special `nxm://` link meant for a mod manager. Only one program on your PC can receive those links.

- **Nexus: handle download links (nxm)** makes EDGEdeck the one. Then **Mod manager download** sends the file straight into your library. The Set up group offers it from the start, signed in or not.
- **In EDGEkit**, the links go to EDGEkit's own EDGEdeck (EDGEdeck 0.29.3 or later; before, they always went to VS Code). EDGEkit's installer can set this up for you. See [EDGEkit](../edgekit/install.html#2-the-nexus-mods-box).
- **Nexus: stop handling download links** gives them up again.
- Vortex takes the links back whenever it starts. If you use both, EDGEdeck's **Handle Nexus download links** row reappears in the Set up group so you can reclaim them.
- Without link handling, copy the link and use **Nexus: add from a link**. Pasting always works.

### Premium and free accounts

Nexus gives direct downloads only to Premium members. Free members download through the website, which hands EDGEdeck a link with a one-time key when you press **Mod manager download**. In practice:

- **Premium:** updates download straight from EDGEdeck.
- **Free:** when EDGEdeck needs a download, it opens the file's page on Nexus; press **Mod manager download** there and the file arrives through the link.

## Updates

Once a day, when you're signed in, EDGEdeck asks Nexus whether any mod with a Nexus id has a newer file. A mod with one shows `update 1.2 available`.

1. Click the status, or use **Update** in the detail panel.
2. Confirm. The new version downloads and takes the old one's place, and it's switched on if the old one was.
3. Deploy.

The old version stays in the library until you remove it, so you can switch back. **Nexus: check for updates** checks straight away; its message names the mods with an update and offers **Update all**. On the EDGEdeck page, each mod from Nexus has two buttons in its Actions column: **Check for an update** asks Nexus about that mod alone, and **Update** appears while one waits. To turn the daily check off, untick the setting `edgedeck.nexusCheckUpdatesOnStart`.

{% include shot.html caption="An update waiting" shows="A mod row with update 1.2 available, and the EDGEdeck page's version dropdown offering Get 1.2 from Nexus." %}

## Update all

**Update all** gets the newest file for every mod with an update waiting, after one question (EDGEdeck 0.29.0 or later). It's on the EDGEdeck page's toolbar (greyed out while nothing waits, with a count when something does), on the Frameworks group's header in the Mods view while any mod has an update, and in the `...` menu.

- **Frameworks** come from their authors' GitHub releases, so they need no click, even without Premium.
- **Other mods** come from Nexus. Premium members get them straight away; free members get each file's Nexus page opened, where **Mod manager download** sends it to EDGEdeck.
- **With a search typed or a filter chip picked**, the button reads **Update shown** and updates only the mods left showing. Pick the **Update available** chip to see just the mods with updates.
- **At the end**, one summary offers **Deploy**. The older versions stay in the library, switched off.

{% include shot.html caption="Update all" shows="The EDGEdeck page's toolbar with Update all and its count, and the one question listing the mods it will update." %}

## Several files from one page

Some Nexus pages offer more than one file: two main files to choose from (Male and Female, 1K and 4K), or an optional patch beside the main file. From EDGEdeck 0.30.0, each file you download is a mod of its own, with its own versions, update checks and on/off box. Updates only ever offer a newer version of the same file.

Once two or more files from one page are in your library, they sit under one row named after the page, on the EDGEdeck page and in the Mods view, with a row per file under it.

| On the page's row | What it does |
|---|---|
| **The box** | Turns every file off and remembers which were on. Ticking it again turns those back on. It shows a dash while only some are on |
| **Move up, Move down, drag** | Moves all its files together |
| **Section** | Puts all its files in a section |
| **Check for updates, Open on Nexus** | For the whole page |
| **Remove from Library** | Takes every file, and every version of each, after one question |
| **The arrow** | Folds the files away |

Each file's own row works like any mod's. Moving a file changes its place among the page's other files; it doesn't leave the page's row.

{% include shot.html caption="Files from one Nexus page" shows="A row named after a Nexus page on the EDGEdeck page, its box showing a dash, and three file rows under it, two of them on." %}

**Added with an older EDGEdeck?** Up to 0.29.4, a second file from the same page was taken for a new version of the first and turned it off. EDGEdeck splits those apart at the next update check or download from that page, and says which.

## Switching versions

On the EDGEdeck page, a mod's version cell is a dropdown when the library holds more than one version or Nexus has a newer one. Pick a version to make it the active one, or **Get x.y from Nexus**. In the Mods view, hover the mod's row and choose **Switch version...**. Deploy afterwards.

## Open on Nexus

Right-click a mod and choose **Open on Nexus Mods** to open its page, for its description, requirements and the author's notes.

## Good to know

- Nexus limits how often tools may call it. EDGEdeck remembers what it has already fetched and checks once a day, so you won't normally notice.
- Update checks need a mod's Nexus id. Mods added from Nexus or imported from Vortex carry one; a mod added from a file you downloaded yourself may not.
