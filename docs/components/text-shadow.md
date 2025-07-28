# Text Shadow Component Plugin

**File**: `/src/plugins/components/shadow/text-shadow.js`

## Overview

The text shadow component plugin provides elegant text shadow utilities that enhance readability and visual appeal of text elements. These carefully designed shadows are particularly useful for text overlaid on images, hero sections, and design elements where contrast enhancement is needed while maintaining Stanford's refined aesthetic.

## Purpose

Improves text readability and visual hierarchy through subtle shadow effects. Essential for Stanford's multimedia content where text needs to stand out against complex backgrounds, images, or gradient overlays while maintaining accessibility and brand sophistication.

## CSS Classes Generated

### `.text-shadow`

Creates a subtle dual-layer text shadow for enhanced readability.

**CSS Output:**
```css
.text-shadow {
  text-shadow: rgba(0, 0, 0, 40%) 0 0 6px, rgba(0, 0, 0, 60%) 0 0 2px;
}
```

**Use Cases:**
- Text over photographs
- Hero section headlines  
- Overlaid content
- Light text on complex backgrounds

### `.text-shadow-md`

Provides a medium-intensity text shadow with enhanced depth.

**CSS Output:**
```css
.text-shadow-md {
  text-shadow: rgba(0, 0, 0, 40%) 0 0 8px, rgba(0, 0, 0, 60%) 0 0 3px;
}
```

**Use Cases:**
- Feature section headlines
- Important call-to-action text
- Text over busy background patterns
- Medium-contrast enhancement needs

### `.text-shadow-lg`

Creates a soft, large text shadow for maximum readability.

**CSS Output:**
```css
.text-shadow-lg {
  text-shadow: rgba(0, 0, 0, 30%) 0 0 12px;
}
```

**Use Cases:**
- Large display text
- Hero banners with complex imagery
- Text requiring maximum contrast
- Dramatic visual emphasis

## Usage Examples

### Hero Sections with Background Images
```html
<!-- Stanford campus hero with text overlay -->
<section class="relative h-[600px] flex items-center justify-center">
  <!-- Background image -->
  <div class="absolute inset-0">
    <img 
      src="/images/stanford-campus-aerial.jpg" 
      alt="Stanford University campus aerial view" 
      class="w-full h-full object-cover"
    >
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  </div>
  
  <!-- Hero content with text shadows -->
  <div class="relative text-center text-white z-10 max-w-4xl px-[40px]">
    <h1 class="text-m7 font-bold text-shadow-lg mb-[24px]">
      Welcome to Stanford University
    </h1>
    <p class="text-m4 text-shadow-md mb-[32px]">
      Where the brightest minds come together to solve the world's greatest challenges
    </p>
    <div class="flex flex-col sm:flex-row justify-center space-y-[16px] sm:space-y-0 sm:space-x-[20px]">
      <a href="/admissions" class="bg-cardinal-red text-white px-[32px] py-[16px] rounded font-semibold hover:bg-cardinal-red-dark transition-all text-shadow">
        Apply Now
      </a>
      <a href="/visit" class="border-2 border-white text-white px-[32px] py-[16px] rounded font-semibold hover:bg-white hover:text-black transition-all text-shadow">
        Visit Campus
      </a>
    </div>
  </div>
</section>
```

