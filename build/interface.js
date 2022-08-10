"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Asus is on");
    }
    off() {
        console.log("Asus is off");
    }
}
class Macbook {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Macbook is on");
    }
    off() {
        console.log("Macbook is off");
    }
}
let asus = new Asus("Asus", true);
asus.on();
asus.off();
let macbook = new Macbook("Macbook", false);
macbook.on();
macbook.off();
