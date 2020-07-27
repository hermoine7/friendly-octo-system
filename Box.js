class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    
  }
display(){
  super.display;
console.log(this.body.speed);
var r= randomNumber(1,10);
Box.velocityX=r;
}
};
