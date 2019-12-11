import * as helpers from './helpers';
import Leaf from './leaf';

class Branch {
  constructor(canvas, startPt, length, angle, thickness, color, bend = 0, bendAngle = 90) {
    this.canvas = canvas;
    this.startPt = startPt;
    this.length = length;
    this.angle = angle;
    this.thickness = thickness;
    this.color = color;
    this.bend = bend;
    this.bendAngle = bendAngle;
    // calculated params
    this.endPt = helpers.calculateLinearEndPoint(this.startPt, this.length, this.angle);
    this.midPt = helpers.midpointBetweenTwoPoints(this.startPt, this.endPt);
    this.controlPt = bend === 0 ? 
      this.midPt : 
      helpers.getPointOnEllipse(this.midPt, this.length, (this.length * bend / 100), this.angle, this.bendAngle);
    this.curve = helpers.makeBezierCurve(this.startPt, this.length, this.angle, this.controlPt);
  }

  drawBranch() {
    const branch = this.canvas.path(this.curve);
    branch.stroke({ color: this.color, width: this.thickness, linecap: 'round', linejoin: 'round' });
    branch.fill('none');
    branch.addClass('branch');

    return branch;
  }
}

export default Branch;