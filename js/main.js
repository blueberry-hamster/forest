import { SVG } from '@svgdotjs/svg.js';

var draw = SVG().addTo('#canvas').size(1000, 1000)

// var group = draw.group()
// group.add(line)

// notes: 
// - always input angles as relative to 90degrees vertical
// - 



function distance(point1, point2) {
  return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function calculateEndPoint(start, length, angle) {
  const radian = angle * Math.PI / 180;
  return {
    x: start.x - length * Math.cos(radian),
    y: start.y - length * Math.sin(radian)
  };
}

//---------------------------------------------------------------------------------------------------------------------

function drawBranch(start, length, angle, thickness, color) {
  const end = calculateEndPoint(start, length, angle);
  
  const line = draw.line(start.x, start.y, end.x, end.y);
  line.stroke({ color: color, width: thickness, linecap: 'round' });
}

function drawLeaf(start, length, angle, thickness, color) {
  const end = calculateEndPoint(start, length, angle);
  const leaf = draw.line(start.x, start.y, end.x, end.y);
  const vein = draw.line(start.x, start.y, end.x, end.y);
  
  leaf.stroke({ color: color, width: thickness, linecap: 'round' });
  vein.stroke({ color: color, width: 1, linecap: 'round' });
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

function branchingPoints(start, end, angle, num) { //calculateEndPoint(start, length, angle)
  const length = distance(start, end);
  const points = [];
  // find the distances to branch out at
  for (let i = 0; i < num; i++) {
    points.push(calculateEndPoint(start, randomInt(0, length), angle));
  }
  return points;
}

//---------------------------------------------------------------------------------------------------------------------

let start = { x: 500, y: 800 },
    length = 250,
    angle = 90,
    width = 20;

function drawLayer(start, length, angle, width, layer) {

  drawBranch(start, length, angle, width, 'black');

  let end = calculateEndPoint(start, length, angle);
  let branches = branchingPoints(start, end, angle, 3);
  let angles = branchAngles(angle, 15, width, 3);
  
  branches.forEach((point, i) => {
    
    if (layer === 0) {
      let end = calculateEndPoint(start, length, angle);
      let branches = branchingPoints(start, end, angle, 4);
      let angles = branchAngles(angle, 90, width, 4);

      branches.forEach((point, i) => {
        drawLeaf(point, 10, angles[i], 10, 'rgba(16, 151, 16, 0.65)');
      });
      return
    } else {
      drawBranch(point, length * 0.8, angles[i], width * 0.5, 'black');
      let angle = randomInt(angles[i] - 30, angles[i] + 30);
      drawLayer(point, length * 0.8, angle, width * 0.65, layer - 1)
    }
  })
}

drawLayer(start, length, angle, width, 6);