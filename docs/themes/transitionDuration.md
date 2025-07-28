# Transition Duration Theme Plugin

**File**: `/src/plugins/theme/transitionDuration.js`

## Overview

The transition duration theme plugin customizes Tailwind's default transition timing by setting a more refined default duration of 250ms. This provides a smoother, more polished feel for Stanford's interactive elements while maintaining the snappy responsiveness users expect from modern web interfaces.

## Purpose

Establishes a consistent timing standard for animations and transitions across Stanford's digital properties. The 250ms default strikes an optimal balance between perceived responsiveness and smooth visual feedback, enhancing the overall user experience while maintaining accessibility standards.

## Transition Duration Configuration

### Default Duration Override

#### Standard Duration (DEFAULT) - 250ms
```javascript
DEFAULT: '250ms'  // Replaces Tailwind's default 150ms
```

**Purpose**: Stanford's preferred transition duration for most interactive elements.

**Comparison with Tailwind Default:**
- **Tailwind default**: `150ms` - Very fast, can feel abrupt
- **Stanford override**: `250ms` - Slightly longer for smoother feel
- **User perception**: More polished and intentional interactions

**Usage Guidelines:**
- **Hover states**: Button and link hover effects
- **Focus transitions**: Form element focus states
- **Color changes**: Background and text color transitions
- **Transform effects**: Scale, rotate, and translate animations
- **Opacity changes**: Fade in/out effects

## Complete Transition Duration System

When combined with Tailwind's default duration values, Stanford projects have access to:

### Tailwind Preserved Values
```css
duration-0          /* 0ms - Instant */
duration-75         /* 75ms - Very fast */
duration-100        /* 100ms - Fast */
duration-150        /* 150ms - Quick */
duration-200        /* 200ms - Moderately fast */
duration-300        /* 300ms - Medium */
duration-500        /* 500ms - Slow */
duration-700        /* 700ms - Very slow */
duration-1000       /* 1000ms - Extra slow */
```

### Stanford Enhancement
```css
duration            /* 250ms - Stanford default (enhanced) */
```

## Usage Examples

### Interactive Button States
```html
<!-- Buttons with Stanford's smooth transitions -->
<div class="space-x-[16px] space-y-[16px] md:space-y-0 flex flex-col md:flex-row">
  <!-- Primary button with default 250ms transition -->
  <button class="bg-cardinal-red text-white px-[24px] py-[12px] rounded transition hover:bg-cardinal-red-dark focus:bg-cardinal-red-dark focus:outline-none focus:ring-2 focus:ring-cardinal-red-light">
    Primary Action
  </button>
  
  <!-- Secondary button with custom transition properties -->
  <button class="border border-cardinal-red text-cardinal-red px-[24px] py-[12px] rounded transition-all hover:bg-cardinal-red hover:text-white focus:bg-cardinal-red focus:text-white focus:outline-none focus:ring-2 focus:ring-cardinal-red-light">
    Secondary Action
  </button>
  
  <!-- Outlined button with transform effect -->
  <button class="border border-digital-blue text-digital-blue px-[24px] py-[12px] rounded transition-all hover:scale-105 hover:bg-digital-blue hover:text-white focus:scale-105 focus:bg-digital-blue focus:text-white focus:outline-none focus:ring-2 focus:ring-digital-blue-light">
    Interactive Button
  </button>
  
  <!-- Ghost button with opacity transition -->
  <button class="text-black px-[24px] py-[12px] rounded border border-transparent transition-all hover:border-black-30 hover:bg-black-10 focus:border-black-30 focus:bg-black-10 focus:outline-none">
    Ghost Button
  </button>
</div>
```

