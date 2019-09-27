import Board from "./board.js";
import { faces } from "./data.js";
import Face from "./face.js";
import Player from "./player.js";
import { Die, BossDie, DungeonDie } from "./die.js";

let myPlayer = new Player("Carl", 3, 3);
myPlayer.printPlayer();
let myFace = new Face(faces.blob);
myFace.effect(myPlayer);
myPlayer.printPlayer();
let myFace2 = new Face(faces.dragon);
myFace2.effect(myPlayer);
myPlayer.printPlayer();
let myBoard = new Board([3, 2], [new BossDie(), new DungeonDie()]);
console.log(myBoard.dice[0].roll());
// console.log(myBoard.dice);
// console.log(faces);
// let myFace = new Face("Red", 1);
// let myPlayer = new Player();
console.log("hello");