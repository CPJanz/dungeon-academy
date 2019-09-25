export default class Face {
  constructor(type, value, effect) {
    this.type = type;
    this.value = value;
    this.effect =
      effect ||
      function(player) {
        player[this.type].current += this.value;
      };
  }
}
