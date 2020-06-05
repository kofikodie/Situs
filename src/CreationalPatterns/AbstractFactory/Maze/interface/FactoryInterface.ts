import { MazeFactory } from '../factory/MazeFactory';
import { Wall } from '../components/Wall';
import { BombedWall } from '../components/bomed/BombedWall';
import { Maze } from '../config/Maze';
import { Room } from '../components/Room';
import { Door } from '../components/Door';
import { RoomWithABomb } from '../components/bomed/RoomWithABomb';

export interface FactoryInterface<T> {
    makeMaze(): Maze;
    makeWall(): T extends MazeFactory ? Wall : BombedWall;
    makeRoom(): T extends MazeFactory ? Room : RoomWithABomb;
    makeDoor<U extends Room>(roomOne: U, roomTwo: U): Door;
}
