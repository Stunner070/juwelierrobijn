// =====================
// Mobile Menu Toggle
// =====================

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// =====================
// Navbar Scroll Effect
// =====================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// =====================
// Smooth Scroll for Anchor Links
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =====================
// Intersection Observer for Animations
// =====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in animation
const fadeElements = document.querySelectorAll('.stat-card, .service-card, .footer-col');
fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =====================
// Stats Counter Animation
// =====================

const countUp = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const number = entry.target.querySelector('.stat-number');
            const text = number.textContent;
            const numValue = parseInt(text);

            if (!isNaN(numValue)) {
                number.textContent = '0+';
                countUp(number, numValue);
                entry.target.classList.add('counted');
            }
        }
    });
}, { threshold: 0.5 });

const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => statsObserver.observe(card));

// =====================
// Form Validation (for contact pages)
// =====================

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Vul alstublieft alle verplichte velden in.');
        }
    });
});

// =====================
// Active Page Highlight
// =====================

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const menuLinks = document.querySelectorAll('.nav-menu a');

menuLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage ||
        (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// =====================
// Lazy Loading Images
// =====================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// =====================
// Back to Top Button
// =====================

const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
};

// Initialize back to top button
createBackToTopButton();

// =====================
// Console Welcome Message
// =====================

console.log('%c Juwelier Robijn ', 'background: linear-gradient(135deg, #8B6F47, #D4AF37); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('Welkom bij Juwelier Robijn! 💎');

