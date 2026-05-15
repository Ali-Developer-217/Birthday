const knife = document.getElementById('knife');
const cake = document.getElementById('cake');
const nextBtn = document.getElementById('nextBtn');
const instruction = document.querySelector('.instruction');

knife.addEventListener('click', () => {
    // Animate knife
    knife.classList.add('animate');
    
    // Wait for knife to reach the cake
    setTimeout(() => {
        // Split the cake
        cake.classList.add('cake-cut');
        
        // Show next button
        nextBtn.classList.remove('hidden');
        
        // Update instruction
        instruction.textContent = "Yum! That looks delicious! 🍓";
        instruction.style.color = "#2d6a4f";
        
        // Create small confetti burst at the cut site
        createBurst();
    }, 500);
});

nextBtn.addEventListener('click', () => {
    document.body.style.transition = 'opacity 0.8s ease-out';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'wish.html';
    }, 800);
});

function createBurst() {
    // Simple burst effect using emojis
    const particles = ['💖', '✨', '🍓', '🎂', '🎊'];
    for(let i=0; i<15; i++) {
        const p = document.createElement('div');
        p.textContent = particles[Math.floor(Math.random() * particles.length)];
        p.style.position = 'absolute';
        p.style.left = '50%';
        p.style.top = '50%';
        p.style.fontSize = '1.5rem';
        p.style.pointerEvents = 'none';
        p.style.zIndex = '30';
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 50 + Math.random() * 150;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        
        document.body.appendChild(p);
        
        p.animate([
            { transform: `translate(-50%, -50%) scale(0)`, opacity: 1 },
            { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => p.remove();
    }
}
