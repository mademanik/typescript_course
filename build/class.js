"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
        this._email = "";
        this.getLevel = () => {
            return "Admin";
        };
        this.getRoleVersi2 = () => {
            return { read: this.read, write: this.write };
        };
        this.getRoleVersiAny = () => {
            return { read: this.read, write: this.write };
        };
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
    //static method
    static getNameRole() {
        return "hei";
    }
}
//static property
Admin.getRoleName = "Admin";
class AdminSuper extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.phone = phone;
    }
}
// let admin = new Admin("Made Manik", 20);
// console.log(admin.getRoleVersiAny());
// let adminSuper = new AdminSuper("0812345678", "Made Manik", 20);
// console.log(adminSuper.phone);
// let admin = new Admin("Made Manik", 20);
// admin.email = "manikyasa@gmail.com";
// console.log(admin.email);
let admin = Admin.getNameRole();
console.log(admin);
