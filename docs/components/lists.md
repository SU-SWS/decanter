# Lists Component Plugin

**File**: `/src/plugins/components/lists/lists.js`

## Overview

The lists component plugin provides specialized list styling utilities that go beyond standard HTML list formatting. It includes classes for removing default list styles and creating horizontal navigation-style lists, essential for building clean layouts and navigation components within Stanford's design system.

## Purpose

Enhances list flexibility by providing utility classes for common list layout patterns. These classes are particularly useful for navigation menus, breadcrumbs, tag lists, and other interface elements where default list styling interferes with the desired design aesthetic.

## CSS Classes Generated

### `.list-unstyled`

Completely removes all default list styling, creating a clean slate for custom styling.

**CSS Output:**
```css
.list-unstyled {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}
```

**Use Cases:**
- Navigation menus
- Custom bullet or numbering systems  
- Card layouts using list markup
- Breadcrumb navigation
- Tag or category lists

### `.list-horizontal`

Creates horizontal lists with floated items, perfect for inline navigation and tag displays.

**CSS Output:**
```css
.list-horizontal {
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: hidden;
}

.list-horizontal > li {
  display: block;
  float: left;
}

.list-horizontal > li:last-child {
  margin-right: 0;
}
```

**Use Cases:**
- Horizontal navigation menus
- Tag lists
- Social media links
- Breadcrumb navigation
- Inline metadata displays

## Usage Examples

### Navigation Menus

#### Primary Navigation
```html
<!-- Clean horizontal navigation using list semantics -->
<nav class="bg-white border-b border-black-20 py-[16px]">
  <div class="centered-container px-[40px]">
    <div class="flex justify-between items-center">
      <div class="font-stanford text-m4 text-cardinal-red">Stanford</div>
      
      <ul class="list-horizontal space-x-[32px]">
        <li>
          <a href="/academics" class="text-m2 text-black hover:text-cardinal-red transition-all">
            Academics
          </a>
        </li>
        <li>
          <a href="/research" class="text-m2 text-black hover:text-cardinal-red transition-all">
            Research
          </a>
        </li>
        <li>
          <a href="/campus-life" class="text-m2 text-black hover:text-cardinal-red transition-all">
            Campus Life
          </a>
        </li>
        <li>
          <a href="/admissions" class="text-m2 text-black hover:text-cardinal-red transition-all">
            Admissions
          </a>
        </li>
        <li>
          <a href="/about" class="text-m2 text-black hover:text-cardinal-red transition-all">
            About
          </a>
        </li>
      </ul>
      
      <button class="bg-cardinal-red text-white px-[20px] py-[8px] rounded transition-all hover:bg-cardinal-red-dark">
        Apply Now
      </button>
    </div>
  </div>
</nav>
```

#### Footer Navigation
```html
<!-- Multi-column footer navigation -->
<footer class="bg-black text-white py-[48px]">
  <div class="centered-container px-[40px]">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
      <div>
        <h3 class="text-m3 font-semibold mb-[20px]">Academics</h3>
        <ul class="list-unstyled space-y-[12px]">
          <li>
            <a href="/schools" class="text-white-80 hover:text-white transition-all">
              Schools & Colleges
            </a>
          </li>
          <li>
            <a href="/departments" class="text-white-80 hover:text-white transition-all">
              Departments
            </a>
          </li>
          <li>
            <a href="/programs" class="text-white-80 hover:text-white transition-all">
              Degree Programs
            </a>
          </li>
          <li>
            <a href="/courses" class="text-white-80 hover:text-white transition-all">
              Course Catalog
            </a>
          </li>
          <li>
            <a href="/summer-session" class="text-white-80 hover:text-white transition-all">
              Summer Session
            </a>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-m3 font-semibold mb-[20px]">Research</h3>
        <ul class="list-unstyled space-y-[12px]">
          <li>
            <a href="/research-areas" class="text-white-80 hover:text-white transition-all">
              Research Areas
            </a>
          </li>
          <li>
            <a href="/labs" class="text-white-80 hover:text-white transition-all">
              Labs & Centers
            </a>
          </li>
          <li>
            <a href="/faculty-research" class="text-white-80 hover:text-white transition-all">
              Faculty Research
            </a>
          </li>
          <li>
            <a href="/undergraduate-research" class="text-white-80 hover:text-white transition-all">
              Undergraduate Research
            </a>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-m3 font-semibold mb-[20px]">Campus Life</h3>
        <ul class="list-unstyled space-y-[12px]">
          <li>
            <a href="/housing" class="text-white-80 hover:text-white transition-all">
              Housing & Dining
            </a>
          </li>
          <li>
            <a href="/athletics" class="text-white-80 hover:text-white transition-all">
              Athletics
            </a>
          </li>
          <li>
            <a href="/student-life" class="text-white-80 hover:text-white transition-all">
              Student Organizations
            </a>
          </li>
          <li>
            <a href="/arts-culture" class="text-white-80 hover:text-white transition-all">
              Arts & Culture
            </a>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-m3 font-semibold mb-[20px]">Connect</h3>
        <ul class="list-unstyled space-y-[12px]">
          <li>
            <a href="/contact" class="text-white-80 hover:text-white transition-all">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/visit" class="text-white-80 hover:text-white transition-all">
              Visit Campus
            </a>
          </li>
          <li>
            <a href="/news" class="text-white-80 hover:text-white transition-all">
              News & Events
            </a>
          </li>
          <li>
            <a href="/alumni" class="text-white-80 hover:text-white transition-all">
              Alumni
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

### Breadcrumb Navigation
```html
<!-- Semantic breadcrumb navigation -->
<nav aria-label="Breadcrumb" class="py-[16px]">
  <ol class="list-horizontal flex items-center text-m2">
    <li>
      <a href="/" class="text-digital-blue hover:text-digital-blue-dark">
        Home
      </a>
    </li>
    <li class="mx-[8px] text-black-50">/</li>
    <li>
      <a href="/academics" class="text-digital-blue hover:text-digital-blue-dark">
        Academics
      </a>
    </li>
    <li class="mx-[8px] text-black-50">/</li>
    <li>
      <a href="/academics/undergraduate" class="text-digital-blue hover:text-digital-blue-dark">
        Undergraduate
      </a>
    </li>
    <li class="mx-[8px] text-black-50">/</li>
    <li>
      <span class="text-black-70" aria-current="page">
        Computer Science
      </span>
    </li>
  </ol>
