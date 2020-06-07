import { MazeGame } from './config/MazeGame';
import { MazeBuilder } from './builder/MazeBuilder';
import { ComplexMazeBuilder } from './builder/ComplexMazeBuilder';
import { CountingMazeBuilder } from './builder/CountingMazeBuilder';

const mazeGame = new MazeGame(new MazeBuilder(), new ComplexMazeBuilder(), new CountingMazeBuilder());
console.log('Build a Maze');
mazeGame.createMaze().toString();

console.log('\n Build a Maze with no door');
mazeGame.createMazeWithoutDoor().toString();

console.log('\n Build a complex Maze');
mazeGame.createComplexMaze().toString();

console.log('\n Plan a Maze building');
console.log(mazeGame.planMaze());
