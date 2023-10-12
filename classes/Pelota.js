class Pelota {
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;

    this.velX = random(-1, 1);
    this.velY = 0;
    this.acelY = 0.98;

    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.colorin = color(20, random(100, 255), random(0, 150));

    print("Hola, estoy vive!");
  }

  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1.0;
      this.posY += this.velY;
    }

    if (this.posX > windowWidth) {
      this.velX *= -1;
    }
  }

  display() {
    fill(this.colorin);
    circle(this.posX, this.posY, this.diam);
  }
}
