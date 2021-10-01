let points = [];
let neuron;
function setup() {
  // frameRate(10);
  createCanvas(600, 600);
  neuron = new Neuron();
  for (let i = 0; i < 100; i++) {
    let point = new Point();
    points.push(point);
  }
}

function draw() {
  background(100);
  let err = 0;
  let N = points.length;
  for (let p = 0; p < N; p++) {
    points[p].show();
    let inp = [points[p].x, points[p].y];
    //when you guess
    // neuron.computeError(points[p].lebel, inp);
    let output = neuron.guess(inp);
    if (output == points[p].lebel) {
      fill(0, 255, 0);
      circle(points[p].x, points[p].y, 10);
    } else {
      fill(255, 0, 0);
      circle(points[p].x, points[p].y, 10);
    }
  }

  // neuron.printWeights();

  stroke(255);
  strokeWeight(4);
  line(0, 0, width, width);
}
function mousePressed() {
  points.forEach((p) => {
    // p.show();
    let inp = [p.x, p.y];
    //when you guess
    neuron.computeError(p.lebel, inp);
  });
}
