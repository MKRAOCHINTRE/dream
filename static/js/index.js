// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

/* -------------------------------------------------
   HERO CURSOR PARALLAX removed (duplicate — handled later)
   ------------------------------------------------- */

/* -------------------------------------------------
   SMOOTH SCROLLING
   ------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

/* -------------------------------------------------
   TESTIMONIAL CAROUSEL (auto-advance)
   ------------------------------------------------- */
const testimonialCarousel = document.querySelector('#testimonialCarousel');
if (testimonialCarousel) {
    new bootstrap.Carousel(testimonialCarousel, {
        interval: 2000,
        wrap: true
    });
}
/* HERO CURSOR PARALLAX (optional) */
const heroCarousel = document.querySelector('.hero-carousel');
if (heroCarousel) {
    const intensity = 25;
    heroCarousel.addEventListener('mousemove', (e) => {
        const rect = heroCarousel.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const moveX = (x - 0.5) * intensity;
        const moveY = (y - 0.5) * intensity;
        heroCarousel.style.setProperty('--mx', `${moveX}px`);
        heroCarousel.style.setProperty('--my', `${moveY}px`);
    });
    heroCarousel.addEventListener('mouseleave', () => {
        heroCarousel.style.setProperty('--mx', '0px');
        heroCarousel.style.setProperty('--my', '0px');
    });
}
// Smooth scroll for footer links
document.querySelectorAll('.site-footer a[href^="#"], .site-footer a[href*=".html"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Handle internal page links (e.g., about.html)
        if (href.includes('.html') && !href.startsWith('http')) {
            return; // Let browser handle page navigation
        }

        // Handle anchor links
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});