import { MazeGame } from './MazeGame';
import { MazeBuilder } from './builder/MazeBuilder';

const mazeGame = new MazeGame(new MazeBuilder());
console.log(`This is a very beautiful builder ${mazeGame.creazeMaze()}`);
