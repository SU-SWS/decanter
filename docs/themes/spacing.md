# Spacing

**File**: `/src/plugins/theme/spacing.js`

## Overview
Provides comprehensive spacing utilities from 1px to 1500px in rem/em units for margin, padding, gap, and width with both precise increments and responsive system values.

## Generated CSS Classes

- **Pixel units**: `px` (1px)
- **Em units**: `.01em` through `1em` (typography spacing)
- **Small increments**: `1` through `50` (1px to 50px in 1px increments)
- **Medium increments**: `55` through `100` (50px to 100px in 5px increments) 
- **Large increments**: `110` through `300` (100px to 300px in 10px increments)
- **XL increments**: `350` through `1000` (300px to 1000px in 50px increments)
- **XXL increments**: `1100` through `1500` (1000px to 1500px in 100px increments)

## Usage

```html
<!-- Common spacing patterns -->
<div class="p-16 m-24">Padding 16px, margin 24px</div>
<section class="py-60 px-20">Vertical 60px, horizontal 20px</section>

<!-- Typography spacing (em units) -->
<h2 class="mb-05em">Heading with proportional bottom margin</h2>
<p class="mt-1em">Paragraph with 1em top margin</p>

<!-- Layout spacing -->
<div class="space-y-32">Vertical spacing between children</div>
<div class="gap-20">Grid/flex gap of 20px</div>

<!-- Responsive spacing -->
<div class="p-16 md:p-32 lg:p-48">
  Responsive padding
</div>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        // Add custom spacing values
        '15': '1.5rem',
        '128': '12.8rem',
        '1600': '160rem',
        // Add semantic spacing
        'card': '2.4rem',
        'section': '6rem',
        'gutter': '2rem',
      },
    },
  },
}
  
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
