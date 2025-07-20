// Fade in elements as they scroll into view
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero h1', {
  opacity: 0,
  y: 60,
  duration: 1,
  delay: 0.2
});
gsap.from('.portfolio-grid .project-card', {
  scrollTrigger: '.portfolio-grid',
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  duration: 0.8
});
gsap.from('section#about', {
  scrollTrigger: 'section#about',
  opacity: 0,
  y: 40,
  duration: 0.8
});
// Animates headings on touch (for mobile devices)
const animatedHeadings = document.querySelectorAll('h2.animated-heading');
animatedHeadings.forEach(heading => {
  heading.addEventListener('touchstart', () => {
    heading.classList.add('touch-animate');
  });
  heading.addEventListener('touchend', () => {
    heading.classList.remove('touch-animate');
  });
});








// Loading Animation Controller
window.addEventListener('DOMContentLoaded', function() {
  console.log('Loading animation started');
  
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');
  
  // Check if elements exist
  if (!loadingScreen) {
    console.error('Loading screen element not found!');
    return;
  }
  
  if (!mainContent) {
    console.error('Main content element not found!');
    return;
  }
  
  console.log('Animation elements found successfully');
  
  // Function to show main content
  function showMainContent() {
    console.log('Transitioning to main content...');
    
    // Hide loading screen with fade effect
    loadingScreen.classList.add('fade-out');
    
    // Show main content after fade animation completes
    setTimeout(function() {
      loadingScreen.style.display = 'none';
      mainContent.classList.add('show');
      console.log('Main content is now visible');
    }, 1000);
  }
  
  // Auto transition after 8 seconds (gives full animation time)
  const autoTimer = setTimeout(function() {
    console.log('Auto-transition triggered');
    showMainContent();
  }, 8000);
  
  // Skip on click anywhere on loading screen
  loadingScreen.addEventListener('click', function() {
    console.log('Loading screen clicked - skipping animation');
    clearTimeout(autoTimer);
    showMainContent();
  });
  
  // Skip on any key press
  document.addEventListener('keydown', function(e) {
    console.log('Key pressed:', e.key, '- skipping animation');
    clearTimeout(autoTimer);
    showMainContent();
  });
  
  console.log('Loading animation setup complete');
});
