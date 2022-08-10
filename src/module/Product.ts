import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("Asus", "Zenbook", true, true);
console.log(asus);

let macbook = new Macbook("Macbook", "2017", false, false);
console.log(macbook);
macbook.a();
macbook.b();