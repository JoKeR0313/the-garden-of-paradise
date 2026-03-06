const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox hidden';
lightbox.innerHTML = `
  <div class="lightbox-backdrop"></div>
  <div class="lightbox-content card">
    <button class="lightbox-close" aria-label="Bezárás">×</button>
    <button class="lightbox-nav prev" aria-label="Előző">‹</button>
    <button class="lightbox-nav next" aria-label="Következő">›</button>
    <img src="" alt="Galéria" id="lightboxImage">
    <p id="lightboxCaption"></p>
  </div>
`;
document.body.appendChild(lightbox);

const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-nav.prev');
const lightboxNext = lightbox.querySelector('.lightbox-nav.next');
const backdrop = lightbox.querySelector('.lightbox-backdrop');

let currentImageIndex = 0;
let visibleItems = [];

// Touch/swipe handling
let touchStartX = 0;
let touchEndX = 0;

function setFilter(category) {
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === category || (category === 'all' && btn.dataset.filter === 'all')));
  galleryItems.forEach(item => {
    const match = category === 'all' || item.dataset.category === category;
    item.style.display = match ? 'block' : 'none';
  });
  updateVisibleItems();
}

function updateVisibleItems() {
  visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
}

function navigateImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = visibleItems.length - 1;
  if (currentImageIndex >= visibleItems.length) currentImageIndex = 0;
  
  const item = visibleItems[currentImageIndex];
  const imgWrapper = item.querySelector('.gallery-image');
  const src = imgWrapper.dataset.image || '';
  const caption = item.querySelector('h3')?.textContent || '';
  
  lightboxImage.src = src;
  lightboxCaption.textContent = caption;
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});

function openLightbox(index) {
  currentImageIndex = index;
  const item = visibleItems[currentImageIndex];
  const imgWrapper = item.querySelector('.gallery-image');
  const src = imgWrapper.dataset.image || '';
  const caption = item.querySelector('h3')?.textContent || '';
  
  lightboxImage.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
backdrop.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateImage(-1));
lightboxNext.addEventListener('click', () => navigateImage(1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('hidden')) {
    if (e.key === 'ArrowLeft') navigateImage(-1);
    if (e.key === 'ArrowRight') navigateImage(1);
    if (e.key === 'Escape') closeLightbox();
  }
});

// Swipe gestures for lightbox
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next image
      navigateImage(1);
    } else {
      // Swipe right - previous image
      navigateImage(-1);
    }
  }
}

// Gallery item click handlers
galleryItems.forEach((item, index) => {
  const imgWrapper = item.querySelector('.gallery-image');
  
  // Prevent any hover-based opening
  imgWrapper.style.pointerEvents = 'auto';
  
  // Only open on explicit click
  imgWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateVisibleItems();
    const visibleIndex = visibleItems.indexOf(item);
    if (visibleIndex !== -1) {
      openLightbox(visibleIndex);
    }
  });
  
  // Prevent touch events from being interpreted as hover
  imgWrapper.addEventListener('touchstart', (e) => {
    e.stopPropagation();
  }, { passive: true });
});

// Initialize
setFilter('all');

// Add swipe hint to gallery (only visible on mobile)
const galleryGrid = document.querySelector('.gallery-grid');
if (galleryGrid && window.innerWidth <= 820) {
  const hint = document.createElement('p');
  hint.className = 'gallery-swipe-hint';
  hint.textContent = '👆 Koppints a képekre, majd csúsztasd balra/jobbra a böngészéshez';
  galleryGrid.parentNode.insertBefore(hint, galleryGrid);
}
