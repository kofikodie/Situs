import Wall from './components/Wall';
import BombedWall from './components/bomed/BombedWall';
import MazeGame from './config/MazeGame';
import BombedMazeFactory from './factory/BombedMazeFactory';
import MazeFactory from './factory/MazeFactory';

const game = new MazeGame();
game.createMaze(new MazeFactory());

console.log('Game one has been initialized \n');

const gameTwo = new MazeGame();
gameTwo.createMaze(new BombedMazeFactory());

console.log('Game two has been initialized');
