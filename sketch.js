pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 65; i++) {
    pelota = new Pelota();
    pelotas.push(pelota);
  }
  //frameRate(10);
}

function draw() {
  background(255, 187, 247);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}
