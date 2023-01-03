// console.log(checkSpeed(73));

// function checkSpeed(speed) {
//   let points = 0;
//   const checkPoint = 5;
//   const maxSpeed = 70;
//   if (speed >= maxSpeed + checkPoint) {
//     points = (speed - maxSpeed) / checkPoint;
//     if (points >= 12) return "License Suspended";
//     return "Points: " + points;
//   }
//   return "Ok";
// }

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 1 };

//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     console.log("Draw");
//   };

//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error("Invalid Location");
//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultLocation.x = 1;
// circle.defaultLocation.y = 2;
// circle.draw();

let person = { name: "Prakash" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

person.name = "suryam";
console.log(person.name);

console.log(Object.keys(person));

delete person.name;
console.log(person.name);
