export default class Face {
  constructor(faceObj) {
    this.type =
      typeof faceObj.type === "object" ? faceObj.type : [faceObj.type];
    this.value = faceObj.value;
    this.name = faceObj.name;
    this.effect = function(player) {
      this.type.forEach(
        e =>
          (player[e].current = Math.min(
            this.value + player[e].current,
            player[e].max
          ))
      );
      if (faceObj.addendum) {
        faceObj.addendum(player);
      }
    };
  }
}
