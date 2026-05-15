const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const song = document.getElementById('birthdaySong');

startBtn.addEventListener('click', () => {
    // Play song
    song.play().catch(e => console.log("Audio play failed:", e));
    
    // Trigger Confetti
    triggerConfetti();
    
    // Hide start button, show next button
    startBtn.style.display = 'none';
    nextBtn.classList.remove('hidden');
    nextBtn.style.display = 'block';
    
    // Start automatic confetti every few seconds
    setInterval(triggerConfetti, 3000);
});

nextBtn.addEventListener('click', () => {
    // Add a transition effect before navigating
    document.body.style.transition = 'opacity 0.8s ease-out';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'cake.html';
    }, 800);
});

function triggerConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff6b6b', '#ffd700', '#f48fb1']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff6b6b', '#ffd700', '#f48fb1']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Background Balloons
function createBalloon() {
    const colors = ['#ff6b6b', '#ff8e8e', '#ffd700', '#81d4fa', '#a5d6a7'];
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
    balloon.style.opacity = '0.6';
    document.body.appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 20000);
}

setInterval(createBalloon, 1500);
