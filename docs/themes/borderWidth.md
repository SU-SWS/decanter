# Border Width Theme Plugin

**File**: `/src/plugins/theme/borderWidth.js`

## Overview

The border width theme plugin extends Tailwind's default border width system with additional pixel-based width options that provide more granular control over border thickness. These additional values are specifically chosen to complement Stanford's design system and interface requirements.

## Purpose

Provides precise border width control for Stanford's interface elements, allowing designers and developers to create subtle visual distinctions and hierarchy through varied border weights. The extended values fill gaps in Tailwind's default scale, offering more nuanced border styling options.

## Complete Border Width System

When combined with Tailwind's default border widths, Stanford projects have access to:

### Tailwind Default Widths
```css
border-0         /* 0px */
border           /* 1px */
border-2         /* 2px */
border-4         /* 4px */
border-8         /* 8px */
```

### Stanford Extensions
```css
border-3         /* 3px */
border-5         /* 5px */
border-6         /* 6px */
border-7         /* 7px */
```

### Complete Scale
```css
border-0         /* 0px - No border */
border           /* 1px - Default thin border */
border-2         /* 2px - Medium border */
border-3         /* 3px - Stanford medium-plus border */
border-4         /* 4px - Heavy border */
border-5         /* 5px - Stanford heavy-plus border */
border-6         /* 6px - Stanford extra-heavy border */
border-7         /* 7px - Stanford ultra-heavy border */
border-8         /* 8px - Maximum standard border */
```

This extended border width system provides Stanford's design system with the precise control needed to create clear visual hierarchy and emphasis while maintaining consistency across all digital properties.
