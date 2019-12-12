// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import { camelToKebab } from "./tree_helpers";

const params = {
  startPt: { x: 500, y: 900 },
  levels: 5,
  layerLenRatio: 75,
  layerWidthRatio: 60,
  // branch params
  branchColor: 'rgba(31, 36, 4, 1)',
  branchDensity: 3,
  branchThickness: 15,
  branchLength: 200,
  branchBendyness: 10,
  branchBendPlacement: 90,
  // leaf params
  leafColor: 'rgba(16, 151, 16, 0.45)',
  leafDensity: 5,
  leafWidth: 6,
  leafLength: 6,
  leafNum: 1,
  leafSpread: 90,
  leafStartRatio: 0,
  leafEndRatio: 100,
  leafAngle: 30,
  leafAngleChange: 0,
  // angle params
  angle: 90,
  angleChange: 15,
  angleRange: 45,
  anglePattern: 'alternating',
  // point params
  ptStartRatio: 40,
  ptEndRatio: 100,
  ptDistribution: 'random'
};

new Tree().drawTree(params);

// Object.keys(params).forEach(param => {
//   if (!document.getElementById(`${camelToKebab(param)}`)) return;
//   let windowEl = document.getElementById(`${camelToKebab(param)}`);
//   windowEl.addEventListener('change', e => {
//     params[param] = windowEl.value;
//     tree.clear();
//     drawLayer(params);
//   });
// });