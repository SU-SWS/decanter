# Stretched Link Component Plugin

**File**: `/src/plugins/components/link/stretched-link.js`

## Overview

The stretched link component plugin provides a utility class that makes any HTML element clickable by stretching a nested link to cover the entire container. This creates an expanded clickable area without requiring complex JavaScript or additional markup, perfect for making entire cards, boxes, or panels clickable while maintaining semantic HTML structure.

## Purpose

Enhances user experience by expanding clickable areas of components like cards, panels, and list items. This follows the principle of Fitts's Law, making targets easier to click by increasing their effective size, while preserving the semantic structure where only specific content (like headlines) should be linked.

## CSS Classes Generated

### `.stretched-link`

Creates an invisible pseudo-element that covers the entire relatively positioned parent container.

**CSS Output:**
```css
.stretched-link::after {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: transparent;
}
```

**Requirements:**
- Parent container must have `position: relative`
- Link must be inside the container you want to make clickable
- No other positioned elements should interfere with the pseudo-element

## Usage Examples

### Basic Card with Stretched Link
```html
<!-- Faculty profile card with expanded clickable area -->
<div class="relative bg-white border border-black-20 rounded p-[24px] hover:shadow-lg transition-all">
  <img 
    src="/images/faculty/dr-smith.jpg" 
    alt="Dr. Sarah Smith" 
    class="w-[80px] h-[80px] rounded-full object-cover mb-[16px]"
  >
  
  <h3 class="text-m3 font-semibold mb-[8px]">
    <a href="/faculty/dr-sarah-smith" class="stretched-link text-cardinal-red hover:text-cardinal-red-dark">
      Dr. Sarah Smith
    </a>
  </h3>
  
  <p class="text-m1 text-black-70 mb-[12px]">
    Professor of Computer Science
  </p>
  
  <p class="text-m1 text-black-60">
    Artificial Intelligence, Machine Learning, Natural Language Processing
  </p>
  
  <!-- Additional content is also clickable due to stretched link -->
  <div class="mt-[16px] flex items-center text-m1 text-black-50">
    <svg class="w-[16px] h-[16px] mr-[8px]"><!-- Email icon --></svg>
    sarah.smith@stanford.edu
  </div>
</div>
```

