class Game {
    constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.obstacles = [];
      this.quiddich = [];
      this.frames = 0;
    }
  
    start() {
      this.intervalId = setInterval(this.update, 1000 / 60);
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  
    score() {
      const points = Math.floor(this.frames / 5);
      this.ctx.fillStyle = 'red';
      this.ctx.fillText(`Score: ${points}`, 100, 100);
    }
  
    update = () => {
      this.score();
      this.frames++;
      this.clear();
      this.player.newPos();
      this.player.draw();
      this.updateObstacles();
      this.checkGameOver();
    };
  
    stop() {
      clearInterval(this.intervalId);
    }
  
    checkGameOver() {
      const crashed = this.obstacles.some((obstacle) => {
        return this.player.crashWith(obstacle);
      });
  
      if (crashed) {
        this.stop();
      }
    }
  
    updateObstacles() {
      for (let i = 0; i < this.obstacles.length; i++) {
        if(i % 2 === 0){
          this.obstacles[i].x -= 8;
          this.obstacles[i].y -= 2;
        }else{
          this.obstacles[i].x -= 6;
        }
        
        this.obstacles[i].draw();
      }
  
      if (this.frames % 30 === 0) {
        this.obstacles.push(new Component(1000
        , Math.floor(Math.random() * ((800 - 100 + 1) + 100)), 50, 50, 'red', this.ctx))
        
      }
      if (this.frames % 600 === 0) {
        this.obstacles.push(new Component(1000
        , Math.floor(Math.random() * ((800 - 100 + 1) + 100)), 50, 50, 'yellow', this.ctx))
        
      }
      
    }
  }
  