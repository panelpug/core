# Prompt Construction Guide — Panels

Always read `visuals/style.md` first.

## Style Block

```
<Style> comic panel. <Key Descriptors>. <Palette>.
```

Example:
```
Shonen manga comic panel. Bold ink lines, screentone shading, dynamic angles. Warm amber tones with deep indigo shadows.
```

---

## Panel

```
<Style block>. Comic panel.
<Who is present, where, what's happening, emotional beat>.
<Framing: close-up / mid-shot / wide / over-shoulder / low-angle / etc>.
<Lighting or atmosphere note if important>.
Maintain character appearance consistent with reference images.
```

### Framing by Beat Type

| Beat | Framing |
|---|---|
| Dialogue / tension | Close-up or over-shoulder |
| Character reaction | Tight close-up on face |
| Action / movement | Dynamic mid or wide, angled |
| Location reveal | Wide establishing shot |
| Quiet moment | Medium shot, centred |
| Climax | Low-angle wide, dramatic lighting |

### Reference Image Order

List the most important character first — the model weights `-i` inputs roughly in order. Use headshots for dialogue/close-up panels, fullbody for action/wide panels.

### Example

```
Shonen manga comic panel. Bold ink lines, screentone shading. Warm amber tones with deep indigo shadows.
Over-the-shoulder: Felicity faces Deshi across a cluttered warehouse table. A sealed package between them.
Felicity's expression is guarded; Deshi looks serious but not unkind.
Single overhead lamp, dramatic shadow patterns on faces.
Maintain character appearance consistent with reference images.
```

Inputs: `-i visuals/characters/felicity/headshot.png -i visuals/characters/deshi-lam/headshot.png`

---

## Edit / Tweak

```
Edit this panel: <specific change instruction>.
Keep all other elements — characters, composition, style — identical.
```
