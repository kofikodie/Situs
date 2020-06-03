import { MazeFactory } from '../factory/MazeFactory';
import { Wall } from '../components/Wall';
import { BombedWall } from '../bomed/BombedWall';
import { Maze } from '../config/Maze';
import { Room } from '../components/Room';
import { Door } from '../components/Door';
import { RoomWithABomb } from '../bomed/RoomWithABomb';

export interface FactoryInterface<T> {
    makeMaze(): Maze;
    makeWall(): T extends MazeFactory ? Wall : BombedWall;
    makeRoom(): T extends MazeFactory ? Room : RoomWithABomb;
    makeDoor<U extends Room>(roomOne: U, roomTwo: U): Door;
}
