import { Theater } from '../../dist/theater';
import './app.css';

const theater = new Theater(document.getElementById('gl'));
window.requestAnimationFrame(theater.tick.bind(theater));
