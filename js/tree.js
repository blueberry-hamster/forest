import { SVG } from '@svgdotjs/svg.js';
export const draw = SVG().addTo('#canvas').size(1000, 1000);

import * as helpers from './helpers';
import Branch from './branch';
import LeafyBranch from './leafy_branch';

export const Tree = class {
  constructor() {
    this.tree = canvas.group().addClass('tree');
  }

  drawTree(params) {
    // base branch
    const branch = Branch.new();
    this.tree.add(branch);
    
    // calculate points and angles to itterate over
    const buddingPoints = helpers.pointsAlongPath(branch, params.branchDensity, params.ptDistribution, params.ptStartRatio, params.ptEndRatio),
          angles = helpers.angles(params.branchDensity, params.angle, params.angleChange, params.anglePattern, params.angleRange);

    // itterate over points and recurse
    buddingPoints.forEach((point, i) => {
      const currentAngle = angles[i];

      if (layer <= 0) { // if it's the end, draw LEAVES
        const leafyBranch = LeafyBranch.new(draw, branch,
          // leaf params
          params.leafColor, params.leafDensity, params.leafWidth, params.leafLength, params.leafNum, params.leafSpread, 
          // angle params
          params.angle, params.angleChange, params.angleRange, params.anglePattern, 
          // point params
          params.ptStartRatio, params.ptEndRatio, params.ptDistribution);
        this.tree.add(leafyBranch);
        
      } else { // if not the end, draw BRANCHES
        const nextParams = {
          canvas, 
          startPt: point,
          levels: levels - 1, 
          layerLenRatio, 
          layerWidthRatio,
          // branch params
          branchColor, 
          branchDensity, 
          branchThickness: branchThickness * layerWidthFalloff / 100, 
          branchLength: branchLength * layerLenRatio / 100,
          branchBendyness, 
          branchBendPlacement,
          // leaf params
          leafColor, 
          leafDensity, 
          leafWidth, 
          leafLength, 
          leafNum, 
          leafSpread,
          // angle params
          angle: currentAngle, 
          angleChange, 
          angleRange, 
          anglePattern,
          // point params
          ptStartRatio, 
          ptEndRatio, 
          ptDistribution
        };
        this.drawTree(nextParams);
      }
    });
  }
};