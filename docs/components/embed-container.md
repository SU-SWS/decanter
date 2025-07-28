# Embed Container Component Plugin

**File**: `/src/plugins/components/media/embed-container.js`

## Overview

The embed container component plugin provides a responsive wrapper for embedded media content that maintains a 16:9 aspect ratio regardless of viewport size. This ensures videos, iframes, and other embedded content scale properly and look great on all devices while preventing layout shifts and overflow issues.

## Purpose

Solves the common problem of embedded media breaking responsive layouts by providing a container that maintains aspect ratio and scales content appropriately. Essential for Stanford's multimedia content including lecture videos, virtual tours, interactive maps, and third-party integrations like YouTube videos or Google Maps embeds.

## CSS Classes Generated

### `.embed-container`

Creates a responsive container with 16:9 aspect ratio that automatically scales embedded content.

**CSS Output:**
```css
.embed-container {
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embed-container embed,
.embed-container iframe,
.embed-container object {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

**Key Features:**
- **16:9 aspect ratio**: Standard video aspect ratio (56.25% padding-bottom)
- **Responsive scaling**: Automatically adjusts to container width
- **Content positioning**: Embedded elements fill the entire container
- **Overflow protection**: Prevents content from breaking layout
- **Universal support**: Works with iframes, embeds, and objects

## Usage Examples

### YouTube Video Embeds
```html
<!-- Lecture series video embedding -->
<div class="space-y-[32px]">
  <div>
    <h2 class="text-m4 font-bold text-cardinal-red mb-[16px]">
      CS106A: Programming Methodology - Lecture 1
    </h2>
    <p class="text-m2 text-black-70 mb-[24px]">
      Welcome to CS106A! This introductory course teaches programming methodology 
      and problem-solving skills using the Java programming language.
    </p>
    
    <!-- Responsive YouTube embed -->
    <div class="embed-container rounded overflow-hidden shadow-lg">
      <iframe 
        src="https://www.youtube.com/embed/KkMDCCdjyW8" 
        title="CS106A Lecture 1: Introduction to Programming"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
    
    <div class="mt-[16px] flex flex-col sm:flex-row sm:items-center sm:justify-between text-m1 text-black-60">
      <div>
        <strong>Instructor:</strong> Prof. Mehran Sahami • 
        <strong>Duration:</strong> 48:32 • 
        <strong>Date:</strong> September 20, 2024
      </div>
      <div class="mt-[8px] sm:mt-0 flex space-x-[16px]">
        <a href="/cs106a/lecture1/transcript" class="text-digital-blue hover:text-digital-blue-dark">
          View Transcript
        </a>
        <a href="/cs106a/lecture1/slides" class="text-digital-blue hover:text-digital-blue-dark">
          Download Slides
        </a>
      </div>
    </div>
  </div>
  
  <div>
    <h3 class="text-m3 font-semibold mb-[16px]">Related Videos</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="embed-container">
          <iframe 
            src="https://www.youtube.com/embed/hr2QbWQBfKo" 
            title="CS106A Lecture 2: Variables and Expressions"
            frameborder="0" 
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[16px]">
          <h4 class="text-m2 font-semibold mb-[8px]">Lecture 2: Variables</h4>
          <p class="text-m1 text-black-70">Introduction to variables and basic expressions in Java.</p>
        </div>
      </div>
      
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="embed-container">
          <iframe 
            src="https://www.youtube.com/embed/gdnldgr5jYg" 
            title="CS106A Lecture 3: Control Flow"
            frameborder="0" 
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[16px]">
          <h4 class="text-m2 font-semibold mb-[8px]">Lecture 3: Control Flow</h4>
          <p class="text-m1 text-black-70">Understanding conditional statements and loops.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Campus Virtual Tours
