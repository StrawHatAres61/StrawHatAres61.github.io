// ── Star field ────────────────────────────────────────────────
function initStarField() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const STAR_COUNT = 320;
    let stars = [];
    let w, h;

    function resize() {
        w = canvas.width  = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function randomStar() {
        const size = Math.random();
        return {
            x:        Math.random() * w,
            y:        Math.random() * h,
            r:        size < 0.6 ? Math.random() * 0.8 + 0.2
                    : size < 0.9 ? Math.random() * 1.2 + 0.8
                    :               Math.random() * 1.8 + 1.4,
            dx:       (Math.random() - 0.5) * 0.35,
            dy:       (Math.random() - 0.5) * 0.35,
            opacity:  Math.random(),
            dOpacity: (Math.random() * 0.008 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
        };
    }

    function init() {
        resize();
        stars = Array.from({ length: STAR_COUNT }, randomStar);
    }

    function draw() {
        ctx.fillStyle = '#080808';
        ctx.fillRect(0, 0, w, h);
        for (const s of stars) {
            s.x += s.dx;
            s.y += s.dy;
            s.opacity += s.dOpacity;

            if (s.opacity <= 0 || s.opacity >= 1) s.dOpacity *= -1;
            if (s.x < 0) s.x = w;
            if (s.x > w) s.x = 0;
            if (s.y < 0) s.y = h;
            if (s.y > h) s.y = 0;

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${Math.max(0.05, Math.min(0.9, s.opacity))})`;
            ctx.fill();
        }
    }

    let rafId;
    function loop() { draw(); rafId = requestAnimationFrame(loop); }

    init();
    loop();
    window.addEventListener('resize', () => { resize(); stars = Array.from({ length: STAR_COUNT }, randomStar); });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { cancelAnimationFrame(rafId); rafId = null; }
        else if (!rafId)     { loop(); }
    });
}

// ── Typing effect ─────────────────────────────────────────────
function initTypingEffect() {
    const el = document.querySelector('.hero-subtitle');
    if (!el) return;

    const roles = ['Web Developer', 'Penetration Tester'];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const SPEED_TYPE = 75;
    const SPEED_DEL  = 40;
    const PAUSE_END  = 1800;
    const PAUSE_START = 400;

    function tick() {
        const current = roles[roleIndex];
        if (!deleting) {
            el.textContent = current.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(tick, PAUSE_END);
                return;
            }
            setTimeout(tick, SPEED_TYPE);
        } else {
            el.textContent = current.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(tick, PAUSE_START);
                return;
            }
            setTimeout(tick, SPEED_DEL);
        }
    }

    setTimeout(tick, 600);
}

// ── Navbar scroll style ───────────────────────────────────────
function initNavScroll() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.style.borderBottomColor = window.scrollY > 20 ? '#2a2a2a' : '#222222';
    }, { passive: true });
}

// ── Active nav link ───────────────────────────────────────────
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link[href]');
    if (!sections.length || !links.length) return;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
}

// ── Projects dropdown (mobile tap) ───────────────────────────
function initDropdown() {
    document.querySelectorAll('.nav-link[data-dropdown]').forEach(trigger => {
        trigger.addEventListener('click', e => {
            const item = trigger.closest('.nav-item');
            if (!item) return;
            item.classList.toggle('open');
            trigger.setAttribute('aria-expanded', item.classList.contains('open'));
        });
    });

    // close on outside click
    document.addEventListener('click', e => {
        if (!e.target.closest('.nav-item')) {
            document.querySelectorAll('.nav-item.open').forEach(i => {
                i.classList.remove('open');
                const t = i.querySelector('[data-dropdown]');
                if (t) t.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

// ── Mobile hamburger ──────────────────────────────────────────
function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const menu      = document.querySelector('.nav-menu');
    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', menu.classList.contains('active'));
    });
}

// ── Scroll animations ─────────────────────────────────────────
function initScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('[data-anim]').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
                entry.target.classList.remove('animate-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
}

// ── Contact form ──────────────────────────────────────────────
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = new FormData(this);
        const name    = data.get('name')    || '';
        const email   = data.get('email')   || '';
        const subject = data.get('subject') || '';
        const message = data.get('message') || '';

        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        const mailto = `mailto:Lucas@lucasburda.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailto;
        showNotification('Email client opened. Please send your message.', 'success');
        this.reset();
    });
}

function showNotification(message, type = 'info') {
    document.querySelector('.notification')?.remove();

    const n    = document.createElement('div');
    n.className = `notification notification-${type}`;

    const content = document.createElement('div');
    content.className = 'notification-content';

    const msg = document.createElement('span');
    msg.className = 'notification-message';
    msg.textContent = message;

    const btn = document.createElement('button');
    btn.className = 'notification-close';
    btn.setAttribute('aria-label', 'Dismiss');
    btn.textContent = '\u00d7';

    content.append(msg, btn);
    n.appendChild(content);
    document.body.appendChild(n);

    btn.addEventListener('click', () => n.remove());
    setTimeout(() => n.parentNode && n.remove(), 5000);
}

// ── Smooth scroll for anchor links ────────────────────────────
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        initStarField();
    }
    initTypingEffect();
    initNavScroll();
    initActiveNav();
    initDropdown();
    initHamburger();
    initScrollAnimations();
    initContactForm();
    initSmoothScroll();
});
