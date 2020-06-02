import { Maze } from './Maze';
import { Direction } from './Direction';
import { Wall } from './Wall';
import { MazeFactory } from '../factory/MazeFactory';

export class MazeGame {
    createMaze(factor: MazeFactory): Maze {
        const maze = factor.makeMaze();
        const roomOne = factor.makeRoom();
        const roomTwo = factor.makeRoom();
        const theDoor = factor.makeDoor(roomOne, roomTwo);

        maze.addRoom(roomOne);
        maze.addRoom(roomTwo);

        roomOne.setSide(Direction.North, new Wall());
        roomOne.setSide(Direction.West, theDoor);
        roomOne.setSide(Direction.East, new Wall());
        roomOne.setSide(Direction.South, new Wall());
        roomTwo.setSide(Direction.West, new Wall());
        roomTwo.setSide(Direction.North, new Wall());
        roomTwo.setSide(Direction.South, theDoor);

        return maze;
    }
}
