import BombedMazeFactory from '../factory/BombedMazeFactory';
import MazeFactory from '../factory/MazeFactory';
import FactoryInterface from '../interface/FactoryInterface';
import { WallInterface } from '../interface/WallInterface';
import { Direction } from './Direction';
import Maze from './Maze';

export default class MazeGame {
    createMaze<T extends MazeFactory | BombedMazeFactory>(mazeFactory: FactoryInterface<T>): Maze {
        const maze = mazeFactory.makeMaze();
        const roomOne = mazeFactory.makeRoom();
        const roomTwo = mazeFactory.makeRoom();
        const theDoor = mazeFactory.makeDoor(roomOne, roomTwo);
        const wall = mazeFactory.makeWall()
        maze.addRoom(roomOne);
        maze.addRoom(roomTwo);

        roomOne.setSide(Direction.North, wall);
        roomOne.setSide(Direction.West, theDoor);
        roomOne.setSide(Direction.East, wall);
        roomOne.setSide(Direction.South, wall);
        roomTwo.setSide(Direction.West, wall);
        roomTwo.setSide(Direction.North, wall);
        roomTwo.setSide(Direction.South, theDoor);

        return maze;
    }
}
