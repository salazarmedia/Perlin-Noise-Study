// let offset1 = 0;
// PERLIN NOISE CIRCLE VARIABLES
// let offset2 = 20000;
// let offsetvel = 0.01;

// PERLIN NOISE ONE DIMENSION VARIABLES
let increment = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(40);

  // PERLIN NOISE CIRCLE

  // let x = map(noise(offset1), 0, 1, 0, width);
  // let y = map(noise(offset2), 0, 1, 0, height);
  // offset1 += offsetvel;
  // offset2 += offsetvel;
  

  // ellipse(x, y, 24, 24);

  stroke(255);

  // PERLIN NOISE ONE DIMENSION 

  noFill();
  beginShape();
  let offset = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    let y = noise(offset)*height;
    vertex(x, y);
    
    offset += increment;
  }
  endShape();

  start += increment;
}
