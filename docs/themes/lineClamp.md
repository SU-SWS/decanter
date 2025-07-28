# Line Clamp Theme Plugin

**File**: `/src/plugins/theme/lineClamp.js`

## Overview

The line clamp theme plugin extends Tailwind's line clamping system with additional values for truncating text content. It provides line clamp options from 7 to 12 lines, filling the gap in Tailwind's default system for content that needs more than 6 lines but still requires truncation.

## Purpose

Enables precise control over text truncation for Stanford's diverse content types, particularly useful for card layouts, preview content, and responsive designs where text needs to be constrained to specific line counts while maintaining readability and design consistency.

## Line Clamp Configuration

### Extended Line Clamp Values

#### 7-Line Clamp
```javascript
7: '7'  // Truncates text to 7 lines with ellipsis
```

#### 8-Line Clamp
```javascript
8: '8'  // Truncates text to 8 lines with ellipsis
```

#### 9-Line Clamp
```javascript
9: '9'  // Truncates text to 9 lines with ellipsis
```

#### 10-Line Clamp
```javascript
10: '10'  // Truncates text to 10 lines with ellipsis
```

#### 11-Line Clamp
```javascript
11: '11'  // Truncates text to 11 lines with ellipsis
```

#### 12-Line Clamp
```javascript
12: '12'  // Truncates text to 12 lines with ellipsis
```

## Complete Line Clamp System

When combined with Tailwind's default line clamp values, Stanford projects have access to:

### Tailwind Default Values
```css
line-clamp-1        /* 1 line */
line-clamp-2        /* 2 lines */
line-clamp-3        /* 3 lines */
line-clamp-4        /* 4 lines */
line-clamp-5        /* 5 lines */
line-clamp-6        /* 6 lines */
line-clamp-none     /* No clamping */
```

### Stanford Extensions
```css
line-clamp-7        /* 7 lines */
line-clamp-8        /* 8 lines */
line-clamp-9        /* 9 lines */
line-clamp-10       /* 10 lines */
line-clamp-11       /* 11 lines */
line-clamp-12       /* 12 lines */
```

This extended line clamp system provides Stanford's design system with the granular control needed to create consistent, readable content previews across all types of academic and administrative content while maintaining optimal user experience and visual hierarchy.
