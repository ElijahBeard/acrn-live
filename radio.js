const canvas = document.getElementById('wave');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define wave properties
const waves = [];
const numWaves = 5; // Number of waves

function initializeWaves() {
  let delay = 0;
  for (let i = 0; i < numWaves; i++) {
    setTimeout(() => {
      waves.push({
        x: 0, // Start from the left side
        y: canvas.height, // Start from the bottom
        radius: 50,
        speed: 0.5 * (i + 1), // Adjust speed for each wave
        amplitude: 50 * (i + 1), // Adjust amplitude for each wave
        frequency: 0.01,
        phase: 0
      });
    }, delay);
    delay += 1000; // Adjust the delay time between waves (milliseconds)
  }
}

initializeWaves();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  waves.forEach(wave => {
    ctx.beginPath();
    for (let angle = 0; angle <= 2 * Math.PI; angle += 0.01) {
      const x = wave.x + (wave.radius + wave.amplitude * Math.sin(wave.frequency * angle + wave.phase)) * Math.cos(angle);
      const y = wave.y - (wave.radius + wave.amplitude * Math.sin(wave.frequency * angle + wave.phase)) * Math.sin(angle); // Adjust y coordinate
      if (angle === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Update wave properties
    wave.radius += wave.speed;
    if (wave.radius >= Math.max(canvas.width, canvas.height)) {
      wave.radius = 50; // Reset radius when it reaches the edge
    }
  });

  requestAnimationFrame(draw);
}

draw();