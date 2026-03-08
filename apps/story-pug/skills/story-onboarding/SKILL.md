---
name: story-onboarding
description: Procedural generation of story foundations (archetypes, settings, trackers) based on a high-level vibe or 'Spark'. Use when starting a new solo RPG story or adding major new layers to an existing one.
---

# Story Onboarding

Use this skill to guide the user through creating a new story foundation.

## Story Onboarding Workflow

The onboarding process is designed to turn a high-level "Spark" into a concrete "Foundation" for a solo RPG story. It is also meant to generate material for future story beats.

### 0. The Spark (User Input)
The user provides some or all of the following:
- **Vibe:** (e.g., Noir, Pulp, High Fantasy, Cyberpunk)
- **Important Details:** (e.g., "A rainy dreary atmosphere", "Punny and sarcastic humor", "Lots of mystery and intrigue")
- **References:** (e.g., "Blade Runner meets Spirited Away", "Feels like a Terry Pratchett novel", "A grittier version of The Princess Bride")

### 1. Research References
Research the **References** and **Vibe** (use `web_search` if needed) to find common tropes and archetypes.

### 2. Dig in and Understand the User's Desires
Come up with some theories for what the user wants to experience as they're playing the game, and ask if your theories match their expectations. E.g. are they looking to feel powerful? if so, is it in a specific way? Or do they want to deal with moral dilemmas? Or experience new ideas? Or explore a specific world? Figure out what's drawing them to this experience to make sure you can deliver on their desires.

This should feel conversational and collaborative, and may take a while to get right.

### 3. Determine Scale
If you don't have a good sense of this already, ask the user for the scope of the story. This will help determine the size of the world and the complexity of the story.
Generate options that match the context of the "Spark" and the user's desires.
- **Micro:** A single building, a room, a locked-room mystery.
- **Local:** A neighborhood, a village, a small town.
- **Urban/Regional:** A major city, a duchy, a specific wilderness.
- **National/Global:** A kingdom, a planet, an empire.
- **Interstellar:** Multiple worlds, a galaxy, dimensions.

### 4. Create the PC
Generate 3-4 archetypes that match the **Spark** and the user's desires. 

#### 4.1. Generate Archetypes
Start by listing the archetype's core attributes:
- **Identity:** A title that evokes the vibe of the archetype (e.g. "Detective", "Hero", "Damsel").
- **Description:** A short description of the archetype's role and personality.

And then ask the user which archetype they want to play as.

#### 4.2. Generate Details
After they have chosen an archetype, list the following details:
- **Names:** A few specific names, and a few vague suggestions that help the user come up with their own name (Specific: "Ethan", "Roshanna", "Xinyi"; Vague: "A Fading Name", "A Reckless Name").
- **Visual signifiers:** A few specific visual signifiers, and a few vague suggestions that help the user come up with their own visual identity. These could be tools, weapons, clothing, or other physical attributes (Specific: "A ragged scar", "An ever filling cup"; Vague: "A token of a past promise", "A relic of a forgotten war").
- **Other things that are important to the Spark**: E.g. if it's really important to the user to explore concepts related to gender, or destiny, or magic, include specific details & options related to that, following the above format of "Specific" and "Vague". If the user wants to explore multiple things (like gender and magic), include separate option lists for each.

The idea here is to generate concrete sub-options that the user can choose from, but also allow them to come up with their own ideas for each detail if they want.

Be sure when you're doing this that you provide *diverse* and *inclusive* options. Include names from different cultures, genders, and orientations. Include visual details from different cultures, and represent different body types and disabilities.

Record the user's answers in a `character/details.md` file in the project directory.

#### 4.3. Converse about Background
After the user has chosen their details, start to dig into their background and history, before they met the other characters we'll create in a second. Ask them questions in a way that tell you what drives the character, but also encourages the user to generate story details. E.g. When did they first start to care about what they care about most? What do they want, and why can they never have it? What will they never risk losing again?

Make sure to match the tone of the questions to the vibe of the Spark. E.g. if it's a noir story, the questions should be dark and cynical. If it's a high fantasy story, the questions should be heroic and grand. If it's a lighthearted story, the questions should be playful and humorous.

Record the user's answers in a `character/background.md` file in the project directory.

If they mention any specific people or places, record them in a `character/relationships.md` file in the project directory.

### 5. Generate a "Home Base"
Following similar steps to the ones above, generate a "Home Base" for the character. This should be a personalized space for the character appropriate to the **Scale**. Use the same format of option lists with "Specific" and "Vague" options for the details of the home base.

If the user mentioned any specific details about a home base previously, use this time to dig deeper into the details they mentioned.

Record the user's answers in a `character/home-base.md` file in the project directory.

### 6. Generate the World Layers
Following similar steps to the ones above, generate the world layers for the story. This should be a broader setting, appropriate to the **Scale**. Use the same format of option lists with "Specific" and "Vague" options for the details of the world layers.

### 7. Generate other characters
Other characters will be less "fleshed out" than the PC, but still have a few details to help the user understand them. Give the user only "Vague" options like "A cunning orphan", "An annoyingly competent captain", "A seductive count", and then ask the player to provide a name and a detail for each.

Record the user's answers in individual `character/name.md` files in the project directory.

### 8. Establish Visual Style

