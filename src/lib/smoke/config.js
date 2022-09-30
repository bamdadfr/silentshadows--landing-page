export const config = {
  // sprite,
  sprite: 'https://silentshadows.net/wp-content/uploads/2020/06/sprite-smoke.png',
  canvas: {
    width: 825,
    height: 412,
    opacity: 0.8,
  },
  smoke: {
    store: [],
    density: 60,
    refreshRate: 0.05,
  },
  particle: {
    showDot: false,
    radius: 5,
    velocity: 0.2,
  },
  getContainer: () => document.getElementById('canvas-smoke-animation'),
};
