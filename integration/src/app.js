import Theater from 'theater.js';
import './app.css';

const engine = new Theater.Engine({
  canvas: document.getElementById('gl'),
  layers: [
    new Theater.Layer({
      camera: new Theater.Scene.Cameras.PerspectiveCamera({
        position: Theater.Math.Vector3.create(0, 5, -5),
        lookAt: Theater.Math.Vector3.create(0, 0, 0),
      }),
      scene: new Theater.Scene.Scene({
        children: [
          new Theater.Scene.Model({
            renderable: new Theater.Rendering.CubeRenderable({
              material: new Theater.Rendering.BasicMaterial({
                color: Theater.Math.Vector3.create(1, 0, 0), // red
              }),
              size: Theater.Math.Vector3.create(0, 0, 0),
            }),
          }),
        ],
      }),
    }),
  ],
});

engine.continuous = true;