### Form Element Transitions
```html
<!-- Form with smooth state transitions -->
<form class="space-y-[24px] max-w-lg">
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Full Name</label>
    <input 
      type="text" 
      class="w-full p-[12px] border border-black-30 rounded transition-all focus:border-digital-blue focus:ring-2 focus:ring-digital-blue-light focus:outline-none"
      placeholder="Enter your full name"
    >
  </div>
  
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Email Address</label>
    <input 
      type="email" 
      class="w-full p-[12px] border border-black-30 rounded transition-all focus:border-digital-blue focus:ring-2 focus:ring-digital-blue-light focus:outline-none hover:border-black-50"
      placeholder="your.email@stanford.edu"
    >
  </div>
  
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Department</label>
    <select class="w-full p-[12px] border border-black-30 rounded transition-all focus:border-digital-blue focus:ring-2 focus:ring-digital-blue-light focus:outline-none">
      <option value="">Select a department</option>
      <option value="cs">Computer Science</option>
      <option value="eng">Engineering</option>
      <option value="med">Medicine</option>
    </select>
  </div>
  
  <div>
    <label class="block text-m2 font-medium mb-[8px]">Message</label>
    <textarea 
      rows="4"
      class="w-full p-[12px] border border-black-30 rounded transition-all focus:border-digital-blue focus:ring-2 focus:ring-digital-blue-light focus:outline-none resize-none"
      placeholder="Your message..."
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    class="w-full bg-cardinal-red text-white py-[16px] rounded font-semibold transition-all hover:bg-cardinal-red-dark focus:bg-cardinal-red-dark focus:outline-none focus:ring-2 focus:ring-cardinal-red-light transform hover:scale-[1.02] active:scale-[0.98]"
  >
    Submit Application
  </button>
</form>
```

### Navigation and Link Transitions
```html
<!-- Navigation with smooth hover effects -->
<nav class="bg-white border-b border-black-20 py-[16px]">
  <div class="centered-container px-[40px]">
    <div class="flex justify-between items-center">
      <div class="font-stanford text-m4 text-cardinal-red">Stanford</div>
      
      <ul class="hidden md:flex space-x-[32px] text-m2">
        <li>
          <a href="#" class="text-black transition-all hover:text-cardinal-red relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cardinal-red after:left-0 after:bottom-[-4px] after:transition-all hover:after:w-full">
            Academics
          </a>
        </li>
        <li>
          <a href="#" class="text-black transition-all hover:text-cardinal-red relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cardinal-red after:left-0 after:bottom-[-4px] after:transition-all hover:after:w-full">
            Research
          </a>
        </li>
        <li>
          <a href="#" class="text-black transition-all hover:text-cardinal-red relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cardinal-red after:left-0 after:bottom-[-4px] after:transition-all hover:after:w-full">
            Campus Life
          </a>
        </li>
        <li>
          <a href="#" class="text-black transition-all hover:text-cardinal-red relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cardinal-red after:left-0 after:bottom-[-4px] after:transition-all hover:after:w-full">
            Admissions
          </a>
        </li>
      </ul>
      
      <div class="flex items-center space-x-[16px]">
        <button class="md:hidden text-black transition-all hover:text-cardinal-red">
          <svg class="w-[24px] h-[24px]"><!-- Menu icon --></svg>
        </button>
        <button class="bg-cardinal-red text-white px-[20px] py-[8px] rounded transition-all hover:bg-cardinal-red-dark transform hover:scale-105">
          Apply
        </button>
      </div>
    </div>
  </div>
</nav>
```