### Research Project Cards
```html
<!-- Grid of research projects with stretched links -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
  <article class="relative bg-white border border-black-20 rounded overflow-hidden hover:shadow-lg hover:border-cardinal-red transition-all">
    <img 
      src="/images/research/ai-project.jpg" 
      alt="AI Research Lab" 
      class="w-full h-[200px] object-cover"
    >
    
    <div class="p-[24px]">
      <div class="text-xs text-cardinal-red font-medium mb-[8px] uppercase tracking-wide">
        Computer Science
      </div>
      
      <h3 class="text-m4 font-bold mb-[12px]">
        <a href="/research/ai-ethics-framework" class="stretched-link text-black hover:text-cardinal-red">
          Developing Ethical AI Frameworks for Healthcare
        </a>
      </h3>
      
      <p class="text-m2 text-black-70 mb-[16px]">
        Our interdisciplinary team is creating comprehensive ethical guidelines for AI implementation in medical diagnostics and treatment planning.
      </p>
      
      <div class="flex items-center text-m1 text-black-60">
        <img 
          src="/images/faculty/dr-chen.jpg" 
          alt="Dr. Lisa Chen" 
          class="w-[32px] h-[32px] rounded-full object-cover mr-[12px]"
        >
        <span>Dr. Lisa Chen, Principal Investigator</span>
      </div>
    </div>
  </article>
  
  <article class="relative bg-white border border-black-20 rounded overflow-hidden hover:shadow-lg hover:border-digital-blue transition-all">
    <img 
      src="/images/research/sustainability.jpg" 
      alt="Sustainability Research" 
      class="w-full h-[200px] object-cover"
    >
    
    <div class="p-[24px]">
      <div class="text-xs text-digital-blue font-medium mb-[8px] uppercase tracking-wide">
        Environmental Science
      </div>
      
      <h3 class="text-m4 font-bold mb-[12px]">
        <a href="/research/carbon-capture-innovation" class="stretched-link text-black hover:text-digital-blue">
          Next-Generation Carbon Capture Technologies
        </a>
      </h3>
      
      <p class="text-m2 text-black-70 mb-[16px]">
        Developing scalable carbon capture solutions using novel materials science and engineering approaches to combat climate change.
      </p>
      
      <div class="flex items-center text-m1 text-black-60">
        <img 
          src="/images/faculty/dr-patel.jpg" 
          alt="Dr. Raj Patel" 
          class="w-[32px] h-[32px] rounded-full object-cover mr-[12px]"
        >
        <span>Dr. Raj Patel, Principal Investigator</span>
      </div>
    </div>
  </article>
  
  <article class="relative bg-white border border-black-20 rounded overflow-hidden hover:shadow-lg hover:border-digital-green transition-all">
    <img 
      src="/images/research/medicine.jpg" 
      alt="Medical Research" 
      class="w-full h-[200px] object-cover"
    >
    
    <div class="p-[24px]">
      <div class="text-xs text-digital-green font-medium mb-[8px] uppercase tracking-wide">
        Medicine
      </div>
      
      <h3 class="text-m4 font-bold mb-[12px]">
        <a href="/research/precision-medicine" class="stretched-link text-black hover:text-digital-green">
          Precision Medicine for Rare Diseases
        </a>
      </h3>
      
      <p class="text-m2 text-black-70 mb-[16px]">
        Leveraging genomics and personalized medicine approaches to develop targeted treatments for rare genetic disorders.
      </p>
      
      <div class="flex items-center text-m1 text-black-60">
        <img 
          src="/images/faculty/dr-johnson.jpg" 
          alt="Dr. Michael Johnson" 
          class="w-[32px] h-[32px] rounded-full object-cover mr-[12px]"
        >
        <span>Dr. Michael Johnson, Principal Investigator</span>
      </div>
    </div>
  </article>
</div>
```

### News Article List
```html
<!-- News articles with stretched link headlines -->
<div class="space-y-[24px]">
  <article class="relative flex items-start space-x-[20px] p-[20px] border border-black-20 rounded hover:bg-black-10 transition-all">
    <img 
      src="/images/news/commencement-2024.jpg" 
      alt="Stanford Commencement 2024" 
      class="w-[120px] h-[80px] object-cover rounded flex-shrink-0"
    >
    
    <div class="flex-1">
      <div class="text-xs text-cardinal-red font-medium mb-[4px] uppercase tracking-wide">
        University News
      </div>
      
      <h3 class="text-m3 font-semibold mb-[8px]">
        <a href="/news/commencement-2024-highlights" class="stretched-link text-black hover:text-cardinal-red">
          Stanford Celebrates Class of 2024 with Record-Breaking Commencement
        </a>
      </h3>
      
      <p class="text-m2 text-black-70 mb-[8px]">
        Over 1,700 students received degrees during the 133rd Commencement ceremony, featuring keynote speaker Dr. Jennifer Doudna, Nobel Prize-winning biochemist.
      </p>
      
      <div class="text-m1 text-black-60">
        June 15, 2024 • Stanford Communications
      </div>
    </div>
  </article>
  
  <article class="relative flex items-start space-x-[20px] p-[20px] border border-black-20 rounded hover:bg-black-10 transition-all">
    <img 
      src="/images/news/research-funding.jpg" 
      alt="Research Funding Award" 
      class="w-[120px] h-[80px] object-cover rounded flex-shrink-0"
    >
    
    <div class="flex-1">
      <div class="text-xs text-digital-blue font-medium mb-[4px] uppercase tracking-wide">
        Research
      </div>
      
      <h3 class="text-m3 font-semibold mb-[8px]">
        <a href="/news/nsf-grant-quantum-computing" class="stretched-link text-black hover:text-digital-blue">
          Stanford Receives $50M NSF Grant for Quantum Computing Research
        </a>
      </h3>
      
      <p class="text-m2 text-black-70 mb-[8px]">
        The five-year grant will support groundbreaking research into quantum algorithms and error correction, positioning Stanford as a leader in quantum technologies.
      </p>
      
      <div class="text-m1 text-black-60">
        June 12, 2024 • School of Engineering
      </div>
    </div>
  </article>
</div>
```

