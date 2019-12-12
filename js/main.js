// import { drawLayer, draw, tree } from './tree_builder';
import Tree from "./tree";
import { camelToKebab } from "./tree_helpers";

const params = {
  startPt: { x: 500, y: 900 },
  levels: 0,
  layerLenRatio: 75,
  layerWidthRatio: 50,
  // branch params
  branchColor: 'rgba(31, 36, 4, 1)',
  branchDensity: 2,
  branchThickness: 40,
  branchLength: 200,
  branchBendyness: 15,
  branchBendPlacement: 30,
  // leaf params
  leafColor: 'rgba(16, 151, 16, 0.45)',
  leafDensity: 10,
  leafWidth: 3,
  leafLength: 6,
  leafNum: 1,
  leafSpread: 120,
  leafStartRatio: 50,
  leafEndRatio: 100,
  leafAngleChange: 120,
  // angle params
  angle: 90,
  angleChange: 25,
  angleRange: 35,
  anglePattern: 'alternating',
  // point params
  ptStartRatio: 0,
  ptEndRatio: 90,
  ptDistribution: 'random'
};

new Tree(8, 500).drawTree(params);

// Object.keys(params).forEach(param => {
//   if (!document.getElementById(`${camelToKebab(param)}`)) return;
//   let windowEl = document.getElementById(`${camelToKebab(param)}`);
//   windowEl.addEventListener('change', e => {
//     params[param] = windowEl.value;
//     tree.clear();
//     drawLayer(params);
//   });
// });