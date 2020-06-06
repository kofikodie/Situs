import { MazeGame } from './config/MazeGame';
import { MazeBuilder } from './builder/MazeBuilder';
import { ComplexMazeBuilder } from './builder/ComplexMazeBuilder';

const mazeGame = new MazeGame(new MazeBuilder(), new ComplexMazeBuilder());
console.log('Build a Maze');
mazeGame.createMaze().toString();

console.log('\n Build a Maze with no door');
mazeGame.createMazeWithoutDoor().toString();

console.log('\n Build a complex Maze');
mazeGame.createComplexMaze().toString();
