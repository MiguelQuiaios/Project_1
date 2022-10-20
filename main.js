const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const player = new Component(600, 400, 50, 50, 'black', ctx);

let game = new Game(ctx, 1200, 800, player);

game.start();


document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      player.speedY -= 4;
      break;
    case 'ArrowDown':
      player.speedY += 4;
      break;
    case 'ArrowRight':
      player.speedX += 4;
      break;
    case 'ArrowLeft':
      player.speedX -= 4;
      break;
  }
});

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
});