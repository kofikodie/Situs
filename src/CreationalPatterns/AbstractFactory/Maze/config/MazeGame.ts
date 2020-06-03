import { Maze } from './Maze';
import { Direction } from './Direction';
import { Wall } from '../components/Wall';
import { MazeFactory } from '../factory/MazeFactory';
import { FactoryInterface } from '../interface/FactoryInterface';
import { BombedMazeFactory } from '../factory/BombedMazeFactory';
import { BombedWall } from '../bomed/BombedWall';

export class MazeGame<T extends MazeFactory | BombedMazeFactory> {
    constructor(private wall: Wall | BombedWall) {}

    createMaze<T>(factor: FactoryInterface<T>): Maze {
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