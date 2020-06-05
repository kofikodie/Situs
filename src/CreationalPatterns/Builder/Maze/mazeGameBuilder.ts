import { MazeGame } from './config/MazeGame';
import { MazeBuilder } from './builder/MazeBuilder';

const mazeGame = new MazeGame(new MazeBuilder());
mazeGame.creazeMaze().toString();
