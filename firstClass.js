
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}


class NewPolygon {
    constructor( lengths = [] ){
        this.lengths = lengths;
        console.log(this.lengths.sort());
    }

    perimeter(){
        var iterator = this.lengths.values();
        var sum = 0;
        for(let len of iterator){
            sum = sum + len;
        }
        return sum;
        //console.log(sum);

    }
}
const square2 = new Polygon(10, 10);

//console.log(square.getArea());

const rectangle = new NewPolygon([10, 20, 10, 20]);
const square = new NewPolygon([10, 10, 10, 10]);
const pentagon = new NewPolygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());