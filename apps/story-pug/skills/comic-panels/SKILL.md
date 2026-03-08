---
name: comic-panels
description: "Generate comic/webcomic/manga-style panels for TTRPG story beats. Use when: (1) generating a panel for a scene or story beat, (2) generating or refreshing a character or location reference image mid-story, (3) tweaking or editing a previously generated panel. Assumes visual style and initial references were set up during story onboarding. Requires nano-banana-pro (GEMINI_API_KEY must be set)."
---

# Comic Panels

Generate visually consistent comic panels using the style and references established during story onboarding.

## Directory Layout

```
visuals/
  style.md                        ← art style (set during onboarding)
  characters/<slug>/
    headshot.png                  ← close-up reference
    fullbody.png                  ← full-body reference
    visual.md                     ← locked appearance description
  locations/<slug>/
    reference.png
    visual.md
  panels/
    YYYY-MM-DD-HH-MM-SS-<slug>.png
```

## Generate a Panel

1. Read `visuals/style.md`. If missing, tell the user to run story onboarding or create it manually.
2. Identify which characters and location are in the scene (ask if not clear from context).
3. For each character: use `headshot.png` for dialogue/close-up panels, `fullbody.png` for action/wide panels. If a reference is missing, offer to generate it (see below).
4. Build a prompt using `references/prompt-guide.md` → **Panel** section.
5. Run nano-banana-pro with all reference images as `-i` inputs, plus the composed prompt.
6. Save to `visuals/panels/YYYY-MM-DD-HH-MM-SS-<scene-slug>.png`.

```bash
uv run <nano-banana-pro-scripts-dir>/generate_image.py \
  --prompt "<composed panel prompt>" \
  --filename "visuals/panels/YYYY-MM-DD-HH-MM-SS-<slug>.png" \
  -i visuals/characters/<name1>/fullbody.png \
  -i visuals/characters/<name2>/headshot.png \
  -i visuals/locations/<loc>/reference.png \
  --resolution 1K
```

Find the scripts path via: `openclaw skills info nano-banana-pro`

Use 1K for drafts, 2K for finals. Up to 14 `-i` inputs total.

## Tweak / Edit a Panel

Use the previous panel as an `-i` input with edit instructions:

```bash
uv run <nano-banana-pro-scripts-dir>/generate_image.py \
  --prompt "Edit this panel: <specific change>. Keep all other elements identical." \
  --filename "visuals/panels/YYYY-MM-DD-HH-MM-SS-<slug>-v2.png" \
  -i visuals/panels/<previous-panel>.png \
  --resolution 1K
```

## New Characters or Locations Mid-Story

If a reference is missing for a character or location, use the **comic-references** skill to generate it before proceeding.

## Post to Discord

After saving the panel, post it as a new thread in the Discord forum channel:

1. Get the forum channel ID from `TOOLS.md` (Discord section).
2. Use the thread name format: `YYYY-MM-DD — <Scene Slug>` (human-readable).
3. Run:

```bash
openclaw message thread create --channel discord --target channel:<FORUM_CHANNEL_ID> \
  --thread-name "<YYYY-MM-DD — Scene Description>" \
  --message "<One-sentence scene caption>" \
  --file visuals/panels/YYYY-MM-DD-HH-MM-SS-<slug>.png
```

If you need to post interactive components (buttons etc.) afterward, target the returned thread ID, not the forum channel.

## Reference

- **Prompt construction**: `references/prompt-guide.md`
