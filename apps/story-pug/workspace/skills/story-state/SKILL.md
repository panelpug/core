---
name: story-state
description: Maintain a living story cheatsheet and current scene record so Story Pug can track a sprawling narrative across sessions. Use at the start/end of a session, after a major plot shift, or whenever the cheatsheet feels stale.
---

# Story State

Keep `story/cheatsheet.md` and `story/scene.md` current so Story Pug always has a reliable map of the story's moving parts.

## Find the Story Directory

Before proceeding, identify which story is active. Read the Discord channel ID from the current message context, then scan `stories/*/meta.md` to find the matching story. All paths below are relative to that story directory (`stories/<story-slug>/`).

## When to Use This Skill

- **Start of session**: refresh cheatsheet from last session's events, set the scene
- **End of session**: capture what changed, what's newly in motion, what resolved
- **After a major plot shift**: a clock fills, an NPC dies, a revelation changes everything
- **When the cheatsheet feels stale**: threads are outdated, beats are missing, clocks haven't been updated

## Files Managed

### `story/cheatsheet.md`

The living narrative map. Tracks everything Story Pug needs to keep the story coherent across sessions.

```markdown
# Story Cheatsheet

## Active Threads
- [Thread name] — [who's involved, what's at stake, urgency]

## Clocks
- [Clock name] (X/6) — [what happens when it fills]

## Key Story Beats
- [Brief 1-2 line beat — what happened, why it matters]

## Open Questions
- [Unresolved mystery or hook]
```

### `story/scene.md`

The current scene snapshot. Updated at session start and whenever the scene changes significantly.

```markdown
# Current Scene

**Location:** ...
**Characters present:** ...
**Mood:** ...
**Active stakes:** ...
**Tension:** ...
```

## Workflow

### 1. Read Existing State

Read `story/cheatsheet.md` and `story/scene.md` if they exist.

### 2. Read Recent Context

Read relevant character files (`character/details.md`, `character/background.md`) and any other files that capture what's happened in play.

### 3. Update Threads

- **Add** any new threads that emerged from recent play
- **Mark resolved** threads by removing them or noting `[resolved]` with a brief outcome
- **Update urgency** on existing threads

Keep the list focused — more than ~6 active threads is a sign to consolidate or archive.

### 4. Update Clocks

- **Advance** any clocks that have been ticking based on recent events
- **Trigger** any clocks that have filled — narrate the consequence, then remove or transform
- **Add** new clocks if a new pressure or countdown has entered the fiction

### 5. Update Key Story Beats

Add new beats from recent play. A beat is a 1–2 line summary of something that happened and why it matters. Aim to keep the list to the ~10 most narratively significant moments.

### 6. Update Open Questions

- Add new mysteries, hooks, or dangling threads
- Remove questions that have been answered (move significant answers to Key Story Beats)

### 7. Update the Scene

Update `story/scene.md` to reflect the current fictional moment: location, who's present, mood, immediate stakes, tension level.

### 8. Write Both Files

Write the updated `story/cheatsheet.md` and `story/scene.md`. Create them if they don't exist yet.

## Guidance

- **Cheatsheet is a map, not a transcript.** What's in motion, not everything that happened. Keep it scannable.
- **Clocks are pressure, not just trackers.** When you advance a clock, say so in narration.
- **Open questions are story fuel.** Don't resolve them prematurely.
- **Beats are legacy.** Future Story Pug should be able to read them and understand what kind of story this has been.
- **When in doubt, prune.** A tight cheatsheet Story Pug actually reads is better than a bloated one it skims.
