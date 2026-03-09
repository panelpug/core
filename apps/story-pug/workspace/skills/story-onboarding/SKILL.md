---
name: story-onboarding
description: Procedural generation of story foundations (archetypes, settings, trackers) based on a high-level vibe or 'Spark'. Use when starting a new story. Triggered from a Discord forum channel — that channel becomes the story's home.
---

# Story Onboarding

Use this skill to guide the user through creating a new story foundation.

## Story Onboarding Workflow

The onboarding process turns a high-level "Spark" into a concrete "Foundation" for a story and generates material for future story beats.

### 0. Create the Story Directory

Read the Discord channel ID from the current message context. Come up with a short slug based on the story's likely vibe or title (use `new-story` if you have no context yet). Create `stories/<story-slug>/` and write `stories/<story-slug>/meta.md`:

```markdown
# Story: <Story Name>

- **slug:** <story-slug>
- **discord_channel_id:** <channel-id>
- **created:** YYYY-MM-DD
```

All files created during onboarding go under `stories/<story-slug>/`. Update `meta.md` with the final story name once it's clear.

### 1. The Spark (User Input)

The user provides some or all of the following:
- **Vibe:** (e.g., Noir, Pulp, High Fantasy, Cyberpunk)
- **Important Details:** (e.g., "A rainy dreary atmosphere", "Punny and sarcastic humor", "Lots of mystery and intrigue")
- **References:** (e.g., "Blade Runner meets Spirited Away", "Feels like a Terry Pratchett novel", "A grittier version of The Princess Bride")

### 2. Research References
Research the **References** and **Vibe** (use `web_search` if needed) to find common tropes and archetypes.

### 3. Dig in and Understand the User's Desires
Come up with some theories for what the user wants to experience as they're playing the game, and ask if your theories match their expectations. E.g. are they looking to feel powerful? if so, is it in a specific way? Or do they want to deal with moral dilemmas? Or experience new ideas? Or explore a specific world? Figure out what's drawing them to this experience to make sure you can deliver on their desires.

This should feel conversational and collaborative, and may take a while to get right.

### 4. Determine Scale
If you don't have a good sense of this already, ask the user for the scope of the story. Generate options that match the context of the "Spark" and the user's desires.
- **Micro:** A single building, a room, a locked-room mystery.
- **Local:** A neighborhood, a village, a small town.
- **Urban/Regional:** A major city, a duchy, a specific wilderness.
- **National/Global:** A kingdom, a planet, an empire.
- **Interstellar:** Multiple worlds, a galaxy, dimensions.

### 5. Create the PC
Generate 3-4 archetypes that match the **Spark** and the user's desires.

#### 5.1. Generate Archetypes
Start by listing the archetype's core attributes:
- **Identity:** A title that evokes the vibe of the archetype (e.g. "Detective", "Hero", "Damsel").
- **Description:** A short description of the archetype's role and personality.

Ask the user which archetype they want to play as.

#### 5.2. Generate Details
After they have chosen an archetype, list:
- **Names:** A few specific names, and a few vague suggestions (Specific: "Ethan", "Roshanna", "Xinyi"; Vague: "A Fading Name", "A Reckless Name").
- **Visual signifiers:** A few specific visual signifiers, and a few vague suggestions — tools, weapons, clothing, or physical attributes (Specific: "A ragged scar", "An ever filling cup"; Vague: "A token of a past promise", "A relic of a forgotten war").
- **Other things important to the Spark**: E.g. if the user wants to explore concepts related to gender, destiny, or magic, include specific details & options for each, following the same Specific/Vague format.

Provide *diverse* and *inclusive* options. Include names from different cultures, genders, and orientations. Represent different body types and disabilities.

Record the user's answers in `stories/<story-slug>/character/details.md`.

#### 5.3. Converse about Background
Dig into their background and history before they met the other characters. Ask questions that reveal what drives the character and encourage the user to generate story details. E.g. When did they first start to care about what they care about most? What do they want, and why can they never have it? What will they never risk losing again?

Match the tone to the Spark's vibe.

Record the user's answers in `stories/<story-slug>/character/background.md`. If they mention specific people or places, record them in `stories/<story-slug>/character/relationships.md`.

### 6. Generate a "Home Base"
Generate a personalized "Home Base" for the character appropriate to the **Scale**, using the same Specific/Vague option format. Dig into any details the user mentioned earlier.

