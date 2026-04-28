// ========== Particle Background ==========
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        const colors = [
            [139, 92, 246],  // purple
            [212, 168, 83],  // gold
            [200, 200, 220], // white-ish
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        if (mouse.x !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const force = (150 - dist) / 150;
                this.x -= (dx / dist) * force * 0.5;
                this.y -= (dy / dist) * force * 0.5;
            }
        }

        if (this.x < -10 || this.x > canvas.width + 10 ||
            this.y < -10 || this.y > canvas.height + 10) {
            this.reset();
        }
    }

    draw() {
        const currentOpacity = this.opacity * (0.6 + Math.sin(this.pulse) * 0.4);
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
        ctx.fill();

        if (this.size > 1.2) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.1})`;
            ctx.fill();
        }
    }
}

const particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 10000));
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const opacity = (1 - dist / 120) * 0.08;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    drawConnections();
    requestAnimationFrame(animate);
}
animate();

// ========== Scroll Reveal ==========
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => observer.observe(el));

// ========== Nav Scroll Effect ==========
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 20, 0.85)';
        nav.style.padding = '0.8rem 3rem';
    } else {
        nav.style.background = 'rgba(10, 10, 20, 0.6)';
        nav.style.padding = '1.2rem 3rem';
    }
    lastScroll = currentScroll;
});

// ========== Smooth scroll for nav links ==========
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== Cursor glow effect ==========
const glowDiv = document.createElement('div');
glowDiv.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
`;
document.body.appendChild(glowDiv);

window.addEventListener('mousemove', (e) => {
    glowDiv.style.left = e.clientX + 'px';
    glowDiv.style.top = e.clientY + 'px';
});

window.addEventListener('mouseout', () => {
    glowDiv.style.opacity = '0';
});

window.addEventListener('mouseover', () => {
    glowDiv.style.opacity = '1';
});

// ========== Email Copy to Clipboard ==========
const emailEl = document.querySelector('.contact-email');
if (emailEl) {
    const toast = document.createElement('span');
    toast.className = 'copy-toast';
    toast.textContent = '已复制';
    emailEl.appendChild(toast);

    emailEl.addEventListener('click', () => {
        const email = emailEl.querySelector('span:not(.copy-toast)').textContent;
        navigator.clipboard.writeText(email).then(() => {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 1500);
        });
    });
}