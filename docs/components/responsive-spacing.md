# Responsive Spacing Component Plugin

**File**: `/src/plugins/components/responsive-spacing/responsive-spacing.js`

## Overview

The responsive spacing component plugin provides an advanced spacing system with adaptive margin and padding values that scale smoothly across breakpoints. Unlike standard Tailwind spacing, this system offers curated responsive spacing scales that maintain visual harmony and proper proportions as viewport sizes change.

## Purpose

Creates sophisticated layouts with spacing that adapts intelligently to different screen sizes. Essential for Stanford's complex layouts where consistent visual rhythm and proportional spacing are critical for readability and aesthetic appeal across desktop, tablet, and mobile devices.

## Spacing Scale System

The plugin generates responsive spacing classes using a curated map with three breakpoint values:
- **xs** (360px+): Base mobile spacing
- **md** (768px+): Tablet and small desktop spacing  
- **2xl** (1500px+): Large desktop spacing

### Spacing Scale Values

| Level | XS (360px+) | MD (768px+) | 2XL (1500px+) | Use Case |
|-------|-------------|-------------|---------------|----------|
| neg2  | 0.8rem      | 0.9rem      | 1rem          | Tight spacing |
| neg1  | 1.1rem      | 1.2rem      | 1.3rem        | Minimal spacing |
| 0     | 1.5rem      | 1.8rem      | 1.9rem        | Small spacing |
| 1     | 2rem        | 2.6rem      | 2.7rem        | Medium spacing |
| 2     | 3rem        | 3.6rem      | 3.8rem        | Large spacing |
| 3     | 3.2rem      | 4.5rem      | 4.8rem        | Section spacing |
| 4     | 3.4rem      | 5.8rem      | 6.1rem        | Component spacing |
| 5     | 3.8rem      | 7.2rem      | 7.6rem        | Page spacing |
| 6     | 4.5rem      | 9rem        | 9.5rem        | Hero spacing |
| 7     | 5rem        | 10.8rem     | 11.4rem       | Large section spacing |
| 8     | 6rem        | 12.6rem     | 13.3rem       | Page section spacing |
| 9     | 7rem        | 16.2rem     | 17.1rem       | Major spacing |
| 10    | 8rem        | 21.6rem     | 22.8rem       | Maximum spacing |

## CSS Classes Generated

### Class Naming Convention

The plugin uses the prefix `.rs` (responsive spacing) with the following pattern:
```
.rs-{property}{direction}-{level}
```

Where:
- **property**: `m` (margin) or `p` (padding)
- **direction**: `t` (top), `r` (right), `b` (bottom), `l` (left), `x` (horizontal), `y` (vertical), or empty (all sides)
- **level**: `neg2` through `10`

### Margin Classes

**All sides margin:**
```css
.rs-m-1 {
  margin: 2rem;
}
@media (min-width: 768px) {
  .rs-m-1 { margin: 2.6rem; }
}
@media (min-width: 1500px) {
  .rs-m-1 { margin: 2.7rem; }
}
```

**Directional margins:**
- `.rs-mt-{level}` - margin-top
- `.rs-mr-{level}` - margin-right  
- `.rs-mb-{level}` - margin-bottom
- `.rs-ml-{level}` - margin-left
- `.rs-mx-{level}` - margin-left and margin-right
- `.rs-my-{level}` - margin-top and margin-bottom

### Padding Classes

**All sides padding:**
```css
.rs-p-2 {
  padding: 3rem;
}
@media (min-width: 768px) {
  .rs-p-2 { padding: 3.6rem; }
}
@media (min-width: 1500px) {
  .rs-p-2 { padding: 3.8rem; }
}
```

**Directional padding:**
- `.rs-pt-{level}` - padding-top
- `.rs-pr-{level}` - padding-right
- `.rs-pb-{level}` - padding-bottom  
- `.rs-pl-{level}` - padding-left
- `.rs-px-{level}` - padding-left and padding-right
- `.rs-py-{level}` - padding-top and padding-bottom

## Usage Examples

