import { Door } from '../components/Door'
import { Room } from '../components/Room'
import { Wall } from '../components/Wall'
import { Maze } from '../config/Maze'
import { FactoryInterface } from '../interface/FactoryInterface'

export class MazeFactory implements FactoryInterface<MazeFactory> {
    makeMaze(): Maze {
        return new Maze()
    }

    makeWall(): Wall {
        return new Wall()
    }

    makeRoom(): Room {
        return new Room()
    }

    makeDoor(roomOne: Room, roomTwo: Room): Door {
        return new Door(roomOne, roomTwo)
    }
}
