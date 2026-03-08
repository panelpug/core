---
name: comic-references
description: "Generate or refresh visual reference images (headshots, full-body shots, location establishing shots) for TTRPG characters and locations. Use when: (1) generating references for all characters and locations after story onboarding, (2) adding a reference for a new character or location introduced mid-story, (3) regenerating or updating an existing reference. Requires nano-banana-pro (GEMINI_API_KEY must be set) and visuals/style.md to exist."
---

# Comic References

Generate and store visual reference images that ensure character and location consistency across all comic panels.

## Directory Layout

```
visuals/
  style.md                        ← art style (required — set during onboarding)
  characters/<slug>/
    headshot.png                  ← close-up reference
    fullbody.png                  ← full-body reference
    visual.md                     ← locked appearance description (source of truth)
  locations/<slug>/
    reference.png
    visual.md
```

Use lowercase-hyphenated slugs (e.g., `deshi-lam`, `felicitys-ship`).

## Workflow

### 1. Read the Style

Always read `visuals/style.md` first. If it doesn't exist, tell the user to run story onboarding (or create it manually) before generating references.

### 2. Synthesise the Visual Description

For characters: pull appearance from `character/<name>.md` — hair, skin tone, eyes, clothing, distinctive items, body type. Preserve disability and body diversity details exactly.

For locations: pull from the relevant `.md` file (e.g., `character/home-base.md`, `world/overview.md`).

If a `visuals/<type>/<slug>/visual.md` already exists (refreshing an existing reference), use it as the canonical description rather than the original `.md` — it reflects the locked-in appearance from previous generation.

### 3. Generate the Images

Use nano-banana-pro. Find the scripts path via: `openclaw skills info nano-banana-pro`

See `references/prompt-guide.md` for full prompt templates.

#### Character — headshot

```bash
uv run <nano-banana-pro-scripts-dir>/generate_image.py \
  --prompt "<headshot prompt from prompt-guide.md>" \
  --filename "visuals/characters/<slug>/headshot.png" \
  --resolution 1K
```

#### Character — full body

```bash
uv run <nano-banana-pro-scripts-dir>/generate_image.py \
  --prompt "<fullbody prompt from prompt-guide.md>" \
  --filename "visuals/characters/<slug>/fullbody.png" \
  --resolution 1K
```

When refreshing, pass the existing headshot as `-i` input to the fullbody generation (and vice versa) to help the model stay consistent within the same character.

#### Location

```bash
uv run <nano-banana-pro-scripts-dir>/generate_image.py \
  --prompt "<location prompt from prompt-guide.md>" \
  --filename "visuals/locations/<slug>/reference.png" \
  --resolution 1K
```

### 4. Write visual.md

After generating, write `visuals/<type>/<slug>/visual.md` — a concise locked description of appearance as rendered. This is the authoritative reference for all future panel prompts, not the original character sheet.

```markdown
# <Name> — Visual Reference

## Appearance
<Concise description matching the generated image — hair, skin, eyes, clothing, body, distinctive details>

## Notes
<Anything worth flagging for future prompts, e.g., "wheelchair always visible", "duster has many pockets">
```

### 5. Batch Generation (Post-Onboarding)

When generating references for all characters and locations after onboarding, work through them in one pass without interrupting the user. Tell the user which references are being generated, then report all file paths when done.
