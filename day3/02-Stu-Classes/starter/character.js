class Character {
  // method which prints all of the stats for a character

  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  printStats() {
    console.log(
      `Stats for ${this.name} are as following:${this.strength} ${this.hitPoints}`
    );
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {}

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${this.name} attacked ${opponent.name} `);
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
const playerOne = new Character("Player one", 100, 50);
// Create an interval that alternates attacks every 2000 milliseconds
const playerTwo = new Character("Player two", 100, 33);

playerOne.attack(playerTwo);
