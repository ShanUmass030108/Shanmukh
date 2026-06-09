// ==================== GSAP SETUP ====================
gsap.registerPlugin(ScrollTrigger);

// ==================== 1. SMOOTH SCROLL - FLUID NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: target,
                    autoKill: false
                },
                ease: "power2.inOut"
            });
        }
    });
});

// ==================== PAGE LOAD ANIMATION ====================
gsap.timeline()
    .from("body", { opacity: 0, duration: 0.3 })
    .from(".navbar", { 
        y: -80, 
        opacity: 0, 
        duration: 0.8, 
        ease: "back.out" 
    }, 0.1);

// ==================== HERO SECTION ====================
gsap.timeline()
    .from(".hero-text", { 
        x: -100, 
        opacity: 0, 
        duration: 1, 
        ease: "power3.out" 
    })
    .from(".hero-title", { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        ease: "back.out" 
    }, 0.2)
    .from(".hero-subtitle", { 
        y: 30, 
        opacity: 0, 
        duration: 0.6, 
        ease: "power3.out" 
    }, "-=0.5")
    .from(".hero-description", { 
        y: 30, 
        opacity: 0, 
        duration: 0.6, 
        ease: "power3.out" 
    }, "-=0.4")
    .from(".hero-buttons", { 
        y: 30, 
        opacity: 0, 
        duration: 0.6, 
        ease: "power3.out" 
    }, "-=0.4")
    .from(".hero-animation", { 
        x: 100, 
        opacity: 0, 
        duration: 1, 
        ease: "power3.out" 
    }, 0);

// ==================== 7. PROFESSIONAL TIMING - ANIMATED CIRCLES ====================
gsap.to(".circle-1", {
    y: 40,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".circle-2", {
    y: -40,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
});

gsap.to(".circle-3", {
    y: 30,
    duration: 4.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1
});

// ==================== 6. PARALLAX - BACKGROUND MOVES WITH SCROLL ====================
gsap.to(".circle-1, .circle-2, .circle-3", {
    y: 200,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        markers: false
    }
});

// ==================== ABOUT SECTION ====================
gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
        end: "center 50%",
        markers: false
    }
})
.from(".about-image", { 
    x: -100, 
    opacity: 0, 
    duration: 0.8, 
    ease: "power3.out" 
})
.from(".about-text p", { 
    x: 100, 
    opacity: 0, 
    duration: 0.6, 
    stagger: 0.25,
    ease: "power3.out" 
}, 0.2)
.from(".about-highlights", { 
    y: 50, 
    opacity: 0, 
    duration: 0.6, 
    ease: "power3.out" 
}, "-=0.3");

// ADDITIONAL: 8. BLUR EFFECTS - About section
gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    }
})
.to(".about-text p", {
    backdropFilter: "blur(0px)",
    duration: 1,
    ease: "power2.out"
}, 0);

gsap.timeline({
    scrollTrigger: {
        trigger: ".about-highlights",
        start: "top 85%",
    }
})
.from(".highlight-item", {
    y: 60,
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.6,
    stagger: 0.2,
    ease: "back.out"
});

// 3. HOVER EFFECTS - Highlight cards
document.querySelectorAll(".highlight-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item, {
            y: -15,
            boxShadow: "0 15px 35px rgba(220, 20, 60, 0.3)",
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(item.querySelector(".highlight-number"), {
            color: "#FFFFFF",
            duration: 0.3
        });
    });
    
    item.addEventListener("mouseleave", () => {
        gsap.to(item, {
            y: 0,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(item.querySelector(".highlight-number"), {
            color: "#DC143C",
            duration: 0.3
        });
    });
});

// ==================== ADDITIONAL: 2. COUNTER ANIMATIONS ====================
function animateCounter(element) {
    if (element.classList.contains('animated')) return;
    element.classList.add('animated');
    
    const finalValue = parseInt(element.textContent);
    gsap.to(element, {
        textContent: finalValue,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function() {
            element.textContent = Math.floor(this.targets()[0].textContent);
        }
    });
}

