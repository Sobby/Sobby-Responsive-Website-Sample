function Circle(radius) {
    this.radius = radius;

    this.defaultlocatio = {
        x: 0,
        y: 0
    };

    this.computeOptimumlocatio = function () {

    }

    this.draw = function () {
        this.computeOptimumlocatio(); 
        console.log('draw');
    }
}


const circle = new Circle(10);