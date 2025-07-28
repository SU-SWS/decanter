# Skiplink Component Plugin

**File**: `/src/plugins/components/skiplink/skiplink.js`

## Overview

The skiplink component plugin provides accessible navigation shortcuts that allow keyboard and screen reader users to bypass repetitive content and jump directly to main content areas. This essential accessibility component ensures Stanford's websites meet WCAG guidelines and provide excellent navigation experiences for all users.

## Purpose

Enhances website accessibility by providing keyboard users with the ability to skip navigation menus, headers, and other repetitive content to reach main content quickly. This is especially important for users with motor disabilities who rely on keyboard navigation and screen reader users who want to avoid listening to the same navigation items on every page.

## CSS Classes Generated

### `.skiplink` and `.skiplinks`

Creates accessible skip navigation links that are visually hidden by default but become visible when focused.

**CSS Output:**
```css
.skiplink,
.skiplinks {
  position: absolute;
  top: -500px;
  left: 0.8em;
  min-height: 1px;
  transition: top 0.25s ease-in-out;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  background-color: #000000;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
}

.skiplink:hover,
.skiplink:visited,
.skiplinks:hover,
.skiplinks:visited {
  width: 1px;
  height: 1px;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
}

.skiplink:active,
.skiplink:focus,
.skiplinks:active,
.skiplinks:focus {
  position: fixed;
  top: 0.8em;
  padding: 0.4em 0.8em;
  width: auto;
  height: auto;
  color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: #4d4f53; /* cool-grey */
  border-radius: 3px;
  z-index: 10000;
}

@media print {
  .skiplink,
  .skiplinks {
    display: none;
  }
}
```

**Key Features:**
- **Screen reader accessible**: Hidden but available to assistive technology
- **Focus visibility**: Becomes visible when focused via keyboard navigation
- **High contrast**: Black background with white text for maximum visibility
- **High z-index**: Appears above all other content when active
- **Smooth transitions**: Animated appearance/disappearance
- **Print hidden**: Doesn't appear in printed versions

## Usage Examples

### Basic Skip Navigation
```html
<!-- Essential skip links at the beginning of every page -->
<body>
  <!-- Skip links should be the first focusable elements -->
  <a href="#main-content" class="skiplink">Skip to main content</a>
  <a href="#main-navigation" class="skiplink">Skip to navigation</a>
  <a href="#search" class="skiplink">Skip to search</a>
  
  <!-- Site header -->
  <header class="bg-white border-b border-black-20 py-[16px]">
    <div class="centered-container px-[40px]">
      <div class="flex justify-between items-center">
        <a href="/" class="logo text-m4">Stanford</a>
        
        <!-- Main navigation -->
        <nav id="main-navigation" aria-label="Main navigation">
          <ul class="hidden lg:flex space-x-[32px]">
            <li><a href="/academics" class="text-m2 text-black hover:text-cardinal-red">Academics</a></li>
            <li><a href="/research" class="text-m2 text-black hover:text-cardinal-red">Research</a></li>
            <li><a href="/campus-life" class="text-m2 text-black hover:text-cardinal-red">Campus Life</a></li>
            <li><a href="/admissions" class="text-m2 text-black hover:text-cardinal-red">Admissions</a></li>
          </ul>
        </nav>
        
        <!-- Search -->
        <div id="search" class="hidden md:block">
          <form class="flex">
            <input 
              type="search" 
              placeholder="Search Stanford..." 
              class="px-[16px] py-[8px] border border-black-30 rounded-l focus:outline-none focus:border-digital-blue"
            >
            <button 
              type="submit" 
              class="bg-cardinal-red text-white px-[16px] py-[8px] rounded-r hover:bg-cardinal-red-dark focus:outline-none focus:ring-2 focus:ring-cardinal-red-light"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Main content area -->
  <main id="main-content" class="rs-py-4">
    <div class="centered-container px-[40px]">
      <h1 class="text-m6 font-bold text-cardinal-red mb-[24px]">Page Title</h1>
      <p class="text-m3 text-black-70">Main page content starts here...</p>
      <!-- Rest of main content -->
    </div>
  </main>
</body>
```

