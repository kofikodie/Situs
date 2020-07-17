import { Door } from '../components/Door';
import { Room } from '../components/Room';
import { BombedWall } from '../components/bomed/BombedWall';
import { RoomWithABomb } from '../components/bomed/RoomWithABomb';
import { Maze } from '../config/Maze';
import { FactoryInterface } from '../interface/FactoryInterface';

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
