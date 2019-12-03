import { drawLayer, draw } from './tree_builder';

let params = {
  start: { x: 500, y: 900 },
  length: 200,
  angle: 90,
  width: 20,
  layer: 6,
  buddingTendency: 0.25,
  branchDensity: 3,
  branchMinAngle: 10,
  branchMaxAngle: 20,
  leafDensity: 5,
  minLeafAngle: 30,
  maxLeafAngle: 60,
  leafLength: 7,
  leafWidth: 10,
  layerAngleMin: -30,
  layerAngleMax: 30,
  layerLengthFalloff: 0.8,
  layerWidthFalloff: 0.65,
  leafColor: 'rgba(16, 151, 16, 0.65)',
  branchColor: 'rgb(31, 36, 4)',
};

drawLayer(params);