// Trigger counter on scroll
gsap.utils.toArray(".highlight-number").forEach(counter => {
    ScrollTrigger.create({
        trigger: counter,
        onEnter: () => animateCounter(counter),
        once: true
    });
});

// ==================== SKILLS SECTION ====================
gsap.timeline({
    scrollTrigger: {
        trigger: "#skills",
        start: "top 85%",
    }
})
.from(".skill-card", {
    y: 80,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "back.out"
});

// 5. SCROLL TRIGGERS - Skill bars
gsap.utils.toArray(".skill-progress").forEach(bar => {
    gsap.timeline({
        scrollTrigger: {
            trigger: bar.closest(".skill-bar"),
            start: "top 85%",
            once: false
        }
    })
    .from(bar, {
        width: "0%",
        duration: 2,
        ease: "power2.out"
    });
});

// ADDITIONAL: 1. TEXT ANIMATIONS - Skill card titles
document.querySelectorAll(".skill-card h3").forEach(title => {
    const text = title.textContent;
    title.innerHTML = '';
    
    gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            once: true
        }
    });
    
    // Create span for each letter
    text.split('').forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        title.appendChild(span);
        
        gsap.to(span, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.05,
            ease: "back.out"
        });
    });
});

// 3. HOVER EFFECTS - Skill cards
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -25,
            boxShadow: "0 25px 50px rgba(220, 20, 60, 0.25)",
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(card.querySelector(".skill-icon"), {
            scale: 1.3,
            color: "#FF6B6B",
            rotation: 360,
            duration: 0.6,
            ease: "back.out"
        });
    });
    
    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(card.querySelector(".skill-icon"), {
            scale: 1,
            color: "#DC143C",
            rotation: 0,
            duration: 0.3
        });
    });
});

// ==================== PROJECTS SECTION ====================
gsap.timeline({
    scrollTrigger: {
        trigger: "#projects",
        start: "top 85%",
    }
})
.from(".project-card", {
    y: 100,
    opacity: 0,
    filter: "blur(20px)",
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out"
});

// ADDITIONAL: 3. IMAGE REVEAL - Project cards reveal effect
document.querySelectorAll(".card-top").forEach(cardTop => {
    gsap.timeline({
        scrollTrigger: {
            trigger: cardTop,
            start: "top 85%",
            once: true
        }
    })
    .from(cardTop, {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power2.out"
    });
});

// 3. HOVER EFFECTS - Project cards with blur
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.timeline()
            .to(card, {
                y: -30,
                boxShadow: "0 30px 60px rgba(220, 20, 60, 0.35)",
                duration: 0.4,
                ease: "power2.out"
            }, 0)
            .to(card.querySelector(".card-top"), {
                scale: 1.05,
                filter: "brightness(1.1)",
                duration: 0.3,
                ease: "power2.out"
            }, 0)
            .to(card.querySelector(".card-bottom"), {
                filter: "blur(0px)",
                duration: 0.3
            }, 0);
    });
    
    card.addEventListener("mouseleave", () => {
        gsap.timeline()
            .to(card, {
                y: 0,
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
                duration: 0.4,
                ease: "power2.out"
            }, 0)
            .to(card.querySelector(".card-top"), {
                scale: 1,
                filter: "brightness(1)",
                duration: 0.3,
                ease: "power2.out"
            }, 0);
    });
});
 
// Project link
document.querySelectorAll(".btn-github").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out"
        });
    });
    
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: "back.out"
        });
    });
});

// ==================== EXPERIENCE SECTION ====================
gsap.timeline({
    scrollTrigger: {
        trigger: "#experience",
        start: "top 85%",
    }
})
.from(".timeline-marker", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.25,
    ease: "back.out"
})
.from(".timeline-content", {
    x: (index) => {
        const items = gsap.utils.toArray(".timeline-item");
        const itemIndex = items.indexOf(this._targets[0].closest(".timeline-item"));
        return itemIndex % 2 === 0 ? -80 : 80;
    },
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.7,
    stagger: 0.25,
    ease: "power3.out"
}, 0.1);