### Card Components with Hover Effects
```html
<!-- Cards with smooth transition effects -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
  <div class="bg-white border border-black-20 rounded p-[24px] transition-all hover:shadow-lg hover:border-cardinal-red hover:-translate-y-1 cursor-pointer">
    <div class="w-[60px] h-[60px] bg-cardinal-red rounded mb-[20px] transition-all group-hover:scale-110">
      <svg class="w-[32px] h-[32px] text-white m-[14px]"><!-- Icon --></svg>
    </div>
    <h3 class="text-m4 font-semibold text-black mb-[12px] transition-all hover:text-cardinal-red">
      Computer Science
    </h3>
    <p class="text-m2 text-black-70 mb-[20px]">
      Cutting-edge programs in AI, machine learning, and software engineering.
    </p>
    <a href="#" class="text-digital-blue hover:text-digital-blue-dark font-medium transition-all">
      Learn More →
    </a>
  </div>
  
  <div class="bg-white border border-black-20 rounded p-[24px] transition-all hover:shadow-lg hover:border-digital-blue hover:-translate-y-1 cursor-pointer">
    <div class="w-[60px] h-[60px] bg-digital-blue rounded mb-[20px] transition-all group-hover:scale-110">
      <svg class="w-[32px] h-[32px] text-white m-[14px]"><!-- Icon --></svg>
    </div>
    <h3 class="text-m4 font-semibold text-black mb-[12px] transition-all hover:text-digital-blue">
      Engineering
    </h3>
    <p class="text-m2 text-black-70 mb-[20px]">
      Innovation through technology and sustainable solutions.
    </p>
    <a href="#" class="text-digital-blue hover:text-digital-blue-dark font-medium transition-all">
      Explore Programs →
    </a>
  </div>
  
  <div class="bg-white border border-black-20 rounded p-[24px] transition-all hover:shadow-lg hover:border-digital-green hover:-translate-y-1 cursor-pointer">
    <div class="w-[60px] h-[60px] bg-digital-green rounded mb-[20px] transition-all group-hover:scale-110">
      <svg class="w-[32px] h-[32px] text-white m-[14px]"><!-- Icon --></svg>
    </div>
    <h3 class="text-m4 font-semibold text-black mb-[12px] transition-all hover:text-digital-green">
      Medicine
    </h3>
    <p class="text-m2 text-black-70 mb-[20px]">
      Advancing healthcare through research and clinical excellence.
    </p>
    <a href="#" class="text-digital-blue hover:text-digital-blue-dark font-medium transition-all">
      Discover More →
    </a>
  </div>
</div>
```

### Modal and Overlay Transitions
```html
<!-- Modal with smooth entrance/exit transitions -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-[24px]" x-show="modalOpen" x-transition:enter="transition-all" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-all" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
  <!-- Backdrop -->
  <div class="absolute inset-0 bg-black-90 opacity-50" @click="modalOpen = false"></div>
  
  <!-- Modal content -->
  <div class="relative bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-auto" x-transition:enter="transition-all duration-300" x-transition:enter-start="opacity-0 scale-95 translate-y-4" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition-all duration-200" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-95 translate-y-4">
    
    <header class="border-b border-black-20 p-[24px]">
      <div class="flex justify-between items-center">
        <h2 class="text-m5 font-bold text-cardinal-red">Application Form</h2>
        <button @click="modalOpen = false" class="text-black-50 hover:text-black transition-all">
          <svg class="w-[24px] h-[24px]"><!-- Close icon --></svg>
        </button>
      </div>
    </header>
    
    <div class="p-[24px]">
      <form class="space-y-[20px]">
        <div>
          <label class="block text-m2 font-medium mb-[8px]">Name</label>
          <input type="text" class="w-full p-[12px] border border-black-30 rounded transition-all focus:border-digital-blue focus:ring-2 focus:ring-digital-blue-light focus:outline-none">
        </div>
        
        <div>
          <label class="block text-m2 font-medium mb-[8px]">Email</label>
          <input type="email" class="w-full p-[12px] border border-black-30 rounded transition-all focus:border-digital-blue focus:ring-2 focus:ring-digital-blue-light focus:outline-none">
        </div>
        
        <div class="flex space-x-[16px] pt-[16px]">
          <button type="submit" class="flex-1 bg-cardinal-red text-white py-[12px] rounded transition-all hover:bg-cardinal-red-dark focus:bg-cardinal-red-dark focus:outline-none">
            Submit
          </button>
          <button type="button" @click="modalOpen = false" class="flex-1 border border-black-30 text-black py-[12px] rounded transition-all hover:bg-black-10 focus:bg-black-10 focus:outline-none">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
```

