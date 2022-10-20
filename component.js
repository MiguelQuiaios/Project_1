class Component {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x % 1200, this.y % 800, this.w, this.h);
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}
