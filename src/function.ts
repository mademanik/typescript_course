// tipe data pada balikan function

/*function getName(): string {
    return "Hello, My Name Made Manik";
}
console.log(getName());*/

/*function getAge(): number {
    return 20;
}
console.log(getAge());*/

/*function printName(name: string): void {
    console.log(name);
}

printName(`Made Manik`);*/

/*function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

const result = multiply(10, 15);
console.log(result);*/

//function as type

/*type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

console.log(Add(10, 15));*/

// default parameter
/*const fullName = (fistName: string, lastName: string = "Datu Yasa"): string => {
  return `${fistName} ${lastName}`;
};

console.log(fullName("Made"));*/

// optional parameter
/*const getUmur = (val1: string, val2?: string): string => {
  return `${val1} ${val2}`;
};

console.log(getUmur("10"));*/