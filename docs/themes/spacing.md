# Spacing Theme Plugin

**File**: `/src/plugins/theme/spacing.js`

## Overview

The spacing theme plugin implements Stanford's comprehensive spacing system that balances typographic rhythm with layout flexibility. It provides both em-based spacing for typography-relative measurements and rem-based spacing for consistent layout patterns, creating a unified spatial system across all Stanford digital properties.

## Purpose

Establishes a systematic approach to spacing that maintains visual rhythm and consistency while accommodating Stanford's diverse content types. The dual-unit system ensures that spacing scales appropriately with text size (em units) while maintaining predictable layout patterns (rem units) across different screen sizes and contexts.

## Spacing Scale Architecture

### Typography-Relative Spacing (em units)

#### Fine-Grained Typography Spacing (0.05em - 0.95em)
```javascript
// Ultra-fine spacing for typography
'0.05': '0.05em',  // Letter-spacing adjustments
'0.1': '0.1em',    // Tight letter spacing
'0.15': '0.15em',  // Fine spacing
'0.2': '0.2em',    // Small spacing
'0.25': '0.25em',  // Quarter spacing
'0.3': '0.3em',    // Typography margins
'0.35': '0.35em',  // Fine margins
'0.4': '0.4em',    // Small margins
'0.45': '0.45em',  // Medium-small spacing
'0.5': '0.5em',    // Half spacing
'0.55': '0.55em',  // Medium spacing
'0.6': '0.6em',    // Comfortable spacing
'0.65': '0.65em',  // Medium-large spacing
'0.7': '0.7em',    // Large typography spacing
'0.75': '0.75em',  // Three-quarter spacing
'0.8': '0.8em',    // Large spacing
'0.85': '0.85em',  // Large-extra spacing
'0.9': '0.9em',    // Nearly full spacing
'0.95': '0.95em'   // Almost full spacing
```

**Usage Guidelines:**
- **Letter spacing**: 0.05em - 0.15em for typography fine-tuning
- **Word spacing**: 0.1em - 0.3em for readability adjustments
- **Inline element spacing**: 0.2em - 0.5em for text-relative gaps
- **Typography margins**: 0.5em - 0.95em for text-relative vertical rhythm

**Usage Examples:**
```html
<!-- Typography fine-tuning -->
<h1 class="tracking-[0.05em] mb-[0.3em]">Stanford University</h1>
<h2 class="tracking-[0.1em] mb-[0.25em] mt-[0.5em]">Research Excellence</h2>

<!-- Inline element spacing -->
<p class="space-x-[0.2em]">
  <span class="bg-cardinal-red text-white px-[0.3em] py-[0.1em] rounded">Tag</span>
  <span class="bg-digital-blue text-white px-[0.3em] py-[0.1em] rounded">Category</span>
</p>

<!-- Text-relative margins -->
<article class="space-y-[0.75em]">
  <p>First paragraph with em-based spacing that scales with text size...</p>
  <p>Second paragraph maintains proportional spacing...</p>
</article>
```

#### Standard Typography Spacing (1em - 4em)
```javascript
// Full em-based spacing
'1': '1em',    // Full text size
'1.25': '1.25em',  // Large spacing
'1.5': '1.5em',    // Extra-large spacing
'1.75': '1.75em',  // Double spacing minus
'2': '2em',        // Double spacing
'2.25': '2.25em',  // Large section spacing
'2.5': '2.5em',    // Extra-large section spacing
'2.75': '2.75em',  // Major spacing
'3': '3em',        // Triple spacing
'3.25': '3.25em',  // Large section breaks
'3.5': '3.5em',    // Major section spacing
'3.75': '3.75em',  // Extra-large breaks
'4': '4em'         // Maximum em spacing
```

**Usage Guidelines:**
- **Paragraph spacing**: 1em - 1.5em between paragraphs
- **Section spacing**: 2em - 3em between content sections
- **Major breaks**: 3em - 4em for significant content divisions
- **Typography hierarchy**: Scaling margins based on heading sizes

