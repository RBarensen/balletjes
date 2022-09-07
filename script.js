


class Bal{
  constructor(x,y,w,h,vx,vy,c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.colour = c;
    this.originalcolour = c;
  }
  draw(){
    fill(this.colour)
    ellipse(this.x,this.y,this.w,this.h);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 5 || this.x >= 595){
      this.vx = this.vx * -1;
    }

    if(this.y < 5 || this.y >= 595){
      this.vy = this.vy * -1;
    }

    if(this.x < 370 && this.x > 240){
      if(this.y < 370 && this.y > 240){
        
        this.colour = "green";        
      }      
    }
    else{
      this.colour = this.originalcolour;        
    }
    
  }
  


}


var bal1, bal2, bal3, bal4;

function setup() {
  createCanvas(600,600);
 bal1 = new Bal(10, 300, 70, 70, 4, 3, "red");

 bal2 = new Bal(590, 50, 70, 70, 2, 4, "brown");

 bal3 = new Bal(300, 590, 70, 70, 6, 6, "blue");

 bal4 = new Bal(337, 402, 70, 70, 4, 2, "yellow");
}

function draw(){
  background(0);

  rect(300, 300, 60, 60);


  bal1.draw();
  bal2.draw();
  bal3.draw();
  bal4.draw();
}
