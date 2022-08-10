"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// let numbers = new List<number>(1, 2, 3);
// numbers.add(4);
// console.log(numbers.getAll());
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll());
let random = new List("Hello", 123, "World");
random.add("Made Manik");
console.log(random.getAll());