### Complex Page Layout with Multiple Skip Links
```html
<!-- Comprehensive skip navigation for complex layouts -->
<body>
  <!-- Skip navigation menu -->
  <nav class="skiplinks" aria-label="Skip navigation">
    <a href="#main-content" class="skiplink">Skip to main content</a>
    <a href="#primary-navigation" class="skiplink">Skip to primary navigation</a>
    <a href="#secondary-navigation" class="skiplink">Skip to secondary navigation</a>
    <a href="#search-form" class="skiplink">Skip to search</a>
    <a href="#sidebar" class="skiplink">Skip to sidebar</a>
    <a href="#footer" class="skiplink">Skip to footer</a>
  </nav>
  
  <!-- Site header -->
  <header class="bg-white border-b border-black-20">
    <div class="centered-container px-[40px] py-[16px]">
      <div class="flex justify-between items-center">
        <a href="/" class="logo text-m4">Stanford University</a>
        
        <!-- Primary navigation -->
        <nav id="primary-navigation" aria-label="Primary navigation">
          <ul class="hidden lg:flex space-x-[32px]">
            <li><a href="/academics">Academics</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/campus-life">Campus Life</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        
        <!-- Search form -->
        <form id="search-form" class="hidden md:flex">
          <label for="site-search" class="sr-only">Search Stanford</label>
          <input 
            id="site-search"
            type="search" 
            placeholder="Search..." 
            class="px-[16px] py-[8px] border border-black-30 rounded-l"
          >
          <button type="submit" class="bg-cardinal-red text-white px-[16px] py-[8px] rounded-r">
            <span class="sr-only">Submit search</span>
            <svg class="w-[16px] h-[16px]" fill="currentColor"><!-- Search icon --></svg>
          </button>
        </form>
      </div>
    </div>
    
    <!-- Secondary navigation -->
    <nav id="secondary-navigation" class="bg-black-10" aria-label="Department navigation">
      <div class="centered-container px-[40px] py-[12px]">
        <ul class="flex space-x-[24px] text-m1">
          <li><a href="/cs/about" class="text-black hover:text-cardinal-red">About</a></li>
          <li><a href="/cs/faculty" class="text-black hover:text-cardinal-red">Faculty</a></li>
          <li><a href="/cs/courses" class="text-black hover:text-cardinal-red">Courses</a></li>
          <li><a href="/cs/research" class="text-black hover:text-cardinal-red">Research</a></li>
          <li><a href="/cs/news" class="text-black hover:text-cardinal-red">News</a></li>
        </ul>
      </div>
    </nav>
  </header>
  
  <!-- Page content with sidebar -->
  <div class="centered-container px-[40px] py-[32px]">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-[32px]">
      <!-- Main content -->
      <main id="main-content" class="lg:col-span-3">
        <h1 class="text-m6 font-bold text-cardinal-red mb-[24px]">
          Computer Science Department
        </h1>
        <p class="text-m3 text-black-70 mb-[32px]">
          Welcome to the Stanford Computer Science Department. Our faculty and students 
          are advancing the field through innovative research and education.
        </p>
        <!-- Main content continues... -->
      </main>
      
      <!-- Sidebar -->
      <aside id="sidebar" class="lg:col-span-1">
        <h2 class="text-m3 font-semibold mb-[16px]">Quick Links</h2>
        <ul class="space-y-[8px]">
          <li><a href="/cs/apply" class="text-digital-blue hover:text-digital-blue-dark">Apply Now</a></li>
          <li><a href="/cs/visit" class="text-digital-blue hover:text-digital-blue-dark">Visit Us</a></li>
          <li><a href="/cs/contact" class="text-digital-blue hover:text-digital-blue-dark">Contact</a></li>
        </ul>
        <!-- Sidebar content continues... -->
      </aside>
    </div>
  </div>
  
  <!-- Footer -->
  <footer id="footer" class="bg-black text-white py-[48px]">
    <div class="centered-container px-[40px]">
      <div class="text-center">
        <a href="/" class="logo text-m4 text-white mb-[16px] inline-block">Stanford</a>
        <p class="text-white-80">© 2024 Stanford University</p>
      </div>
    </div>
  </footer>
</body>
```

