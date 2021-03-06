import * as helpers from './helpers';
import Branch from './branch';
import LeafyBranch from './leafy_branch';

import { SVG } from '@svgdotjs/svg.js';
export const draw = SVG().addTo('#canvas').size(1200, 1200);

class Tree {
  constructor(levels, startX) {
    this.tree = draw.group().addClass('tree');
    this.levels = levels;
    this.startX = startX;
  }

  drawTree(params) {
    // base branch
    const branch = new Branch(draw, params.startPt, params.branchLength, params.angle, params.branchThickness, params.branchColor, params.branchBendyness, params.branchBendPlacement, this.startX).drawBranch();
    this.tree.add(branch);
    
    // calculate points and angles to itterate over
    const buddingPoints = helpers.pointsAlongPath(branch, params.branchDensity, params.ptDistribution, params.ptStartRatio, params.ptEndRatio),
          angles = helpers.angles(params.branchDensity, params.angle, params.angleChange, params.anglePattern, params.angleRange);

    // itterate over points and recurse
    buddingPoints.forEach((point, i) => {
      const currentAngle = angles[i];
      
      if (params.currLev === this.levels) { // if it's the end, draw LEAVES
        const leafyBranch = new LeafyBranch({ 
          canvas: draw, 
          branch,
          // leaf param
          leafColor: params.leafColor,
          leafDensity: params.leafDensity,
          leafWidth: params.leafWidth,
          leafLength: params.leafLength,
          leafNum: params.leafNum,
          leafSpread: params.leafSpread,
          
          // angle param
          angle: params.angle,
          leafAngleChange: params.leafAngleChange,
          anglePattern: params.anglePattern,
          
          // point param
          leafStartRatio: params.leafStartRatio,
          leafEndRatio: params.leafEndRatio,
          ptDistribution: params.ptDistribution
        }).drawLeafyBranch();
        this.tree.add(leafyBranch);
        return leafyBranch;
        
      } else { // if not the end, draw BRANCHES
        const nextParams = {
          startPt: point,
          levels: params.levels,
          currLev: params.currLev + 1, 
          layerLenRatio: params.layerLenRatio, 
          layerWidthRatio: params.layerWidthRatio,
          // branch params
          branchColor: params.branchColor, 
          branchDensity: params.branchDensity, 
          branchThickness: (params.branchThickness * params.layerWidthRatio / 100) , 
          branchLength: params.branchLength * params.layerLenRatio / 100,
          branchBendyness: params.branchBendyness, 
          branchBendPlacement: params.branchBendPlacement,
          // leaf params
          leafColor: params.leafColor, 
          leafDensity: params.leafDensity, 
          leafWidth: params.leafWidth, 
          leafLength: params.leafLength, 
          leafNum: params.leafNum, 
          leafSpread: params.leafSpread,
          leafStartRatio: params.leafStartRatio,
          leafEndRatio: params.leafEndRatio, 
          leafAngleChange: params.leafAngleChange,
          // angle params
          angle: currentAngle, 
          angleChange: params.angleChange, 
          angleRange: params.angleRange, 
          anglePattern: params.anglePattern,
          // point params
          ptStartRatio: params.ptStartRatio, 
          ptEndRatio: params.ptEndRatio, 
          ptDistribution: params.ptDistribution
        };
        return this.drawTree(nextParams);
      }
    });
  }
}

export default Tree;