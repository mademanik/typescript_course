export class User {
  constructor(public name: string, public age: number) {}

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  private _email: string = "";

  //static property
  static getRoleName: string = "Admin";

  getLevel = (): string => {
    return "Admin";
  };

  getRole(): { read: boolean; write: boolean } {
    return { read: this.read, write: this.write };
  }

  getRoleVersi2 = (): { read: boolean; write: boolean } => {
    return { read: this.read, write: this.write };
  };

  getRoleVersiAny = (): any => {
    return { read: this.read, write: this.write };
  };

  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }

  //static method
  static getNameRole() {
    return "hei";
  }
}

class AdminSuper extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;

  constructor(phone: string, name: string, age: number) {
    super(name, age);
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