**Usage Examples:**
```html
<!-- Article with typography-scaled spacing -->
<article class="font-source-serif-4">
  <header class="mb-[2em]">
    <h1 class="text-m8 mb-[0.5em]">Research Article Title</h1>
    <div class="text-m1 text-black-60 mb-[1em]">
      <span>Dr. Sarah Chen</span> • <span>March 2024</span>
    </div>
    <p class="text-m3 font-medium">Abstract summary that scales with text size...</p>
  </header>
  
  <main class="space-y-[1.5em]">
    <section>
      <h2 class="text-m6 mb-[0.75em] mt-[2.5em]">Introduction</h2>
      <p>Research content with typography-relative spacing...</p>
      <p>Additional paragraphs maintain consistent rhythm...</p>
    </section>
    
    <section>
      <h2 class="text-m6 mb-[0.75em] mt-[2.5em]">Methodology</h2>
      <p>Section content with proportional spacing...</p>
    </section>
  </main>
</article>

<!-- Responsive typography spacing -->
<div class="text-m2 lg:text-m3">
  <h1 class="mb-[1em]">Heading that scales</h1>
  <p class="mb-[1.5em]">Content with spacing that adapts to text size changes</p>
</div>
```

### Layout-Consistent Spacing (rem units)

#### Pixel-Perfect Layout Spacing
```javascript
// Rem-based spacing for consistent layouts
'1px': '1px',      // Hairline borders
'2px': '2px',      // Thin borders
'3px': '3px',      // Medium borders
'4px': '4px',      // Standard borders
'5px': '5px',      // Thick borders
'6px': '6px',      // Extra-thick borders
'7px': '7px',      // Custom border weights
'8px': '8px',      // Component spacing
'9px': '9px',      // Fine component spacing
'10px': '10px',    // Standard component spacing
'12px': '12px',    // Medium component spacing
'14px': '14px',    // Large component spacing
'16px': '16px',    // Extra-large component spacing
'18px': '18px',    // Section spacing
'20px': '20px',    // Large section spacing
'22px': '22px',    // Custom spacing
'24px': '24px',    // Major component spacing
'26px': '26px',    // Large spacing
'28px': '28px',    // Extra-large spacing
'30px': '30px',    // Major spacing
'32px': '32px',    // Grid spacing
'36px': '36px',    // Large grid spacing
'40px': '40px',    // Section breaks
'44px': '44px',    // Large sections
'48px': '48px',    // Major sections
'52px': '52px',    // Extra-large sections
'56px': '56px',    // Page sections
'60px': '60px',    // Large page sections
'64px': '64px',    // Major page spacing
'68px': '68px',    // Extra-large page spacing
'72px': '72px',    // Hero spacing
'76px': '76px',    // Large hero spacing
'80px': '80px',    // Major hero spacing
'84px': '84px',    // Extra-large hero spacing
'88px': '88px',    // Page breaks
'92px': '92px',    // Large page breaks
'96px': '96px',    // Major page breaks
'100px': '100px',  // Centimeter spacing
'120px': '120px',  // Large sections
'140px': '140px',  // Extra-large sections
'160px': '160px',  // Major sections
'180px': '180px',  // Hero sections
'200px': '200px',  // Large hero sections
'250px': '250px',  // Major hero sections
'300px': '300px',  // Extra-large hero sections
'350px': '350px',  // Maximum sections
'400px': '400px',  // Page spacing
'450px': '450px',  // Large page spacing
'500px': '500px',  // Major page spacing
'600px': '600px',  // Extra-large page spacing
'700px': '700px',  // Maximum page spacing
'800px': '800px',  // Full-screen spacing
'900px': '900px',  // Large full-screen spacing
'1000px': '1000px', // Extra-large spacing
'1200px': '1200px', // Maximum container spacing
'1500px': '1500px'  // Ultra-wide spacing
```

**Usage Guidelines:**
- **1px-10px**: Borders, fine component spacing, micro-interactions
- **12px-30px**: Component padding, form element spacing, card spacing
- **32px-80px**: Section spacing, grid gaps, page margins
- **100px-300px**: Hero sections, major page divisions
- **400px+**: Full-screen layouts, maximum spacing scenarios

