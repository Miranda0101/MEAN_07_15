// Define types
// 1. Explicit
var user = 'Tom';
// 2. Implicit
var age = 23;
var tom = 'tom';
// Function
function foo(input) {
    // return input;
}
// class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello! My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var peter = new Person('Peter', 30);
peter.greet();
var Breed;
(function (Breed) {
    Breed[Breed["ragdoll"] = 0] = "ragdoll";
    Breed[Breed["bsh"] = 1] = "bsh";
    Breed[Breed["ash"] = 2] = "ash";
    //...
})(Breed || (Breed = {}));
var cat = {
    name: 'Bob',
    age: 4,
    breed: Breed.ragdoll
};
// Enumerate
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednseday"] = 2] = "Wednseday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
})(Day || (Day = {}));
Day.Friday;
console.log(Day.Monday);
var Direction;
(function (Direction) {
    Direction["south"] = "South";
    Direction["north"] = "North";
    // ..
})(Direction || (Direction = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer["Yes"] = "Yes";
})(Answer || (Answer = {}));
Answer.No;
// Decorators, @decoratorName
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function (distance) {
        console.log("Flying ".concat(distance, " meters."));
    };
    return Bird;
}());
//Generics
