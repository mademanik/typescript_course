import Laptop from "./BaseLaptop";

class Macbook<T> extends Laptop<T> {
  constructor(
    name: string,
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    super("Macbook", type, withNumeric, withTouchButton);
  }
}

export default Macbook;
