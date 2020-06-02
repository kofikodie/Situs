import { Maze } from '../config/Maze';
import { Wall } from '../config/Wall';
import { Room } from '../config/Room';
import { Door } from '../config/Door';

export class MazeFactory {
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