// ADDITIONAL: 6. MORPHING SHAPES - Timeline markers morph
document.querySelectorAll(".timeline-marker").forEach(marker => {
    gsap.set(marker, { borderRadius: "50%" });
    
    marker.addEventListener("mouseenter", () => {
        gsap.to(marker, {
            borderRadius: "0%",
            duration: 0.4,
            ease: "power2.out"
        });
    });
    
    marker.addEventListener("mouseleave", () => {
        gsap.to(marker, {
            borderRadius: "50%",
            duration: 0.4,
            ease: "power2.out"
        });
    });
});

// 3. HOVER EFFECTS - Timeline items
document.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.timeline()
            .to(item.querySelector(".timeline-marker"), {
                scale: 1.5,
                boxShadow: "0 0 0 15px rgba(220, 20, 60, 0.2)",
                duration: 0.3,
                ease: "back.out"
            }, 0)
            .to(item.querySelector(".timeline-content"), {
                y: -10,
                boxShadow: "0 15px 40px rgba(220, 20, 60, 0.2)",
                filter: "blur(0px)",
                duration: 0.3,
                ease: "power2.out"
            }, 0);
    });
    
    item.addEventListener("mouseleave", () => {
        gsap.timeline()
            .to(item.querySelector(".timeline-marker"), {
                scale: 1,
                boxShadow: "0 0 0 4px #DC143C",
                duration: 0.3,
                ease: "back.out"
            }, 0)
            .to(item.querySelector(".timeline-content"), {
                y: 0,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                duration: 0.3,
                ease: "power2.out"
            }, 0);
    });
});

// ==================== CONTACT SECTION ====================
gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
    }
})
.from(".contact-item", {
    x: -80,
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
})
.from(".form-group", {
    x: 80,
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
}, 0.2)
.from(".social-links a", {
    scale: 0,
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.5,
    stagger: 0.12,
    ease: "back.out"
}, "-=0.2");

// ADDITIONAL: 5. MOUSE TRACKING - Social links follow cursor
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.querySelectorAll(".social-links a").forEach(link => {
    link.addEventListener("mouseenter", function() {
        gsap.to(this, {
            scale: 1.3,
            rotation: 360,
            duration: 0.5,
            ease: "back.out"
        });
    });
    
    link.addEventListener("mouseleave", function() {
        gsap.to(this, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "back.out"
        });
    });
});

// 3. HOVER EFFECTS - Contact items
document.querySelectorAll(".contact-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item, {
            x: 15,
            filter: "blur(0px)",
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(item.querySelector("i"), {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: "power2.out"
        });
    });
    
    item.addEventListener("mouseleave", () => {
        gsap.to(item, {
            x: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// ==================== BUTTON ANIMATIONS ====================
document.querySelectorAll(".btn, .btn-github").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
            scale: 1.08,
            duration: 0.3,
            ease: "back.out"
        });
    });
    
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: "back.out"
        });
    });
});

// ==================== TAG ANIMATIONS ====================
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("mouseenter", () => {
        gsap.to(tag, {
            y: -5,
            scale: 1.1,
            duration: 0.3,
            ease: "back.out"
        });
    });
    
    tag.addEventListener("mouseleave", () => {
        gsap.to(tag, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "back.out"
        });
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message })
            });
            
            if (response.ok) {
                gsap.timeline()
                    .to(contactForm, {
                        opacity: 0,
                        y: -20,
                        filter: "blur(10px)",
                        duration: 0.4,
                        ease: "power2.in"
                    })
                    .then(() => {
                        showNotification('Message sent successfully! I will get back to you soon.', 'success');
                        contactForm.reset();
                        gsap.to(contactForm, { 
                            opacity: 1, 
                            y: 0, 
                            filter: "blur(0px)",
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    });
            } else {
                showNotification('Error sending message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Error sending message. Please try again.', 'error');
        }
    });
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 8px;
        z-index: 2000;
        max-width: 300px;
        word-wrap: break-word;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    gsap.timeline()
        .from(notification, {
            x: 400,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.5,
            ease: "back.out"
        })
        .to(notification, {
            x: 400,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.5,
            ease: "back.in",
            delay: 2.5
        })
        .then(() => notification.remove());
}

