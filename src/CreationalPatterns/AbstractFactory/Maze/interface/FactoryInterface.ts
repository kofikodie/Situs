import { Door } from '../components/Door';
import { Room } from '../components/Room';
import { Wall } from '../components/Wall';
import { BombedWall } from '../components/bomed/BombedWall';
import { RoomWithABomb } from '../components/bomed/RoomWithABomb';
import { Maze } from '../config/Maze';
import { MazeFactory } from '../factory/MazeFactory';

export interface FactoryInterface<T> {
    makeMaze(): Maze;
    makeWall(): T extends MazeFactory ? Wall : BombedWall;
    makeRoom(): T extends MazeFactory ? Room : RoomWithABomb;
    makeDoor<U extends Room>(roomOne: U, roomTwo: U): Door;
}
