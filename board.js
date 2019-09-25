class Board {
  constructor(boardDimension, specialDice) {
    [this.columns, this.rows] = boardDimension;
    this.dice = [];
    for (let i = 0; i < this.columns * this.rows; i++) {
      if (i < specialDice.length) {
        this.dice.push(specialDice[i]);
      } else {
        this.dice.push(new Die());
      }
    }
  }

  build = function() {
    return "board built";
  };
}
