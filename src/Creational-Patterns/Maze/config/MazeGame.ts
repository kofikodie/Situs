import { Maze } from './Maze';
import { Room } from './Room';
import { Door } from './Door';
import { Direction } from './Direction';
import { Wall } from './Wall';

export class MazeGame {
    createMaze(): Maze {
        const maze = new Maze();
        const roomOne = new Room();
        const roomTwo = new Room();
        const theDoor = new Door(roomOne, roomTwo);

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
