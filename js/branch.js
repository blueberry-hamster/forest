import * as helpers from './helpers';

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
    this.endPt = helpers.calculateLinearEndPoint(startPt, length, angle);
    this.midPt = helpers.midpointBetweenTwoPoints(startPt, this.endPt);
    this.controlPt = bend === 0 ? 
      this.midPt : 
      helpers.getPointOnEllipse(this.midPt, length, (length * bend / 100), angle, bendAngle);
    this.curve = helpers.makeBezierCurve(startPt, length, angle, this.controlPt);
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