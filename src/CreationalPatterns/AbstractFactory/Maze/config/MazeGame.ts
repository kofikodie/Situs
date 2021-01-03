import { BombedMazeFactory } from '../factory/BombedMazeFactory';
import { MazeFactory } from '../factory/MazeFactory';
import { FactoryInterface } from '../interface/FactoryInterface';
import { WallInterface } from '../interface/WallInterface';
import { Direction } from './Direction';
import { Maze } from './Maze';

export class MazeGame {
    constructor(private wall: WallInterface) {}

    createMaze<T extends MazeFactory | BombedMazeFactory>(factor: FactoryInterface<T>): Maze {
        const maze = factor.makeMaze();
        const roomOne = factor.makeRoom();
        const roomTwo = factor.makeRoom();
        const theDoor = factor.makeDoor(roomOne, roomTwo);

        maze.addRoom(roomOne);
        maze.addRoom(roomTwo);

        roomOne.setSide(Direction.North, this.wall);
        roomOne.setSide(Direction.West, theDoor);
        roomOne.setSide(Direction.East, this.wall);
        roomOne.setSide(Direction.South, this.wall);
        roomTwo.setSide(Direction.West, this.wall);
        roomTwo.setSide(Direction.North, this.wall);
        roomTwo.setSide(Direction.South, theDoor);

        return maze;
    }
}
