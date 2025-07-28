# Max Width Theme Plugin

**File**: `/src/plugins/theme/maxWidth.js`

## Overview

The max width theme plugin provides an extensive rem-based scale for constraining element widths, ranging from tiny interface elements to massive content containers. It includes a special prose width optimized for reading comfort, supporting Stanford's diverse content layout needs.

## Purpose

Establishes precise width constraints for Stanford's design system, enabling consistent sizing of elements from small interface components to large content areas. The rem-based system ensures widths scale appropriately with font size changes while maintaining proportional relationships.

## Max Width Scale

### Small to Medium Widths (1rem - 20rem)

#### Micro Components (1rem - 10rem)
```javascript
10: '1rem',    // 16px - Small badges, icons
20: '2rem',    // 32px - Compact buttons
30: '3rem',    // 48px - Small form controls
40: '4rem',    // 64px - Standard buttons
50: '5rem',    // 80px - Medium interface elements
60: '6rem',    // 96px - Large buttons
70: '7rem',    // 112px - Small cards
80: '8rem',    // 128px - Medium cards
90: '9rem',    // 144px - Large cards
100: '10rem'   // 160px - Small containers
```

**Usage Guidelines:**
- **Interface elements**: Buttons, form controls, badges, icons
- **Compact components**: Small cards, navigation items, metadata displays
- **Mobile optimization**: Elements that need strict size limits on small screens

#### Standard Components (12rem - 20rem)
```javascript
120: '12rem',  // 192px - Standard containers
140: '14rem',  // 224px - Medium containers
160: '16rem',  // 256px - Large containers
180: '18rem',  // 288px - Extra large containers
200: '20rem'   // 320px - Mobile-width containers
```

**Usage Guidelines:**
- **Sidebar elements**: Secondary content areas, navigation panels
- **Mobile containers**: Full-width mobile content areas
- **Form sections**: Grouped form elements, input containers

### Large Content Widths (30rem - 100rem)

#### Content Areas (30rem - 90rem)
```javascript
300: '30rem',  // 480px - Small content areas
400: '40rem',  // 640px - Medium content areas
500: '50rem',  // 800px - Large content areas
600: '60rem',  // 960px - Extra large content areas
700: '70rem',  // 1120px - Wide content areas
800: '80rem',  // 1280px - Very wide content areas
900: '90rem'   // 1440px - Maximum standard content
```

**Usage Guidelines:**
- **Article content**: Blog posts, academic articles, news content
- **Main content areas**: Primary page content, article bodies
- **Form layouts**: Complex forms, multi-column layouts
- **Card grids**: Container widths for responsive card layouts

#### Maximum Widths (100rem - 150rem)
```javascript
1000: '100rem', // 1600px - Ultra-wide content
1200: '120rem', // 1920px - Maximum desktop content
1500: '150rem'  // 2400px - Ultra-wide display content
```

**Usage Guidelines:**
- **Ultra-wide displays**: Large monitor optimizations
- **Dashboard layouts**: Administrative interfaces, data dashboards
- **Research interfaces**: Academic tools, data visualization
- **Maximum containers**: Absolute maximum content widths

### Special Purpose Width

#### Prose Width
```javascript
'prose-wide': '75ch'  // Character-based width for optimal reading
```

**Purpose**: Optimized reading width based on character count rather than pixels.

**Usage Guidelines:**
- **Long-form content**: Articles, academic papers, blog posts
- **Reading optimization**: Ensures optimal line length for readability
- **Typography focus**: When text readability is the primary concern
- **Responsive text**: Adapts to font size changes automatically

## Usage Examples