### Course Page with Content Navigation
```html
<!-- Skip links for educational content -->
<body>
  <a href="#course-content" class="skiplink">Skip to course content</a>
  <a href="#course-navigation" class="skiplink">Skip to course navigation</a>
  <a href="#video-player" class="skiplink">Skip to video player</a>
  <a href="#course-materials" class="skiplink">Skip to course materials</a>
  <a href="#discussion" class="skiplink">Skip to discussion</a>
  
  <!-- Course header -->
  <header class="bg-cardinal-red text-white py-[24px]">
    <div class="centered-container px-[40px]">
      <div class="flex items-center space-x-[20px]">
        <a href="/" class="logo text-m3 text-white">Stanford</a>
        <div class="w-[1px] h-[24px] bg-white-30"></div>
        <div>
          <h1 class="text-m4 font-bold">CS 106A: Programming Methodology</h1>
          <p class="text-white-90">Lecture 5: Control Flow and Loops</p>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Course navigation -->
  <nav id="course-navigation" class="bg-white border-b border-black-20 py-[16px]" aria-label="Course navigation">
    <div class="centered-container px-[40px]">
      <ul class="flex space-x-[24px] text-m2">
        <li><a href="/cs106a/overview" class="text-black hover:text-cardinal-red">Overview</a></li>
        <li><a href="/cs106a/lectures" class="text-cardinal-red font-semibold">Lectures</a></li>
        <li><a href="/cs106a/assignments" class="text-black hover:text-cardinal-red">Assignments</a></li>
        <li><a href="/cs106a/resources" class="text-black hover:text-cardinal-red">Resources</a></li>
      </ul>
    </div>
  </nav>
  
  <!-- Main course content -->
  <main id="course-content" class="centered-container px-[40px] py-[32px]">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
      <!-- Video and content -->
      <div class="lg:col-span-2">
        <!-- Video player -->
        <section id="video-player" class="mb-[32px]">
          <h2 class="text-m4 font-semibold mb-[16px]">Lecture Video</h2>
          <div class="embed-container rounded overflow-hidden shadow-lg">
            <iframe 
              src="https://stanford.edu/courses/cs106a/lecture5/video"
              title="CS 106A Lecture 5: Control Flow and Loops"
              allowfullscreen
            ></iframe>
          </div>
          <div class="mt-[16px] flex space-x-[16px] text-m1">
            <a href="/cs106a/lecture5/transcript" class="text-digital-blue hover:text-digital-blue-dark">
              View Transcript
            </a>
            <a href="/cs106a/lecture5/captions" class="text-digital-blue hover:text-digital-blue-dark">
              Download Captions
            </a>
          </div>
        </section>
        
        <!-- Lecture content -->
        <section class="prose max-w-none">
          <h2>Learning Objectives</h2>
          <ul>
            <li>Understand conditional statements (if/else)</li>
            <li>Learn about different types of loops</li>
            <li>Practice writing control flow logic</li>
          </ul>
          <!-- More content... -->
        </section>
      </div>
      
      <!-- Sidebar with materials -->
      <aside id="course-materials" class="lg:col-span-1">
        <h2 class="text-m3 font-semibold mb-[16px]">Course Materials</h2>
        <div class="space-y-[12px]">
          <a href="/cs106a/lecture5/slides.pdf" class="block p-[16px] border border-black-20 rounded hover:bg-black-10 transition-all">
            <div class="font-medium">Lecture Slides</div>
            <div class="text-m1 text-black-70">PDF • 2.3 MB</div>
          </a>
          <a href="/cs106a/lecture5/code.zip" class="block p-[16px] border border-black-20 rounded hover:bg-black-10 transition-all">
            <div class="font-medium">Code Examples</div>
            <div class="text-m1 text-black-70">ZIP • 45 KB</div>
          </a>
          <a href="/cs106a/lecture5/assignment" class="block p-[16px] border-2 border-cardinal-red rounded bg-cardinal-red-light hover:bg-cardinal-red-dark hover:text-white transition-all">
            <div class="font-medium">Assignment 2</div>
            <div class="text-m1">Due Friday 11:59 PM</div>
          </a>
        </div>
      </aside>
    </div>
    
    <!-- Discussion section -->
    <section id="discussion" class="mt-[48px] pt-[32px] border-t border-black-20">
      <h2 class="text-m4 font-semibold mb-[24px]">Discussion</h2>
      <div class="bg-white border border-black-20 rounded p-[24px]">
        <p class="text-m2 text-black-70">
          Join the conversation about this lecture. Ask questions, share insights, 
          and help your classmates understand the material.
        </p>
        <a href="/cs106a/lecture5/discussion" class="mt-[16px] inline-block bg-cardinal-red text-white px-[20px] py-[10px] rounded hover:bg-cardinal-red-dark transition-all">
          Join Discussion
        </a>
      </div>
    </section>
  </main>
</body>
```

