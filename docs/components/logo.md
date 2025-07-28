# Logo Component Plugin

**File**: `/src/plugins/components/logo/logo.js`

## Overview

The logo component plugin provides specialized styling for displaying the Stanford University logo using custom font glyphs and typography. It ensures consistent branding across all Stanford digital properties while maintaining optimal readability and visual hierarchy with Stanford's signature Cardinal Red color.

## Purpose

Establishes consistent Stanford brand presentation through proper logo typography, spacing, and color application. The component handles font rendering optimizations and maintains brand guidelines while providing flexibility for different contexts and color overrides when necessary.

## CSS Classes Generated

### `.logo`

Creates properly styled Stanford logo text with optimized typography and brand-compliant color.

**CSS Output:**
```css
.logo {
  display: inline-block;
  font-family: 'Stanford', sans-serif;
  font-weight: 400;
  line-height: 0.75;
  text-decoration: none;
  text-transform: none;
  transform: translateZ(0);
  font-style: normal;
  font-variant: normal;
  letter-spacing: 0;
  color: #8C1515; /* Cardinal Red */
  font-feature-settings: "liga" 1;
  font-variant-ligatures: discretionary-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo:focus,
.logo:hover {
  color: #8C1515; /* Maintains Cardinal Red on interaction */
}
```

**Key Features:**
- **Stanford font family**: Uses the official Stanford font with system fallbacks
- **Optimized rendering**: Hardware acceleration and font smoothing for crisp display
- **Brand color consistency**: Cardinal Red default with hover/focus state preservation
- **Typography optimization**: Proper line-height and letter spacing for logo display
- **Ligature support**: Enhanced typography through font ligatures

## Usage Examples

### Header Logo Placement
```html
<!-- Primary site header with Stanford logo -->
<header class="bg-white border-b border-black-20 py-[16px]">
  <div class="centered-container px-[40px]">
    <div class="flex justify-between items-center">
      <!-- Main Stanford logo -->
      <a href="/" class="logo text-m5">
        Stanford University
      </a>
      
      <!-- Navigation -->
      <nav class="hidden md:flex space-x-[32px]">
        <a href="/academics" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Academics
        </a>
        <a href="/research" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Research
        </a>
        <a href="/campus-life" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Campus Life
        </a>
        <a href="/admissions" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Admissions
        </a>
      </nav>
      
      <!-- Action button -->
      <button class="bg-cardinal-red text-white px-[20px] py-[10px] rounded hover:bg-cardinal-red-dark transition-all">
        Apply Now
      </button>
    </div>
  </div>
</header>
```

### School and Department Branding
```html
<!-- School of Engineering header -->
<div class="bg-white py-[24px] border-b border-black-20">
  <div class="centered-container px-[40px]">
    <div class="flex items-center space-x-[24px]">
      <!-- Stanford logo -->
      <a href="/" class="logo text-m4">
        Stanford
      </a>
      
      <!-- Department separator -->
      <div class="w-[1px] h-[32px] bg-black-30"></div>
      
      <!-- Department name -->
      <div>
        <h1 class="text-m4 font-semibold text-black">School of Engineering</h1>
        <p class="text-m1 text-black-70">Innovating for the Future</p>
      </div>
    </div>
  </div>
</div>

<!-- Department of Computer Science -->
<div class="bg-cardinal-red text-white py-[32px]">
  <div class="centered-container px-[40px]">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <div class="flex items-center space-x-[20px] mb-[16px] md:mb-0">
        <!-- White Stanford logo variant -->
        <a href="/" class="logo text-m3 text-white">
          Stanford
        </a>
        <div class="w-[1px] h-[24px] bg-white-30"></div>
        <div>
          <h1 class="text-m4 font-bold">Computer Science</h1>
          <p class="text-m2 text-white-80">Department of Computer Science</p>
        </div>
      </div>
      
      <div class="flex space-x-[16px]">
        <a href="/cs/academics" class="text-white hover:text-white-80 transition-all">
          Academics
        </a>
        <a href="/cs/research" class="text-white hover:text-white-80 transition-all">
          Research
        </a>
        <a href="/cs/faculty" class="text-white hover:text-white-80 transition-all">
          Faculty
        </a>
      </div>
    </div>
  </div>
</div>
```

