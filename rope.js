class Rope{
    constructor(body1,body2,offsetX,offsetY){
       var options={
           bodyA:body1,
           bodyB:body2,
          pointB:{x:offsetX,y:offsetY}
       }
      this.body=Matter.Constraint.create(options)
      this.offsetX=offsetX
      this.offsetY=offsetY
      World.add(world,this.body)
    }
    display(){
        var posA=this.body.bodyA.position
        var posB=this.body.bodyB.position
        strokeWeight(1)
      line(posA.x,posA.y,posB.x+this.offsetX,posB.y+this.offsetY)
    }
}