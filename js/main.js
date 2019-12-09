import { drawLayer, draw, tree } from './tree_builder';
import { camelToKebab } from "./tree_helpers";
import { randomPointInEllipse } from './tree_helpers';

let params = {
  start: { x: 500, y: 900 },
  length: 200,
  angle: 90,
  width: 20,
  layer: 6,
  buddingTendency: 25,

  branchDensity: 3,
  branchMinAngle: 20,
  branchMaxAngle: 20,

  leafDensity: 5,
  minLeafAngle: 30,
  maxLeafAngle: 60,
  leafLength: 10,
  leafWidth: 3,

  layerAngleMin: -30,
  layerAngleMax: 30,
  layerLengthFalloff: 80,
  layerWidthFalloff: 65,
  leafColor: 'rgba(16, 151, 16, 0.65)',
  branchColor: 'rgb(31, 36, 4)',
};

drawLayer(params);

Object.keys(params).forEach(param => {
  if (!document.getElementById(`${camelToKebab(param)}`)) return;
  let windowEl = document.getElementById(`${camelToKebab(param)}`);
  windowEl.addEventListener('change', e => {
    params[param] = windowEl.value;
    tree.clear();
    drawLayer(params);
  });
});