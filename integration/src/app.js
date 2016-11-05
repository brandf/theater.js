import {
  DOM,
  Math,
  Render,
  Resources
} from 'theater.js';
import './app.css';

const theater = new DOM.Theater(document.getElementById('gl'));
const panoLayer = new DOM.Layer();
panoLayer.camera.moveTo(0, 5, -5);
panoLayer.camera.lookAt(0, 0, -0);
window.requestAnimationFrame(theater.tick.bind(theater));
