pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print("pelotas");
}

function draw() {
  background(255, 150, 210);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}

function mousePressed(x, y) {
  let pelota = new Pelota();
  pelotas.push(pelota);
}