### Footer Logo Applications
```html
<!-- Site footer with Stanford branding -->
<footer class="bg-black text-white py-[48px]">
  <div class="centered-container px-[40px]">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-[32px] mb-[40px]">
      <!-- Logo and main info -->
      <div class="lg:col-span-1">
        <a href="/" class="logo text-m4 text-white mb-[20px] block">
          Stanford University
        </a>
        <address class="not-italic text-m2 text-white-80 leading-relaxed">
          450 Jane Stanford Way<br>
          Stanford, CA 94305<br>
          <a href="tel:+16507231011" class="hover:text-white transition-all">
            (650) 723-1011
          </a>
        </address>
        
        <!-- Social media links -->
        <div class="flex space-x-[16px] mt-[20px]">
          <a href="https://twitter.com/stanford" class="text-white-80 hover:text-white transition-all">
            <span class="sr-only">Twitter</span>
            <svg class="w-[24px] h-[24px]" fill="currentColor"><!-- Twitter icon --></svg>
          </a>
          <a href="https://facebook.com/stanford" class="text-white-80 hover:text-white transition-all">
            <span class="sr-only">Facebook</span>
            <svg class="w-[24px] h-[24px]" fill="currentColor"><!-- Facebook icon --></svg>
          </a>
          <a href="https://instagram.com/stanford" class="text-white-80 hover:text-white transition-all">
            <span class="sr-only">Instagram</span>
            <svg class="w-[24px] h-[24px]" fill="currentColor"><!-- Instagram icon --></svg>
          </a>
        </div>
      </div>
      
      <!-- Navigation columns -->
      <div>
        <h3 class="text-m3 font-semibold mb-[16px]">Academics</h3>
        <ul class="space-y-[8px] text-white-80">
          <li><a href="/schools" class="hover:text-white transition-all">Schools & Colleges</a></li>
          <li><a href="/departments" class="hover:text-white transition-all">Departments</a></li>
          <li><a href="/courses" class="hover:text-white transition-all">Course Catalog</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-m3 font-semibold mb-[16px]">Research</h3>
        <ul class="space-y-[8px] text-white-80">
          <li><a href="/research" class="hover:text-white transition-all">Research Areas</a></li>
          <li><a href="/labs" class="hover:text-white transition-all">Labs & Centers</a></li>
          <li><a href="/faculty" class="hover:text-white transition-all">Faculty</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-m3 font-semibold mb-[16px]">Campus Life</h3>
        <ul class="space-y-[8px] text-white-80">
          <li><a href="/housing" class="hover:text-white transition-all">Housing</a></li>
          <li><a href="/athletics" class="hover:text-white transition-all">Athletics</a></li>
          <li><a href="/events" class="hover:text-white transition-all">Events</a></li>
        </ul>
      </div>
    </div>
    
    <!-- Footer bottom -->
    <div class="border-t border-white-20 pt-[24px] flex flex-col md:flex-row md:justify-between md:items-center">
      <p class="text-m1 text-white-60 mb-[16px] md:mb-0">
        © 2024 Stanford University. All rights reserved.
      </p>
      <div class="flex space-x-[24px] text-m1">
        <a href="/privacy" class="text-white-80 hover:text-white transition-all">Privacy</a>
        <a href="/terms" class="text-white-80 hover:text-white transition-all">Terms</a>
        <a href="/accessibility" class="text-white-80 hover:text-white transition-all">Accessibility</a>
      </div>
    </div>
  </div>
</footer>
```

