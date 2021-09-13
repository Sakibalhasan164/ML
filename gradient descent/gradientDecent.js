//the array containing the point

// { x: 33, y: 22 },
// { x: 100, y: 39 },
let points = [];

let m = 0; // the slope
let b = 0; //y intercept

let learningRate = 0.1;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(100);
  //loop through the points and show them as circles
  points.forEach((p) => {
    //i have to map them first
    let circlex = map(p.x, 0, 1, 0, 600);
    let circley = map(p.y, 1, 0, 0, 600);
    noStroke();
    circle(circlex, circley, 10);
  });
  drawLine();

  //perform gradinet decent algorithm
  let deltam = 0;
  let deltab = 0;
  //for every point in points
  for (let i = 0; i < points.length; i++) {
    let inputx = points[i].x;
    let inputy = points[i].y;
    let predictedy = inputx * m + b;
    let error = inputy - predictedy;
    //suming all of the delta x and ys
    deltam += (2 / points.length) * error * inputx;
    deltab += (2 / points.length) * error;
  }
  m += deltam * learningRate;
  b += deltab * learningRate;
  // console.log(m, b);
}
function drawLine() {
  // //implement y=mx+b line
  // stroke(255, 0, 255);
  // // circle(0, b, 100);
  // let yintercept = b;
  // line(0, b, 600, m * 600 + b);
  let x1 = 0;
  let y1 = m * x1 + b;
  let x2 = 1;
  let y2 = m * x2 + b;

  let mappedx1 = map(x1, 0, 1, 0, 600);
  let mappedy1 = map(y1, 1, 0, 0, 600);
  let mappedx2 = map(x2, 0, 1, 0, 600);
  let mappedy2 = map(y2, 1, 0, 0, 600);
  stroke(255, 0, 0);
  strokeWeight(2);
  // console.log(mappedx1, mappedy1, mappedx2, mappedy2);
  line(mappedx1, mappedy1, mappedx2, mappedy2);
}

function mousePressed() {
  //   console.log(mouseX, mouseY);
  let xCoOrdinate = map(mouseX, 0, 600, 0, 1);
  let yCoOrdinate = map(mouseY, 0, 600, 1, 0);
  let point = createVector(xCoOrdinate, yCoOrdinate);
  points.push(point);
  //   console.log(points);
}
