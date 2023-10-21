class Pelota {
  constructor() {
    this.posX = random(50, windowWidth - 50);
    this.posY = random(10, 130);

    this.velX = random(-20, 20);
    this.velY = 0.0;
    this.acelY = random(0.1, 0.98);

    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.colorin = color(225, random(180, 255), random(50, 190));
  }

  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1.0;
      this.posY += this.velY;
      this.colorin = color(random(26, 255), random(26, 255), 238);
      this.diam = int(random(50, 70));
    }

    // if (this.posX > windowWidth) {
    // this.velX *= -1;
    //}

    //if (this.posX < 0) {
    // this.velX *= -1;
    //}
    //this.posX += this.velX;
  }

  display() {
    fill(this.colorin);
    circle(this.posX, this.posY, this.diam);
  }
}