### Research Showcase with Gradient Backgrounds
```html
<!-- Research areas with gradient overlays -->
<section class="py-[80px]">
  <div class="centered-container px-[40px]">
    <div class="text-center mb-[48px]">
      <h2 class="text-m6 font-bold text-cardinal-red mb-[16px]">
        Leading Research Areas
      </h2>
      <p class="text-m3 text-black-70 max-w-3xl mx-auto">
        Stanford's interdisciplinary approach drives breakthrough discoveries across multiple fields
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
      <!-- AI Research -->
      <div class="relative h-[300px] rounded-lg overflow-hidden group hover:scale-105 transition-all">
        <div class="absolute inset-0">
          <img 
            src="/images/research/ai-lab.jpg" 
            alt="AI Research Laboratory" 
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black-80 via-black-30 to-transparent"></div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-[24px] text-white">
          <h3 class="text-m4 font-bold text-shadow-md mb-[8px]">
            Artificial Intelligence
          </h3>
          <p class="text-m2 text-shadow mb-[12px]">
            Advancing machine learning and AI ethics for human benefit
          </p>
          <a href="/research/ai" class="text-white font-medium text-shadow hover:text-white-90 transition-all">
            Learn More →
          </a>
        </div>
      </div>
      
      <!-- Climate Research -->
      <div class="relative h-[300px] rounded-lg overflow-hidden group hover:scale-105 transition-all">
        <div class="absolute inset-0">
          <img 
            src="/images/research/climate-science.jpg" 
            alt="Climate Science Research" 
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-digital-green-dark via-digital-green-30 to-transparent"></div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-[24px] text-white">
          <h3 class="text-m4 font-bold text-shadow-md mb-[8px]">
            Climate Science
          </h3>
          <p class="text-m2 text-shadow mb-[12px]">
            Developing sustainable solutions for environmental challenges
          </p>
          <a href="/research/climate" class="text-white font-medium text-shadow hover:text-white-90 transition-all">
            Learn More →
          </a>
        </div>
      </div>
      
      <!-- Medical Research -->
      <div class="relative h-[300px] rounded-lg overflow-hidden group hover:scale-105 transition-all">
        <div class="absolute inset-0">
          <img 
            src="/images/research/medical-lab.jpg" 
            alt="Medical Research Laboratory" 
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-digital-blue-dark via-digital-blue-30 to-transparent"></div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-[24px] text-white">
          <h3 class="text-m4 font-bold text-shadow-md mb-[8px]">
            Precision Medicine
          </h3>
          <p class="text-m2 text-shadow mb-[12px]">
            Personalizing healthcare through genomics and data science
          </p>
          <a href="/research/medicine" class="text-white font-medium text-shadow hover:text-white-90 transition-all">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Event Announcements with Image Overlays
```html
<!-- Featured events with text shadow overlays -->
<section class="bg-black-10 py-[64px]">
  <div class="centered-container px-[40px]">
    <h2 class="text-m5 font-bold text-cardinal-red text-center mb-[48px]">
      Upcoming Events
    </h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
      <!-- Stanford Symposium -->
      <div class="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
        <div class="absolute inset-0">
          <img 
            src="/images/events/symposium-2024.jpg" 
            alt="Stanford AI Symposium 2024" 
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black-20 to-black-70"></div>
        </div>
        
        <div class="absolute inset-0 p-[32px] flex flex-col justify-between text-white">
          <div class="text-right">
            <div class="bg-cardinal-red px-[12px] py-[6px] rounded text-m1 font-medium inline-block text-shadow">
              Featured Event
            </div>
          </div>
          
          <div>
            <h3 class="text-m5 font-bold text-shadow-lg mb-[12px]">
              AI for Social Good Symposium 2024
            </h3>
            <p class="text-m3 text-shadow-md mb-[16px]">
              Join leading researchers and industry experts for groundbreaking discussions on AI's potential to address global challenges.
            </p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div class="text-m2 text-shadow mb-[16px] sm:mb-0">
                <div><strong>Date:</strong> June 15-16, 2024</div>
                <div><strong>Location:</strong> Memorial Auditorium</div>
              </div>
              <a href="/events/ai-symposium-2024" class="bg-white text-black px-[24px] py-[12px] rounded font-semibold hover:bg-white-90 transition-all">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Commencement -->
      <div class="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
        <div class="absolute inset-0">
          <img 
            src="/images/events/commencement-2024.jpg" 
            alt="Stanford Commencement 2024" 
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black-20 to-black-70"></div>
        </div>
        
        <div class="absolute inset-0 p-[32px] flex flex-col justify-between text-white">
          <div class="text-right">
            <div class="bg-digital-blue px-[12px] py-[6px] rounded text-m1 font-medium inline-block text-shadow">
              University Event
            </div>
          </div>
          
          <div>
            <h3 class="text-m5 font-bold text-shadow-lg mb-[12px]">
              Stanford Commencement 2024
            </h3>
            <p class="text-m3 text-shadow-md mb-[16px]">
              Celebrate the achievements of the Class of 2024 in our 133rd Commencement ceremony.
            </p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div class="text-m2 text-shadow mb-[16px] sm:mb-0">
                <div><strong>Date:</strong> June 16, 2024</div>
                <div><strong>Location:</strong> Stanford Stadium</div>
              </div>
              <a href="/events/commencement-2024" class="bg-white text-black px-[24px] py-[12px] rounded font-semibold hover:bg-white-90 transition-all">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Course Feature Banners
