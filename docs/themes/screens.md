# Screens (Breakpoints) Theme Plugin

**File**: `/src/plugins/theme/screens.js`

## Overview

The screens theme plugin defines Stanford's responsive breakpoint system, providing a comprehensive set of screen size breakpoints optimized for Stanford's diverse content types and user interfaces. The system extends beyond standard mobile-first design to accommodate modern ultra-wide displays and specialized viewing contexts.

## Purpose

Establishes consistent breakpoints across all Stanford digital properties, ensuring responsive designs work seamlessly from mobile devices to large desktop displays. The system supports everything from mobile phones to ultra-wide monitors used in research environments and digital signage.

## Breakpoint System

### Standard Responsive Breakpoints

#### Small (sm) - 576px
```javascript
sm: '576px'  // Small tablets and large phones in landscape
```

**Target Devices:**
- Large phones in landscape orientation (iPhone 14 Plus landscape: 428px)
- Small tablets in portrait (iPad Mini: 576px)
- Small laptop screens in cramped windows

**Usage Guidelines:**
- **First responsive step**: Transition from single-column mobile layouts
- **Navigation enhancement**: Expand navigation options
- **Typography adjustments**: Slight size increases for better readability
- **Content reorganization**: Begin showing more content per row

**Usage Examples:**
```html
<!-- Basic responsive layout -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
  <div>Mobile: 1 column, Small+: 2 columns</div>
  <div>Content adapts at 576px breakpoint</div>
</div>

<!-- Navigation expansion -->
<nav class="sm:block hidden">
  <ul class="flex space-x-[24px]">
    <li><a href="#academics">Academics</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#campus">Campus Life</a></li>
  </ul>
</nav>

<!-- Typography scaling -->
<h1 class="text-m7 sm:text-m8 leading-display">
  Responsive Heading
</h1>
```

#### Medium (md) - 768px
```javascript
md: '768px'  // Tablets and small laptops
```