```html
<!-- Interactive campus tour embedding -->
<div class="space-y-[24px]">
  <div>
    <h2 class="text-m5 font-bold text-cardinal-red mb-[16px]">
      Explore Stanford Campus
    </h2>
    <p class="text-m2 text-black-70 mb-[32px] max-w-prose">
      Take a virtual tour of Stanford's beautiful 8,180-acre campus. Explore iconic landmarks, 
      academic buildings, student housing, and recreational facilities from the comfort of your home.
    </p>
  </div>
  
  <!-- Main virtual tour -->
  <div class="bg-white border border-black-20 rounded-lg overflow-hidden shadow-lg">
    <div class="embed-container">
      <iframe 
        src="https://tour.stanford.edu/virtual-tour/embed" 
        title="Stanford University Virtual Campus Tour"
        frameborder="0"
        allow="fullscreen; gyroscope; accelerometer"
        allowfullscreen
      ></iframe>
    </div>
    <div class="p-[24px]">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 class="text-m3 font-semibold mb-[8px]">Interactive Campus Tour</h3>
          <p class="text-m2 text-black-70">
            Navigate through campus using your mouse or touch gestures. Click on hotspots for detailed information.
          </p>
        </div>
        <div class="mt-[16px] sm:mt-0">
          <a href="/visit/tour" class="bg-cardinal-red text-white px-[20px] py-[10px] rounded hover:bg-cardinal-red-dark transition-all">
            Schedule In-Person Tour
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Featured locations -->
  <div>
    <h3 class="text-m3 font-semibold mb-[20px]">Featured Locations</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
      <div class="bg-white border border-black-20 rounded overflow-hidden hover:shadow-md transition-all">
        <div class="embed-container">
          <iframe 
            src="https://tour.stanford.edu/hoover-tower/embed" 
            title="Hoover Tower Virtual Tour"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[16px]">
          <h4 class="text-m2 font-semibold mb-[8px]">Hoover Tower</h4>
          <p class="text-m1 text-black-70">Stanford's iconic landmark offering panoramic campus views.</p>
        </div>
      </div>
      
      <div class="bg-white border border-black-20 rounded overflow-hidden hover:shadow-md transition-all">
        <div class="embed-container">
          <iframe 
            src="https://tour.stanford.edu/memorial-church/embed" 
            title="Memorial Church Virtual Tour"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[16px]">
          <h4 class="text-m2 font-semibold mb-[8px]">Memorial Church</h4>
          <p class="text-m1 text-black-70">Beautiful architecture and historic significance at the heart of campus.</p>
        </div>
      </div>
      
      <div class="bg-white border border-black-20 rounded overflow-hidden hover:shadow-md transition-all">
        <div class="embed-container">
          <iframe 
            src="https://tour.stanford.edu/library/embed" 
            title="Green Library Virtual Tour"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[16px]">
          <h4 class="text-m2 font-semibold mb-[8px]">Green Library</h4>
          <p class="text-m1 text-black-70">Main library with extensive collections and study spaces.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Research Lab Presentations
```html
<!-- Research presentation and lab tour videos -->
<div class="space-y-[40px]">
  <div>
    <h2 class="text-m5 font-bold text-cardinal-red mb-[24px]">
      AI Lab Research Presentations
    </h2>
    
    <!-- Featured research presentation -->
    <div class="bg-white border border-black-20 rounded-lg overflow-hidden shadow-lg mb-[32px]">
      <div class="embed-container">
        <iframe 
          src="https://stanford.edu/research/ai-lab/presentation-embed/neural-networks-2024" 
          title="Advanced Neural Network Architectures - Dr. Fei-Fei Li"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="p-[24px]">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div class="lg:flex-1 mb-[16px] lg:mb-0">
            <h3 class="text-m4 font-semibold mb-[12px]">
              Advanced Neural Network Architectures for Computer Vision
            </h3>
            <p class="text-m2 text-black-70 mb-[16px]">
              Dr. Fei-Fei Li presents groundbreaking research on next-generation neural network 
              architectures that achieve state-of-the-art performance on computer vision tasks 
              while maintaining computational efficiency.
            </p>
            <div class="flex flex-wrap items-center gap-[16px] text-m1 text-black-60">
              <div><strong>Presenter:</strong> Dr. Fei-Fei Li</div>
              <div><strong>Date:</strong> March 15, 2024</div>
              <div><strong>Duration:</strong> 45:22</div>
              <div><strong>Conference:</strong> Stanford AI Symposium</div>
            </div>
          </div>
          <div class="lg:ml-[24px] flex flex-col space-y-[8px]">
            <a href="/research/ai-lab/papers/neural-architectures-2024.pdf" class="bg-cardinal-red text-white px-[20px] py-[10px] rounded text-center hover:bg-cardinal-red-dark transition-all">
              Download Paper
            </a>
            <a href="/research/ai-lab/presentations/neural-architectures-slides.pdf" class="border border-black-30 text-black px-[20px] py-[10px] rounded text-center hover:bg-black-10 transition-all">
              View Slides
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Additional presentations grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="embed-container">
          <iframe 
            src="https://stanford.edu/research/robotics/presentation-embed/autonomous-systems" 
            title="Autonomous Systems Research - Dr. Sebastian Thrun"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[20px]">
          <h4 class="text-m3 font-semibold mb-[8px]">Autonomous Systems</h4>
          <p class="text-m2 text-black-70 mb-[12px]">
            Exploring the future of self-driving vehicles and robotics.
          </p>
          <div class="text-m1 text-black-60">Dr. Sebastian Thrun • 38:15</div>
        </div>
      </div>
      
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="embed-container">
          <iframe 
            src="https://stanford.edu/research/medicine/presentation-embed/precision-medicine" 
            title="Precision Medicine Research - Dr. Atul Butte"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[20px]">
          <h4 class="text-m3 font-semibold mb-[8px]">Precision Medicine</h4>
          <p class="text-m2 text-black-70 mb-[12px]">
            Leveraging big data for personalized healthcare solutions.
          </p>
          <div class="text-m1 text-black-60">Dr. Atul Butte • 42:08</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Interactive Maps and Visualizations
