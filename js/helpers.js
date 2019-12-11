export const camelToKebab = (string) => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

export const distanceBetweenTwoPoints = (point1, point2) => {
  return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
};

export const midpointBetweenTwoPoints = (point1, point2) => {
  return {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2
  };
};

export const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

export const calculateLinearEndPoint = (start, length, angle, ratio = 100) => {
  const radian = angle * Math.PI / 180,
    newLen = length * ratio / 100;
  return {
    x: start.x - newLen * Math.cos(radian),
    y: start.y - newLen * Math.sin(radian)
  };
};

export const calculatePathEndPoint = (path, ratio = 100) => {
  return path.pointAt(path.length() * ratio / 100);
};

export const rotatePointOnEllipse = (midpoint, majorAxisLen, minorAxisLen, angle = 0, pointAngle = 90) => {
  const x = (majorAxisLen / 2) * Math.cos(pointAngle) * Math.cos(angle) - (minorAxisLen / 2) * Math.sin(pointAngle) * Math.sin(angle) + midpoint.x;
  const y = (majorAxisLen / 2) * Math.cos(pointAngle) * Math.sin(angle) + (minorAxisLen / 2) * Math.sin(pointAngle) * Math.cos(angle) + midpoint.y;

  return { x, y };
};

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
};

export const branchingPoints = (start, end, angle, num) => {
  const length = distance(start, end);
  const points = [];
  // find the distances to branch out at
  for (let i = 0; i < num - 1; i++) {
    points.push(calculateEndPoint(start, randomInt(0, length), angle));
  }
  points.push(calculateEndPoint(start, length, angle));

  return points;
};