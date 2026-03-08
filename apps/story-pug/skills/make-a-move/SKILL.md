---
name: make-a-move
description: Adjudicate uncertain player actions using the hybrid PbtA/FitD resolution mechanic (2d6 + stat, with position and effect). Use whenever the player attempts something with an uncertain outcome that would benefit from real randomness and narrative stakes.
---

# Make a Move

Adjudicate any uncertain player action using the hybrid PbtA/FitD resolution mechanic. Always declare position and effect before rolling, so the stakes are clear before the dice decide.

## Resolution Mechanic Overview

- **Position** (from FitD): how bad is failure? `Controlled` / `Risky` / `Desperate`
- **Effect** (from FitD): how much can you accomplish on a hit? `Limited` / `Standard` / `Great`
- **Roll**: 2d6 + stat modifier
- **Tiers**:
  - `10+` — strong hit: full effect, no cost
  - `7–9` — partial hit: effect achieved, but with a cost (severity scales with position)
  - `6-` — miss: Story Pug makes a hard move (severity scales with position)

See `references/position-effect-guide.md` for full guidance on costs, consequences, and when to adjust position/effect.

Moves are **goal-level** — a single roll covers an attempt to achieve a meaningful narrative goal (infiltrate the compound, convince the senator, escape the ambush). Sub-actions within that attempt are narrated by `tell-the-story`, not rolled separately.

## Workflow

### 1. Identify the Move and Stat

Read `story/moves.md`. Find the move whose fictional trigger best matches the *goal* the player is attempting to achieve. Note the associated stat and its current value for the PC.

If the action doesn't fit any move cleanly, pick the closest stat and treat it as a **Basic Move** ("When you act under uncertainty, roll+[closest stat]").

### 2. Declare Position

Before rolling, declare position and briefly explain why:

> "You're in a **Risky** position — you're exposed in the open and they have backup coming."

Use `references/position-effect-guide.md` to calibrate. Default to **Risky** when uncertain.

### 3. Declare Effect

Declare effect and briefly explain:

> "Effect is **Standard** — if this connects, you'll get what you came for."

Consider the fictional resisting forces: armour, institutional power, scale, preparation.

### 4. Roll the Dice

Run the roll script with the stat modifier:

```bash
python3 skills/make-a-move/scripts/roll.py <modifier>
```

Example: if the stat is `+2`, run `python3 skills/make-a-move/scripts/roll.py 2`.

Report the result to the player: `"3 + 4 + (+2) = 9  [7-9]"`

### 5. Interpret and Narrate

Read the tier through the position + effect lens (see `references/position-effect-guide.md`):

- **10+**: Narrate clean success. Apply full effect.
- **7–9**: Effect achieved, but a cost applies. Offer a hard choice when it adds drama. Make the cost clear and story-advancing, not just punitive.
- **6-**: Make a hard move. Choose from the hard moves list below. Narrate a consequence that complicates, escalates, or turns the fiction — then leave it open for the player to respond. A miss is a story turn, not a dead end.

After narrating the result, transition back to `tell-the-story` to continue the scene with the outcome woven in.

Always end with the fiction in an active state — the player should have something to react to.

## Hard Moves

Use these when the player rolls a 6-. Pick the one that fits the fiction — don't always reach for the same move. Scale severity to position: Controlled position warrants a soft hard move (a warning, a complication); Desperate warrants something that bites.

- **Reveal an unwelcome truth** — something they didn't know and would rather not: the contact is already dead, the building has a second security layer, the person they trusted is compromised
- **Put them in a spot** — a new threat arrives, a window closes, the situation shifts against them and they have to decide fast
- **Signal an approaching threat** — don't inflict it yet, just show it coming: footsteps, a shadow, a message, a sound from the wrong direction
- **Take something away** — an advantage, a resource, an assumption; make it feel like a natural consequence of how things went
- **Turn their move back on them** — their approach becomes the problem: the lie is believed too well, the force draws attention, the careful plan leaves them exposed somewhere else
- **Show the cost of their world** — the genre's endemic threat asserts itself: the city's corruption, the empire's reach, the darkness pressing in; not a direct consequence of the roll but a reminder of the larger stakes
- **Introduce a complication that demands attention** — not punishment, just a new urgent problem that didn't exist before; the story branches whether they deal with it or not
- **Make them make a hard choice under pressure** — two things they value are now in conflict and the clock is running

When choosing, ask: what was already lurking in the fiction that this failure lets through?

## Guidance

- **Pre-roll framing is non-negotiable.** Declare position and effect before the dice roll so the player understands what's at stake. This prevents retroactive softening of bad results.
- **Costs should be story-advancing.** A 7–9 cost is most satisfying when it creates a new problem, reveals new information, or forces a meaningful choice — not just a mechanical penalty.
- **Hard moves should feel inevitable in retrospect.** On a 6-, the consequence should feel like it was lurking in the fiction all along.
- **The move list isn't exhaustive.** If no move fits perfectly, improvise using the closest stat. The moves are prompts, not a cage.