### Page Layout Structure
```html
<!-- Main page layout with responsive spacing -->
<main class="rs-py-4">
  <!-- Hero section with maximum spacing -->
  <section class="bg-cardinal-red text-white rs-py-6">
    <div class="centered-container px-[40px]">
      <div class="max-w-4xl">
        <h1 class="text-m7 font-bold rs-mb-2">
          Welcome to Stanford University
        </h1>
        <p class="text-m3 rs-mb-3">
          Where the brightest minds come together to solve the world's greatest challenges 
          through interdisciplinary collaboration and innovative research.
        </p>
        <div class="flex flex-col sm:flex-row space-y-[16px] sm:space-y-0 sm:space-x-[20px]">
          <a href="/admissions" class="bg-white text-cardinal-red px-[32px] py-[16px] rounded font-semibold hover:bg-white-90 transition-all text-center">
            Apply Now
          </a>
          <a href="/visit" class="border border-white text-white px-[32px] py-[16px] rounded font-semibold hover:bg-white hover:text-cardinal-red transition-all text-center">
            Visit Campus
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Features section with section-level spacing -->
  <section class="bg-white rs-py-4">
    <div class="centered-container px-[40px]">
      <div class="text-center rs-mb-3">
        <h2 class="text-m6 font-bold text-cardinal-red rs-mb-1">
          Academic Excellence
        </h2>
        <p class="text-m3 text-black-70 max-w-3xl mx-auto">
          Stanford offers world-class education across seven schools with cutting-edge research opportunities and innovative programs.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
        <div class="text-center rs-p-2 bg-white border border-black-20 rounded hover:shadow-lg transition-all">
          <div class="w-[80px] h-[80px] bg-cardinal-red rounded-full mx-auto rs-mb-1 flex items-center justify-center">
            <svg class="w-[40px] h-[40px] text-white"><!-- Education icon --></svg>
          </div>
          <h3 class="text-m4 font-semibold rs-mb-neg1">Undergraduate Programs</h3>
          <p class="text-m2 text-black-70">
            69 undergraduate majors across humanities, sciences, and engineering.
          </p>
        </div>
        
        <div class="text-center rs-p-2 bg-white border border-black-20 rounded hover:shadow-lg transition-all">
          <div class="w-[80px] h-[80px] bg-digital-blue rounded-full mx-auto rs-mb-1 flex items-center justify-center">
            <svg class="w-[40px] h-[40px] text-white"><!-- Research icon --></svg>
          </div>
          <h3 class="text-m4 font-semibold rs-mb-neg1">Graduate Programs</h3>
          <p class="text-m2 text-black-70">
            130+ graduate programs leading to master's and doctoral degrees.
          </p>
        </div>
        
        <div class="text-center rs-p-2 bg-white border border-black-20 rounded hover:shadow-lg transition-all">
          <div class="w-[80px] h-[80px] bg-digital-green rounded-full mx-auto rs-mb-1 flex items-center justify-center">
            <svg class="w-[40px] h-[40px] text-white"><!-- Innovation icon --></svg>
          </div>
          <h3 class="text-m4 font-semibold rs-mb-neg1">Research Centers</h3>
          <p class="text-m2 text-black-70">
            Over 20 interdisciplinary institutes and research centers.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Research showcase with component spacing -->
  <section class="bg-black-10 rs-py-3">
    <div class="centered-container px-[40px]">
      <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-[48px]">
        <div class="lg:flex-1 rs-mb-2 lg:mb-0">
          <h2 class="text-m5 font-bold text-cardinal-red rs-mb-1">
            Groundbreaking Research
          </h2>
          <p class="text-m3 text-black-70 rs-mb-2">
            Stanford researchers are pioneering solutions to global challenges through 
            innovative interdisciplinary collaboration and cutting-edge technology.
          </p>
          <div class="space-y-[16px]">
            <div class="flex items-start space-x-[16px]">
              <div class="w-[8px] h-[8px] bg-cardinal-red rounded-full mt-[8px] flex-shrink-0"></div>
              <div>
                <h4 class="text-m3 font-semibold">Artificial Intelligence</h4>
                <p class="text-m2 text-black-70">Advancing AI for social good and human benefit</p>
              </div>
            </div>
            <div class="flex items-start space-x-[16px]">
              <div class="w-[8px] h-[8px] bg-cardinal-red rounded-full mt-[8px] flex-shrink-0"></div>
              <div>
                <h4 class="text-m3 font-semibold">Climate Change</h4>
                <p class="text-m2 text-black-70">Developing sustainable solutions for environmental challenges</p>
              </div>
            </div>
            <div class="flex items-start space-x-[16px]">
              <div class="w-[8px] h-[8px] bg-cardinal-red rounded-full mt-[8px] flex-shrink-0"></div>
              <div>
                <h4 class="text-m3 font-semibold">Precision Medicine</h4>
                <p class="text-m2 text-black-70">Personalizing healthcare through genomics and data science</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:flex-1">
          <img 
            src="/images/research-lab.jpg" 
            alt="Stanford research laboratory" 
            class="w-full h-[400px] object-cover rounded-lg shadow-lg"
          >
        </div>
      </div>
    </div>
  </section>
</main>
```

