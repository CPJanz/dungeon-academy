export const faces = {
  blob: { type: "red", value: -1, name: "Blob" },
  colossus: { type: "red", value: -2, name: "Colossus" },
  healthPotion: { type: "red", value: 1, name: "Health Potion" },
  ghost: { type: "blue", value: -1, name: "Ghost" },
  reaper: { type: "blue", value: -2, name: "Reaper" },
  manaPotion: { type: "blue", value: 1, name: "Mana Potion" },
  troll: {
    type: "red",
    value: -3,
    addendum: function(player) {
      if (player[this.type].current >= 0) {
        player[this.type].current = player[this.type].max;
        player.gold += 3;
      }
    },
    name: "Troll"
  },
  lich: {
    type: "blue",
    value: -3,
    addendum: function(player) {
      if (player[this.type].current >= 0) {
        player[this.type].current = player[this.type].max;
        player.gold += 3;
      }
    },
    name: "Lich"
  },
  dragon: {
    type: ["red", "blue"],
    value: -3,
    addendum: function(player) {
      let result = true;
      this.type.every(e => {
        if (player[e].current < 0) {
          result = false;
        }
      });
      if (result === true) {
        player[this.type].current = player[this.type].max;
        player.gold += 3;
      }
    },
    name: "Dragon"
  },
  chest: {
    type: [],
    value: 0,
    addendum: function(player) {
      player.gold += 2;
    },
    name: "Chest"
  },
  deadEnd: {
    //TODO: YOu cannot move through this room
  },
  key: {
    //TODO: You must move through this room to be able to exit the dungeon
  },
  crossRoad: {
    type: [],
    value: 0,
    name: "Crossroad"
  },
  bananaPeel: {
    type: [],
    value: 0,
    addendum: function(player) {
      player.gold += -1;
    },
    name: "Banana Peel"
  },
  purse: {
    type: [],
    value: 0,
    addendum: function(player) {
      player.gold += 1;
    },
    name: "Purse"
  },
  corridor1: {
    //TODO: Limit exits
  },
  corridor2: {
    //TODO: Limit exits
  },
  corridor3: {
    //TODO: Limit exits
  }
};
