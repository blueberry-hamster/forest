import * as helpers from './helpers';
import Leaf from './leaf';

class LeafyBranch {
  constructor(params) {
    this.canvas = params.canvas;
    this.branch = params.branch;
    
    this.leafColor = params.leafColor;
    this.leafDensity = params.leafDensity;
    this.leafWidth = params.leafWidth;
    this.leafLength = params.leafLength;
    this.leafNum = params.leafNum;
    this.leafSpread = params.leafSpread;

    this.angle = params.angle;
    this.angleChange = params.angleChange;
    this.angleRange = params.angleRange;
    this.anglePattern = params.anglePattern;

    this.ptStartRatio = params.ptStartRatio;
    this.ptEndRatio = params.ptEndRatio;
    this.ptDistribution = params.ptDistribution;

    // calculate points and angles to itterate over
    
    // debugger
    this.buddingPoints = helpers.pointsAlongPath(this.branch, this.leafDensity, this.ptDistribution, this.ptStartRatio, this.ptEndRatio);
    this.angles = helpers.angles(this.leafDensity, this.angle, this.angleChange, this.anglePattern, this.angleRange);
  }

  drawLeafyBranch() {
    const leaves = this.canvas.group().addClass('leaves');
    this.buddingPoints.forEach((point, i) => {
      const currentAngle = this.angles[i];
      let leaf = new Leaf(this.canvas, this.leafColor, this.leafWidth, this.leafLength, point, currentAngle, this.leafNum, this.leafSpread).drawLeaves();
      leaves.add(leaf);
    }, this);
  }
}

export default LeafyBranch;