**Usage Examples:**
```html
<!-- Interface components with pixel-perfect spacing -->
<div class="bg-white border border-gray-200 rounded p-[16px] space-y-[12px]">
  <h3 class="text-m4 font-semibold mb-[8px]">Component Card</h3>
  <p class="text-m2 mb-[12px]">Content with consistent rem-based spacing</p>
  <button class="bg-cardinal-red text-white px-[16px] py-[8px] rounded">
    Action Button
  </button>
</div>

<!-- Page layout with consistent spacing -->
<main>
  <!-- Hero section -->
  <section class="py-[120px] px-[40px]">
    <div class="centered-container">
      <h1 class="text-m9 mb-[32px]">Stanford Excellence</h1>
      <p class="text-m4 mb-[48px]">Leading innovation for humanity</p>
    </div>
  </section>
  
  <!-- Content sections -->
  <section class="py-[80px] px-[40px]">
    <div class="centered-container space-y-[60px]">
      <h2 class="text-m7 mb-[24px]">Research Areas</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
        <div class="p-[24px] border border-black-20 rounded">
          <h3 class="text-m5 mb-[16px]">Engineering</h3>
          <p class="text-m2">Innovation through technology...</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="py-[60px] px-[40px] bg-black-90">
    <div class="centered-container">
      <p class="text-white text-m2">© 2024 Stanford University</p>
    </div>
  </footer>
</main>

<!-- Form layouts with consistent spacing -->
<form class="space-y-[24px] p-[32px] bg-white rounded border">
  <div class="space-y-[8px]">
    <label class="block text-m2 font-medium">Full Name</label>
    <input type="text" class="w-full p-[12px] border border-black-30 rounded">
  </div>
  
  <div class="space-y-[8px]">
    <label class="block text-m2 font-medium">Email Address</label>
    <input type="email" class="w-full p-[12px] border border-black-30 rounded">
  </div>
  
  <div class="flex gap-[16px] pt-[16px]">
    <button type="submit" class="bg-cardinal-red text-white px-[24px] py-[12px] rounded">
      Submit
    </button>
    <button type="button" class="bg-black-20 text-black px-[24px] py-[12px] rounded">
      Cancel
    </button>
  </div>
</form>
```

## Spacing System Usage Patterns

### Stanford Website Layout Pattern
```html
<!-- Complete Stanford page with systematic spacing -->
<div class="min-h-screen bg-white">
  <!-- Header -->
  <header class="bg-cardinal-red text-white py-[20px]">
    <div class="centered-container px-[40px]">
      <nav class="flex justify-between items-center">
        <div class="text-m4 font-stanford">Stanford</div>
        <ul class="flex space-x-[32px] text-m2">
          <li><a href="#" class="hover:opacity-75">Academics</a></li>
          <li><a href="#" class="hover:opacity-75">Research</a></li>
          <li><a href="#" class="hover:opacity-75">Campus Life</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Main navigation -->
  <nav class="bg-white border-b border-black-20 py-[16px]">
    <div class="centered-container px-[40px]">
      <ul class="flex space-x-[48px] text-m2">
        <li><a href="#" class="text-digital-blue hover:text-digital-blue-dark">Programs</a></li>
        <li><a href="#" class="text-digital-blue hover:text-digital-blue-dark">Faculty</a></li>
        <li><a href="#" class="text-digital-blue hover:text-digital-blue-dark">Research</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero section -->
  <section class="py-[120px] bg-gradient-to-r from-cardinal-red to-cardinal-red-dark">
    <div class="centered-container px-[40px] text-center text-white">
      <h1 class="text-m9 font-bold mb-[32px]">Shape the Future</h1>
      <p class="text-m4 mb-[48px] max-w-3xl mx-auto">
        Join Stanford's community of innovators, researchers, and leaders.
      </p>
      <div class="space-x-[24px]">
        <button class="bg-white text-cardinal-red px-[32px] py-[16px] rounded text-m2 font-medium">
          Apply Now
        </button>
        <button class="border-2 border-white text-white px-[32px] py-[16px] rounded text-m2 font-medium">
          Learn More
        </button>
      </div>
    </div>
  </section>

  <!-- Content grid -->
  <section class="py-[100px]">
    <div class="centered-container px-[40px]">
      <h2 class="text-m7 font-bold text-center mb-[60px]">Schools & Programs</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        <div class="bg-white border border-black-20 rounded p-[32px] hover:shadow-lg transition-shadow">
          <div class="w-[60px] h-[60px] bg-cardinal-red rounded mb-[24px]"></div>
          <h3 class="text-m5 font-semibold mb-[16px]">School of Engineering</h3>
          <p class="text-m2 text-black-70 mb-[24px]">
            Leading innovation in technology and engineering solutions.
          </p>
          <a href="#" class="text-digital-blue hover:text-digital-blue-dark text-m2 font-medium">
            Explore Programs →
          </a>
        </div>
        
        <!-- Additional cards... -->
      </div>
    </div>
  </section>

  <!-- News section -->
  <section class="py-[100px] bg-black-10">
    <div class="centered-container px-[40px]">
      <div class="flex justify-between items-center mb-[60px]">
        <h2 class="text-m7 font-bold">Latest News</h2>
        <a href="#" class="text-digital-blue hover:text-digital-blue-dark text-m3 font-medium">
          View All News →
        </a>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
        <article class="bg-white rounded p-[32px]">
          <div class="text-m1 text-black-50 mb-[12px]">March 15, 2024</div>
          <h3 class="text-m5 font-semibold mb-[16px]">
            Breakthrough in Climate Research
          </h3>
          <p class="text-m2 text-black-70 mb-[24px]">
            Stanford researchers develop new carbon capture technology...
          </p>
          <a href="#" class="text-digital-blue hover:text-digital-blue-dark text-m2 font-medium">
            Read More →
          </a>
        </article>
        
        <!-- Additional articles... -->
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black-90 text-white py-[80px]">
    <div class="centered-container px-[40px]">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-[48px] mb-[60px]">
        <div>
          <h4 class="text-m3 font-semibold mb-[24px]">Academics</h4>
          <ul class="space-y-[12px] text-m2 text-black-30">
            <li><a href="#" class="hover:text-white">Schools</a></li>
            <li><a href="#" class="hover:text-white">Departments</a></li>
            <li><a href="#" class="hover:text-white">Programs</a></li>
          </ul>
        </div>
        
        <!-- Additional footer columns... -->
      </div>
      
      <div class="border-t border-black-50 pt-[32px] text-center text-m2 text-black-40">
        <p>© 2024 Stanford University. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
```