### Research Center and Lab Branding
```html
<!-- Stanford AI Lab header -->
<div class="bg-gradient-to-r from-cardinal-red to-cardinal-red-dark text-white py-[40px]">
  <div class="centered-container px-[40px]">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <div class="flex items-center space-x-[24px] mb-[20px] md:mb-0">
        <!-- Stanford logo in white -->
        <a href="/" class="logo text-m3 text-white">
          Stanford
        </a>
        <div class="w-[1px] h-[32px] bg-white-30"></div>
        <div>
          <h1 class="text-m5 font-bold">Artificial Intelligence Laboratory</h1>
          <p class="text-m2 text-white-90">Advancing the Science of Intelligence</p>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row space-y-[12px] sm:space-y-0 sm:space-x-[16px]">
        <a href="/ai-lab/about" class="bg-white bg-opacity-20 text-white px-[20px] py-[10px] rounded hover:bg-opacity-30 transition-all text-center">
          About the Lab
        </a>
        <a href="/ai-lab/research" class="border border-white text-white px-[20px] py-[10px] rounded hover:bg-white hover:text-cardinal-red transition-all text-center">
          Our Research
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Medical School branding -->
<div class="bg-white py-[32px] border-b-4 border-digital-green">
  <div class="centered-container px-[40px]">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-[20px]">
        <a href="/" class="logo text-m3">
          Stanford
        </a>
        <div class="w-[1px] h-[28px] bg-black-30"></div>
        <div>
          <h1 class="text-m4 font-bold text-digital-green">School of Medicine</h1>
          <p class="text-m2 text-black-70">Precision Health • Precision Care</p>
        </div>
      </div>
      
      <nav class="hidden lg:flex space-x-[24px]">
        <a href="/medicine/education" class="text-m2 text-black hover:text-digital-green transition-all">
          Education
        </a>
        <a href="/medicine/research" class="text-m2 text-black hover:text-digital-green transition-all">
          Research
        </a>
        <a href="/medicine/clinical-care" class="text-m2 text-black hover:text-digital-green transition-all">
          Clinical Care
        </a>
        <a href="/medicine/faculty" class="text-m2 text-black hover:text-digital-green transition-all">
          Faculty
        </a>
      </nav>
    </div>
  </div>
</div>
```

### Event and Program Branding
```html
<!-- Stanford Conference branding -->
<div class="bg-black text-white py-[24px]">
  <div class="centered-container px-[40px]">
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div class="flex items-center space-x-[16px] mb-[16px] lg:mb-0">
        <a href="/" class="logo text-m2 text-white">
          Stanford
        </a>
        <div class="text-white-50">presents</div>
      </div>
      
      <div class="lg:text-center">
        <h1 class="text-m5 font-bold">AI for Social Good Symposium 2024</h1>
        <p class="text-m2 text-white-80">June 15-16 • Memorial Auditorium</p>
      </div>
      
      <div class="flex space-x-[12px] mt-[16px] lg:mt-0">
        <a href="/symposium/register" class="bg-cardinal-red text-white px-[20px] py-[8px] rounded hover:bg-cardinal-red-dark transition-all">
          Register
        </a>
        <a href="/symposium/agenda" class="border border-white text-white px-[20px] py-[8px] rounded hover:bg-white hover:text-black transition-all">
          Agenda
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Alumni program branding -->
<div class="bg-cardinal-red text-white py-[32px]">
  <div class="centered-container px-[40px] text-center">
    <a href="/" class="logo text-m4 text-white mb-[16px] inline-block">
      Stanford
    </a>
    <h1 class="text-m6 font-bold mb-[8px]">Alumni Association</h1>
    <p class="text-m3 text-white-90 mb-[24px]">Once a Cardinal, Always a Cardinal</p>
    
    <div class="flex flex-col sm:flex-row justify-center space-y-[12px] sm:space-y-0 sm:space-x-[16px]">
      <a href="/alumni/join" class="bg-white text-cardinal-red px-[24px] py-[12px] rounded font-semibold hover:bg-white-90 transition-all">
        Become a Member
      </a>
      <a href="/alumni/events" class="border border-white text-white px-[24px] py-[12px] rounded font-semibold hover:bg-white hover:text-cardinal-red transition-all">
        Upcoming Events
      </a>
    </div>
  </div>
</div>
```

