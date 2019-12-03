import { SVG } from '@svgdotjs/svg.js';
export const draw = SVG().addTo('#canvas').size(1000, 1000);

import { randomInt, calculateEndPoint, branchAngles, branchingPoints } from "./tree_helpers";

//---------------------------------------------------------------------------------------------------------------------

function drawBranch(start, length, angle, thickness, color) {
  const end = calculateEndPoint(start, length, angle);

  const branch = draw.line(start.x, start.y, end.x, end.y);
  branch.stroke({ color: color, width: thickness });

  return branch;
}

function drawLeaf(start, length, width, angle, color) {
  // FIXME add different leaves
  const end = calculateEndPoint(start, length, angle);
  const leaf = draw.line(start.x, start.y, end.x, end.y);
  // const vein = draw.line(start.x, start.y, end.x, end.y);

  leaf.stroke({ color: color, width: width, linecap: 'round' });
  // vein.stroke({ color: color, width: 1, linecap: 'round' });

  return leaf;
}

//---------------------------------------------------------------------------------------------------------------------

const tree = draw.group()
export function drawLayer({ start, length, angle, width, layer, buddingTendency, branchDensity, branchMinAngle, branchMaxAngle, leafDensity, minLeafAngle, maxLeafAngle, leafLength, leafWidth, layerAngleMin, layerAngleMax, layerLengthFalloff, layerWidthFalloff, leafColor, branchColor }) {

  const thisLayer = draw.group();
  const leaves = draw.group();

  // first base branch
  thisLayer.add(drawBranch(start, length, angle, width, branchColor));

  let branchStart = calculateEndPoint(start, length, angle, buddingTendency); // how branches and leaves are placed 
  let end = calculateEndPoint(start, length, angle),
    buddingPoints = branchingPoints(branchStart, end, angle, branchDensity), // how dense the branches will be
    angles = branchAngles(angle, branchMinAngle, branchMaxAngle, branchDensity); // min and max change of branch angles

  buddingPoints.forEach((point, i) => {
    const currentAngle = angles[i];

    if (layer <= 0) { // if it's the end, draw LEAVES
      buddingPoints = branchingPoints(branchStart, end, angle, leafDensity); //leaf density
      angles = branchAngles(angle, minLeafAngle, maxLeafAngle, leafDensity); //min and max change of leaf angles

      buddingPoints.forEach((point, i) => {
        let currentAngle = angles[i];

        leaves.add(drawLeaf(point, leafLength, leafWidth, currentAngle, leafColor)); //leaf width and length, eventually shape?
      });

    } else { // if not the end, draw BRANCHES

      let nextAngle = randomInt(currentAngle + layerAngleMin, currentAngle + layerAngleMax); //angle change top, bottom DEGREE
      let params = {
        start: point,
        length: length * layerLengthFalloff,
        angle: nextAngle,
        width: width * layerWidthFalloff,
        layer: layer - 1,
        buddingTendency,
        branchDensity,
        branchMinAngle,
        branchMaxAngle,
        leafDensity,
        minLeafAngle,
        maxLeafAngle,
        leafLength,
        leafWidth,
        layerAngleMin,
        layerAngleMax,
        layerLengthFalloff,
        layerWidthFalloff,
        leafColor,
        branchColor
      }
      drawLayer(params) //branch layer width fall-off FRACTION, length layer fall-off FRACTION
    }
  })
  thisLayer.add(leaves)
  tree.add(thisLayer);
  return thisLayer;
}