## Grid and Layout Integration

### Grid Gap Spacing
```html
<!-- Consistent grid layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
  <!-- Grid items with consistent spacing -->
</div>

<!-- Responsive grid gaps -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px] lg:gap-[48px]">
  <!-- Grid items with responsive spacing -->
</div>

<!-- Complex grid layouts -->
<div class="grid grid-cols-12 gap-[24px]">
  <div class="col-span-12 lg:col-span-8 space-y-[32px]">
    <!-- Main content with vertical spacing -->
  </div>
  <div class="col-span-12 lg:col-span-4">
    <!-- Sidebar content -->
  </div>
</div>
```

### Container and Section Spacing
```html
<!-- Page containers with consistent spacing -->
<div class="min-h-screen">
  <main class="py-[40px] lg:py-[80px]">
    <div class="centered-container px-[20px] lg:px-[40px]">
      <section class="mb-[60px] lg:mb-[100px]">
        <!-- Section content -->
      </section>
    </div>
  </main>
</div>
```

## Responsive Spacing Patterns

### Mobile-First Spacing
```html
<!-- Responsive spacing that scales up -->
<section class="py-[40px] md:py-[60px] lg:py-[100px]">
  <div class="px-[20px] md:px-[32px] lg:px-[40px]">
    <h1 class="mb-[24px] md:mb-[32px] lg:mb-[48px]">Responsive Heading</h1>
    <div class="space-y-[16px] md:space-y-[24px] lg:space-y-[32px]">
      <!-- Content with responsive vertical spacing -->
    </div>
  </div>
</section>
```

### Breakpoint-Specific Adjustments
```html
<!-- Fine-tuned responsive spacing -->
<article class="space-y-[20px] sm:space-y-[24px] md:space-y-[32px] lg:space-y-[40px]">
  <h1 class="mb-[16px] sm:mb-[20px] md:mb-[24px] lg:mb-[32px]">Article Title</h1>
  <p class="mb-[16px] md:mb-[20px] lg:mb-[24px]">Article content...</p>
</article>
```

## Accessibility and Usability

### Touch Target Spacing
```html
<!-- Adequate spacing for touch interfaces -->
<nav class="space-y-[12px] md:space-y-[8px]">
  <a href="#" class="block py-[12px] px-[16px] hover:bg-black-10 rounded">
    Navigation Link
  </a>
</nav>

<!-- Button spacing for touch -->
<div class="space-y-[16px] md:space-x-[16px] md:space-y-0 md:flex">
  <button class="w-full md:w-auto px-[24px] py-[12px] bg-cardinal-red text-white rounded">
    Primary Action
  </button>
  <button class="w-full md:w-auto px-[24px] py-[12px] border border-cardinal-red text-cardinal-red rounded">
    Secondary Action
  </button>
</div>
```

### Reading Comfort
```html
<!-- Optimal spacing for reading -->
<article class="max-w-2xl mx-auto space-y-[24px] leading-relaxed">
  <h1 class="text-m7 mb-[32px]">Article Title</h1>
  <p class="text-m3 mb-[32px] font-medium">Lead paragraph with increased spacing...</p>
  <p class="text-m2">Regular paragraph with comfortable spacing...</p>
  <p class="text-m2">Additional content maintains reading rhythm...</p>
</article>
```

This comprehensive spacing system ensures Stanford's digital properties maintain visual consistency while providing the flexibility needed for diverse layout requirements and optimal user experiences across all devices and contexts.