```html
<!-- Campus maps and data visualizations -->
<div class="space-y-[32px]">
  <div>
    <h2 class="text-m4 font-bold text-cardinal-red mb-[20px]">
      Campus Maps & Resources
    </h2>
    
    <!-- Interactive campus map -->
    <div class="bg-white border border-black-20 rounded-lg overflow-hidden shadow-lg mb-[24px]">
      <div class="p-[20px] border-b border-black-20">
        <h3 class="text-m3 font-semibold mb-[8px]">Interactive Campus Map</h3>
        <p class="text-m2 text-black-70">
          Find buildings, parking, dining options, and more across Stanford's campus.
        </p>
      </div>
      <div class="embed-container">
        <iframe 
          src="https://maps.stanford.edu/embed?interactive=true" 
          title="Stanford University Interactive Campus Map"
          frameborder="0"
          allow="geolocation"
          allowfullscreen
        ></iframe>
      </div>
      <div class="p-[16px] bg-black-10 flex flex-wrap gap-[16px] text-m1">
        <a href="/maps/parking" class="text-digital-blue hover:text-digital-blue-dark">
          Parking Information
        </a>
        <a href="/maps/dining" class="text-digital-blue hover:text-digital-blue-dark">
          Dining Locations
        </a>
        <a href="/maps/accessibility" class="text-digital-blue hover:text-digital-blue-dark">
          Accessibility Features
        </a>
        <a href="/maps/transit" class="text-digital-blue hover:text-digital-blue-dark">
          Transportation
        </a>
      </div>
    </div>
    
    <!-- Research data visualization -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="p-[16px] border-b border-black-20">
          <h4 class="text-m3 font-semibold">Research Funding Trends</h4>
        </div>
        <div class="embed-container">
          <iframe 
            src="https://data.stanford.edu/visualizations/research-funding/embed" 
            title="Stanford Research Funding Trends Visualization"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="p-[16px] border-b border-black-20">
          <h4 class="text-m3 font-semibold">Student Demographics</h4>
        </div>
        <div class="embed-container">
          <iframe 
            src="https://data.stanford.edu/visualizations/student-demographics/embed" 
            title="Stanford Student Demographics Visualization"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Event Live Streams
```html
<!-- Live event streaming -->
<div class="space-y-[24px]" x-data="{ isLive: true }">
  <div>
    <h2 class="text-m4 font-bold text-cardinal-red mb-[16px]">
      Stanford Commencement 2024
    </h2>
    
    <!-- Live stream indicator -->
    <div x-show="isLive" class="bg-digital-red text-white px-[16px] py-[8px] rounded-full inline-flex items-center space-x-[8px] mb-[20px]">
      <div class="w-[8px] h-[8px] bg-white rounded-full animate-pulse"></div>
      <span class="text-m1 font-medium">LIVE NOW</span>
    </div>
    
    <!-- Main live stream -->
    <div class="bg-white border border-black-20 rounded-lg overflow-hidden shadow-lg">
      <div class="embed-container">
        <iframe 
          src="https://live.stanford.edu/commencement-2024/main-stream" 
          title="Stanford Commencement 2024 Live Stream"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div class="p-[24px]">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 class="text-m3 font-semibold mb-[8px]">Main Ceremony</h3>
            <p class="text-m2 text-black-70 mb-[12px]">
              Join us for the 133rd Commencement ceremony celebrating the Class of 2024.
            </p>
            <div class="text-m1 text-black-60">
              <strong>Time:</strong> 9:30 AM - 11:30 AM PT • 
              <strong>Location:</strong> Stanford Stadium
            </div>
          </div>
          <div class="mt-[16px] lg:mt-0 flex space-x-[12px]">
            <button class="bg-cardinal-red text-white px-[16px] py-[8px] rounded hover:bg-cardinal-red-dark transition-all">
              Share Stream
            </button>
            <button class="border border-black-30 text-black px-[16px] py-[8px] rounded hover:bg-black-10 transition-all">
              Full Screen
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Additional streams -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[24px]">
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="embed-container">
          <iframe 
            src="https://live.stanford.edu/commencement-2024/engineering-stream" 
            title="School of Engineering Ceremony"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[16px]">
          <h4 class="text-m2 font-semibold mb-[4px]">School of Engineering</h4>
          <p class="text-m1 text-black-70">Departmental celebration and degree conferring</p>
        </div>
      </div>
      
      <div class="bg-white border border-black-20 rounded overflow-hidden">
        <div class="embed-container">
          <iframe 
            src="https://live.stanford.edu/commencement-2024/medicine-stream" 
            title="School of Medicine Ceremony"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-[16px]">
          <h4 class="text-m2 font-semibold mb-[4px]">School of Medicine</h4>
          <p class="text-m1 text-black-70">Medical degree ceremony and Hippocratic Oath</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Accessibility-Enhanced Embeds
