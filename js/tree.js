import * as helpers from './helpers';
import Branch from './branch';
import Leaf from './leaf';

class Tree {
  constructor(
    canvas, levels, num, color, 
    layerLenRatio, layerWidthRatio,
    angle, angleChange, angleRange, anglePattern, 
    ptStartRatio, ptEndRatio, ptDistribution) {
    // angles = (num, originalAngle, change, pattern = 'alternating', range = 0)
    // pointsAlongPath = (path, num, distribution = 'random', startRatio = 0, endRatio = 100)
    // general params
    this.canvas = canvas;
    this.levels = levels;
    this.num = num;
    this.color = color;
    // angle params
    this.angle = angle;
    this.angleChange = angleChange;
    this.angleRange = angleRange;
    this.anglePattern = anglePattern;
    // point params
    this.ptStartRatio = ptStartRatio;
    this.ptEndRatio = ptEndRatio;
    this.ptDistribution = ptDistribution;
  }

  drawTree(canvas, color, width, length, startPt, angle, num = 2, spread = 30) {
    const branch = a;

  }
}

export default Tree;