### Research Portal with Data Tables
```html
<!-- Skip links for data-heavy research interface -->
<body>
  <a href="#main-content" class="skiplink">Skip to main content</a>
  <a href="#search-filters" class="skiplink">Skip to search and filters</a>
  <a href="#results-table" class="skiplink">Skip to results table</a>
  <a href="#pagination" class="skiplink">Skip to pagination</a>
  
  <!-- Header -->
  <header class="bg-white border-b border-black-20 py-[16px]">
    <div class="centered-container px-[40px]">
      <div class="flex items-center space-x-[20px]">
        <a href="/" class="logo text-m3">Stanford</a>
        <div class="w-[1px] h-[24px] bg-black-30"></div>
        <h1 class="text-m3 font-semibold">Faculty Research Database</h1>
      </div>
    </div>
  </header>
  
  <main id="main-content" class="centered-container px-[40px] py-[32px]">
    <!-- Search and filters -->
    <section id="search-filters" class="mb-[32px]">
      <h2 class="text-m4 font-semibold mb-[20px]">Search Research</h2>
      <form class="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        <div>
          <label for="keyword-search" class="block text-m2 font-medium mb-[8px]">Keywords</label>
          <input 
            id="keyword-search"
            type="search" 
            placeholder="Search by keyword..."
            class="w-full p-[12px] border border-black-30 rounded focus:border-digital-blue focus:outline-none"
          >
        </div>
        <div>
          <label for="department-filter" class="block text-m2 font-medium mb-[8px]">Department</label>
          <select 
            id="department-filter"
            class="w-full p-[12px] border border-black-30 rounded focus:border-digital-blue focus:outline-none"
          >
            <option value="">All Departments</option>
            <option value="cs">Computer Science</option>
            <option value="ee">Electrical Engineering</option>
            <option value="med">Medicine</option>
          </select>
        </div>
        <div>
          <label for="year-filter" class="block text-m2 font-medium mb-[8px]">Year</label>
          <select 
            id="year-filter"
            class="w-full p-[12px] border border-black-30 rounded focus:border-digital-blue focus:outline-none"
          >
            <option value="">Any Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </form>
    </section>
    
    <!-- Results table -->
    <section id="results-table">
      <div class="flex justify-between items-center mb-[20px]">
        <h2 class="text-m3 font-semibold">Research Results</h2>
        <div class="text-m1 text-black-70">Showing 1-25 of 247 results</div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="w-full border border-black-20 rounded">
          <thead class="bg-black-10">
            <tr>
              <th class="p-[12px] text-left font-semibold">Title</th>
              <th class="p-[12px] text-left font-semibold">Principal Investigator</th>
              <th class="p-[12px] text-left font-semibold">Department</th>
              <th class="p-[12px] text-left font-semibold">Year</th>
              <th class="p-[12px] text-left font-semibold">Funding</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-black-20">
              <td class="p-[12px]">
                <a href="/research/ai-healthcare" class="text-digital-blue hover:text-digital-blue-dark font-medium">
                  AI Applications in Precision Healthcare
                </a>
              </td>
              <td class="p-[12px]">Dr. Sarah Smith</td>
              <td class="p-[12px]">Computer Science</td>
              <td class="p-[12px]">2024</td>
              <td class="p-[12px]">$2.5M</td>
            </tr>
            <!-- More table rows... -->
          </tbody>
        </table>
      </div>
    </section>
    
    <!-- Pagination -->
    <nav id="pagination" class="mt-[32px]" aria-label="Research results pagination">
      <div class="flex justify-center space-x-[8px]">
        <a href="#" class="px-[12px] py-[8px] border border-black-30 rounded hover:bg-black-10 transition-all">
          Previous
        </a>
        <a href="#" class="px-[12px] py-[8px] bg-cardinal-red text-white rounded">1</a>
        <a href="#" class="px-[12px] py-[8px] border border-black-30 rounded hover:bg-black-10 transition-all">2</a>
        <a href="#" class="px-[12px] py-[8px] border border-black-30 rounded hover:bg-black-10 transition-all">3</a>
        <a href="#" class="px-[12px] py-[8px] border border-black-30 rounded hover:bg-black-10 transition-all">
          Next
        </a>
      </div>
    </nav>
  </main>
</body>
```

