export default class Player {
  constructor(name, health, mana) {
    this.name = name;
    this.red = {
      max: health,
      current: health
    };
    this.blue = {
      max: mana,
      current: mana
    };
    this.gold = 0;
    this.score = [];
    this.items = [];
  }

  printPlayer = function() {
    console.log("--------------------");
    console.log("Name:", this.name);
    console.log("Health:", this.red.current);
    console.log("Mana:", this.blue.current);
    console.log("Gold:", this.gold);
    console.log("--------------------");
  };
}