### Loading and State Transitions
```html
<!-- Loading states with smooth transitions -->
<div class="space-y-[24px]">
  <!-- Loading button -->
  <button class="bg-cardinal-red text-white px-[24px] py-[12px] rounded transition-all relative overflow-hidden" :class="loading ? 'cursor-not-allowed opacity-75' : 'hover:bg-cardinal-red-dark'" :disabled="loading">
    <span class="transition-all" :class="loading ? 'opacity-0' : 'opacity-100'">
      Submit Application
    </span>
    <div class="absolute inset-0 flex items-center justify-center transition-all" :class="loading ? 'opacity-100' : 'opacity-0'">
      <svg class="animate-spin w-[20px] h-[20px] text-white" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  </button>
  
  <!-- Progress indicator -->
  <div class="w-full bg-black-20 rounded-full h-[8px] overflow-hidden">
    <div class="bg-cardinal-red h-full rounded-full transition-all duration-500 ease-out" :style="`width: ${progress}%`"></div>
  </div>
  
  <!-- Status messages -->
  <div class="space-y-[12px]">
    <div class="bg-digital-green-light border border-digital-green rounded p-[16px] transition-all" x-show="success" x-transition:enter="transition-all" x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0">
      <div class="text-digital-green-dark font-medium">✓ Application submitted successfully</div>
    </div>
    
    <div class="bg-digital-red-light border border-digital-red rounded p-[16px] transition-all" x-show="error" x-transition:enter="transition-all" x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0">
      <div class="text-digital-red-dark font-medium">✗ Please correct the errors below</div>
    </div>
  </div>
</div>
```

## Advanced Transition Techniques

### Staggered Animations
```html
<!-- List items with staggered entrance animations -->
<ul class="space-y-[16px]">
  <li class="bg-white border border-black-20 rounded p-[20px] transition-all hover:shadow-md hover:border-cardinal-red" style="animation-delay: 0ms;">
    <h3 class="font-semibold mb-[8px]">First Item</h3>
    <p class="text-black-70">Content with staggered animation timing</p>
  </li>
  <li class="bg-white border border-black-20 rounded p-[20px] transition-all hover:shadow-md hover:border-cardinal-red" style="animation-delay: 100ms;">
    <h3 class="font-semibold mb-[8px]">Second Item</h3>
    <p class="text-black-70">Each item animates slightly after the previous</p>
  </li>
  <li class="bg-white border border-black-20 rounded p-[20px] transition-all hover:shadow-md hover:border-cardinal-red" style="animation-delay: 200ms;">
    <h3 class="font-semibold mb-[8px]">Third Item</h3>
    <p class="text-black-70">Creating a smooth cascade effect</p>
  </li>
</ul>
```

### Performance Considerations

#### GPU Acceleration
```html
<!-- Optimize transitions for performance -->
<div class="transform transition-all will-change-transform hover:scale-105">
  GPU-accelerated scaling transition
</div>

<div class="opacity-100 transition-opacity will-change-auto hover:opacity-75">
  Optimized opacity transition
</div>
```

#### Reduced Motion Support
```html
<!-- Respect user preferences for reduced motion -->
<button class="bg-cardinal-red text-white px-[24px] py-[12px] rounded transition-all motion-reduce:transition-none hover:bg-cardinal-red-dark transform hover:scale-105 motion-reduce:transform-none">
  Accessible Button
</button>
```

## Accessibility and UX Guidelines

### Timing Standards
- **250ms default**: Provides smooth feedback without feeling sluggish
- **Duration hierarchy**: Use shorter durations (150ms-200ms) for micro-interactions, longer (300ms-500ms) for major state changes
- **Consistency**: Maintain consistent timing across similar interaction types

### User Preferences
```html
<!-- Honor reduced motion preferences -->
<style>
@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none !important;
  }
}
</style>
```

This enhanced transition duration system ensures Stanford's interfaces feel polished and responsive while maintaining excellent performance and accessibility standards across all user interactions.
