export const faces = {
  blob: { type: "Red", value: -1 },
  colossus: { type: "Red", value: -2 },
  healthPotion: { type: "Red", value: 1 },
  ghost: { type: "Blue", value: -1 },
  reaper: { type: "Blue", value: -2 },
  manaPotion: { type: "Blue", value: 1 },
  troll: {
    type: "Red",
    value: -3,
    function(player) {
      player[this.type].current += this.value;
      if (player[this.type] >= 0) {
        player[this.type].current = player[this.type].max;
        player.gold += 3;
      }
    }
  },
  lich: {
    type: ["Blue"],
    value: -3,
    function(player) {
      player[this.type].current += this.value;
      if (player[this.type] >= 0) {
        player[this.type].current = player[this.type].max;
        player.gold += 3;
      }
    }
  },
  dragon: {
    type: ["Red", "Blue"],
    value: -3,
    function(player) {
      player[this.type].current += this.value;
      if (player[this.type] >= 0) {
        player[this.type].current = player[this.type].max;
        player.gold += 3;
      }
    }
  }
};
