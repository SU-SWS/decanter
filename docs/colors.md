# Colors

The complete Stanford Identity palette, defined as Tailwind `@theme` tokens in `src/css/theme/colors.css`. Every token works with any Tailwind color utility:

```html
<div class="bg-cardinal-red text-white">…</div>
<p class="text-digital-blue border-b-2 border-fog-dark">…</p>
<div class="from-cardinal-red to-plum bg-linear-to-r">…</div>
```

Tokens are also available as CSS variables (`var(--color-cardinal-red)`), and via `decanter/colors` as a standalone import for stock Tailwind projects.

## Accessibility

Always check text/background contrast (WCAG AA: 4.5:1 for body text, 3:1 for large text). Rules of thumb for this palette:

- White text works on all `*-dark` values, `cardinal-red`, `digital-red`, `digital-blue`, `digital-green`, `plum`, `brick`, `archway`, `palo-alto`, `lagunita`
- Black text is needed on all `*-light` values, `illuminating`, `fog`, `lagunita-20/40`, `digital-blue-vivid`, and grayscale `black-50` and lighter
- Mid-tone accents (`poppy`, `spirited`, `bay`, `sky`, `palo-verde`, `olive`, `digital-green-bright`) pass only as large-text backgrounds or decoration — verify each pairing

## Primary colors

https://identity.stanford.edu/design-elements/color/primary-colors/
### Cardinal Red
| Token | Hex | Notes |
|---|---|---|
| `cardinal-red` | `#8C1515` | Stanford's brand color |
| `cardinal-red-light` | `#B83A4B` |  |
| `cardinal-red-dark` | `#820000` |  |
| `cardinal-red-xdark` | `#7A0000` | Passes contrast with digital-red-xlight text |
| `cardinal-red-xxdark` | `#541107` |  |

### Grayscale
| Token | Hex | Notes |
|---|---|---|
| `black-true` | `#000000` | For maximum contrast |
| `black` | `#2E2D29` | Default text color |
| `black-90` | `#43423E` |  |
| `black-80` | `#585754` |  |
| `black-70` | `#6D6C69` |  |
| `black-60` | `#767674` | Darkest gray that fails 4.5:1 as white-text bg — check contrast |
| `black-50` | `#979694` |  |
| `black-40` | `#ABABA9` |  |
| `black-30` | `#C0C0BF` |  |
| `black-20` | `#D5D5D4` | Default border color for tables and form fields |
| `black-10` | `#EAEAEA` |  |
| `cool-grey` | `#53565A` | Used for captions |
| `white` | `#FFFFFF` | From Tailwind core |

## Web interactive colors

https://identity.stanford.edu/design-elements/color/web/
### Digital Red
| Token | Hex | Notes |
|---|---|---|
| `digital-red` | `#B1040E` | Default .button background |
| `digital-red-light` | `#E50808` |  |
| `digital-red-xlight` | `#F83535` | Passes contrast as regular text on black |
| `digital-red-dark` | `#820000` | Same value as cardinal-red-dark |

### Digital Blue
| Token | Hex | Notes |
|---|---|---|
| `digital-blue` | `#006CB8` | Default link color |
| `digital-blue-light` | `#85CCFF` |  |
| `digital-blue-dark` | `#00548F` |  |
| `digital-blue-vivid` | `#0597FF` |  |

### Digital Green
| Token | Hex | Notes |
|---|---|---|
| `digital-green` | `#008566` |  |
| `digital-green-light` | `#1AECBA` |  |
| `digital-green-dark` | `#006F54` |  |
| `digital-green-bright` | `#009B76` |  |

## Accent colors

https://identity.stanford.edu/design-elements/color/accent-colors/
### Palo Alto
| Token | Hex | Notes |
|---|---|---|
| `palo-alto` | `#175E54` |  |
| `palo-alto-light` | `#2D716F` |  |
| `palo-alto-dark` | `#014240` |  |

### Palo Verde
| Token | Hex | Notes |
|---|---|---|
| `palo-verde` | `#279989` |  |
| `palo-verde-light` | `#59B3A9` |  |
| `palo-verde-dark` | `#017E7C` |  |

### Olive
| Token | Hex | Notes |
|---|---|---|
| `olive` | `#8F993E` |  |
| `olive-light` | `#A6B168` |  |
| `olive-dark` | `#7A863B` |  |

### Bay
| Token | Hex | Notes |
|---|---|---|
| `bay` | `#6FA287` |  |
| `bay-light` | `#8AB8A7` |  |
| `bay-dark` | `#417865` |  |

### Sky
| Token | Hex | Notes |
|---|---|---|
| `sky` | `#4298B5` |  |
| `sky-light` | `#67AFD2` |  |
| `sky-dark` | `#016895` |  |

### Lagunita
| Token | Hex | Notes |
|---|---|---|
| `lagunita` | `#007C92` |  |
| `lagunita-light` | `#009AB4` |  |
| `lagunita-dark` | `#006B81` |  |
| `lagunita-20` | `#CCEBF0` | Used for form elements |
| `lagunita-40` | `#8DD8E4` | Used for form elements |

### Poppy
| Token | Hex | Notes |
|---|---|---|
| `poppy` | `#E98300` |  |
| `poppy-light` | `#F9A44A` |  |
| `poppy-dark` | `#D1660F` |  |

### Spirited
| Token | Hex | Notes |
|---|---|---|
| `spirited` | `#E04F39` |  |
| `spirited-light` | `#F4795B` |  |
| `spirited-dark` | `#C74632` |  |

### Illuminating
| Token | Hex | Notes |
|---|---|---|
| `illuminating` | `#FEDD5C` |  |
| `illuminating-light` | `#FFE781` |  |
| `illuminating-dark` | `#FEC51D` |  |

### Plum
| Token | Hex | Notes |
|---|---|---|
| `plum` | `#620059` |  |
| `plum-light` | `#734675` |  |
| `plum-dark` | `#350D36` |  |

### Brick
| Token | Hex | Notes |
|---|---|---|
| `brick` | `#651C32` |  |
| `brick-light` | `#7F2D48` |  |
| `brick-dark` | `#42081B` |  |

### Archway
| Token | Hex | Notes |
|---|---|---|
| `archway` | `#5D4B3C` |  |
| `archway-light` | `#766253` |  |
| `archway-dark` | `#2F2424` |  |

### Stone
| Token | Hex | Notes |
|---|---|---|
| `stone` | `#7F7776` |  |
| `stone-light` | `#D4D1D1` |  |
| `stone-dark` | `#544948` |  |

### Fog
| Token | Hex | Notes |
|---|---|---|
| `fog` | `#DAD7CB` |  |
| `fog-light` | `#F4F4F4` |  |
| `fog-dark` | `#B6B1A9` |  |

## Social media colors
| Token | Hex | Notes |
|---|---|---|
| `facebook` | `#0866FF` |  |
| `twitter` | `#1DA1F2` |  |
| `instagram` | `#FF0069` |  |
| `linkedin` | `#0077B5` |  |
| `youtube` | `#FF0033` |  |

## Renames from v7

`foggy`/`foggy-light`/`foggy-dark` were removed in v8 — use `fog`/`fog-light`/`fog-dark` (identical values). See [UPGRADE.md](../UPGRADE.md).
