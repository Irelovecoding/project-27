class Stringrope{
constructor(b1,point) {
var prop = {
    bodyA : b1,
    pointB : point,
    stiffness :1
}
this.ropeString = Constraint.create(prop);
World.add(world,this.ropeString);

}
display() {
stroke("black");
strokeWeight(5);
line(this.ropeString.bodyA.position.x,this.ropeString.bodyA.position.y,this.ropeString.pointB.x,this.ropeString.pointB.y);


}



}