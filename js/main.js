// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import { camelToKebab } from "./tree_helpers";

const params = {
  startPt: { x: 500, y: 900 },
  levels: 1,
  layerLenRatio: 80,
  layerWidthRatio: 60,
  // branch params
  branchColor: 'rgba(31, 36, 4, 0.2)',
  branchDensity: 2,
  branchThickness: 20,
  branchLength: 200,
  branchBendyness: 30,
  branchBendPlacement: 90,
  // leaf params
  leafColor: 'rgba(16, 151, 16, 0.65)',
  leafDensity: 4,
  leafWidth: 3,
  leafLength: 10,
  leafNum: 3,
  leafSpread: 30,
  // angle params
  angle: 90,
  angleChange: 15,
  angleRange: 10,
  anglePattern: 'alternating',
  // point params
  ptStartRatio: 30,
  ptEndRatio: 100,
  ptDistribution: 'even'
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