const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area1:", area);
radius = 4;
area = radius * radius * PI;
console.log("Area2:", area);

function CircleArea(radius){const PI = 3.14;
    let area = 0;
    function circleArea(radius) {
      const area = radius * PI;
    }
    area = circleArea(3);
    console.log(area)}