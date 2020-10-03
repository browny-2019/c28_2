class Stone{
    constructor(x,y,radius) {
        var options = {
    
              isStatic:false,
              restitution:0.3,
              friction:0.5,
              density:1.2
          }
       this.body = Bodies.circle(x,y,radius,options);
        radius = this.radius;
       
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("violet");
        ellipse(pos.x, pos.y,this.radius*2);
      }
}