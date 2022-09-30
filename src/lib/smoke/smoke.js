import {config} from './config';
import {SmokeParticle} from './smoke.particle';

export class Smoke {
  constructor(canvas) {
    this.canvas = canvas;
    const {store, density, refreshRate} = config.smoke;
    this.store = store;
    this.density = density;
    this.refreshRate = refreshRate;
    this.isReady = false;
    this.init();
  }

  init() {
    this.setSmoke();
  }

  animate() {
    setInterval(() => {
      if (this.isReady) {
        this.clear();
        this.update();
        this.draw();
      }
    }, 1 / this.refreshRate);
  }

  clear() {
    const context = this.canvas.getContext();
    context.clearRect(0, 0, this.canvas.getWidth(), this.canvas.getHeight());
  }

  draw() {
    this.store.forEach((p) => p.draw());
  }

  update() {
    this.store.forEach((p) => p.update());
  }

  setSmoke() {
    for (let i = 0; i < this.density; i += 1) {
      const particle = new SmokeParticle(this.canvas);
      this.store.push(particle);
    }
    this.isReady = true;
  }
}
