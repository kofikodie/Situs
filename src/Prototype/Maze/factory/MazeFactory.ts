import Door from '../components/Door'
import Room from '../components/Room'
import Wall from '../components/Wall'
import Maze from '../config/Maze'

export default class MazeFactory {
    makeMaze(): Maze {
        return new Maze()
    }

    makeWall(): Wall {
        return new Wall()
    }

    makeRoom(): Room {
        return new Room()
    }

    makeDoor(): Door {
        return new Door()
    }
}
