---
title: FAQ
section: Start here
order: 2
description: "Quick answers about EDGE, REDagent, cost, safety and compatibility with other Cyberpunk 2077 modding tools."
reviewed: 2026-10-14
---

# <span class="y">FAQ</span>

## Do I need to know how to code?

No. With [REDagent](redagent/) you describe the mod you want and it writes the code, shows you every change before it's made, and fixes what goes wrong. Knowing a little helps you ask better questions, but it isn't required to start.

## Does REDagent cost money?

REDagent itself is free and open source. It calls Claude with your own Anthropic API key, and Anthropic bills you per use. Each answer shows its cost in the chat. In REDagent's first in-game test, six questions cost $0.34 in all. Long chats cost more per question, so start a **New chat** when you change topic. A Claude.ai subscription cannot be used; it needs an API key.

## Is it safe for my game and my files?

- **REDagent** only writes inside REDnode's apps folders, shows each change as a diff before it is made, and backs up every file it changes so you can **Undo**.
- **EDGEdeck** records every file it deploys in a manifest. **Undo deploy** removes exactly those files and nothing else.
- **REDnode** runs mods and overlay apps in their own process, outside the game. If one crashes, the game keeps running.

## Does it work with WolvenKit, CET, RED4ext and my other mods?

EDGE is built to work alongside them, not replace them.

| Tool | How EDGE works with it |
|---|---|
| WolvenKit | REDcode opens and packs WolvenKit projects. REDbridge uses WolvenKit's own engine |
| RED4ext | REDnode is a RED4ext plugin |
| Cyber Engine Tweaks | REDnode's overlay was tested in game side by side with CET |
| redscript, ArchiveXL, TweakXL, REDmod | EDGEdeck recognises and deploys them. REDcode has TweakXL language support |
| Vortex | EDGEdeck can import your Vortex mods. Use one manager at a time: see [Switch from Vortex](edgedeck/switch-from-vortex.html) |

## Can I use it online or for cheats?

No. Cyberpunk 2077 is single-player, and EDGE is for single-player modding only.

## Does EDGE need the internet?

REDagent needs it to talk to Claude. EDGEdeck uses it for Nexus Mods updates and downloads, which are optional. Everything else runs on your PC.

## Is EDGEmodders part of CD PROJEKT RED or Anthropic?

No. EDGEmodders is a fan community, not affiliated with or endorsed by CD PROJEKT RED or Anthropic. REDagent is "powered by Claude", using Anthropic's API.

## Where do I ask something not on this page?

On [Discord]({{ site.discord }}), or in the issues of the tool's GitHub repo.
