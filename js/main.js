import { SVG } from '@svgdotjs/svg.js';
var draw = SVG().addTo('#canvas').size(1000, 1000)

function distance(point1, point2) {
  return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function calculateEndPoint(start, length, angle, ratio=1) {
  debugger
  const radian = angle * Math.PI / 180,
        newLen = length * ratio;
  return {
    x: start.x - newLen * Math.cos(radian),
    y: start.y - newLen * Math.sin(radian)
  };
}

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

function branchAngles(originalAngle, minAngleChange, maxAngleChange, num) {
  const angles = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      angles.push(randomInt(originalAngle + minAngleChange, originalAngle + maxAngleChange));
    } else {
      angles.push(randomInt(originalAngle - minAngleChange, originalAngle - maxAngleChange));
    }
  }

  return angles;
}

function branchingPoints(start, end, angle, num) { 
  const length = distance(start, end);
  const points = [];
  // find the distances to branch out at
  for (let i = 0; i < num - 1; i++) {
    points.push(calculateEndPoint(start, randomInt(0, length), angle));
  }
  points.push(calculateEndPoint(start, length, angle))

  return points;
}

//---------------------------------------------------------------------------------------------------------------------


function drawLayer({ start, length, angle, width, layer, buddingTendency, branchDensity, branchMinAngle, branchMaxAngle, leafDensity, minLeafAngle, maxLeafAngle,leafLength, leafWidth, childBranchLengthFalloff, childBranchWidthFalloff, layerAngleMin, layerAngleMax, layerLengthFalloff, layerWidthFalloff, leafColor, branchColor }) {

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
    
    if (layer === 0) { // if it's the end, draw LEAVES
      buddingPoints = branchingPoints(branchStart, end, angle, leafDensity); //leaf density
      angles = branchAngles(angle, minLeafAngle, maxLeafAngle, leafDensity); //min and max change of leaf angles

      buddingPoints.forEach((point, i) => {
        let currentAngle = angles[i];

        leaves.add(drawLeaf(point, leafLength, leafWidth, currentAngle, leafColor)); //leaf width and length, eventually shape?
      });

    } else { // if not the end, draw BRANCHES
      thisLayer.add(drawBranch(point, length * childBranchLengthFalloff, currentAngle, width * childBranchWidthFalloff, branchColor)); // child branch length/width fall-off FRACTION
      
      let nextAngle = randomInt(currentAngle + layerAngleMin, currentAngle + layerAngleMax); //angle change top, bottom DEGREE
          params = {
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
            childBranchLengthFalloff,
            childBranchWidthFalloff,
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

let params = {start: { x: 500, y: 800 },
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
    leafLength: 10,
    leafWidth: 10,
    childBranchLengthFalloff: 0.7,
    childBranchWidthFalloff: 0.5,
    layerAngleMin: -30,
    layerAngleMax: 30,
    layerLengthFalloff: 0.8,
    layerWidthFalloff: 0.65,
    leafColor: 'rgba(16, 151, 16, 0.65)',
    branchColor: 'rgb(31, 36, 4)',
};

const tree = draw.group()
tree.add(drawLayer(params));