**Target Devices:**
- iPads in portrait (768px)
- Surface tablets
- Small laptops (MacBook Air 11")
- Desktop windows in narrow modes

**Usage Guidelines:**
- **Tablet optimization**: Full tablet-optimized layouts
- **Multi-column content**: Expand to 2-3 column layouts
- **Enhanced navigation**: Full navigation menus
- **Typography maturity**: Approach desktop typography sizes

**Usage Examples:**
```html
<!-- Tablet-optimized grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
  <div>Faculty Profile 1</div>
  <div>Faculty Profile 2</div>
  <div>Faculty Profile 3</div>
</div>

<!-- Enhanced header layout -->
<header class="md:flex md:justify-between md:items-center py-[24px]">
  <div class="font-stanford text-m4">Stanford University</div>
  <nav class="md:flex space-x-[32px] mt-[16px] md:mt-0">
    <a href="#academics">Academics</a>
    <a href="#research">Research</a>
    <a href="#admissions">Admissions</a>
  </nav>
</header>

<!-- Sidebar layouts -->
<div class="md:flex md:space-x-[48px]">
  <main class="md:flex-1">
    <article>Main article content...</article>
  </main>
  <aside class="md:w-[300px] mt-[40px] md:mt-0">
    <div>Related articles sidebar</div>
  </aside>
</div>
```

#### Large (lg) - 992px
```javascript
lg: '992px'  // Desktop and laptop displays
```

**Target Devices:**
- Most desktop monitors
- Laptop displays (MacBook Pro 13", 15")
- iPad Pro in landscape
- Standard desktop browser windows

**Usage Guidelines:**
- **Desktop-first layouts**: Full desktop experience
- **Complex grid systems**: 3-4+ column layouts
- **Full typography scale**: Desktop typography sizes
- **Rich interactions**: Enhanced hover states and transitions

**Usage Examples:**
```html
<!-- Desktop grid layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
  <div>Program 1</div>
  <div>Program 2</div>
  <div>Program 3</div>
  <div>Program 4</div>
</div>

<!-- Complex page layouts -->
<div class="lg:flex lg:space-x-[60px]">
  <!-- Main content area -->
  <main class="lg:flex-1">
    <article class="prose prose-lg">
      <h1 class="text-m8 leading-display">Research Article</h1>
      <p class="text-m3 leading-normal">Full desktop typography...</p>
    </article>
  </main>
  
  <!-- Secondary sidebar -->
  <aside class="lg:w-[280px] space-y-[32px]">
    <div>Table of contents</div>
    <div>Related research</div>
    <div>Author information</div>
  </aside>
  
  <!-- Tertiary sidebar -->
  <aside class="lg:w-[240px] space-y-[24px]">
    <div>Quick links</div>
    <div>Social sharing</div>
  </aside>
</div>

<!-- Enhanced navigation -->
<nav class="lg:block hidden">
  <ul class="flex space-x-[48px] text-m2">
    <li class="group relative">
      <a href="#academics" class="hover:text-cardinal-red">Academics</a>
      <!-- Dropdown menu for desktop -->
      <div class="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg">
        <a href="#undergraduate" class="block px-[24px] py-[12px]">Undergraduate</a>
        <a href="#graduate" class="block px-[24px] py-[12px]">Graduate</a>
      </div>
    </li>
  </ul>
</nav>
```

#### Extra Large (xl) - 1200px
```javascript
xl: '1200px'  // Large desktop displays
```

**Target Devices:**
- Large desktop monitors (24"+)
- iMac displays
- External monitors
- Professional workstations

**Usage Guidelines:**
- **Large screen optimization**: Take advantage of extra screen real estate
- **Wide layouts**: Expand content containers
- **Enhanced spacing**: More generous margins and padding
- **Multiple content streams**: Side-by-side content areas

**Usage Examples:**
```html
<!-- Wide container expansion -->
<div class="centered-container xl:max-w-[1400px]">
  <section class="py-[100px]">
    <h1 class="text-m9 text-center mb-[60px]">Stanford Excellence</h1>
    
    <!-- Wide grid for large screens -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[32px]">
      <div>School 1</div>
      <div>School 2</div>
      <div>School 3</div>
      <div>School 4</div>
      <div>School 5</div>
    </div>
  </section>
</div>

<!-- Enhanced spacing for large screens -->
<section class="py-[80px] xl:py-[120px]">
  <div class="centered-container px-[40px] xl:px-[80px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[100px]">
      <div>Enhanced spacing content area 1</div>
      <div>Enhanced spacing content area 2</div>
    </div>
  </div>
</section>

<!-- Multiple content streams -->
<div class="xl:flex xl:space-x-[80px]">
  <main class="xl:flex-1">Main article stream</main>
  <aside class="xl:w-[320px]">Secondary content</aside>
  <aside class="xl:w-[280px]">Tertiary content</aside>
</div>
```

### Extended Breakpoint System

#### 2XL (2xl) - 1500px
```javascript
'2xl': '1500px'  // Ultra-wide displays
```

**Target Devices:**
- Ultra-wide monitors (21:9 aspect ratio)
- Large 4K displays
- Professional design workstations
- Multi-monitor setups

**Usage Guidelines:**
- **Ultra-wide layouts**: Optimize for wide screen real estate
- **Research interfaces**: Academic and research tool layouts
- **Data visualization**: Wide charts and data displays
- **Professional applications**: Administrative and professional tools

**Usage Examples:**
```html
<!-- Ultra-wide research interface -->
<div class="2xl:flex 2xl:space-x-[100px]">
  <!-- Primary research content -->
  <main class="2xl:flex-1">
    <div class="prose prose-xl max-w-none">
      <h1 class="text-m9">Research Documentation</h1>
      <p class="text-m3">Comprehensive research content...</p>
    </div>
  </main>
  
  <!-- Research tools sidebar -->
  <aside class="2xl:w-[400px] space-y-[32px]">
    <div>Data visualization tools</div>
    <div>Research parameters</div>
    <div>Analysis results</div>
  </aside>
  
  <!-- Reference sidebar -->
  <aside class="2xl:w-[300px] space-y-[24px]">
    <div>Citations</div>
    <div>Related research</div>
    <div>External links</div>
  </aside>
</div>

<!-- Data dashboard layout -->
<div class="2xl:grid 2xl:grid-cols-4 2xl:gap-[40px]">
  <div class="2xl:col-span-2">Primary data visualization</div>
  <div>Secondary metrics</div>
  <div>Control panel</div>
</div>
```

#### 3XL (3xl) - 1700px
```javascript
'3xl': '1700px'  // Large professional displays
```

**Target Devices:**
- Large professional monitors (27"+)
- High-end workstations
- Conference room displays
- Digital signage systems

**Usage Guidelines:**
- **Professional interfaces**: Administrative systems and professional tools
- **Conference displays**: Presentation-optimized layouts
- **Digital signage**: Campus information systems
- **Accessibility**: Large text for accessibility needs

**Usage Examples:**
```html
<!-- Professional admin interface -->
<div class="3xl:grid 3xl:grid-cols-6 3xl:gap-[48px] 3xl:p-[60px]">
  <!-- Navigation panel -->
  <nav class="3xl:col-span-1">
    <ul class="space-y-[16px] text-m3">
      <li><a href="#dashboard">Dashboard</a></li>
      <li><a href="#students">Students</a></li>
      <li><a href="#faculty">Faculty</a></li>
      <li><a href="#courses">Courses</a></li>
    </ul>
  </nav>
  
  <!-- Main content area -->
  <main class="3xl:col-span-4">
    <h1 class="text-m8 mb-[40px]">Student Management System</h1>
    <!-- Admin interface content -->
  </main>
  
  <!-- Tools panel -->
  <aside class="3xl:col-span-1">
    <div class="space-y-[24px]">
      <div>Quick actions</div>
      <div>System status</div>
      <div>Notifications</div>
    </div>
  </aside>
</div>

<!-- Conference room display -->
<div class="3xl:text-center 3xl:py-[120px]">
  <h1 class="text-[4rem] 3xl:text-[6rem] font-bold text-cardinal-red">
    Welcome to Stanford
  </h1>
  <p class="text-[2rem] 3xl:text-[3rem] text-black-70">
    Innovation Summit 2024
  </p>
</div>
```

#### 4XL (4xl) - 2000px
```javascript
'4xl': '2000px'  // Maximum display support
```

**Target Devices:**
- Ultra-large displays (32"+)
- Multi-monitor configurations
- Specialized research displays
- Large-scale digital installations

**Usage Guidelines:**
- **Research visualizations**: Large-scale data displays
- **Digital installations**: Campus digital art and information
- **Specialized applications**: Custom research and academic tools
- **Maximum accessibility**: Very large text for vision accessibility

**Usage Examples:**
```html
<!-- Research visualization display -->
<div class="4xl:h-screen 4xl:flex 4xl:items-center 4xl:justify-center">
  <div class="4xl:grid 4xl:grid-cols-3 4xl:gap-[80px] 4xl:w-full 4xl:max-w-[1800px]">
    <div class="4xl:col-span-2">
      <!-- Large data visualization -->
      <h1 class="text-[3rem] 4xl:text-[5rem] mb-[40px]">Climate Data Analysis</h1>
      <div class="4xl:h-[800px] bg-black-10 rounded">
        <!-- Massive chart/visualization area -->
      </div>
    </div>
    
    <div class="space-y-[40px]">
      <!-- Control panel -->
      <div class="text-[1.5rem] 4xl:text-[2rem]">
        <h2 class="mb-[24px]">Parameters</h2>
        <!-- Large interface controls -->
      </div>
    </div>
  </div>
</div>

<!-- Campus digital installation -->
<div class="4xl:h-screen 4xl:flex 4xl:flex-col 4xl:justify-center 4xl:text-center">
  <h1 class="text-[4rem] 4xl:text-[8rem] font-stanford text-cardinal-red">
    STANFORD
  </h1>
  <p class="text-[2rem] 4xl:text-[4rem] text-black-70">
    Shaping the Future Since 1885
  </p>
</div>
```

## Responsive Design Patterns

### Progressive Enhancement
```html
<!-- Mobile-first progressive enhancement -->
<div class="
  space-y-[16px]
  sm:space-y-0 sm:space-x-[20px] sm:flex
  md:space-x-[32px]
  lg:space-x-[48px]
  xl:space-x-[60px]
  2xl:space-x-[80px]
">
  <div>Content adapts progressively</div>
  <div>As screen size increases</div>
</div>
```

### Container Responsive Patterns
```html
<!-- Responsive container with Stanford standards -->
<div class="
  px-[20px]
  sm:px-[24px]
  md:px-[32px]
  lg:px-[40px]
  xl:px-[60px]
  2xl:px-[80px]
  3xl:px-[100px]
  4xl:px-[120px]
  centered-container
">
  <section class="
    py-[40px]
    sm:py-[50px]
    md:py-[60px]
    lg:py-[80px]
    xl:py-[100px]
    2xl:py-[120px]
  ">
    <h1 class="
      text-m6
      sm:text-m7
      md:text-m8
      lg:text-m9
      xl:text-[4rem]
      2xl:text-[5rem]
    ">
      Fully Responsive Stanford Content
    </h1>
  </section>
</div>
```

## Integration with Stanford Components

### Grid System Integration
```html
<!-- Stanford-specific responsive grids -->
<!-- Academic program listings -->
<div class="grid gap-[24px] md:gap-[32px] lg:gap-[40px]
     grid-cols-1 
     sm:grid-cols-2 
     lg:grid-cols-3 
     xl:grid-cols-4 
     2xl:grid-cols-5">
  <!-- Program cards -->
</div>

<!-- Faculty directory -->
<div class="grid gap-[32px] lg:gap-[48px]
     grid-cols-1 
     md:grid-cols-2 
     xl:grid-cols-3 
     2xl:grid-cols-4">
  <!-- Faculty profiles -->
</div>

<!-- Research showcase -->
<div class="grid gap-[40px] xl:gap-[60px]
     grid-cols-1 
     lg:grid-cols-2 
     2xl:grid-cols-3">
  <!-- Research projects -->
</div>
```

### Navigation Responsive Patterns
```html
<!-- Stanford navigation responsive behavior -->
<nav class="
  bg-cardinal-red text-white
  py-[16px] lg:py-[20px] xl:py-[24px]
">
  <div class="centered-container px-[20px] lg:px-[40px] xl:px-[60px]">
    <!-- Mobile: hamburger menu -->
    <div class="lg:hidden flex justify-between items-center">
      <div class="font-stanford text-m3">Stanford</div>
      <button class="text-white">☰</button>
    </div>
    
    <!-- Desktop: full navigation -->
    <div class="hidden lg:flex lg:justify-between lg:items-center">
      <div class="font-stanford text-m4 xl:text-m5">Stanford University</div>
      <ul class="flex space-x-[32px] xl:space-x-[48px] 2xl:space-x-[60px] text-m2 xl:text-m3">
        <li><a href="#academics">Academics</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#campus">Campus Life</a></li>
        <li><a href="#admissions">Admissions</a></li>
      </ul>
    </div>
  </div>
</nav>
```

This comprehensive breakpoint system ensures Stanford's digital properties provide optimal experiences across the full spectrum of devices and display sizes, from mobile phones to large-scale digital installations.
