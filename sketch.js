function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255, 150, 210);
  noStroke();
  let anchura = 20;
  let gapX = 10;
  let gapY = 10;

  for (let x = 10; x < windowWidth; x += anchura + gapX) {
    for (let y = 10; y < windowHeight; y += anchura + gapY) {
      fill(47, 255, 255);
      square(x, y, anchura);
    }
  }
}
