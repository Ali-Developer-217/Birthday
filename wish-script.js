const flowerContainer = document.getElementById('flowerContainer');
const flowers = ['🌸', '🌹', '🌺', '🌻', '🌷', '🌼', '💐', '✨'];

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    
    // Random position and timing
    const startX = Math.random() * window.innerWidth;
    const duration = 5 + Math.random() * 5;
    const size = 1 + Math.random() * 1.5;
    
    flower.style.left = startX + 'px';
    flower.style.animationDuration = duration + 's';
    flower.style.fontSize = size + 'rem';
    flower.style.opacity = 0.6 + Math.random() * 0.4;
    
    flowerContainer.appendChild(flower);
    
    // Remove after animation finishes
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Start raining flowers
setInterval(createFlower, 300);

// Initial burst
for(let i=0; i<20; i++) {
    setTimeout(createFlower, Math.random() * 2000);
}
