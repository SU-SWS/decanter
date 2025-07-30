# Line Height

**File**: `/src/plugins/theme/lineHeight.js`

## Overview
Provides Stanford-optimized line height values that override Tailwind defaults with carefully tuned spacing for buttons, headings, and body text readability.

## Generated CSS Classes

- **Button text**: `.leading-tight` (1.1 - overrides Tailwind's 1.25)
- **Display/headings**: `.leading-display` (1.2)
- **Card text**: `.leading-snug` (1.3 - overrides Tailwind's 1.375)
- **Small paragraphs**: `.leading-cozy` (1.4)
- **Body text**: `.leading-normal` (1.5 - default override)
- **Logo layouts**: `.leading-half` (0.5)
- **Source Sans trim**: `.leading-trim` (0.75)

## Usage

```html
<!-- Button text -->
<button class="leading-tight bg-cardinal-red text-white px-6 py-3">
  Tight line height for buttons
</button>

<!-- Headings and display text -->
<h1 class="leading-display text-4xl font-bold">
  Display Line Height
</h1>

<!-- Card content -->
<div class="leading-snug p-4 bg-white rounded">
  <p>Card content with snug line height for compact layouts</p>
</div>

<!-- Body paragraphs -->
<article class="leading-normal">
  <p>Regular paragraph text with optimal readability spacing</p>
</article>

<!-- Logo lockups -->
<div class="leading-half">
  <div>Stanford</div>
  <div>University</div>
</div>

<!-- Source Sans Pro trimmed -->
<p class="font-sans leading-trim">
  Trimmed leading for Source Sans Pro typography
</p>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      lineHeight: {
        // Add custom line heights
        'extra-tight': '1.05',
        'extra-loose': '2',
        'paragraph': '1.6',
        'heading': '1.25',
      },
    },
  },
}

## Purpose

Establishes line height values that enhance readability while supporting Stanford's diverse content types, from dense interface text to comfortable long-form reading. The system includes both standard readability-optimized values and specialized measurements for unique design applications like logo lockups and display typography.

## Line Height Scale

### Reading-Optimized Line Heights

#### Tight (1.1) - Interface and Display Text
```javascript
tight: '1.1'  // Overrides Tailwind's default tight (1.25)
```

**Purpose**: Ultra-tight line height for compact interface elements and display typography.

**Usage Guidelines:**
- **Button text**: Ensures buttons remain compact while staying readable
- **Display headings**: Large headings that need visual impact
- **Interface labels**: Form labels, navigation items, badges
- **Call-to-action elements**: CTAs that need to feel clickable and compact

**Usage Examples:**
```html
<!-- Button text with tight line height -->
<button class="bg-cardinal-red text-white px-[24px] py-[12px] rounded text-m2 leading-tight">
  Apply Now
</button>

<!-- Display headings -->
<h1 class="text-m9 font-bold text-cardinal-red leading-tight">
  Stanford Excellence
</h1>

<!-- Compact navigation -->
<nav class="leading-tight">
  <ul class="flex space-x-[32px]">
    <li><a href="#" class="text-m2">Academics</a></li>
    <li><a href="#" class="text-m2">Research</a></li>
    <li><a href="#" class="text-m2">Campus Life</a></li>
  </ul>
</nav>

<!-- Interface badges -->
<span class="bg-digital-blue text-white px-[8px] py-[4px] rounded text-12 leading-tight">
  New Program
</span>
```

#### Display (1.2) - Headings and Titles
```javascript
display: '1.2'  // Custom Stanford line height for display typography
```

**Purpose**: Optimized for headings and display fonts where visual hierarchy is important.

**Usage Guidelines:**
- **Page titles**: Main headings that need strong visual presence
- **Section headings**: H2-H4 elements in content hierarchy
- **Card titles**: Headings within cards and components
- **Marketing headlines**: Promotional and marketing content

**Usage Examples:**
```html
<!-- Page titles -->
<h1 class="text-m8 font-bold text-black leading-display mb-[32px]">
  Research Excellence at Stanford
</h1>

<!-- Section headings -->
<h2 class="text-m6 font-semibold text-cardinal-red leading-display mt-[48px] mb-[24px]">
  Academic Programs
</h2>

<!-- Card titles -->
<div class="bg-white border border-black-20 rounded p-[24px]">
  <h3 class="text-m5 font-semibold text-black leading-display mb-[16px]">
    Computer Science Department
  </h3>
  <p class="text-m2 leading-relaxed">
    Pioneering innovation in artificial intelligence and machine learning...
  </p>
</div>

<!-- Marketing headlines -->
<section class="bg-cardinal-red text-white py-[80px]">
  <div class="centered-container text-center">
    <h1 class="text-m8 font-bold leading-display mb-[24px]">
      Transform Your Future
    </h1>
    <h2 class="text-m5 font-medium leading-display opacity-90">
      Join the Stanford Community
    </h2>
  </div>
</section>
```

#### Snug (1.3) - Compact Content
```javascript
snug: '1.3'  // Overrides Tailwind's default snug (1.375)
```

**Purpose**: Compact line height for card content, captions, and secondary text.

**Usage Guidelines:**
- **Card content**: Text within cards that needs to be space-efficient
- **Captions**: Image captions, figure descriptions, photo credits
- **Metadata**: Dates, author names, category labels
- **Secondary information**: Supporting text that shouldn't dominate

**Usage Examples:**
```html
<!-- Card content -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
  <div class="bg-white border border-black-20 rounded p-[24px]">
    <h3 class="text-m4 font-semibold mb-[12px] leading-display">Research Program</h3>
    <p class="text-m2 text-black-70 leading-snug mb-[16px]">
      Engage in cutting-edge research alongside world-renowned faculty members 
      in state-of-the-art laboratories and research facilities.
    </p>
    <div class="text-m1 text-black-50 leading-snug">
      Application deadline: March 15, 2024
    </div>
  </div>
</div>

<!-- Image captions -->
<figure class="mb-[32px]">
  <img src="campus.jpg" alt="Stanford campus" class="w-full rounded">
  <figcaption class="text-m1 text-black-60 leading-snug mt-[8px] text-center">
    The Main Quad at Stanford University, photographed during spring quarter. 
    Photo by Stanford Communications.
  </figcaption>
</figure>

<!-- Article metadata -->
<article>
  <header class="mb-[32px]">
    <h1 class="text-m7 font-bold mb-[16px] leading-display">Climate Research Breakthrough</h1>
    <div class="text-m2 text-black-60 leading-snug space-y-[4px]">
      <div>By Dr. Sarah Chen, Environmental Science Department</div>
      <div>Published March 15, 2024 • 8 minute read</div>
      <div>Categories: Research, Climate Science, Innovation</div>
    </div>
  </header>
</article>
```

#### Cozy (1.4) - Comfortable Reading
```javascript
cozy: '1.4'  // Custom Stanford line height for smaller paragraph text
```

**Purpose**: Comfortable line height for slightly smaller paragraph text (around 19px) and medium-length content.

**Usage Guidelines:**
- **Article previews**: Excerpt text on blog listings or news previews
- **Medium content**: Content that's longer than captions but shorter than articles
- **Sidebar content**: Secondary content areas with comfortable readability
- **List descriptions**: Descriptive text within lists and directories

**Usage Examples:**
```html
<!-- Article previews -->
<div class="space-y-[32px]">
  <article class="border-b border-black-20 pb-[32px]">
    <h2 class="text-m5 font-semibold mb-[12px] leading-display">
      AI Research Initiative
    </h2>
    <p class="text-19 text-black-80 leading-cozy mb-[16px]">
      Stanford launches new interdisciplinary AI research initiative bringing together 
      computer scientists, ethicists, and policy experts to address the societal 
      implications of artificial intelligence development.
    </p>
    <div class="text-m1 text-black-50 leading-snug">
      March 12, 2024 • Computer Science
    </div>
  </article>
</div>

<!-- Sidebar content -->
<aside class="bg-black-10 p-[24px] rounded">
  <h3 class="text-m3 font-semibold mb-[16px] leading-display">Related Programs</h3>
  <div class="space-y-[16px]">
    <div>
      <h4 class="text-m2 font-medium mb-[4px] leading-display">MS in Computer Science</h4>
      <p class="text-17 text-black-70 leading-cozy">
        Advanced graduate program focusing on cutting-edge research in algorithms, 
        systems, and theoretical computer science.
      </p>
    </div>
    <div>
      <h4 class="text-m2 font-medium mb-[4px] leading-display">PhD in AI</h4>
      <p class="text-17 text-black-70 leading-cozy">
        Doctoral program for students interested in pushing the boundaries of 
        artificial intelligence and machine learning.
      </p>
    </div>
  </div>
</aside>

<!-- Directory listings -->
<div class="space-y-[24px]">
  <div class="flex items-start space-x-[16px]">
    <img src="faculty.jpg" alt="Dr. Smith" class="w-[80px] h-[80px] rounded">
    <div>
      <h3 class="text-m3 font-semibold leading-display">Dr. Jennifer Smith</h3>
      <div class="text-m2 text-black-60 leading-snug mb-[8px]">
        Professor of Computer Science
      </div>
      <p class="text-18 text-black-80 leading-cozy">
        Research focuses on machine learning applications in healthcare, with particular 
        interest in developing AI systems that can assist in medical diagnosis and 
        treatment planning.
      </p>
    </div>
  </div>
</div>
```

#### Default (1.5) - Standard Paragraphs
```javascript
DEFAULT: '1.5'  // Standard line height for regular paragraphs
```

**Purpose**: Optimal line height for regular paragraph text and most content.

**Usage Guidelines:**
- **Body paragraphs**: Main content text in articles, pages, and documents
- **Standard content**: Default readable text in most contexts
- **Form fields**: Input and textarea content for comfortable editing
- **General text**: When no specific line height optimization is needed

**Usage Examples:**
```html
<!-- Article body text -->
<article class="prose max-w-2xl mx-auto">
  <h1 class="text-m7 font-bold mb-[32px] leading-display">
    Stanford's Climate Research Initiative
  </h1>
  
  <p class="text-m2 leading-normal mb-[24px]">
    Stanford University has launched a groundbreaking climate research initiative 
    that brings together scientists from multiple disciplines to address the most 
    pressing environmental challenges of our time. This comprehensive program 
    represents a significant investment in understanding and combating climate change.
  </p>
  
  <p class="text-m2 leading-normal mb-[24px]">
    The initiative encompasses research areas ranging from renewable energy systems 
    to climate modeling, sustainable agriculture, and policy development. By fostering 
    collaboration across departments, Stanford aims to develop innovative solutions 
    that can be implemented at both local and global scales.
  </p>
  
  <h2 class="text-m5 font-semibold mt-[40px] mb-[20px] leading-display">
    Research Focus Areas
  </h2>
  
  <p class="text-m2 leading-normal mb-[24px]">
    The research initiative is organized around five core focus areas, each addressing 
    critical aspects of climate science and environmental sustainability. These areas 
    were selected based on their potential for high-impact research outcomes and 
    practical applications.
  </p>
</article>

<!-- Form content -->
<form class="space-y-[24px] max-w-lg">
  <div>
    <label class="block text-m2 font-medium mb-[8px] leading-display">
      Research Interest
    </label>
    <textarea 
      rows="4" 
      class="w-full p-[12px] border border-black-30 rounded text-m2 leading-normal"
      placeholder="Describe your research interests and goals..."
    ></textarea>
    <p class="text-m1 text-black-60 mt-[4px] leading-cozy">
      Please provide a brief overview of your academic interests and career objectives.
    </p>
  </div>
</form>

<!-- General content sections -->
<section class="py-[60px]">
  <div class="centered-container">
    <h2 class="text-m6 font-bold text-center mb-[40px] leading-display">
      Why Choose Stanford?
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
      <div>
        <h3 class="text-m4 font-semibold mb-[16px] leading-display">
          Academic Excellence
        </h3>
        <p class="text-m2 leading-normal">
          Stanford consistently ranks among the world's top universities, with renowned 
          faculty members who are leaders in their respective fields. Our commitment to 
          academic excellence ensures that students receive the highest quality education 
          and research opportunities.
        </p>
      </div>
      
      <div>
        <h3 class="text-m4 font-semibold mb-[16px] leading-display">
          Innovation Ecosystem
        </h3>
        <p class="text-m2 leading-normal">
          Located in the heart of Silicon Valley, Stanford provides unparalleled access 
          to innovation and entrepreneurship opportunities. Students benefit from close 
          partnerships with leading technology companies and startup accelerators.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Specialized Line Heights

#### Half (0.5) - Logo Lockups
```javascript
half: '0.5'  // Ultra-tight for logo lockups and special typography
```

**Purpose**: Extremely tight line height for logo lockups and special typographic treatments.

**Usage Guidelines:**
- **Logo lockups**: Multi-line logos or brand treatments
- **Decorative typography**: Special design elements requiring tight spacing
- **Artistic layouts**: Creative typography with intentional overlap
- **Compact headers**: Headers with multiple lines that need to appear as one unit

**Usage Examples:**
```html
<!-- Logo lockup -->
<div class="text-center">
  <div class="font-stanford text-m7 font-bold text-cardinal-red leading-half">
    STANFORD<br>
    UNIVERSITY
  </div>
  <div class="text-m2 text-black-60 mt-[16px] leading-normal">
    Founded 1885
  </div>
</div>

<!-- Decorative header -->
<header class="text-center py-[80px] bg-cardinal-red text-white">
  <div class="font-stanford text-m8 font-bold leading-half mb-[24px]">
    INNOVATION<br>
    THROUGH<br>
    DISCOVERY
  </div>
  <p class="text-m3 leading-normal opacity-90">
    Advancing knowledge for humanity
  </p>
</header>

<!-- Compact address block -->
<address class="text-m1 text-black-60 leading-half not-italic">
  Stanford University<br>
  450 Serra Mall<br>
  Stanford, CA 94305
</address>
```

#### Trim (0.75) - Source Sans Pro Optimization
```javascript
trim: '0.75'  // Specialized for trimming leading on Source Sans Pro
```

**Purpose**: Specialized line height for Source Sans Pro that trims excessive leading for tighter layouts.

**Usage Guidelines:**
- **Source Sans Pro headlines**: When using Source Sans Pro for display typography
- **Legacy compatibility**: Projects transitioning from older Decanter versions
- **Tight layouts**: Special cases requiring precise vertical spacing
- **Print optimization**: Typography that needs to match print layouts

**Usage Examples:**
```html
<!-- Source Sans Pro headlines with trimmed leading -->
<div class="font-source-sans-pro">
  <h1 class="text-m8 font-bold text-cardinal-red leading-trim mb-[16px]">
    Research Breakthrough
  </h1>
  <h2 class="text-m5 font-semibold text-black leading-trim">
    New Discoveries in Climate Science
  </h2>
</div>

<!-- Tight layout with precise spacing -->
<div class="bg-black-10 p-[24px] rounded">
  <div class="font-source-sans-pro text-m4 font-bold leading-trim text-cardinal-red">
    Featured Research
  </div>
  <div class="font-source-sans-pro text-m2 leading-trim text-black-70 mt-[4px]">
    Department of Environmental Science
  </div>
</div>

<!-- Legacy layout preservation -->
<section class="font-source-sans-pro">
  <h1 class="text-30 font-bold leading-trim text-black mb-[12px]">
    Stanford Engineering
  </h1>
  <div class="text-18 leading-trim text-black-60">
    Shaping the Future Through Technology
  </div>
</section>
```

## Line Height Integration with Typography

### Responsive Line Height Patterns
```html
<!-- Line heights that adapt to screen size -->
<article class="prose">
  <!-- Mobile: tighter for smaller screens -->
  <!-- Desktop: more relaxed for comfortable reading -->
  <h1 class="text-m7 md:text-m8 leading-display md:leading-normal">
    Responsive Heading
  </h1>
  
  <p class="text-m2 leading-cozy md:leading-normal">
    Content that adjusts line height for optimal reading on different devices.
  </p>
</article>
```

### Font Size and Line Height Coordination
```html
<!-- Coordinated font sizes and line heights -->
<div class="space-y-[32px]">
  <!-- Large display text with tight line height -->
  <h1 class="text-m9 leading-tight">Hero Display Text</h1>
  
  <!-- Medium headings with display line height -->
  <h2 class="text-m6 leading-display">Section Heading</h2>
  
  <!-- Small headings with snug line height -->
  <h3 class="text-m4 leading-snug">Subsection</h3>
  
  <!-- Body text with comfortable line height -->
  <p class="text-m2 leading-normal">Regular paragraph content...</p>
  
  <!-- Small text with cozy line height -->
  <p class="text-17 leading-cozy">Slightly smaller content...</p>
  
  <!-- Caption text with snug line height -->
  <small class="text-m1 leading-snug">Caption or metadata</small>
</div>
```

## Accessibility and Readability

### WCAG Guidelines Compliance
Stanford's line height system exceeds WCAG guidelines for readability:

- **WCAG Minimum**: 1.5 for paragraph text ✓
- **Stanford Default**: 1.5 for regular content ✓
- **Enhanced readability**: Specialized values for different contexts ✓

### Dyslexia-Friendly Spacing
```html
<!-- Enhanced readability for users with dyslexia -->
<article class="font-source-sans-3">
  <h1 class="text-m6 leading-display">Accessible Content</h1>
  <p class="text-m2 leading-relaxed">
    Content with generous line height (1.625) for enhanced readability.
    This spacing helps users with dyslexia and other reading differences.
  </p>
</article>
```

### Print Media Optimization
```html
<!-- Optimized for print media -->
<article class="print:leading-normal print:text-m2">
  <h1 class="print:leading-display print:text-m6">Print-Optimized Article</h1>
  <p>Content optimized for both screen and print readability...</p>
</article>
```

This comprehensive line height system ensures optimal readability across Stanford's diverse content types while providing the specialized spacing needed for unique design requirements and brand applications.
