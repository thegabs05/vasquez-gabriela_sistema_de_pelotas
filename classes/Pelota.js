class Pelota {
  constructor() {
    this.posX = random(50, windowWidth - 50);
    this.posY = random(10, 130);

    this.velX = random(-20, 20);
    this.velY = 0.0;
    this.acelY = 0.98;

    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.colorin = color(175, random(180, 255), random(50, 190));
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

    if (this.posX < 0) {
      this.velX *= -1;
    }
    this.posX += this.velX;
  }

  display() {
    fill(this.colorin);
    circle(this.posX, this.posY, this.diam);
  }
}
