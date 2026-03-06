// Navigation toggle for mobile with improved UX
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && 
        !nav.contains(e.target) && 
        !navToggle.contains(e.target)) {
      nav.classList.remove('open');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Back to top button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // Scroll to top when clicked
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Parallax scrolling effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (scrolled < hero.offsetHeight) {
      hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
    }
  });
}

// Lazy loading images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
        
        // If image is already cached, trigger loaded class
        if (img.complete) {
          img.classList.add('loaded');
        }
        
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    img.classList.add('lazy-placeholder');
    imageObserver.observe(img);
  });
} else {
  // Fallback for browsers without IntersectionObserver
  lazyImages.forEach(img => {
    img.classList.add('loaded');
  });
}

// Before/After Slider functionality
function initBeforeAfterSlider(sliderElement) {
  const afterImage = sliderElement.querySelector('.after-image');
  const handle = sliderElement.querySelector('.slider-handle');
  let isDragging = false;

  function updateSlider(x) {
    const rect = sliderElement.getBoundingClientRect();
    const position = Math.max(0, Math.min(x - rect.left, rect.width));
    const percentage = (position / rect.width) * 100;
    
    afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse events
  handle.addEventListener('mousedown', () => {
    isDragging = true;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    updateSlider(touch.clientX);
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Click anywhere on slider to move handle
  sliderElement.addEventListener('click', (e) => {
    if (e.target !== handle) {
      updateSlider(e.clientX);
    }
  });
}

// Initialize all before/after sliders
document.querySelectorAll('.before-after-slider').forEach(slider => {
  initBeforeAfterSlider(slider);
});