Record the user's answers in `stories/<story-slug>/character/home-base.md`.

### 7. Generate the World Layers
Generate the world layers for the story — a broader setting appropriate to the **Scale** — using the same option format.

### 8. Generate Other Characters
Give the user only "Vague" options (e.g., "A cunning orphan", "An annoyingly competent captain", "A seductive count"), then ask for a name and a detail for each.

Record answers in individual `stories/<story-slug>/character/<name>.md` files.

### 9. Establish Visual Style

Ask the user if they'd like comic/manga-style panels generated during play. If yes (or they seem like they'd enjoy it), establish the visual style now.

Ask conversationally:

> "What visual style are you imagining for the panels? You can describe a vibe, name a reference (e.g., shonen manga, retro American comics, ligne claire), or just say 'surprise me' and I'll match it to the story."

Synthesise their answer and the story's overall vibe into `stories/<story-slug>/visuals/style.md`:

```markdown
# Visual Style

## Style
<e.g., "shonen manga", "retro American comics", "ligne claire webcomic">

## Key Descriptors
<2–5 comma-separated descriptors, e.g., "bold ink lines, screentone shading, dynamic angles">

## Palette
<colour mood, e.g., "warm amber tones with deep indigo shadows">

## Panel Framing
<e.g., "tight close-ups for drama, wide establishing shots for action">
```

Read the style back as a one-sentence summary and confirm before saving. If they decline panels entirely, skip steps 9 and 10.

### 10. Generate Visual References

After saving `visuals/style.md`, generate visual reference images for every character and key location from onboarding. Read `skills/comic-references/SKILL.md` and follow its batch generation workflow. Tell the user when all references are generated.

### 11. Define the Playbook

#### 11.1. Propose Stats

Propose 5 stat names that feel native to the fiction — a heist story might use *Slick, Sharp, Cool, Bold, Subtle*; a high fantasy epic might use *Mighty, Wise, Swift, Charming, Enduring*. Present with brief descriptions and confirm with the player.

#### 11.2. Set Starting Values

Assign starting values ranging from -1 to +3, with a total of around +3 across all five stats. Let character choices inform which stats are higher. Confirm with the player before finalising.

#### 11.3. Generate Core Moves

Write 6–8 core moves. Format: *"When you attempt to [narrative goal], roll+[Stat]."*

Triggers describe attempts to achieve narrative goals, not specific physical actions.

The move list must cover:
- A **bold attempt** move (direct and forceful approach)
- A **careful approach** move (finesse, stealth, or precision)
- A **social gambit** move (sway, deceive, or negotiate)
- A **knowledge inquiry** move (learn, investigate, or understand)
- A **recovery/regrouping** move (heal, rest, reassess, or seek help)
- At least one move that **leans into the genre or tone** — write it so the interesting decision is *whether to attempt it*. The trigger should carry inherent cost or risk baked into the fiction.

**7–9 costs must be fictional choices, not mechanical taxes.** Present two options that are both genuinely bad in different ways, or a single consequence that changes the fiction meaningfully. Prefer: someone learns something they shouldn't, a relationship is strained, you got what you wanted but not how you wanted it, a clock ticks forward.

Write specific, evocative 10+ and 7–9 results. The 6- result is always "Story Pug makes a move."

#### 11.4. Save moves.md

Save to `stories/<story-slug>/story/moves.md`:

```markdown
# Moves — [Story Name]

## Stats
| Stat | Value | Represents |
|------|-------|------------|
| [Stat name] | +2 | [What it covers fictionally] |

## Moves
### [Move Name]
*When you attempt to [narrative goal], roll+[Stat].*
- **10+** [strong hit result]
- **7–9** [partial hit result with cost or choice]
- **6-** Story Pug makes a move.
```

#### 11.5. Initialise Story State Files

`stories/<story-slug>/story/cheatsheet.md`:
```markdown
# Story Cheatsheet

## Active Threads
-

## Clocks

## Key Story Beats

## Open Questions
-
```

`stories/<story-slug>/story/scene.md`:
```markdown
# Current Scene

**Location:**
**Characters present:**
**Mood:**
**Active stakes:**
**Tension:**
```

Once both files are written, tell the user you're going to kick things off, then use `tell-the-story` to write the opening story segment.

## Guidance

This is a conversational experience. If the user wants to change direction or tackle things out of order, go with it. Make sure they're having fun and not feeling overwhelmed.