### Mobile and Responsive Logo Usage
```html
<!-- Responsive header with collapsible navigation -->
<header class="bg-white border-b border-black-20 py-[16px]" x-data="{ mobileMenuOpen: false }">
  <div class="centered-container px-[20px] md:px-[40px]">
    <div class="flex justify-between items-center">
      <!-- Logo - scales appropriately on mobile -->
      <a href="/" class="logo text-m3 md:text-m4">
        Stanford
      </a>
      
      <!-- Desktop navigation -->
      <nav class="hidden lg:flex space-x-[32px]">
        <a href="/academics" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Academics
        </a>
        <a href="/research" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Research
        </a>
        <a href="/campus-life" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Campus Life
        </a>
        <a href="/admissions" class="text-m2 text-black hover:text-cardinal-red transition-all">
          Admissions
        </a>
      </nav>
      
      <!-- Mobile menu button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden p-[8px] text-black hover:text-cardinal-red transition-all"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <svg class="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path x-show="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path x-show="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <!-- Mobile navigation -->
    <div x-show="mobileMenuOpen" x-transition class="lg:hidden mt-[16px] pt-[16px] border-t border-black-20">
      <nav class="space-y-[16px]">
        <a href="/academics" class="block text-m2 text-black hover:text-cardinal-red transition-all">
          Academics
        </a>
        <a href="/research" class="block text-m2 text-black hover:text-cardinal-red transition-all">
          Research
        </a>
        <a href="/campus-life" class="block text-m2 text-black hover:text-cardinal-red transition-all">
          Campus Life
        </a>
        <a href="/admissions" class="block text-m2 text-black hover:text-cardinal-red transition-all">
          Admissions
        </a>
        <a href="/apply" class="block bg-cardinal-red text-white px-[20px] py-[12px] rounded text-center hover:bg-cardinal-red-dark transition-all">
          Apply Now
        </a>
      </nav>
    </div>
  </div>
</header>
```

## Color Customization

### Alternative Color Schemes
```html
<!-- White logo on dark backgrounds -->
<div class="bg-black">
  <a href="/" class="logo text-white">Stanford</a>
</div>

<!-- Logo with department colors -->
<div class="bg-digital-blue">
  <a href="/" class="logo text-white">Stanford Engineering</a>
</div>

<!-- Logo with custom color override -->
<div class="bg-white">
  <a href="/" class="logo text-digital-green">Stanford Medicine</a>
</div>
```

## Implementation Guidelines

### Typography Sizing
Combine with Stanford's modular typography scale for consistent sizing:

```html
<!-- Different logo sizes for different contexts -->
<a href="/" class="logo text-m3">Stanford</a>      <!-- Small: 18px -->
<a href="/" class="logo text-m4">Stanford</a>      <!-- Medium: 24px -->
<a href="/" class="logo text-m5">Stanford</a>      <!-- Large: 32px -->
<a href="/" class="logo text-m6">Stanford</a>      <!-- Extra Large: 48px -->
```

### Accessibility Requirements
```html
<!-- Always include proper alt text or screen reader text -->
<a href="/" class="logo text-m4">
  <span class="sr-only">Stanford University Homepage</span>
  Stanford
</a>

<!-- For logo images, use proper alt text -->
<a href="/" class="logo">
  <img src="/logo.svg" alt="Stanford University" class="h-[32px] w-auto">
</a>
```

## Accessibility Considerations

### Screen Reader Support
- Logo text is read naturally by screen readers
- Proper link context provided for homepage navigation
- Font ligatures don't interfere with screen reader pronunciation

### Keyboard Navigation
- Logo links are keyboard focusable
- Focus styles are preserved and visible
- Maintains proper tab order in navigation

### Color Contrast
- Cardinal Red meets WCAG AA contrast requirements on white backgrounds
- White text meets contrast requirements on dark backgrounds
- Alternative colors should be tested for accessibility compliance

## Performance Considerations

- **Font optimization**: Uses `font-display: swap` for better loading performance
- **Hardware acceleration**: `transform: translateZ(0)` enables GPU acceleration
- **Font smoothing**: Optimized rendering on both macOS and Windows

## Browser Support

- **Font ligatures**: Supported in all modern browsers
- **Font smoothing**: Webkit and Mozilla specific optimizations included
- **Fallback fonts**: System font stack ensures text displays even if custom font fails

This logo component ensures consistent Stanford brand presentation across all digital touchpoints while maintaining excellent performance and accessibility standards.