</nav>
```

### Tag and Category Lists
```html
<!-- Research areas as tags -->
<div class="space-y-[24px]">
  <div>
    <h3 class="text-m3 font-semibold mb-[16px]">Research Areas</h3>
    <ul class="list-horizontal flex flex-wrap gap-[8px]">
      <li>
        <a href="/research/artificial-intelligence" class="inline-block bg-cardinal-red text-white px-[16px] py-[8px] rounded text-m1 hover:bg-cardinal-red-dark transition-all">
          Artificial Intelligence
        </a>
      </li>
      <li>
        <a href="/research/machine-learning" class="inline-block bg-digital-blue text-white px-[16px] py-[8px] rounded text-m1 hover:bg-digital-blue-dark transition-all">
          Machine Learning
        </a>
      </li>
      <li>
        <a href="/research/computer-vision" class="inline-block bg-digital-green text-white px-[16px] py-[8px] rounded text-m1 hover:bg-digital-green-dark transition-all">
          Computer Vision
        </a>
      </li>
      <li>
        <a href="/research/natural-language" class="inline-block bg-lagunita text-white px-[16px] py-[8px] rounded text-m1 hover:bg-lagunita-dark transition-all">
          Natural Language Processing
        </a>
      </li>
      <li>
        <a href="/research/robotics" class="inline-block bg-spirited text-white px-[16px] py-[8px] rounded text-m1 hover:bg-spirited-dark transition-all">
          Robotics
        </a>
      </li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-m3 font-semibold mb-[16px]">Course Topics</h3>
    <ul class="list-unstyled flex flex-wrap gap-[8px]">
      <li>
        <span class="inline-block border border-black-30 text-black px-[12px] py-[6px] rounded text-m1">
          Algorithms
        </span>
      </li>
      <li>
        <span class="inline-block border border-black-30 text-black px-[12px] py-[6px] rounded text-m1">
          Data Structures
        </span>
      </li>
      <li>
        <span class="inline-block border border-black-30 text-black px-[12px] py-[6px] rounded text-m1">
          Software Engineering
        </span>
      </li>
      <li>
        <span class="inline-block border border-black-30 text-black px-[12px] py-[6px] rounded text-m1">
          Database Systems
        </span>
      </li>
      <li>
        <span class="inline-block border border-black-30 text-black px-[12px] py-[6px] rounded text-m1">
          Computer Networks
        </span>
      </li>
    </ul>
  </div>
