import Face from "./face.js";
import { faces } from "./data.js";

class Die {
  constructor(sides) {
    this.sides = sides || [
      new Face(faces.blob),
      new Face(faces.colossus),
      new Face(faces.ghost),
      new Face(faces.reaper),
      new Face(faces.healthPotion),
      new Face(faces.manaPotion)
    ];
  }

  roll = function() {
    return this.sides[Math.floor(Math.random() * this.sides.length)];
  };
}

class DungeonDie extends Die {
  constructor(sides) {
    super();
    this.sides = sides || [
      new Face(faces.corridor1),
      new Face(faces.corridor2),
      new Face(faces.corridor3),
      new Face(faces.crossRoad),
      new Face(faces.purse),
      new Face(faces.bananaPeel)
    ];
  }
}

class BossDie extends Die {
  constructor(sides) {
    super();
    this.sides = sides || [
      new Face(faces.troll),
      new Face(faces.lich),
      new Face(faces.dragon),
      new Face(faces.chest),
      new Face(faces.key),
      new Face(faces.deadEnd)
    ];
  }
}

export { Die, DungeonDie, BossDie };
