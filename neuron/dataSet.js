//i need some points in the canvas to show them and use them as data;
class Point {
  constructor() {
    this.x = Math.floor(random(0, width));
    this.y = Math.floor(random(0, height));
    //the class it belongs to
    //if above the line lebel=1
    //below the line level=-1
    if (this.y > this.x) {
      this.lebel = -1;
    } else {
      this.lebel = 1;
    }
    // console.log(this.x, this.y, this.lebel);
  }

  //the function to draw the points
  show() {
    if (this.lebel == 1) {
      fill(255);
      circle(this.x, this.y, 10);
    } else {
      fill(0, 0, 200);
      noStroke();
      circle(this.x, this.y, 10);
    }
  }
}