Ask the user if they'd like comic/manga-style panels generated during play. If yes (or they seem like the kind of player who would enjoy it), set up the visual style now.

Have a brief conversation to establish the art style — don't present a form, just ask:

> "What visual style are you imagining for the panels? You can describe a vibe, name a reference (e.g., shonen manga, retro American comics, ligne claire), or just say 'surprise me' and I'll match it to the story."

Then synthesise their answer (and the story's overall vibe from the Spark) into a `visuals/style.md` file:

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

Read the style back to the user as a one-sentence summary and confirm before saving. If they decline panels entirely, skip steps 8 and 9.

### 9. Generate Visual References

After saving `visuals/style.md`, generate visual reference images for every character and key location defined during onboarding.

Read `skills/comic-references/SKILL.md` and follow its batch generation workflow (step 5) for all characters and locations created during this onboarding session. Tell the user when all references are generated.

### 10. Define the Playbook

The final step is to establish the resolution mechanics for this story — the stats the PC rolls and the moves that trigger them.

#### 10.1. Propose Stats

Propose 5 stat names that fit the tone and genre of this specific story. Stats should feel native to the fiction — a heist story might use *Slick, Sharp, Cool, Bold, Subtle*; a high fantasy epic might use *Mighty, Wise, Swift, Charming, Enduring*. Name them to match the world, not a generic system.

Present your proposed stat names with a brief description of what each represents, then ask the player if these feel right or if they'd like to adjust any.

#### 10.2. Set Starting Values

Once stat names are agreed upon, assign starting values for the PC. Values range from -1 to +3, with a total of around +3 spread across all five stats. Let the player's character choices (archetype, background, desires) inform which stats are higher.

Present the proposed values and confirm with the player before finalising.

#### 10.3. Generate Core Moves

Write 6–8 core moves with fictional triggers. Each move should follow the format: *"When you attempt to [narrative goal], roll+[Stat]."*

Each trigger should describe an attempt to achieve a narrative goal, not a specific physical action. A PC might infiltrate by picking a lock, or by fast-talking the guard, or by crawling through the vents — the move covers the attempt, not the method.

The move list must cover:
- A **bold attempt** move (force through, dominate, confront directly — any method, as long as the approach is direct and forceful)
- A **careful approach** move (attempt something through finesse, stealth, or precision — any method, as long as it's measured and controlled)
- A **social gambit** move (attempt to sway, deceive, or negotiate — any social approach)
- A **knowledge inquiry** move (attempt to learn, investigate, or understand — research, recall, reading a situation)
- A **recovery regrouping** move (attempt to heal, rest, reassess, or seek help)
- At least one move that **leans into the genre or tone** specifically — but write it so the interesting decision is *whether to attempt it*, not just what stat to roll. The trigger should carry some inherent cost or risk baked into the fiction. "When you follow a hunch" is weak (it's just investigation with flavour). "When you pursue a lead that could blow back on you" is stronger — the player has to decide if the information is worth the exposure. A fantasy ritual move might be "When you draw on power that isn't entirely yours to use" — the interesting decision is whether to reach for it at all.

**7–9 costs must be fictional choices, not mechanical taxes.** "You succeed but take 1 harm" is a tax. "You succeed but choose: they saw your face, or you had to leave someone behind" is a choice — it opens new story, forces the player to decide what their character values, and creates consequences that have weight. Every 7–9 result should present two options that are both genuinely bad in different ways, or a single consequence that changes the fiction in a meaningful direction. Avoid: harm, resource loss, losing time. Prefer: someone learns something they shouldn't, a relationship is strained, you get what you wanted but not how you wanted it, a clock ticks forward.

Write specific, evocative 10+ and 7–9 results for each move. The 6- result should always be "Story Pug makes a move" — consequences are handled through position and effect.

#### 10.4. Save moves.md

Save everything to `story/moves.md`:

```markdown
# Moves — [Story Name]

## Stats
| Stat | Value | Represents |
|------|-------|------------|
| [Stat name] | +2 | [What it covers fictionally] |
| ...  | ...   | ...        |

## Moves
### [Move Name]
*When you attempt to [narrative goal], roll+[Stat].*
- **10+** [strong hit result — full effect, no cost]
- **7–9** [partial hit result — effect with a cost or hard choice]
- **6-** Story Pug makes a move.
```

#### 10.5. Initialise Story State Files

Create blank template files for the story state tracker:

`story/cheatsheet.md`:
```markdown
# Story Cheatsheet

## Active Threads
-

## Clocks

## Key Story Beats

## Open Questions
-
```

`story/scene.md`:
```markdown
# Current Scene

**Location:**
**Characters present:**
**Mood:**
**Active stakes:**
**Tension:**
```

Once both files are written, the story is fully set up and ready for play. Tell the user you're going to kick things off, then use the `tell-the-story` skill to write the opening story segment.

## Guidance

The above provides a set of steps to guide the user through, but remember this is a conversational experience. If the user wants to change something, or focus on the settings before the characters, that's fine, give them the flexibility to do so. Make sure they're having a fun experience and not feeling overwhelmed.

## File Standards

- Always write information to files in the active project directory (e.g., `~/Dev/solo-rpgs/`).
- Use Markdown headers and bullet points for readability.
