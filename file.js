var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.make, " engine started"));
    };
    return Car;
}());
var Porsche = new Car("911", "Carrera", 1964);
Porsche.start();