## Implementation Guidelines

### Placement and Order
```html
<!-- Skip links must be the first focusable elements -->
<body>
  <!-- ✅ Correct: Skip links first -->
  <a href="#main" class="skiplink">Skip to main content</a>
  <a href="#nav" class="skiplink">Skip to navigation</a>
  
  <!-- Site content follows -->
  <header>...</header>
  <main id="main">...</main>
</body>
```

### Target Elements
```html
<!-- Ensure target elements have proper IDs and are focusable -->
<main id="main-content" tabindex="-1">
  <h1>Page Title</h1>
  <!-- Content -->
</main>

<!-- Or use existing focusable elements -->
<nav id="navigation">
  <h2 class="sr-only">Main Navigation</h2>
  <ul>...</ul>
</nav>
```

### Multiple Skip Links
```html
<!-- Group related skip links -->
<nav class="skiplinks" aria-label="Skip navigation">
  <a href="#main-content" class="skiplink">Skip to main content</a>
  <a href="#search" class="skiplink">Skip to search</a>
  <a href="#footer" class="skiplink">Skip to footer</a>
</nav>
```

## Accessibility Considerations

### Screen Reader Compatibility
- Skip links are announced by screen readers as normal links
- Focus moves to target element when activated
- Target elements should be programmatically focusable

### Keyboard Navigation
- Skip links receive focus before any other page elements
- Tab key moves through skip links before reaching other content
- Enter or Space key activates skip links

### Visual Design
- High contrast (black background, white text) ensures visibility
- Large text size (2rem) improves readability when focused
- Smooth transitions provide visual feedback

### Testing
```html
<!-- Test skip links by: -->
<!-- 1. Tab to activate each skip link -->
<!-- 2. Verify focus moves to correct target -->
<!-- 3. Confirm target is visible and usable -->
<!-- 4. Test with screen readers -->
```

## Performance Considerations

- **Minimal CSS**: Simple positioning and transition properties
- **No JavaScript required**: Pure CSS implementation
- **Fast transitions**: 0.25s animation doesn't slow navigation
- **High z-index**: Ensures visibility without layout conflicts

## Browser Support

- **Universal compatibility**: Works in all browsers supporting CSS positioning
- **Keyboard support**: Functions with all keyboard navigation methods
- **Screen reader support**: Compatible with all major screen reading software
- **Mobile accessibility**: Works with mobile accessibility features

## WCAG Compliance

- **WCAG 2.1 AA**: Meets Level AA accessibility requirements
- **Bypass blocks**: Satisfies Success Criterion 2.4.1
- **Focus visible**: Meets Success Criterion 2.4.7
- **Keyboard accessible**: Satisfies Success Criterion 2.1.1

This skiplink component ensures Stanford's websites provide excellent accessibility for keyboard and screen reader users, meeting international accessibility standards while maintaining usability and performance.