### Course Catalog Cards
```html
<!-- Course listings with stretched links -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
  <div class="relative bg-white border border-black-20 rounded p-[24px] hover:shadow-md hover:border-cardinal-red transition-all">
    <div class="flex justify-between items-start mb-[16px]">
      <div>
        <div class="text-m1 text-cardinal-red font-medium">CS 229</div>
        <h3 class="text-m3 font-semibold">
          <a href="/courses/cs229-machine-learning" class="stretched-link text-black hover:text-cardinal-red">
            Machine Learning
          </a>
        </h3>
      </div>
      <div class="text-right text-m1 text-black-60">
        <div>4 Units</div>
        <div>Autumn 2024</div>
      </div>
    </div>
    
    <p class="text-m2 text-black-70 mb-[16px]">
      Broad introduction to machine learning and statistical pattern recognition. Topics include supervised learning, unsupervised learning, and reinforcement learning.
    </p>
    
    <div class="space-y-[8px] text-m1 text-black-60">
      <div><strong>Instructor:</strong> Andrew Ng</div>
      <div><strong>Prerequisites:</strong> CS 106B, MATH 51, STATS 116</div>
      <div><strong>Schedule:</strong> MWF 10:30 AM - 11:20 AM</div>
    </div>
  </div>
  
  <div class="relative bg-white border border-black-20 rounded p-[24px] hover:shadow-md hover:border-digital-blue transition-all">
    <div class="flex justify-between items-start mb-[16px]">
      <div>
        <div class="text-m1 text-digital-blue font-medium">ENGR 40M</div>
        <h3 class="text-m3 font-semibold">
          <a href="/courses/engr40m-intro-making" class="stretched-link text-black hover:text-digital-blue">
            An Intro to Making: What is EE?
          </a>
        </h3>
      </div>
      <div class="text-right text-m1 text-black-60">
        <div>4 Units</div>
        <div>Autumn 2024</div>
      </div>
    </div>
    
    <p class="text-m2 text-black-70 mb-[16px]">
      Hands-on introduction to electrical engineering through interactive experiences building electronic gadgets. No prior experience required.
    </p>
    
    <div class="space-y-[8px] text-m1 text-black-60">
      <div><strong>Instructor:</strong> David Kelley</div>
      <div><strong>Prerequisites:</strong> None</div>
      <div><strong>Schedule:</strong> TTH 1:30 PM - 4:20 PM</div>
    </div>
  </div>
</div>
```

