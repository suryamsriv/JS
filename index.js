console.log(checkSpeed(73));

function checkSpeed(speed) {
  let points = 0;
  const checkPoint = 5;
  const maxSpeed = 70;
  if (speed >= maxSpeed + checkPoint) {
    points = (speed - maxSpeed) / checkPoint;
    if (points >= 12) return "License Suspended";
    return "Points: " + points;
  }
  return "Ok";
}
