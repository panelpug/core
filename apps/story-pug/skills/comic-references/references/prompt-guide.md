# Prompt Construction Guide — References

Always build the style block from `visuals/style.md` before writing any prompt.

## Style Block

```
<Style> comic panel. <Key Descriptors>. <Palette>.
```

Example:
```
Shonen manga comic panel. Bold ink lines, screentone shading, dynamic angles. Warm amber tones with deep indigo shadows.
```

---

## Character — Headshot

```
<Style block>. Character reference sheet, portrait.
<Name>: <hair colour/style, skin tone, eye colour, clothing, distinctive physical details>.
Clean neutral background. 3/4 angle. Neutral expression. Model sheet style.
```

Example:
```
Shonen manga comic panel. Bold ink lines, screentone shading. Warm amber tones with deep indigo shadows.
Character reference sheet, portrait.
Felicity: dark auburn hair in a loose braid, warm brown skin, sharp green eyes.
Worn leather duster with many interior pockets, several vials and small pouches visible.
Clean neutral background. 3/4 angle. Neutral expression. Model sheet style.
```

---

## Character — Full Body

```
<Style block>. Character reference sheet, full body.
<Name>: <same appearance description as headshot>.
Standing neutral pose, full figure visible head to toe. Clean neutral background. Model sheet style.
```

When generating after a headshot: pass the headshot as `-i` to anchor appearance:
```bash
uv run ... --prompt "<fullbody prompt>" --filename "...fullbody.png" -i visuals/characters/<slug>/headshot.png
```

---

## Location

```
<Style block>. Location reference.
<Location name>: <architecture, scale, atmosphere, lighting, time of day if established>.
Establishing shot, no characters present. Focus on environment, architecture, and atmosphere.
```

Example:
```
Shonen manga comic panel. Bold ink lines, screentone shading. Warm amber tones with deep indigo shadows.
Location reference. Felicity's airship: a battered mid-size cargo vessel, patched gas envelope,
exposed brass fittings, cluttered open deck. Dusk light, warm glow from portholes.
Establishing shot, no characters. Focus on the ship's weathered character and scale against open sky.
```