</div>
```

### Faculty and Staff Lists
```html
<!-- Department faculty list -->
<div class="space-y-[32px]">
  <div>
    <h2 class="text-m5 font-bold text-cardinal-red mb-[24px]">Faculty</h2>
    
    <div class="space-y-[20px]">
      <div>
        <h3 class="text-m3 font-semibold mb-[12px]">Professors</h3>
        <ul class="list-unstyled space-y-[8px]">
          <li class="flex justify-between items-center py-[8px] border-b border-black-10">
            <div>
              <a href="/faculty/john-mitchell" class="text-m2 font-medium text-cardinal-red hover:text-cardinal-red-dark">
                John C. Mitchell
              </a>
              <div class="text-m1 text-black-70">Mary and Gordon Crary Family Professor</div>
            </div>
            <div class="text-m1 text-black-60">Computer Science</div>
          </li>
          <li class="flex justify-between items-center py-[8px] border-b border-black-10">
            <div>
              <a href="/faculty/fei-fei-li" class="text-m2 font-medium text-cardinal-red hover:text-cardinal-red-dark">
                Fei-Fei Li
              </a>
              <div class="text-m1 text-black-70">Sequoia Professor</div>
            </div>
            <div class="text-m1 text-black-60">Computer Science, HAI</div>
          </li>
          <li class="flex justify-between items-center py-[8px] border-b border-black-10">
            <div>
              <a href="/faculty/andrew-ng" class="text-m2 font-medium text-cardinal-red hover:text-cardinal-red-dark">
                Andrew Y. Ng
              </a>
              <div class="text-m1 text-black-70">Associate Professor</div>
            </div>
            <div class="text-m1 text-black-60">Computer Science</div>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-m3 font-semibold mb-[12px]">Associate Professors</h3>
        <ul class="list-unstyled space-y-[8px]">
          <li class="flex justify-between items-center py-[8px] border-b border-black-10">
            <div>
              <a href="/faculty/chelsea-finn" class="text-m2 font-medium text-cardinal-red hover:text-cardinal-red-dark">
                Chelsea Finn
              </a>
              <div class="text-m1 text-black-70">Assistant Professor</div>
            </div>
            <div class="text-m1 text-black-60">Computer Science, EE</div>
          </li>
          <li class="flex justify-between items-center py-[8px] border-b border-black-10">
            <div>
              <a href="/faculty/percy-liang" class="text-m2 font-medium text-cardinal-red hover:text-cardinal-red-dark">
                Percy Liang
              </a>
              <div class="text-m1 text-black-70">Associate Professor</div>
            </div>
            <div class="text-m1 text-black-60">Computer Science</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

### Social Media and Contact Lists
```html
<!-- Social media links -->
<div class="space-y-[24px]">
  <div>
    <h3 class="text-m3 font-semibold mb-[16px]">Follow Stanford</h3>
    <ul class="list-horizontal flex space-x-[16px]">
      <li>
        <a href="https://twitter.com/stanford" class="flex items-center justify-center w-[48px] h-[48px] bg-black text-white rounded-full hover:bg-black-80 transition-all">
          <svg class="w-[24px] h-[24px]" fill="currentColor">
            <!-- Twitter icon -->
          </svg>
          <span class="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://facebook.com/stanford" class="flex items-center justify-center w-[48px] h-[48px] bg-digital-blue text-white rounded-full hover:bg-digital-blue-dark transition-all">
          <svg class="w-[24px] h-[24px]" fill="currentColor">
            <!-- Facebook icon -->
          </svg>
          <span class="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://instagram.com/stanford" class="flex items-center justify-center w-[48px] h-[48px] bg-cardinal-red text-white rounded-full hover:bg-cardinal-red-dark transition-all">
          <svg class="w-[24px] h-[24px]" fill="currentColor">
            <!-- Instagram icon -->
          </svg>
          <span class="sr-only">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://youtube.com/stanford" class="flex items-center justify-center w-[48px] h-[48px] bg-digital-red text-white rounded-full hover:bg-digital-red-dark transition-all">
          <svg class="w-[24px] h-[24px]" fill="currentColor">
            <!-- YouTube icon -->
          </svg>
          <span class="sr-only">YouTube</span>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/school/stanford-university" class="flex items-center justify-center w-[48px] h-[48px] bg-digital-blue text-white rounded-full hover:bg-digital-blue-dark transition-all">
          <svg class="w-[24px] h-[24px]" fill="currentColor">
            <!-- LinkedIn icon -->
          </svg>
          <span class="sr-only">LinkedIn</span>
        </a>
      </li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-m3 font-semibold mb-[16px]">Quick Links</h3>
    <ul class="list-horizontal flex flex-wrap gap-x-[24px] gap-y-[8px] text-m2">
      <li>
        <a href="/directory" class="text-digital-blue hover:text-digital-blue-dark">
          Campus Directory
        </a>
      </li>
      <li>
        <a href="/maps" class="text-digital-blue hover:text-digital-blue-dark">
          Campus Maps
        </a>
      </li>
      <li>
        <a href="/emergency" class="text-digital-blue hover:text-digital-blue-dark">
          Emergency Information
        </a>
      </li>
      <li>
        <a href="/accessibility" class="text-digital-blue hover:text-digital-blue-dark">
          Accessibility
        </a>
      </li>
      <li>
        <a href="/privacy" class="text-digital-blue hover:text-digital-blue-dark">
          Privacy Policy
        </a>
      </li>
    </ul>
  </div>
</div>
```

