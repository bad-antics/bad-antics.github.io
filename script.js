// NullSec Linux - Download Portal Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Update last modified date
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Matrix rain background effect
    initMatrixRain();

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add download click tracking (console log for now)
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.iso-card');
            const title = card ? card.querySelector('h4')?.textContent : 'Unknown';
            console.log(`[NullSec] Download initiated: ${title}`);
        });
    });

    // Typewriter effect for header (optional)
    typewriterEffect();
});

// Matrix rain effect
function initMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('matrix');
    
    if (!container) return;
    
    container.appendChild(canvas);
    
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    const chars = 'NULLSEC01アイウエオカキクケコサシスセソ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#ff0040';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// Typewriter effect
function typewriterEffect() {
    const subtitle = document.querySelector('.subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.visibility = 'visible';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 30);
}

// Copy checksum to clipboard
function copyChecksum(element) {
    const text = element.textContent;
    navigator.clipboard.writeText(text.replace('SHA256: ', '')).then(() => {
        const original = element.textContent;
        element.textContent = '✓ Copied to clipboard!';
        setTimeout(() => {
            element.textContent = original;
        }, 2000);
    });
}

// Add click-to-copy for checksums
document.querySelectorAll('.checksum').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'Click to copy';
    el.addEventListener('click', () => copyChecksum(el));
});
