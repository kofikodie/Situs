import { MazeGame } from './config/MazeGame';
import { MazeFactory } from './factory/MazeFactory';

const game = new MazeGame();
game.createMaze(new MazeFactory());

console.log('Game has initialize');
