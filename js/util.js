export const distance = (point1, point2) => {
  return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
}

export const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export const calculateEndPoint = (start, length, angle, ratio = 1) => {
  const radian = angle * Math.PI / 180,
    newLen = length * ratio;
  return {
    x: start.x - newLen * Math.cos(radian),
    y: start.y - newLen * Math.sin(radian)
  };
}

export const branchAngles = (originalAngle, minAngleChange, maxAngleChange, num) => {
  const angles = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      angles.push(randomInt(originalAngle + minAngleChange, originalAngle + maxAngleChange));
    } else {
      angles.push(randomInt(originalAngle - minAngleChange, originalAngle - maxAngleChange));
    }
  }

  return angles;
}

export const branchingPoints = (start, end, angle, num) => {
  const length = distance(start, end);
  const points = [];
  // find the distances to branch out at
  for (let i = 0; i < num - 1; i++) {
    points.push(calculateEndPoint(start, randomInt(0, length), angle));
  }
  points.push(calculateEndPoint(start, length, angle))

  return points;
}