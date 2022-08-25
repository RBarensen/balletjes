
function setup() {
  createCanvas(600, 600)
  ;
}



  let x = 0
  let y = 150
  let v = 4
  let w = 5
  let a = 595
  let b = 0
  let t = 8
  let u = 6
function draw() {
    background(0)
    fill(255, 191, 0);
    ellipse(x, y, 80)
    fill(0, 255, 255);
    ellipse(a,b,50)
    x = x + v
    y = y + w
    a = a + t
    b = b + u
    if(x>600){
      v = -4
    }
    if(x<0){
      v = 4
    }
    if(y>600){
      w = -5
    }
    if(y<0){
      w = 5
    }
    if(a>600){
      t = -8
    }
    if(a<0){
      t = 8
    }
    if(b>600){
      u = -6
    }
    if(b<0){
      u=6
    }
      
  } 

