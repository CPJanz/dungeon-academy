class Player {
  constructor(name, health, mana) {
    this.name = name;
    this.health = {
      max = current = health
    } 
    this.mana = {
      max = current = mana
    }
    this.gold = 0;
    this.items = []
  }
}