### Event Listings
```html
<!-- Upcoming events with stretched links -->
<div class="space-y-[16px]">
  <div class="relative flex items-center space-x-[20px] p-[20px] bg-white border border-black-20 rounded hover:bg-black-10 transition-all">
    <div class="flex-shrink-0 text-center">
      <div class="text-m4 font-bold text-cardinal-red">15</div>
      <div class="text-m1 text-black-60 uppercase">Jun</div>
    </div>
    
    <div class="flex-1">
      <h3 class="text-m3 font-semibold mb-[4px]">
        <a href="/events/ai-symposium-2024" class="stretched-link text-black hover:text-cardinal-red">
          Stanford AI Symposium 2024
        </a>
      </h3>
      <p class="text-m2 text-black-70 mb-[4px]">
        Join leading researchers and industry experts for a day of presentations on the latest advances in artificial intelligence.
      </p>
      <div class="text-m1 text-black-60">
        9:00 AM - 5:00 PM • Memorial Auditorium • Free with registration
      </div>
    </div>
  </div>
  
  <div class="relative flex items-center space-x-[20px] p-[20px] bg-white border border-black-20 rounded hover:bg-black-10 transition-all">
    <div class="flex-shrink-0 text-center">
      <div class="text-m4 font-bold text-digital-blue">22</div>
      <div class="text-m1 text-black-60 uppercase">Jun</div>
    </div>
    
    <div class="flex-1">
      <h3 class="text-m3 font-semibold mb-[4px]">
        <a href="/events/entrepreneurship-workshop" class="stretched-link text-black hover:text-digital-blue">
          Student Entrepreneurship Workshop
        </a>
      </h3>
      <p class="text-m2 text-black-70 mb-[4px]">
        Learn from successful Stanford alumni entrepreneurs about building startups and bringing innovations to market.
      </p>
      <div class="text-m1 text-black-60">
        2:00 PM - 4:00 PM • GSB Knight Management Center • Students only
      </div>
    </div>
  </div>
</div>
```

## Implementation Guidelines

### Required Container Setup
```html
<!-- Parent container MUST have position: relative -->
<div class="relative">
  <!-- Content -->
  <h3>
    <a href="/link" class="stretched-link">Clickable Title</a>
  </h3>
  <!-- All content in this container becomes clickable -->
</div>
```

### Avoiding Conflicts
```html
<!-- ❌ Avoid: Other positioned elements can interfere -->
<div class="relative">
  <a href="/link" class="stretched-link">Main Link</a>
  <button class="absolute top-4 right-4 z-10">Button</button> <!-- May not work -->
</div>

<!-- ✅ Better: Use higher z-index for other interactive elements -->
<div class="relative">
  <a href="/link" class="stretched-link">Main Link</a>
  <button class="absolute top-4 right-4 z-20">Button</button> <!-- Higher z-index -->
</div>
```

### Multiple Links Pattern
```html
<!-- For cards with multiple actions, use careful z-index management -->
<div class="relative bg-white border border-black-20 rounded p-[24px]">
  <h3>
    <a href="/main-content" class="stretched-link text-cardinal-red">
      Main Content Link
    </a>
  </h3>
  <p class="text-black-70">Description text...</p>
  
  <!-- Secondary actions need higher z-index -->
  <div class="relative z-10 flex space-x-[12px] mt-[16px]">
    <a href="/action1" class="text-digital-blue hover:text-digital-blue-dark">
      Action 1
    </a>
    <a href="/action2" class="text-digital-blue hover:text-digital-blue-dark">
      Action 2
    </a>
  </div>
</div>
```

## Accessibility Considerations

### Screen Reader Support
- The stretched link maintains semantic HTML structure
- Screen readers announce the link text normally
- The expanded clickable area doesn't affect screen reader navigation

### Keyboard Navigation
- Link remains focusable and keyboard-navigable
- Focus styles apply to the actual link element
- Tab order is preserved

### Focus Management
```html
<!-- Ensure focus styles are visible -->
<a href="/link" class="stretched-link focus:outline-none focus:ring-2 focus:ring-cardinal-red focus:ring-offset-2">
  Link Text
</a>
```

## Performance Considerations

- **Minimal CSS**: Single pseudo-element with no JavaScript required
- **Efficient rendering**: Uses `transform: translateZ(0)` for hardware acceleration when needed
- **No layout impact**: Pseudo-element doesn't affect document flow

## Browser Support

- **Modern browsers**: Full support in all modern browsers
- **Internet Explorer**: Supported in IE9+ (pseudo-element support required)
- **Mobile devices**: Excellent support, improves touch target size

This stretched link component enhances usability by making interactive elements easier to click while maintaining clean, semantic HTML structure and excellent accessibility support.
