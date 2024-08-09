// Define types
// 1. Explicit
let user: string = 'Tom';
// 2. Implicit
let age = 23;

type User = string | number;
let tom: User = 'tom';

// Function
function foo(input: string): void {
    // return input;
}

// class
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void{
        console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`)
    }
}

const peter = new Person('Peter', 30);
peter.greet();

// Interface
interface Cat {
    name: string;
    age: number;
    breed: Breed; //ragdoll OR british shorthair
    other?: number[];
}
enum Breed{
    ragdoll = 0,
    bsh,
    ash,
    //...
}
let cat: Cat ={
    name: 'Bob',
    age: 4,
    breed: Breed.ragdoll
}

// Enumerate
enum Day {
    Monday,
    Tuesday,
    Wednseday,
    Thursday = 4,
    Friday
}
Day.Friday
console.log(Day.Monday);

enum Direction{
    south = 'South',
    north = 'North',
    // ..
}

enum Answer {
    No = 0,
    Yes = 'Yes'
}
Answer.No

// Decorators, @decoratorName

class Bird{
    fly(distance: number){
        console.log(`Flying ${distance} meters.`);
    }
}


//Generics
