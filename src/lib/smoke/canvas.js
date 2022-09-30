import {config} from './config';

export class Canvas {
  constructor(container, window) {
    this.container = container;
    this.window = window;
    const {width, height, opacity} = config.canvas;
    this.width = width;
    this.height = height;
    this.opacity = opacity;
    this.init();
    this.setListeners();
  }

  init() {
    this.setElement();
  }

  resize() {
    this.el.style.width = this.window.innerWidth + 'px';
    this.el.style.height = this.window.innerHeight + 'px';
  }

  getContext() {
    return this.el.getContext('2d');
  }

  getElement() {
    return this.el;
  }

  getHeight() {
    return this.el.height;
  }

  getWidth() {
    return this.el.width;
  }

  setElement() {
    this.el = document.createElement('canvas');
    this.el.width = this.width;
    this.el.height = this.height;
    this.resize();
    this.setOpacity();
    this.container.appendChild(this.el);
  }

  setOpacity() {
    const context = this.getContext();
    context.globalAlpha = this.opacity;
  }

  setListeners() {
    this.window.addEventListener('resize', () => {
      this.resize();
    });
  }
}
