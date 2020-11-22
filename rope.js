class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
           stiffness: 0.04,
            length: 10
        }
        

        this.Rope = Matter.Constraint.create(options);
        World.add(world, this.Rope);
    }
 
    display(){
         bodyA = this.Rope.bodyA.position;
         bodyB= this.Rope.bodyB.position;
      strokeWeight(4);
        line(bodyA.x, bodyA.y, bodyB.x,bodyB.y);
    }
}












