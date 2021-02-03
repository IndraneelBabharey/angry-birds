class Pig{
    constructor(x,y){
        var options = {
           // restitution : 1,
            friction : 2,
            density : 2
        }

        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width =50
        this.height =50
     World.add(world,this.body)
    }

    display(){
var P = this.body.position
var A = this.body.angle
push()
translate(P.x,P.y)
rotate(A)
rectMode(CENTER)
fill("red")
rect(0,0,this.width,this.height)
pop()
    }

}