### Interface Components with Size Constraints
```html
<!-- Button size variations -->
<div class="space-x-[16px] space-y-[16px] md:space-y-0 flex flex-col md:flex-row">
  <button class="bg-cardinal-red text-white px-[16px] py-[8px] rounded max-w-20">
    Small
  </button>
  <button class="bg-cardinal-red text-white px-[20px] py-[10px] rounded max-w-40">
    Standard
  </button>
  <button class="bg-cardinal-red text-white px-[24px] py-[12px] rounded max-w-60">
    Large
  </button>
  <button class="bg-cardinal-red text-white px-[32px] py-[16px] rounded max-w-100">
    Extra Large
  </button>
</div>

<!-- Form control widths -->
<form class="space-y-[24px]">
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Student ID</label>
    <input type="text" class="border border-black-30 p-[12px] rounded max-w-40" placeholder="8-digit ID">
  </div>
  
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Phone Number</label>
    <input type="tel" class="border border-black-30 p-[12px] rounded max-w-60" placeholder="(xxx) xxx-xxxx">
  </div>
  
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Email Address</label>
    <input type="email" class="border border-black-30 p-[12px] rounded max-w-120" placeholder="your.email@stanford.edu">
  </div>
  
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Full Address</label>
    <input type="text" class="border border-black-30 p-[12px] rounded max-w-200" placeholder="Street address, city, state, zip">
  </div>
</form>
```

### Content Layout Containers
```html
<!-- Article layout with optimal reading width -->
<main class="py-[80px]">
  <div class="centered-container">
    <!-- Article header with medium constraint -->
    <header class="max-w-400 mx-auto text-center mb-[48px]">
      <h1 class="text-m8 font-bold text-cardinal-red mb-[16px]">
        Stanford Research Excellence
      </h1>
      <p class="text-m3 text-black-70">
        Pioneering discoveries that shape the future of science and technology
      </p>
    </header>
    
    <!-- Article content with prose width -->
    <article class="max-w-prose-wide mx-auto space-y-[24px]">
      <p class="text-m2 leading-relaxed">
        Stanford University continues to lead groundbreaking research across multiple 
        disciplines, from artificial intelligence and quantum computing to climate 
        science and biomedical engineering. Our commitment to interdisciplinary 
        collaboration has resulted in innovations that address humanity's greatest challenges.
      </p>
      
      <h2 class="text-m6 font-semibold mt-[40px] mb-[20px]">
        Research Initiatives
      </h2>
      
      <p class="text-m2 leading-relaxed">
        The university's research portfolio spans seven schools and numerous 
        interdisciplinary institutes, creating an ecosystem where breakthrough 
        discoveries emerge from the intersection of different fields of study.
      </p>
      
      <p class="text-m2 leading-relaxed">
        With over $1.8 billion in research funding annually, Stanford researchers 
        are tackling everything from renewable energy solutions to advanced 
        medical therapies, establishing the university as a global leader in 
        research excellence and innovation.
      </p>
    </article>
  </div>
</main>
```

### Responsive Card Layouts
```html
<!-- Program showcase with constrained card widths -->
<section class="py-[80px] bg-black-10">
  <div class="centered-container">
    <h2 class="text-m7 font-bold text-center mb-[48px]">Academic Excellence</h2>
    
    <!-- Card grid with width constraints -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] justify-items-center">
      <div class="bg-white border border-black-20 rounded p-[24px] max-w-120 w-full">
        <h3 class="text-m4 font-semibold text-cardinal-red mb-[12px]">
          Undergraduate Programs
        </h3>
        <p class="text-m2 text-black-70 mb-[20px]">
          Comprehensive liberal arts education with cutting-edge research opportunities.
        </p>
        <a href="#" class="text-digital-blue hover:text-digital-blue-dark font-medium">
          Explore Programs →
        </a>
      </div>
      
      <div class="bg-white border border-black-20 rounded p-[24px] max-w-120 w-full">
        <h3 class="text-m4 font-semibold text-cardinal-red mb-[12px]">
          Graduate Studies
        </h3>
        <p class="text-m2 text-black-70 mb-[20px]">
          Advanced degree programs led by world-renowned faculty and researchers.
        </p>
        <a href="#" class="text-digital-blue hover:text-digital-blue-dark font-medium">
          Graduate School →
        </a>
      </div>
      
      <div class="bg-white border border-black-20 rounded p-[24px] max-w-120 w-full">
        <h3 class="text-m4 font-semibold text-cardinal-red mb-[12px]">
          Professional Education
        </h3>
        <p class="text-m2 text-black-70 mb-[20px]">
          Executive and continuing education for working professionals.
        </p>
        <a href="#" class="text-digital-blue hover:text-digital-blue-dark font-medium">
          Professional Programs →
        </a>
      </div>
    </div>
  </div>
</section>
```

