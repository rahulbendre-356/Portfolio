// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    initParticles();
    initAOS();
    initTypedText();
    initNavigation();
    initThemeToggle();
    initCustomCursor();
    initProjectFilters();
    initSkillBars();
    initStatCounters();
    initContactForm();
    initSmoothScroll();
});

// ============================================
// LOADING SCREEN
// ============================================

function initLoadingScreen() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });
}

// ============================================
// PARTICLES.JS BACKGROUND
// ============================================

function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ============================================
// AOS (ANIMATE ON SCROLL)
// ============================================

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }
}

// ============================================
// TYPED.JS EFFECT
// ============================================

function initTypedText() {
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('#typed-text', {
            strings: [
                'Electronics Engineer',
                'Embedded Systems Developer',
                'IoT Enthusiast',
                'Circuit Designer',
                'Problem Solver'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });
    }
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navLinks = document.querySelectorAll('nav a[data-page]');
    const ctaButtons = document.querySelectorAll('.btn[data-page]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateNavigation(pageId);
        
        // Refresh AOS animations
        if (typeof AOS !== 'undefined') {
            setTimeout(() => AOS.refresh(), 100);
        }
        
        // Trigger skill bars and counters if about/home page
        if (pageId === 'about') {
            setTimeout(() => animateSkillBars(), 300);
        }
        if (pageId === 'home') {
            setTimeout(() => animateCounters(), 300);
        }
    }
}

function updateNavigation(activePageId) {
    const navLinks = document.querySelectorAll('nav a[data-page]');
    navLinks.forEach(link => {
        const pageId = link.getAttribute('data-page');
        if (pageId === activePageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================

function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
    
    // Smooth follower animation
    function animateFollower() {
        const distX = mouseX - followerX;
        const distY = mouseY - followerY;
        
        followerX += distX * 0.1;
        followerY += distY * 0.1;
        
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Cursor effects on hover
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .contact-card, .skill-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(2)`;
            follower.style.transform = `translate(${followerX}px, ${followerY}px) scale(1.5)`;
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
            follower.style.transform = `translate(${followerX}px, ${followerY}px) scale(1)`;
        });
    });
}

// ============================================
// PROJECT FILTERS
// ============================================

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
            
            // Refresh AOS
            if (typeof AOS !== 'undefined') {
                setTimeout(() => AOS.refresh(), 100);
            }
        });
    });
}

// ============================================
// SKILL PROGRESS BARS
// ============================================

function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 100);
    });
}

// ============================================
// STAT COUNTERS ANIMATION
// ============================================

function initStatCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ============================================
// CONTACT FORM WITH EMAILJS
// ============================================

function initContactForm() {
    // Initialize EmailJS (you need to replace with your own keys)
    // Get your keys from https://www.emailjs.com/
    // emailjs.init("YOUR_PUBLIC_KEY");
    
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with EmailJS in production)
        setTimeout(() => {
            // Success
            formStatus.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'form-status success';
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
            
            // Uncomment below for actual EmailJS implementation
            /*
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
                .then(function(response) {
                    formStatus.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
                    formStatus.className = 'form-status success';
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                    }, 5000);
                }, function(error) {
                    formStatus.textContent = '❌ Failed to send message. Please try again.';
                    formStatus.className = 'form-status error';
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
            */
        }, 1500);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !this.hasAttribute('data-page')) {
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
}

// ============================================
// PARALLAX SCROLL EFFECT
// ============================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    // Parallax for floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
    
    // Parallax for gradient blobs
    const blobs = document.querySelectorAll('.gradient-blob');
    blobs.forEach((blob, index) => {
        const speed = 0.05 + (index * 0.03);
        const yPos = scrolled * speed;
        blob.style.transform = `translateY(${yPos}px)`;
    });
});

// ============================================
// PROJECT CARD ANIMATIONS
// ============================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on a link
        if (e.target.tagName === 'A' || e.target.closest('a')) return;
        
        // Add pulse animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function(e) {
    const pages = ['home', 'about', 'projects', 'contact'];
    const currentPage = document.querySelector('.page.active').id;
    const currentIndex = pages.indexOf(currentPage);
    
    // Arrow keys for navigation
    if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
        showPage(pages[currentIndex + 1]);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showPage(pages[currentIndex - 1]);
    }
    
    // Number keys for direct navigation
    if (e.key >= '1' && e.key <= '4') {
        const pageIndex = parseInt(e.key) - 1;
        showPage(pages[pageIndex]);
    }
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
`;
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images if any
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// EASTER EGGS & FUN FEATURES
// ============================================

// Konami Code Easter Egg
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Add rainbow effect
    document.body.style.animation = 'rainbow 5s linear infinite';
    
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    // Show message
    alert('🎉 Congratulations! You found the secret! 🎉');
    
    // Remove effect after 5 seconds
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)]};
        top: -10px;
        left: ${Math.random() * 100}%;
        animation: fall ${Math.random() * 3 + 2}s linear;
        z-index: 9999;
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Add rainbow keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 Welcome to Rahul Bendre\'s Portfolio! ', 
    'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; font-size: 20px; padding: 10px 20px; border-radius: 10px;'
);
console.log('%cInterested in the code? Check it out on GitHub!', 
    'font-size: 14px; color: #6366f1;'
);
console.log('%c💡 Tip: Try using arrow keys or number keys (1-4) to navigate between pages!', 
    'font-size: 12px; color: #8b5cf6;'
);
console.log('%c🎮 Secret: Try the Konami Code (↑↑↓↓←→←→BA)', 
    'font-size: 12px; color: #ec4899;'
);

// ============================================
// ANALYTICS (Optional - Add your tracking code)
// ============================================

// Example: Google Analytics
// Add your GA tracking code here if needed

// ============================================
// SERVICE WORKER (Optional - For PWA)
// ============================================

// Uncomment to enable PWA functionality
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('SW registered:', registration))
        .catch(error => console.log('SW registration failed:', error));
}
*/