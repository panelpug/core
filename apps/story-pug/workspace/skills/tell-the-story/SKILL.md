---
name: tell-the-story
description: Write narrative chunks that advance the story. Use after the player makes a decision, to narrate the outcome of a move, or to carry the story between decision points. Story Pug writes autonomously in chunks (~5-10 minute webcomic pacing), making small in-character PC decisions, and stops at moments of genuine player agency.
---

# Tell the Story

Write the next chunk of narrative, advancing the story from where things left off. Story Pug authors the scene with confidence — small decisions are made in-character, big choices are handed back to the player.

## Find the Story Directory

Before proceeding, identify which story is active. Read the Discord channel ID from the current message context, then scan `stories/*/meta.md` to find the matching story. All paths below are relative to that story directory (`stories/<story-slug>/`). The Discord channel from `meta.md` is also where new chapter threads get posted.

## When to Use

- After the player answers "What do you do?" or makes a decision
- To narrate the outcome of a `make-a-move` result (weaving consequence into story)
- To advance time, transition scenes, carry the story between decision points

## What Story Pug Decides Autonomously (Small Decisions)

- Exact dialogue and word choice in low-stakes conversations
- Minor movement, positioning, how the PC physically carries out a chosen action
- Observations, perceptions, atmosphere — how the world feels to the PC
- Attitude and tone in casual interactions
- Sub-actions that carry out a player's stated intent (the *how*, not the *whether*)

## When to Stop and Ask "What do you do?" (Big Choices)

- A goal-level attempt with uncertain outcome → trigger `make-a-move` instead of narrating past it
- A genuine fork in direction — two paths lead to meaningfully different story territory
- A moral or values-defining moment — the PC's character is on the line
- A permanent or hard-to-reverse choice — something the player should own
- A significant relationship beat — how the PC treats an NPC that matters

Rule of thumb: if getting it wrong would feel like a betrayal of the player's vision for their character, stop and ask.

## Narrative Format

- Prose narrative (paragraph form, match established tense and voice)
- Mark panel moments inline with `[PANEL: brief visual description — framing note, mood note]` as a placeholder while writing — keep these 1–2 lines, not full prompts
- When to mark a panel: high-emotion close-ups, establishing shots for new locations, action peaks, quiet meaningful character beats, revelation moments
- Chunk length: aim for 2–4 webcomic pages of content — long enough to have momentum, stop at the next natural decision point

## Workflow

1. Read `story/scene.md` for current location, mood, and stakes
2. Read `story/cheatsheet.md` for active threads and ticking clocks
3. Write the narrative to `story/draft.md`, stopping at the first point where interaction is needed — a goal-level uncertain moment (move trigger) or a genuine player choice. Place `[PANEL: ...]` placeholders at visual moments.
4. Create a new thread in the story's Discord forum channel for this story segment (e.g., "Chapter 1 — The Opening", "Scene 3 — The Confrontation") — each invocation of this skill gets a fresh thread. Get the channel ID from `meta.md`. Deliver `story/draft.md` into that thread in segments: output each prose segment, then invoke `comic-panels` for each `[PANEL: ...]` — working through in order so images appear inline.
5. Delete `story/draft.md`
6. End with "What do you do?"
7. Briefly consider if `story-state` should be updated (new beats, clock ticks)

## Guidance

- Sub-actions are narrated, not rolled — the roll is for the attempt to achieve the *goal*, not each preparatory step
- 6- results are still story turns: narrate consequences with the same prose energy as a hit, make it feel inevitable, leave the fiction open
- Small decisions should feel authored, not generic — use character files to make micro-choices feel like *this* PC
- Panel hints should earn their place — not every paragraph needs one
- Maintain tense and voice consistency with what's already been written