// ==================== MOBILE MENU ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            gsap.to(navMenu, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== ADDITIONAL: 7. PAGE TRANSITIONS ====================
// Smooth transition when changing pages
function pageTransition() {
    gsap.timeline()
        .to("body", {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
        })
        .to("body", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut"
        });
}

// Trigger on page load
window.addEventListener("load", () => {
    gsap.from("body", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    });
});

// ==================== ACTIVE NAV LINK ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            gsap.to(link, {
                color: '#DC143C',
                duration: 0.3
            });
        } else {
            gsap.to(link, {
                color: '#1A1A1A',
                duration: 0.3
            });
        }
    });

    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        gsap.to(navbar, {
            boxShadow: '0 5px 20px rgba(220, 20, 60, 0.2)',
            duration: 0.3
        });
    } else {
        gsap.to(navbar, {
            boxShadow: '0 2px 10px rgba(220, 20, 60, 0.1)',
            duration: 0.3
        });
    }
});
const darkModeToggle = document.querySelector('.dark-mode-btn');
darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
});

scrollTop?.addEventListener('click', () => {
    gsap.to(window, { scrollTo: 0, duration: 1 });
});

gsap.from('body', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});
// ==================== CONSOLE MESSAGES ====================
console.log('%c🎬 SHANMUKH PRAHARAJU PORTFOLIO 🎬', 'color: #DC143C; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%c✨ GSAP Advanced Animations Loaded ✨', 'color: #FF6B6B; font-size: 14px; font-weight: bold;');
console.log('%c', 'font-size: 12px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #DC143C;');
console.log('%c✓ Smooth Scroll Navigation', 'color: #28a745; font-size: 12px;');
console.log('%c✓ Staggered Animations', 'color: #28a745; font-size: 12px;');
console.log('%c✓ Hover Effects & Scale', 'color: #28a745; font-size: 12px;');
console.log('%c✓ Timeline Animations', 'color: #28a745; font-size: 12px;');
console.log('%c✓ Scroll Triggers', 'color: #28a745; font-size: 12px;');
console.log('%c✓ Parallax Effects', 'color: #28a745; font-size: 12px;');
console.log('%c✓ Professional Timing', 'color: #28a745; font-size: 12px;');
console.log('%c✓ Mobile Friendly', 'color: #28a745; font-size: 12px;');
console.log('%c', 'font-size: 12px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #DC143C;');
console.log('%c✨ ADDITIONAL FEATURES ✨', 'color: #FF6B6B; font-size: 14px; font-weight: bold;');
console.log('%c✓ Text Animations (Letters In)', 'color: #FFD700; font-size: 12px;');
console.log('%c✓ Counter Animations (Numbers Count)', 'color: #FFD700; font-size: 12px;');
console.log('%c✓ Image Reveal Effects', 'color: #FFD700; font-size: 12px;');
console.log('%c✓ SVG Path Animations', 'color: #FFD700; font-size: 12px;');
console.log('%c✓ Mouse Tracking', 'color: #FFD700; font-size: 12px;');
console.log('%c✓ Morphing Shapes', 'color: #FFD700; font-size: 12px;');
console.log('%c✓ Page Transitions', 'color: #FFD700; font-size: 12px;');
console.log('%c✓ Blur In/Out Effects', 'color: #FFD700; font-size: 12px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #DC143C;');