### Course Requirements Lists
```html
<!-- Program requirements displayed as clean lists -->
<div class="space-y-[32px]">
  <div>
    <h2 class="text-m4 font-semibold text-cardinal-red mb-[20px]">Computer Science Major Requirements</h2>
    
    <div class="space-y-[24px]">
      <div>
        <h3 class="text-m3 font-medium mb-[12px]">Core Courses (45 units)</h3>
        <ul class="list-unstyled space-y-[8px] pl-[20px]">
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 106A:</span> Programming Methodology (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 106B:</span> Programming Abstractions (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 107:</span> Computer Organization and Systems (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 161:</span> Design and Analysis of Algorithms (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 103:</span> Mathematical Foundations of Computing (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 109:</span> Introduction to Probability for Computer Scientists (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 110:</span> Principles of Computer Systems (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 111:</span> Operating Systems Principles (5 units)
            </div>
          </li>
          <li class="flex items-start space-x-[8px]">
            <span class="inline-block w-[6px] h-[6px] bg-cardinal-red rounded-full mt-[9px] flex-shrink-0"></span>
            <div>
              <span class="font-medium">CS 194:</span> Software Project (3 units)
            </div>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-m3 font-medium mb-[12px]">Track Requirements (choose one)</h3>
        <ul class="list-unstyled space-y-[16px] pl-[20px]">
          <li>
            <div class="font-medium text-digital-blue mb-[8px]">Artificial Intelligence Track</div>
            <ul class="list-unstyled space-y-[4px] pl-[20px]">
              <li class="text-m2 text-black-70">CS 221: Artificial Intelligence</li>
              <li class="text-m2 text-black-70">CS 229: Machine Learning</li>
              <li class="text-m2 text-black-70">Plus 2 additional AI electives</li>
            </ul>
          </li>
          <li>
            <div class="font-medium text-digital-blue mb-[8px]">Systems Track</div>
            <ul class="list-unstyled space-y-[4px] pl-[20px]">
              <li class="text-m2 text-black-70">CS 140: Operating Systems</li>
              <li class="text-m2 text-black-70">CS 144: Introduction to Computer Networking</li>
              <li class="text-m2 text-black-70">Plus 2 additional systems electives</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Implementation Guidelines

### Semantic HTML
Always use appropriate list elements (`<ul>`, `<ol>`, `<li>`) for semantic content, even when removing visual styling:

```html
<!-- ✅ Good: Maintains semantic meaning -->
<nav>
  <ul class="list-horizontal">
    <li><a href="/page1">Page 1</a></li>
    <li><a href="/page2">Page 2</a></li>
  </ul>
</nav>

<!-- ❌ Avoid: Loses semantic meaning -->
<nav>
  <div class="flex">
    <div><a href="/page1">Page 1</a></div>
    <div><a href="/page2">Page 2</a></div>
  </div>
</nav>
```

### Combining with Tailwind Utilities
```html
<!-- Combine list classes with Tailwind spacing and layout utilities -->
<ul class="list-horizontal flex flex-wrap gap-[16px]">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ul class="list-unstyled space-y-[12px] max-w-prose">
  <li>Clean list item</li>
  <li>Another clean item</li>
</ul>
```

## Accessibility Considerations

### Screen Reader Support
- List structure remains semantic for screen readers
- Navigation landmarks are preserved
- List item count is announced correctly

### Keyboard Navigation
- Focus order follows visual order
- All interactive elements remain keyboard accessible
- Skip links work properly with list navigation

### ARIA Labels
```html
<!-- Proper labeling for complex navigation -->
<nav aria-label="Main navigation">
  <ul class="list-horizontal" role="menubar">
    <li role="none">
      <a href="/academics" role="menuitem">Academics</a>
    </li>
    <li role="none">
      <a href="/research" role="menuitem">Research</a>
    </li>
  </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol class="list-horizontal">
    <li><a href="/">Home</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

## Performance Considerations

- **Minimal CSS**: Simple property resets with no complex calculations
- **Efficient float clearing**: Uses `overflow: hidden` for reliable float containment
- **No JavaScript required**: Pure CSS solution

## Browser Support

- **Universal support**: Works in all browsers that support CSS
- **Float layout**: Reliable cross-browser float behavior
- **Progressive enhancement**: Degrades gracefully if CSS fails to load

These list utilities provide the foundation for clean, accessible navigation and content organization throughout Stanford's digital properties.
