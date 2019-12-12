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
    this.buddingPoints = helpers.pointsAlongPath(params.branch, params.branchDensity, params.ptDistribution, params.ptStartRatio, params.ptEndRatio);
    this.angles = helpers.angles(params.branchDensity, params.angle, params.angleChange, params.anglePattern, params.angleRange);
  }

  drawLeafyBranch() {
    buddingPoints.forEach((point, i) => {
      const currentAngle = angles[i];

      Leaf.new(this.canvas, this.leafColor, this.leafWidth, this.leafLength, point, currentAngle, this.leafNum, this.leafSpread);
    });

  }
}