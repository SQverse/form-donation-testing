// Mobile Navigation
function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('show');
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Sticky header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.stat-item, .proyek-item, .testimoni-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  animateOnScroll();
  
  // Progress bar animation
  const progressBar = document.querySelector('.progress');
  if (progressBar) {
    setTimeout(() => {
      progressBar.style.width = progressBar.textContent;
    }, 500);
  }
});

// Form validation for contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Silakan lengkapi semua field!');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Masukkan alamat email yang valid!');
      return;
    }
    
    // Form submission logic here
    alert('Pesan Anda telah terkirim! Terima kasih.');
    contactForm.reset();
  });
}