```html
<!-- Embeds with comprehensive accessibility features -->
<div class="space-y-[24px]">
  <div>
    <h2 class="text-m4 font-bold text-cardinal-red mb-[20px]">
      Accessible Course Content
    </h2>
    
    <!-- Video with transcript and captions -->
    <div class="bg-white border border-black-20 rounded-lg overflow-hidden shadow-lg">
      <div class="embed-container">
        <iframe 
          src="https://stanford.edu/courses/cs106a/videos/lecture1-accessible" 
          title="CS106A Lecture 1: Introduction to Programming - with captions and audio description"
          frameborder="0"
          allow="fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div class="p-[24px] space-y-[16px]">
        <div>
          <h3 class="text-m3 font-semibold mb-[8px]">Lecture 1: Introduction to Programming</h3>
          <p class="text-m2 text-black-70">
            Welcome to CS106A! This lecture introduces fundamental programming concepts using Java.
          </p>
        </div>
        
        <!-- Accessibility options -->
        <div class="border-t border-black-20 pt-[16px]">
          <h4 class="text-m2 font-semibold mb-[12px]">Accessibility Options</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] text-m1">
            <a href="/cs106a/lecture1/transcript" class="flex items-center space-x-[8px] text-digital-blue hover:text-digital-blue-dark">
              <svg class="w-[16px] h-[16px]" fill="currentColor"><!-- Transcript icon --></svg>
              <span>Full Transcript</span>
            </a>
            <a href="/cs106a/lecture1/captions" class="flex items-center space-x-[8px] text-digital-blue hover:text-digital-blue-dark">
              <svg class="w-[16px] h-[16px]" fill="currentColor"><!-- CC icon --></svg>
              <span>Download Captions</span>
            </a>
            <a href="/cs106a/lecture1/audio-description" class="flex items-center space-x-[8px] text-digital-blue hover:text-digital-blue-dark">
              <svg class="w-[16px] h-[16px]" fill="currentColor"><!-- Audio icon --></svg>
              <span>Audio Description</span>
            </a>
            <a href="/cs106a/lecture1/slides" class="flex items-center space-x-[8px] text-digital-blue hover:text-digital-blue-dark">
              <svg class="w-[16px] h-[16px]" fill="currentColor"><!-- Slides icon --></svg>
              <span>Lecture Slides</span>
            </a>
          </div>
        </div>
        
        <!-- Video controls info -->
        <div class="bg-black-10 p-[16px] rounded text-m1">
          <p class="text-black-70">
            <strong>Keyboard shortcuts:</strong> Spacebar to play/pause, M to mute, F for fullscreen, 
            C to toggle captions. All videos include closed captions and are screen reader compatible.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Implementation Guidelines

### Aspect Ratio Customization
```html
<!-- Default 16:9 aspect ratio -->
<div class="embed-container">
  <iframe src="..."></iframe>