```html
<!-- Course highlights with text shadows -->
<section class="py-[64px]">
  <div class="centered-container px-[40px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
      <!-- Featured Course Info -->
      <div>
        <h2 class="text-m5 font-bold text-cardinal-red mb-[24px]">
          CS 106A: Programming Methodology
        </h2>
        <p class="text-m3 text-black-70 mb-[32px]">
          Learn the art and science of programming through hands-on projects and expert instruction. 
          This foundational course welcomes students from all backgrounds.
        </p>
        
        <div class="space-y-[16px] mb-[32px]">
          <div class="flex items-center space-x-[12px]">
            <div class="w-[8px] h-[8px] bg-cardinal-red rounded-full"></div>
            <span class="text-m2">No prior programming experience required</span>
          </div>
          <div class="flex items-center space-x-[12px]">
            <div class="w-[8px] h-[8px] bg-cardinal-red rounded-full"></div>
            <span class="text-m2">Hands-on project-based learning</span>
          </div>
          <div class="flex items-center space-x-[12px]">
            <div class="w-[8px] h-[8px] bg-cardinal-red rounded-full"></div>
            <span class="text-m2">Expert faculty and teaching assistants</span>
          </div>
        </div>
        
        <div class="flex space-x-[16px]">
          <a href="/courses/cs106a/enroll" class="bg-cardinal-red text-white px-[24px] py-[12px] rounded font-semibold hover:bg-cardinal-red-dark transition-all">
            Enroll Now
          </a>
          <a href="/courses/cs106a/info" class="border border-black-30 text-black px-[24px] py-[12px] rounded font-semibold hover:bg-black-10 transition-all">
            Course Info
          </a>
        </div>
      </div>
      
      <!-- Featured Course Visual -->
      <div class="relative">
        <div class="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/courses/cs106a-classroom.jpg" 
            alt="CS106A classroom session" 
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-cardinal-red-80 via-cardinal-red-50 to-transparent"></div>
          
          <div class="absolute inset-0 p-[32px] flex flex-col justify-center text-white">
            <div class="max-w-md">
              <h3 class="text-m4 font-bold text-shadow-lg mb-[16px]">
                "This course changed my perspective on problem-solving and opened doors I never knew existed."
              </h3>
              <div class="text-m2 text-shadow">
                <div class="font-medium">Sarah Chen, Class of 2023</div>
                <div>Now Software Engineer at Google</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Floating stats -->
        <div class="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-[24px] border border-black-20">
          <div class="text-center">
            <div class="text-m4 font-bold text-cardinal-red">98%</div>
            <div class="text-m1 text-black-70">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Navigation with Background Complexity
```html
<!-- Navigation overlay with text shadows for readability -->
<nav class="absolute top-0 left-0 right-0 z-20 py-[20px]">
  <div class="centered-container px-[40px]">
    <div class="flex justify-between items-center">
      <a href="/" class="logo text-m4 text-white text-shadow-md">
        Stanford
      </a>
      
      <ul class="hidden lg:flex space-x-[32px]">
        <li>
          <a href="/academics" class="text-white text-shadow hover:text-white-90 transition-all">
            Academics
          </a>
        </li>
        <li>
          <a href="/research" class="text-white text-shadow hover:text-white-90 transition-all">
            Research
          </a>
        </li>
        <li>
          <a href="/campus-life" class="text-white text-shadow hover:text-white-90 transition-all">
            Campus Life
          </a>
        </li>
        <li>
          <a href="/admissions" class="text-white text-shadow hover:text-white-90 transition-all">
            Admissions
          </a>
        </li>
      </ul>
      
      <div class="flex items-center space-x-[16px]">
        <a href="/search" class="text-white text-shadow hover:text-white-90 transition-all">
          <svg class="w-[24px] h-[24px]" fill="currentColor"><!-- Search icon --></svg>
          <span class="sr-only">Search</span>
        </a>
        <a href="/apply" class="bg-white text-black px-[20px] py-[10px] rounded font-semibold hover:bg-white-90 transition-all">
          Apply
        </a>
      </div>
    </div>
  </div>
