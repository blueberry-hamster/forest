import * as helpers from './helpers';

class Branch {
  constructor(canvas, startPt, length, angle, thickness, color, bend = 0, bendAngle = 90, startX) {
    this.canvas = canvas;
    this.startPt = startPt;
    this.length = length;
    this.angle = angle;
    // debugger
    this.color = color;
    this.bend = bend;
    this.bendAngle = [bendAngle, -1 * bendAngle][Math.floor(Math.random() * 2)];
    // calculated params
    this.endPt = helpers.calculateLinearEndPoint(startPt, length, angle);
    // this.distToCenter = 1 - ((Math.abs(startX - ((startPt.x + this.endPt.x) / 2)) + 0.01)/ 100);
    this.thickness = thickness; // * (this.distToCenter)

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