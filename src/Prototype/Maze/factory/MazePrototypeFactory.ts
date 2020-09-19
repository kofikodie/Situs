import clone from 'clone'
import { Door } from '../components/Door'
import { Wall } from '../components/Wall'
import { MazeFactory } from './MazeFactory'

export default class MazePrototypeFactory extends MazeFactory {
    constructor(private wall: Wall, private door: Door) {
        super()
    }

    makeWall(): Wall {
        return clone(this.wall)
    }

    makeDoor(): Door {
        return clone(this.door)
    }
}