### Sidebar and Navigation Layouts
```html
<!-- Page layout with constrained sidebar -->
<div class="flex flex-col lg:flex-row gap-[48px] py-[40px]">
  <!-- Main content area -->
  <main class="flex-1">
    <article class="max-w-prose-wide">
      <h1 class="text-m7 font-bold mb-[32px]">Research Article</h1>
      <p class="text-m2 leading-relaxed mb-[24px]">
        Main article content with optimal reading width...
      </p>
      <!-- Additional content -->
    </article>
  </main>
  
  <!-- Constrained sidebar -->
  <aside class="lg:max-w-80 space-y-[32px]">
    <div class="bg-white border border-black-20 rounded p-[24px]">
      <h3 class="text-m3 font-semibold mb-[16px]">Quick Links</h3>
      <ul class="space-y-[8px]">
        <li><a href="#" class="text-digital-blue hover:text-digital-blue-dark">Research Portal</a></li>
        <li><a href="#" class="text-digital-blue hover:text-digital-blue-dark">Faculty Directory</a></li>
        <li><a href="#" class="text-digital-blue hover:text-digital-blue-dark">Publications</a></li>
      </ul>
    </div>
    
    <div class="bg-white border border-black-20 rounded p-[24px]">
      <h3 class="text-m3 font-semibold mb-[16px]">Related Research</h3>
      <div class="space-y-[12px]">
        <a href="#" class="block text-m2 text-black hover:text-cardinal-red">
          AI Ethics in Healthcare
        </a>
        <a href="#" class="block text-m2 text-black hover:text-cardinal-red">
          Climate Change Solutions
        </a>
        <a href="#" class="block text-m2 text-black hover:text-cardinal-red">
          Quantum Computing Advances
        </a>
      </div>
    </div>
  </aside>
</div>
```

### Form Layout Optimization
```html
<!-- Complex form with section width constraints -->
<form class="max-w-400 mx-auto space-y-[32px] py-[40px]">
  <header class="text-center mb-[32px]">
    <h1 class="text-m6 font-bold text-cardinal-red mb-[8px]">
      Graduate Application
    </h1>
    <p class="text-m2 text-black-60">
      Complete all sections to submit your application
    </p>
  </header>
  
  <!-- Personal information section -->
  <section class="bg-white border border-black-20 rounded p-[24px]">
    <h2 class="text-m4 font-semibold mb-[20px]">Personal Information</h2>
    <div class="space-y-[16px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        <div>
          <label class="block text-m1 font-medium mb-[4px]">First Name</label>
          <input type="text" class="w-full border border-black-30 p-[10px] rounded max-w-60">
        </div>
        <div>
          <label class="block text-m1 font-medium mb-[4px]">Last Name</label>
          <input type="text" class="w-full border border-black-30 p-[10px] rounded max-w-60">
        </div>
      </div>
      
      <div>
        <label class="block text-m1 font-medium mb-[4px]">Email Address</label>
        <input type="email" class="w-full border border-black-30 p-[10px] rounded max-w-120">
      </div>
    </div>
  </section>
  
  <!-- Academic background section -->
  <section class="bg-white border border-black-20 rounded p-[24px]">
    <h2 class="text-m4 font-semibold mb-[20px]">Academic Background</h2>
    <div class="space-y-[16px]">
      <div>
        <label class="block text-m1 font-medium mb-[4px]">Institution</label>
        <input type="text" class="w-full border border-black-30 p-[10px] rounded max-w-200">
      </div>
      
      <div>
        <label class="block text-m1 font-medium mb-[4px]">Statement of Purpose</label>
        <textarea rows="6" class="w-full border border-black-30 p-[10px] rounded" 
                  placeholder="Describe your academic goals and research interests..."></textarea>
      </div>
    </div>
  </section>
  
  <div class="text-center">
    <button type="submit" class="bg-cardinal-red text-white px-[32px] py-[16px] rounded max-w-60 w-full font-semibold">
      Submit Application
    </button>
  </div>
</form>
```