### News and Events Layout
```html
<!-- News section with responsive spacing hierarchy -->
<section class="bg-white rs-py-4">
  <div class="centered-container px-[40px]">
    <div class="rs-mb-3">
      <h2 class="text-m5 font-bold text-cardinal-red rs-mb-1">
        Latest News & Events
      </h2>
      <p class="text-m3 text-black-70">
        Stay updated with the latest developments and upcoming events at Stanford.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
      <!-- Featured news -->
      <div>
        <h3 class="text-m4 font-semibold rs-mb-2">Featured News</h3>
        
        <article class="rs-mb-2 rs-p-2 bg-white border border-black-20 rounded-lg hover:shadow-md transition-all">
          <img 
            src="/images/news/ai-symposium.jpg" 
            alt="Stanford AI Symposium 2024" 
            class="w-full h-[200px] object-cover rounded rs-mb-1"
          >
          <div class="rs-p-1">
            <div class="text-xs text-cardinal-red font-medium rs-mb-neg2 uppercase tracking-wide">
              University News
            </div>
            <h4 class="text-m3 font-semibold rs-mb-neg1">
              <a href="/news/ai-symposium-2024" class="text-black hover:text-cardinal-red transition-all">
                Stanford Hosts AI for Social Good Symposium
              </a>
            </h4>
            <p class="text-m2 text-black-70 rs-mb-neg1">
              Leading researchers and industry experts gather to discuss the future of 
              artificial intelligence and its potential to address global challenges.
            </p>
            <div class="text-m1 text-black-60">June 15, 2024</div>
          </div>
        </article>
        
        <div class="space-y-[20px]">
          <article class="flex space-x-[16px] rs-p-1 border border-black-20 rounded hover:bg-black-10 transition-all">
            <img 
              src="/images/news/research-grant.jpg" 
              alt="Research Grant" 
              class="w-[100px] h-[80px] object-cover rounded flex-shrink-0"
            >
            <div>
              <h5 class="text-m2 font-semibold rs-mb-neg2">
                <a href="/news/nsf-grant" class="text-black hover:text-cardinal-red transition-all">
                  $50M NSF Grant Awarded for Quantum Research
                </a>
              </h5>
              <p class="text-m1 text-black-70 rs-mb-neg2">
                Five-year funding will advance quantum computing and error correction research.
              </p>
              <div class="text-xs text-black-60">June 12, 2024</div>
            </div>
          </article>
          
          <article class="flex space-x-[16px] rs-p-1 border border-black-20 rounded hover:bg-black-10 transition-all">
            <img 
              src="/images/news/commencement.jpg" 
              alt="Commencement 2024" 
              class="w-[100px] h-[80px] object-cover rounded flex-shrink-0"
            >
            <div>
              <h5 class="text-m2 font-semibold rs-mb-neg2">
                <a href="/news/commencement-2024" class="text-black hover:text-cardinal-red transition-all">
                  Class of 2024 Celebrates at Commencement
                </a>
              </h5>
              <p class="text-m1 text-black-70 rs-mb-neg2">
                Over 1,700 students received degrees in a memorable ceremony.
              </p>
              <div class="text-xs text-black-60">June 10, 2024</div>
            </div>
          </article>
        </div>
      </div>
      
      <!-- Upcoming events -->
      <div>
        <h3 class="text-m4 font-semibold rs-mb-2">Upcoming Events</h3>
        
        <div class="space-y-[20px]">
          <div class="rs-p-2 bg-cardinal-red text-white rounded-lg">
            <div class="flex justify-between items-start rs-mb-1">
              <div>
                <h4 class="text-m3 font-semibold">New Student Orientation</h4>
                <p class="text-white-90">Welcome activities and academic preparation</p>
              </div>
              <div class="text-right text-white-90 text-m1">
                <div class="font-bold">SEP</div>
                <div class="text-m4 font-bold">15</div>
              </div>
            </div>
            <div class="text-white-90 text-m1">
              9:00 AM - 5:00 PM • Various Locations
            </div>
          </div>
          
          <div class="rs-p-2 bg-white border border-black-20 rounded hover:shadow-md transition-all">
            <div class="flex justify-between items-start rs-mb-neg1">
              <div>
                <h4 class="text-m3 font-semibold text-digital-blue">Research Showcase</h4>
                <p class="text-black-70">Graduate student research presentations</p>
              </div>
              <div class="text-right text-black-60 text-m1">
                <div class="font-bold">SEP</div>
                <div class="text-m4 font-bold">22</div>
              </div>
            </div>
            <div class="text-black-60 text-m1">
              2:00 PM - 6:00 PM • Memorial Auditorium
            </div>
          </div>
          
          <div class="rs-p-2 bg-white border border-black-20 rounded hover:shadow-md transition-all">
            <div class="flex justify-between items-start rs-mb-neg1">
              <div>
                <h4 class="text-m3 font-semibold text-digital-green">Alumni Homecoming</h4>
                <p class="text-black-70">Reunion weekend for all Stanford alumni</p>
              </div>
              <div class="text-right text-black-60 text-m1">
                <div class="font-bold">OCT</div>
                <div class="text-m4 font-bold">5-6</div>
              </div>
            </div>
            <div class="text-black-60 text-m1">
              All Day • Campus-wide
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Faculty Profile Layout
```html
<!-- Faculty profile with sophisticated spacing -->
<div class="bg-white rs-py-3">
  <div class="centered-container px-[40px]">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
      <!-- Faculty info -->
      <div class="lg:col-span-1">
        <div class="rs-p-2 bg-white border border-black-20 rounded-lg shadow-lg">
          <img 
            src="/images/faculty/dr-smith.jpg" 
            alt="Dr. Sarah Smith" 
            class="w-full aspect-square object-cover rounded rs-mb-1"
          >
          <div class="text-center">
            <h1 class="text-m4 font-bold text-cardinal-red rs-mb-neg2">
              Dr. Sarah Smith
            </h1>
            <p class="text-m2 text-black-70 rs-mb-neg1">
              Professor of Computer Science
            </p>
            <p class="text-m1 text-black-60 rs-mb-1">
              Director, AI for Social Good Lab
            </p>
            
            <div class="space-y-[8px] text-m1">
              <div class="flex items-center space-x-[8px]">
                <svg class="w-[16px] h-[16px] text-black-50"><!-- Email icon --></svg>
                <a href="mailto:sarah.smith@stanford.edu" class="text-digital-blue hover:text-digital-blue-dark">
                  sarah.smith@stanford.edu
                </a>
              </div>
              <div class="flex items-center space-x-[8px]">
                <svg class="w-[16px] h-[16px] text-black-50"><!-- Phone icon --></svg>
                <span class="text-black-70">(650) 723-4567</span>
              </div>
              <div class="flex items-center space-x-[8px]">
                <svg class="w-[16px] h-[16px] text-black-50"><!-- Location icon --></svg>
                <span class="text-black-70">Gates 394</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Content area -->
      <div class="lg:col-span-2 space-y-[32px]">
        <!-- Biography -->
        <section>
          <h2 class="text-m4 font-semibold text-cardinal-red rs-mb-1">Biography</h2>
          <div class="text-m2 text-black-70 space-y-[16px]">
            <p>
              Dr. Sarah Smith is a Professor of Computer Science at Stanford University and Director 
              of the AI for Social Good Laboratory. Her research focuses on developing artificial 
              intelligence systems that address global challenges in healthcare, education, and 
              environmental sustainability.
            </p>
            <p>
              Before joining Stanford in 2018, Dr. Smith was a Senior Research Scientist at Google AI, 
              where she led initiatives on responsible AI development and deployment. She received her 
              Ph.D. in Computer Science from MIT in 2012.
            </p>
          </div>
        </section>
        
        <!-- Research Areas -->
        <section>
          <h2 class="text-m4 font-semibold text-cardinal-red rs-mb-1">Research Areas</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div class="rs-p-1 bg-black-10 rounded">
              <h3 class="text-m3 font-semibold rs-mb-neg2">Machine Learning</h3>
              <p class="text-m2 text-black-70">
                Deep learning architectures for social impact applications
              </p>
            </div>
            <div class="rs-p-1 bg-black-10 rounded">
              <h3 class="text-m3 font-semibold rs-mb-neg2">AI Ethics</h3>
              <p class="text-m2 text-black-70">
                Developing frameworks for responsible AI development
              </p>
            </div>
            <div class="rs-p-1 bg-black-10 rounded">
              <h3 class="text-m3 font-semibold rs-mb-neg2">Healthcare AI</h3>
              <p class="text-m2 text-black-70">
                AI applications in medical diagnosis and treatment
              </p>
            </div>
            <div class="rs-p-1 bg-black-10 rounded">
              <h3 class="text-m3 font-semibold rs-mb-neg2">Education Technology</h3>
              <p class="text-m2 text-black-70">
                Personalized learning systems and adaptive curricula
              </p>
            </div>
          </div>
        </section>
        
        <!-- Recent Publications -->
        <section>
          <h2 class="text-m4 font-semibold text-cardinal-red rs-mb-1">Recent Publications</h2>
          <div class="space-y-[16px]">
            <article class="rs-p-1 border border-black-20 rounded">
              <h3 class="text-m3 font-semibold rs-mb-neg2">
                <a href="/publications/ai-healthcare-2024" class="text-digital-blue hover:text-digital-blue-dark">
                  "Advancing Healthcare Through Responsible AI: A Framework for Ethical Implementation"
                </a>
              </h3>
              <p class="text-m2 text-black-70 rs-mb-neg2">
                Nature Machine Intelligence, 2024. Co-authored with researchers from Stanford Medicine 
                and the AI Ethics Lab.
              </p>
              <div class="text-m1 text-black-60">
                Published March 2024 • Cited 127 times
              </div>
            </article>
            
            <article class="rs-p-1 border border-black-20 rounded">
              <h3 class="text-m3 font-semibold rs-mb-neg2">
                <a href="/publications/education-ai-2023" class="text-digital-blue hover:text-digital-blue-dark">
                  "Personalized Learning at Scale: Machine Learning Approaches to Adaptive Education"
                </a>
              </h3>
              <p class="text-m2 text-black-70 rs-mb-neg2">
                Proceedings of the 2023 Conference on Learning Analytics and Knowledge. 
                Collaborative work with Stanford's Graduate School of Education.
              </p>
              <div class="text-m1 text-black-60">
                Published October 2023 • Cited 89 times
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```

## Best Practices

### Spacing Hierarchy
Use responsive spacing levels to create clear visual hierarchy:

```html
<!-- Page-level spacing (largest) -->
<main class="rs-py-5">
  <!-- Section-level spacing -->
  <section class="rs-py-3">
    <!-- Component-level spacing -->
    <div class="rs-p-2">
      <!-- Element-level spacing -->
      <h2 class="rs-mb-1">Title</h2>
      <p class="rs-mb-neg1">Content</p>
    </div>
  </section>
