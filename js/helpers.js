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

export const getPointOnEllipse = (midpoint, majorAxisLen, minorAxisLen, angle = 0, pointAngle = 90) => {
  const x = (majorAxisLen / 2) * Math.cos(pointAngle) * Math.cos(angle) - (minorAxisLen / 2) * Math.sin(pointAngle) * Math.sin(angle) + midpoint.x;
  const y = (majorAxisLen / 2) * Math.cos(pointAngle) * Math.sin(angle) + (minorAxisLen / 2) * Math.sin(pointAngle) * Math.cos(angle) + midpoint.y;

  return { x, y };
};

export const angles = (num, originalAngle, change, pattern = 'alternating', range = 0) => {
  const angles = [];

  switch (pattern) {
    case 'up':
      for (let i = 0; i < num; i++) {
        let newAngle = originalAngle + change;
        let newRange = [randomInt(newAngle - range, newAngle + range), randomInt(newAngle - range, newAngle + range)];
        angles.push(randomInt(Math.min(...newRange), Math.max(...newRange)));       
      }
      break;

    case 'down':
      for (let i = 0; i < num; i++) {
        let newAngle = originalAngle - change;
        let newRange = [randomInt(newAngle - range, newAngle + range), randomInt(newAngle - range, newAngle + range)];
        angles.push(randomInt(Math.min(...newRange), Math.max(...newRange)));
      }
      break;
  
    default: // default is alternating
      for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
          let newAngle = originalAngle - change;
          let newRange = [randomInt(newAngle - range, newAngle + range), randomInt(newAngle - range, newAngle + range)];
          angles.push(randomInt(Math.min(...newRange), Math.max(...newRange)));
        } else {
          let newAngle = originalAngle + change;
          let newRange = [randomInt(newAngle - range, newAngle + range), randomInt(newAngle - range, newAngle + range)];
          angles.push(randomInt(Math.min(...newRange), Math.max(...newRange)));
        }
      }
      break;
  }

  return angles;
};

export const pointsAlongPath = (path, num, distribution = 'random', startRatio = 0, endRatio = 100) => {
  const length = path.length(),
        start = startRatio * length / 100,
        end = endRatio * length / 100,
        points = [];

  switch (distribution) {
    case 'even':
      const increment = (end - start) / num;
      for (let i = 1; i <= num; i ++) {
        points.push(path.pointAt(i * increment));
      }
      break;
  
    default: // defaults to random
      for (let i = 0; i < num - 1; i ++) {
        const randLen = randomInt(start, end + 1);
        points.push(path.pointAt(randLen));
      }
      points.push(path.pointAt(length));
      break;
    }

  return points;
};

export const makeBezierCurve = (startPt, length, angle, controlPt) => {
  const endPt = calculateLinearEndPoint(startPt, length, angle);

  return `M ${startPt.x} ${startPt.y} Q ${controlPt.x} ${controlPt.y} ${endPt.x} ${endPt.y}`;
};
