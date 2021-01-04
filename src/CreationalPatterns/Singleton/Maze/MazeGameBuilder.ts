import MazeGame from "./MazeGame";
import MazeFactory from "./factory/MazeFactory";

const aMaze = new MazeGame();
aMaze.createMaze(MazeFactory.mazeInstance());

console.log("\n create a bombed maze \n");

aMaze.createMaze(MazeFactory.mazeInstance("bombed"));

console.log("\n create a enchanted maze \n");

aMaze.createMaze(MazeFactory.mazeInstance("enchanted"));
