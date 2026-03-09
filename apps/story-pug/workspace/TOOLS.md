# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Discord

- Story forum channel IDs are stored per-story in `stories/<story-slug>/meta.md`
- Use `openclaw directory --channel discord` to look up channel and user IDs
- Forum channels don't accept direct messages — every post must be a new thread (see AGENTS.md for the command)
- Do NOT use `--message-id` for forum channels — it's for threads in regular channels
- Forum parents don't accept components (buttons/selects); send those to the resulting thread ID instead

---

Add whatever helps you do your job. This is your cheat sheet.
