class Bobball {
constructor(x,y,r){
var ballprop ={
    isStatic:false,
    restitution:1,
    friction:0,
    density:0.8
}
this.ballbody = Bodies.circle(x,y,r,ballprop);
World.add(world,this.ballbody);
this.r = r;
}
display() {
var pos = this.ballbody.position;
ellipse(pos.x,pos.y,this.r*2,this.r*2);


} 




}