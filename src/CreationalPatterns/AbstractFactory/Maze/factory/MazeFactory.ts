import { Maze } from '../config/Maze';
import { Wall } from '../components/Wall';
import { Room } from '../components/Room';
import { Door } from '../components/Door';
import { FactoryInterface } from '../interface/FactoryInterface';

export class MazeFactory implements FactoryInterface<MazeFactory> {
    makeMaze(): Maze {
        return new Maze();
    }

    makeWall(): Wall {
        return new Wall();
    }

    makeRoom(): Room {
        return new Room();
    }

    makeDoor(roomOne: Room, roomTwo: Room): Door {
        return new Door(roomOne, roomTwo);
    }
}
