# Font Size

**File**: `/src/plugins/theme/fontSize.js`

## Overview
Provides precise font size utilities from 11px to 30px and modular typography scale (m0-m9) for consistent typographic hierarchy.

## Generated CSS Classes

- **Pixel-based sizes**: `.text-11` through `.text-30` (11px to 30px in rem units)
- **Modular scale**: `.text-m0` through `.text-m9` (1em to 7.45em using 1.25 ratio)
- **Smaller variants**: `.text--m1`, `.text-09em` (0.9em for smaller text)

## Usage

```html
<!-- Pixel-based font sizes -->
<p class="text-16">Body text (16px)</p>
<h3 class="text-24">Section heading (24px)</h3>
<small class="text-12">Helper text (12px)</small>

<!-- Modular typography scale -->
<h1 class="text-m6">Large heading (3.81em)</h1>
<h2 class="text-m4">Medium heading (2.44em)</h2>
<p class="text-m0">Base text (1em)</p>
<small class="text--m1">Small text (0.9em)</small>

<!-- Responsive font sizes -->
<h1 class="text-m4 md:text-m5 lg:text-m6">
  Responsive heading
</h1>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        // Add custom sizes
        '32': '3.2rem',
        '36': '3.6rem',
        // Add custom modular steps
        'm10': '9.31em',
        // Override existing sizes
        'm6': '4em', // Custom large heading size
      },
    },
  },
}
```

### Modular Typography System

#### Responsive Scale (m0 - m9)
The modular typography system provides responsive font sizes that adapt to screen size and reading context:

```javascript
// Modular typography with responsive line heights
'm0': ['0.8rem', { lineHeight: '1.3' }],    // 12.8px at base - smallest modular size
'm1': ['0.9rem', { lineHeight: '1.4' }],    // 14.4px at base - small supporting text
'm2': ['1rem', { lineHeight: '1.5' }],      // 16px at base - body text
'm3': ['1.125rem', { lineHeight: '1.5' }],  // 18px at base - large body text
'm4': ['1.3rem', { lineHeight: '1.4' }],    // 20.8px at base - small headings
'm5': ['1.5rem', { lineHeight: '1.3' }],    // 24px at base - medium headings
'm6': ['1.8rem', { lineHeight: '1.2' }],    // 28.8px at base - large headings
'm7': ['2.2rem', { lineHeight: '1.2' }],    // 35.2px at base - display headings
'm8': ['2.6rem', { lineHeight: '1.1' }],    // 41.6px at base - major headings
'm9': ['3.2rem', { lineHeight: '1.1' }]     // 51.2px at base - hero text
```

**Responsive Behavior:**
- **Mobile**: Base scale optimized for mobile reading
- **Tablet**: Scales proportionally for larger screens
- **Desktop**: Full scale for optimal desktop reading
- **Print**: Optimized for print media with adjusted line heights

**Usage Guidelines:**
- **m0-m1**: Supporting text, captions, metadata
- **m2-m3**: Body text, paragraphs, lists
- **m4-m5**: Subheadings, section titles
- **m6-m7**: Major headings, page titles
- **m8-m9**: Hero text, display typography

**Usage Examples:**
```html
<!-- Academic article structure -->
<article class="prose">
  <header>
    <h1 class="text-m8 font-bold text-cardinal-red mb-4">
      Artificial Intelligence in Climate Research
    </h1>
    <div class="text-m1 text-black-60 mb-8">
      <span>Published March 15, 2024</span> • 
      <span>Dr. Sarah Chen, Environmental Science</span>
    </div>
  </header>
  
  <div class="space-y-6">
    <p class="text-m3 font-medium text-black leading-relaxed">
      Stanford researchers have developed groundbreaking AI models that can predict climate patterns with unprecedented accuracy.
    </p>
    
    <h2 class="text-m6 font-semibold text-black mt-12 mb-4">
      Research Methodology
    </h2>
    
    <p class="text-m2 leading-relaxed text-black-90">
      The study utilized machine learning algorithms trained on decades of climate data from multiple sources...
    </p>
    
    <h3 class="text-m5 font-medium text-black mt-8 mb-3">
      Data Collection Process
    </h3>
    
    <p class="text-m2 leading-relaxed text-black-90">
      Our team collected atmospheric data from 150 monitoring stations worldwide...
    </p>
    
    <aside class="text-m1 text-black-50 border-l-4 border-cardinal-red-light pl-4">
      For technical details, see the complete methodology in the supplementary materials.
    </aside>
  </div>
</article>
```

### Convenience Classes

#### type-* Classes (Semantic Aliases)
The modular scale is also available through semantic `type-*` classes:

```javascript
// Semantic aliases for modular scale
'type-0': ['0.8rem', { lineHeight: '1.3' }],   // Same as m0
'type-1': ['0.9rem', { lineHeight: '1.4' }],   // Same as m1
'type-2': ['1rem', { lineHeight: '1.5' }],     // Same as m2
'type-3': ['1.125rem', { lineHeight: '1.5' }], // Same as m3
'type-4': ['1.3rem', { lineHeight: '1.4' }],   // Same as m4
'type-5': ['1.5rem', { lineHeight: '1.3' }],   // Same as m5
'type-6': ['1.8rem', { lineHeight: '1.2' }],   // Same as m6
'type-7': ['2.2rem', { lineHeight: '1.2' }],   // Same as m7
'type-8': ['2.6rem', { lineHeight: '1.1' }],   // Same as m8
'type-9': ['3.2rem', { lineHeight: '1.1' }]    // Same as m9
```

**Usage Examples:**
```html
<!-- Using type-* classes for semantic meaning -->
<article>
  <h1 class="type-8">Article Title</h1>         <!-- Hero heading -->
  <h2 class="type-6">Section Heading</h2>       <!-- Major heading -->
  <h3 class="type-5">Subsection</h3>            <!-- Minor heading -->
  <p class="type-2">Body text content...</p>     <!-- Body text -->
  <small class="type-0">Caption text</small>     <!-- Supporting text -->
</article>

<!-- Design system documentation -->
<div class="space-y-4">
  <div class="type-9 text-cardinal-red">Hero Display</div>
  <div class="type-8 text-black">Page Title</div>
  <div class="type-7 text-black">Section Title</div>
  <div class="type-6 text-black">Large Heading</div>
  <div class="type-5 text-black">Medium Heading</div>
  <div class="type-4 text-black">Small Heading</div>
  <div class="type-3 text-black">Large Body</div>
  <div class="type-2 text-black">Regular Body</div>
  <div class="type-1 text-black">Small Text</div>
  <div class="type-0 text-black">Caption</div>
</div>
```

## Line Height Integration

### Optimized Line Heights by Size Range

The font size system includes carefully calibrated line heights:

#### Small Text (11px-16px)
- **Line height**: 1.5 (comfortable for reading small text)
- **Use cases**: Interface elements, form labels, navigation

#### Body Text (17px-22px)
- **Line height**: 1.4-1.5 (optimal for reading comfort)
- **Use cases**: Paragraphs, articles, content blocks

#### Large Text (23px-26px)
- **Line height**: 1.3 (tighter for visual hierarchy)
- **Use cases**: Subheadings, card titles

#### Headings (27px+)
- **Line height**: 1.1-1.2 (tight for visual impact)
- **Use cases**: Page titles, hero text, display headings

This comprehensive font size system provides the precision needed for interface design while offering the flexibility and reading optimization required for Stanford's diverse digital content needs.
