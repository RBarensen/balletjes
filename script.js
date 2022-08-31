


class Bal{
  constructor(x,y,w,h,vx,vy,c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.colour = c;
  }
  draw(){
    fill(this.colour)
    ellipse(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 5 || this.x >= 595){
      this.vx = this.vx * -1;
    }

    if(this.y < 5 || this.y >= 595){
      this.vy = this.vy * -1;
    }
  }
}

var bal1, bal2, bal3;

function setup() {
  createCanvas(600,600);
 bal1 = new Bal(10, 300, 30, 30, 4, 3, "red");

 bal2 = new Bal(590, 50, 70, 70, 2, 4, "brown");

 bal3 = new Bal(300, 590, 20, 20, 6, 6, "blue");
}

function draw(){
  background(0);

  bal1.draw();
  bal2.draw();
  bal3.draw();
}
