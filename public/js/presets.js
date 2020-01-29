const silver = 'rgba(137, 144, 128, 1)';
const blackBrown = 'rgba(57, 55 ,46, 1)';

const leafGreen = 'rgba(14, 151, 25, 0.45)'; 
const blossom = 'rgba(238, 120, 171, 0.13)';
const yellow = 'rgba(227, 214, 34, 0.35)';




export const tree1 = {
  startPt: { x: 600, y: 1200 },
  levels: 6,
  currLev: 0,
  layerLenRatio: 75,
  layerWidthRatio: 60,
  // branch params
  branchColor: blackBrown,
  branchDensity: 3,
  branchThickness: 15,
  branchLength: 230,
  branchBendyness: 10,
  branchBendPlacement: 90,
  // leaf params
  leafColor: leafGreen,
  leafDensity: 5,
  leafWidth: 6,
  leafLength: 6,
  leafNum: 1,
  leafSpread: 90,
  leafStartRatio: 0,
  leafEndRatio: 100,
  leafAngleChange: 45,
  // angle params
  angle: 90,
  angleChange: 15,
  angleRange: 45,
  anglePattern: 'alternating',
  // point params
  ptStartRatio: 40,
  ptEndRatio: 100,
  ptDistribution: 'random'
};

export const tree2 = {
  startPt: { x: 600, y: 1200 },
  levels: 6,
  currLev: 0,
  layerLenRatio: 75,
  layerWidthRatio: 55,
  // branch params
  branchColor: blackBrown,
  branchDensity: 3,
  branchThickness: 25,
  branchLength: 200,
  branchBendyness: 5,
  branchBendPlacement: 90,
  // leaf params
  leafColor: blossom,
  leafDensity: 4,
  leafWidth: 6,
  leafLength: 6,
  leafNum: 3,
  leafSpread: 180,
  leafStartRatio: 0,
  leafEndRatio: 100,
  leafAngleChange: 180,
  // angle params
  angle: 90,
  angleChange: 35,
  angleRange: 35,
  anglePattern: 'alternating',
  // point params
  ptStartRatio: 40,
  ptEndRatio: 100,
  ptDistribution: 'random'
};

// export const tree3 = {
//   startPt: { x: 600, y: 1200 },
//   levels: 8,
//   currLev: 0,
//   layerLenRatio: 80,
//   layerWidthRatio: 60,
//   // branch params
//   branchColor: randomBarkColor(),
//   branchDensity: 2,
//   branchThickness: 40,
//   branchLength: 150,
//   branchBendyness: 100,
//   branchBendPlacement: 100,
//   // leaf params
//   leafColor: randomLeafColor(),
//   leafDensity: 4,
//   leafWidth: 8,
//   leafLength: 10,
//   leafNum: 6,
//   leafSpread: 90,
//   leafStartRatio: 0,
//   leafEndRatio: 100,
//   leafAngleChange: 45,
//   // angle params
//   angle: 90,
//   angleChange: 30,
//   angleRange: 45,
//   anglePattern: 'alternating',
//   // point params
//   ptStartRatio: 40,
//   ptEndRatio: 100,
//   ptDistribution: 'random'
// };

// export const tree2 = {
//   startPt: { x: 600, y: 1200 },
//   levels: 3,
//   currLev: 0,
//   layerLenRatio: 80,
//   layerWidthRatio: 45,
//   // branch params
//   branchColor: randomBarkColor(),
//   branchDensity: 6,
//   branchThickness: 35,
//   branchLength: 170,
//   branchBendyness: 3,
//   branchBendPlacement: 90,
//   // leaf params
//   leafColor: randomLeafColor(),
//   leafDensity: 2,
//   leafWidth: 2,
//   leafLength: 30,
//   leafNum: 6,
//   leafSpread: 120,
//   leafStartRatio: 80,
//   leafEndRatio: 100,
//   leafAngleChange: 45,
//   // angle params
//   angle: 90,
//   angleChange: 30,
//   angleRange: 45,
//   anglePattern: 'alternating',
//   // point params
//   ptStartRatio: 70,
//   ptEndRatio: 100,
//   ptDistribution: 'random'
// }; 

export const tree3 = {
  startPt: { x: 600, y: 1200 },
  levels: 6,
  currLev: 0,
  layerLenRatio: 75,
  layerWidthRatio: 65,
  // branch params
  branchColor: blackBrown,
  branchDensity: 3,
  branchThickness: 20,
  branchLength: 250,
  branchBendyness: 0,
  branchBendPlacement: 90,
  // leaf params
  leafColor: yellow,
  leafDensity: 4,
  leafWidth: 10,
  leafLength: 3,
  leafNum: 1,
  leafSpread: 120,
  leafStartRatio: 0,
  leafEndRatio: 100,
  leafAngleChange: 120,
  // angle params
  angle: 90,
  angleChange: 10,
  angleRange: 45,
  anglePattern: 'alternating',
  // point params
  ptStartRatio: 0,
  ptEndRatio: 90,
  ptDistribution: 'random'
};

