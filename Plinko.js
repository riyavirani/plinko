
class Plinko {
    constructor (x,y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: true
        }
        this.w = 5.711777;
        this.h = 11.173377;
        
        this.body = Bodies.rectangle(x,y,this.w,this.h ,options)
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(rgb(248, 193, 170));
        imageMode(CENTER);
        strokeWeight(2);
        stroke(rgb(151, 150, 251));
        fill("white")
        
      rect(0, 0, this.w,this.h);
        pop();
    }
}