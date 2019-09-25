import { Face } from "./face.js";

class Die {
  constructor(sides) {
    this.sides = sides || [new Face("Red", 2), 2, 3, 4, 5, 6];
  }

  roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)];
  };
}

class DungeonDie extends Die {
  constructor(sides) {
    super();
    this.sides = sides || ["a", "b", "c", "d", "e", "f"];
  }
}

class BossDie extends Die {
  constructor(sides) {
    super();
    this.sides = sides || ["Q", "W", "E", "R", "T", "Y"];
  }
}
