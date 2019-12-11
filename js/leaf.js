import * as helpers from './helpers';

class Leaf {
  constructor (canvas, color, width, length, startPt, angle, type = 'single', spread = 30) {
    this.canvas = canvas;
    this.color = color;
    this.width = width;
    this.length = length;
    this.startPt = startPt;
    this.angle = angle;
    this.type = type;
    this.spread = spread;
  }

  drawLeaf(type) {
    const leaf = this.canvas.line(0, 0, 0, 0);

    switch (type) {
      case 'double':
        
        break;
    
      default: //defaults to single
        break;
    }
  }
}

export default Leaf;