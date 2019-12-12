import * as helpers from './helpers';

class Leaf {
  constructor (canvas, color, width, length, startPt, angle, num = 1, spread = 30) {
    this.canvas = canvas;
    this.color = color;
    this.width = width;
    this.length = length;
    this.startPt = startPt;
    this.angle = angle;
    this.num = num;
    this.spread = spread;

    this.leaves = this.canvas.group().addClass('leaf-group');
  }

  drawLeaf(angle = this.angle) {
    const endPt = helpers.calculateLinearEndPoint(this.startPt, this.length, angle);
    const leaf = this.canvas.line(this.startPt.x, this.startPt.y, endPt.x, endPt.y);
    leaf.stroke({ color: this.color, width: this.width, linecap: 'round' });
    
    return leaf.addClass('leaf');
  }

  drawLeaves() {
    if (this.num === 1) return this.drawLeaf();
    
    const increment = this.spread / this.num;
    const startAngle = this.angle - (this.spread / 2);

    for (let i = 0; i < this.num; i++) {
      this.leaves.add(this.drawLeaf(startAngle + i * increment));
    }
    return this.leaves;
  }
}

export default Leaf;