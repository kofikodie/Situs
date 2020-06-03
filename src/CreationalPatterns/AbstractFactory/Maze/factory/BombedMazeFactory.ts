import { BombedWall } from '../bomed/BombedWall';
import { FactoryInterface } from '../interface/FactoryInterface';
import { RoomWithABomb } from '../bomed/RoomWithABomb';
import { Maze } from '../config/Maze';
import { Room } from '../components/Room';
import { Door } from '../components/Door';

export class BombedMazeFactory implements FactoryInterface<BombedMazeFactory> {
    makeMaze(): Maze {
        return new Maze();
    }

    makeWall(): BombedWall {
        return new BombedWall();
    }

    makeRoom(): RoomWithABomb {
        return new RoomWithABomb();
    }

    makeDoor(roomOne: Room, roomTwo: Room): Door {
        return new Door(roomOne, roomTwo);
    }
}
