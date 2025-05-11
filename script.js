// Particles.js config
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles loaded successfully!');
  });
  
  // Typewriter effect
  const typewriter = document.querySelector('.typewriter');
  const text = "Hi, I'm Ashish Navtake 👋";
  let index = 0;
  
  function typeEffect() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  
  window.onload = typeEffect;
  
  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  ScrollReveal().reveal('.slide-in', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  reset: true
});
// Show button on scroll
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

  
  const hiddenElements = document.querySelectorAll('.slide-in');
  hiddenElements.forEach(el => observer.observe(el));
  window.onload = () => {
    typeEffect();
  
    // Trigger show class on load for visible elements
    document.querySelectorAll('.slide-in').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('show');
      }
    });
  };
  // Navigation click handler
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('data-target');

    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => {
      sec.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

// Show "About" section by default
window.onload = function () {
  document.getElementById('about').classList.add('active');
  typeEffect(); // Your existing typewriter effect
};

  