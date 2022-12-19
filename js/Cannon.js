class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg=loadImage("assets/canon.png");
    this.cannonBase=loadImage("assets/cannonBase.png");
  }
  display(){
    //Cannon top
    push();
    imageMode(CENTER);
    image(this.cannonImg,this.x,this.y,this.width,this.height);
    pop();
    
    //Cannon bottom
    image(this.cannonBase,70,20,200,200);
    noFill();
  }
}