</main>
```

### Combining with Standard Tailwind
Mix responsive spacing with standard Tailwind utilities:

```html
<div class="rs-py-3 px-[40px] max-w-4xl mx-auto">
  <h1 class="rs-mb-2 text-m5 font-bold">Title</h1>
  <p class="rs-mb-1 text-m2 text-black-70">Content</p>
</div>
```

## Accessibility Considerations

### Reading Rhythm
- Responsive spacing maintains comfortable reading rhythm across devices
- Consistent spacing hierarchy aids screen reader navigation
- Adequate spacing prevents content from feeling cramped on any device

### Focus Indicators
- Sufficient spacing ensures focus indicators are clearly visible
- Touch targets maintain adequate spacing on mobile devices
- Keyboard navigation benefits from consistent spatial relationships

## Performance Considerations

- **CSS efficiency**: Uses media queries for responsive behavior
- **Minimal output**: Only generates classes that follow the established pattern
- **No JavaScript required**: Pure CSS solution for maximum performance

## Browser Support

- **Universal compatibility**: Works in all browsers supporting CSS media queries
- **Progressive enhancement**: Graceful degradation for older browsers
- **Mobile optimization**: Optimized for touch interfaces and varying screen densities

This responsive spacing system provides Stanford with sophisticated layout control that adapts intelligently across all devices while maintaining visual consistency and hierarchical clarity.