### Dashboard and Administrative Layouts
```html
<!-- Admin dashboard with ultra-wide container -->
<div class="max-w-1200 mx-auto py-[40px] px-[40px]">
  <header class="mb-[40px]">
    <h1 class="text-m7 font-bold text-black mb-[8px]">
      Student Information System
    </h1>
    <p class="text-m2 text-black-60">
      Comprehensive student data management and analytics
    </p>
  </header>
  
  <!-- Dashboard grid -->
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-[32px]">
    <!-- Navigation sidebar -->
    <nav class="lg:max-w-80">
      <div class="bg-white border border-black-20 rounded p-[24px]">
        <h3 class="text-m3 font-semibold mb-[16px]">Navigation</h3>
        <ul class="space-y-[8px]">
          <li><a href="#" class="block py-[8px] px-[12px] text-black hover:bg-cardinal-red hover:text-white rounded">Dashboard</a></li>
          <li><a href="#" class="block py-[8px] px-[12px] text-black hover:bg-cardinal-red hover:text-white rounded">Students</a></li>
          <li><a href="#" class="block py-[8px] px-[12px] text-black hover:bg-cardinal-red hover:text-white rounded">Faculty</a></li>
          <li><a href="#" class="block py-[8px] px-[12px] text-black hover:bg-cardinal-red hover:text-white rounded">Courses</a></li>
        </ul>
      </div>
    </nav>
    
    <!-- Main dashboard content -->
    <main class="lg:col-span-3 space-y-[32px]">
      <!-- Dashboard widgets with constrained widths -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
        <div class="bg-white border border-black-20 rounded p-[24px] max-w-120">
          <h4 class="text-m3 font-medium text-black-60 mb-[8px]">Total Students</h4>
          <div class="text-m6 font-bold text-cardinal-red">17,249</div>
        </div>
        
        <div class="bg-white border border-black-20 rounded p-[24px] max-w-120">
          <h4 class="text-m3 font-medium text-black-60 mb-[8px]">Faculty Members</h4>
          <div class="text-m6 font-bold text-digital-blue">2,180</div>
        </div>
        
        <div class="bg-white border border-black-20 rounded p-[24px] max-w-120">
          <h4 class="text-m3 font-medium text-black-60 mb-[8px]">Active Courses</h4>
          <div class="text-m6 font-bold text-digital-green">1,890</div>
        </div>
      </div>
    </main>
  </div>
</div>
```

## Responsive Max Width Usage

### Breakpoint-Specific Constraints
```html
<!-- Progressive width constraints -->
<div class="max-w-120 md:max-w-200 lg:max-w-400 xl:max-w-600 mx-auto">
  Container that expands as screen size increases
</div>

<!-- Reading-optimized responsive width -->
<article class="max-w-120 md:max-w-prose-wide lg:max-w-400 mx-auto">
  <h1 class="text-m7 font-bold mb-[24px]">Responsive Article</h1>
  <p class="text-m2 leading-relaxed">
    Content that maintains optimal reading width across devices...
  </p>
</article>
```

This comprehensive max width system provides Stanford's design system with precise control over element sizing, from tiny interface components to massive content areas, ensuring optimal layout and readability across all device types and use cases.
