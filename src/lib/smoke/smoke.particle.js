import {config} from './config';
import {getRandom} from './utils';

export class SmokeParticle {
  constructor(canvas) {
    this.canvas = canvas;
    this.sprite = config.sprite;

    this.pos = {
      x: getRandom(0, this.canvas.getWidth()),
      y: getRandom(0, this.canvas.getHeight()),
    };

    const {velocity} = config.particle;
    this.velocity = {
      x: getRandom(-velocity, velocity),
      y: getRandom(-velocity, velocity),
    };

    this.radius = config.particle.radius;
    this.showDot = config.particle.showDot;
    this.init();
  }

  init() {
    const image = new Image();
    image.src = this.sprite;
    this.image = image;
  }

  draw() {
    if (this.showDot) {
      this.drawDot();
    }
    this.drawSprite();
  }

  drawDot() {
    const context = this.canvas.getContext();
    context.beginPath();
    context.arc(
      this.pos.x,
      this.pos.y,
      this.radius,
      0,
      2 * Math.PI,
      false,
    );
    context.fillStyle = 'rgba(0, 255, 255, 1)';
    context.fill();
    context.closePath();
  }

  drawSprite() {
    const context = this.canvas.getContext();
    context.drawImage(this.image, this.pos.x - 128, this.pos.y - 128);
  }

  update() {
    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;
    this.checkBorders();
  }

  checkBorders() {
    if (this.pos.x >= this.canvas.getWidth()) {
      this.velocity.x = -this.velocity.x;
    } else if (this.pos.x <= 0) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.pos.y >= this.canvas.getHeight()) {
      this.velocity.y = -this.velocity.y;
    } else if (this.pos.y <= 0) {
      this.velocity.y = -this.velocity.y;
    }
  }
}