</div>

<!-- Custom aspect ratios using utility classes -->
<div class="embed-container" style="padding-bottom: 75%;"> <!-- 4:3 aspect ratio -->
  <iframe src="..."></iframe>
</div>

<div class="embed-container" style="padding-bottom: 100%;"> <!-- 1:1 square -->
  <iframe src="..."></iframe>
</div>
```

### Responsive Behavior
```html
<!-- Responsive embed with max-width constraints -->
<div class="max-w-4xl mx-auto">
  <div class="embed-container">
    <iframe src="..."></iframe>
  </div>
</div>

<!-- Grid-based responsive embeds -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
  <div class="embed-container">
    <iframe src="..."></iframe>
  </div>
  <div class="embed-container">
    <iframe src="..."></iframe>
  </div>
</div>
```

## Accessibility Considerations

### Screen Reader Support
```html
<!-- Always include descriptive titles and allow attributes -->
<div class="embed-container">
  <iframe 
    src="..." 
    title="Descriptive title of the embedded content"
    allow="autoplay; fullscreen"
    allowfullscreen
  ></iframe>
</div>
```

### Keyboard Navigation
- Embedded content maintains keyboard accessibility
- Focus moves properly into and out of iframes
- Fullscreen controls remain keyboard accessible

### Loading Performance
```html
<!-- Lazy loading for performance -->
<div class="embed-container">
  <iframe 
    src="..." 
    loading="lazy"
    title="..."
  ></iframe>
</div>
```

## Performance Considerations

- **Minimal CSS overhead**: Simple padding-based aspect ratio technique
- **Hardware acceleration**: Position absolute elements trigger GPU acceleration
- **Lazy loading support**: Compatible with native iframe lazy loading
- **No JavaScript required**: Pure CSS solution for maximum performance

## Browser Support

- **Universal compatibility**: Works in all browsers supporting CSS positioning
- **Mobile optimization**: Touch-friendly scaling and interaction
- **Legacy support**: Graceful degradation for older browsers

This embed container component ensures Stanford's multimedia content displays beautifully and consistently across all devices while maintaining excellent accessibility and performance standards.
