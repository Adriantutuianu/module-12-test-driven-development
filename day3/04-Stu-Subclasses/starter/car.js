const Vehicle = require("./vehicle");

class car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "vrum");
    this.color = color;
    this.passengers = passengers;
  }

  useHorn() {
    console.log(this.sound);
  }
}

const myCar = new car("idgsdgsh", "green", 3);

console.log(myCar.color);
console.log(myCar.passengers);
myCar.useHorn();
