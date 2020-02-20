// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference (){
        return Math.PI * this.diameter
    }

    get area (){
        return Math.PI * (this.radius**2)
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }

    set circumference (newCircumference){
        this.radius = newCircumference/(2*Math.PI)
    }

    set area (newArea){
        this.radius = Math.sqrt(newArea/(Math.PI))
    }
}

var circle = new Circle (2)
// console.log(circle.circumference)
console.log(circle.area)
console.log(circle.radius)
circle.area = 100
console.log(circle.area)
console.log(circle.radius)
console.log(Math.PI * 2**2)