</nav>
```

## Implementation Guidelines

### Choosing the Right Shadow
```html
<!-- Light shadow for subtle enhancement -->
<h2 class="text-shadow">Subtle headline over image</h2>

<!-- Medium shadow for moderate contrast needs -->
<h1 class="text-shadow-md">Important announcement</h1>

<!-- Large shadow for maximum readability -->
<h1 class="text-shadow-lg">Hero banner headline</h1>
```

### Combining with Colors
```html
<!-- White text with shadows on dark/complex backgrounds -->
<div class="bg-gradient-to-r from-cardinal-red to-cardinal-red-dark">
  <h1 class="text-white text-shadow-lg">White text with shadow</h1>
</div>

<!-- Dark text with subtle shadows on light backgrounds -->
<div class="bg-white bg-opacity-80">
  <h2 class="text-black text-shadow">Dark text with light shadow</h2>
</div>
```

### Responsive Considerations
```html
<!-- Adjust shadow intensity for mobile -->
<h1 class="text-shadow-md lg:text-shadow-lg">
  Responsive shadow intensity
</h1>

<!-- Stack text shadows with responsive typography -->
<h1 class="text-m5 md:text-m6 lg:text-m7 text-shadow-md lg:text-shadow-lg">
  Responsive typography with shadows
</h1>
```

## Accessibility Considerations

### Contrast Requirements
- Text shadows enhance rather than replace proper color contrast
- Shadows should not be the primary method for meeting WCAG contrast ratios
- Always ensure sufficient contrast between text and background colors

### Screen Reader Compatibility
- Text shadows are purely visual and don't affect screen reader functionality
- Ensure text content remains meaningful without visual effects
- Use proper semantic markup regardless of shadow styling

### Performance Impact
```html
<!-- Multiple shadows may impact performance on low-end devices -->
<!-- Use sparingly for best performance -->
<h1 class="text-shadow-lg">High-impact headline only</h1>

<!-- Prefer single shadows for body content -->
<p class="text-shadow">Enhanced readability text</p>
```

## Performance Considerations

- **GPU acceleration**: Text shadows are GPU-accelerated in modern browsers
- **Rendering efficiency**: Simple blur effects render efficiently
- **Mobile optimization**: Consider shadow complexity on mobile devices
- **Battery impact**: Excessive shadows may impact battery life on mobile

## Browser Support

- **Universal support**: Text shadows work in all modern browsers
- **Graceful degradation**: Text remains readable if shadows don't render
- **Mobile compatibility**: Excellent support across mobile browsers
- **Print optimization**: Shadows are typically removed for print styles

## Design Guidelines

### Shadow Hierarchy
- **`.text-shadow`**: Subtle enhancement for improved readability
- **`.text-shadow-md`**: Moderate emphasis for important content
- **`.text-shadow-lg`**: Strong emphasis for hero content and maximum contrast

### Brand Compliance
- Shadows maintain Stanford's sophisticated aesthetic
- Black shadows with varying opacity preserve brand elegance
- Effects enhance rather than overwhelm content hierarchy

This text shadow system provides Stanford with sophisticated text enhancement capabilities that improve readability and visual appeal while maintaining accessibility standards and brand consistency.
