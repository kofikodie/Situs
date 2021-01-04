import Door from '../components/Door'
import Wall from '../components/Wall'
import MazeFactory from './MazeFactory'
import Room from '../components/Room'
import BombedWall from '../components/boom/BombedWall'

export default class MazePrototypeFactory extends MazeFactory {
    constructor(private prototypeWall: Wall | BombedWall, private prototypeDoor: Door) {
        super()
    }

    makeWall(): Wall {
        if (this.prototypeWall instanceof BombedWall) {
            return this.prototypeWall.clone()
        }

        return this.prototypeWall
    }

    makeDoor(): Door
    makeDoor(roomOne: Room, roomTwo: Room): Door
    makeDoor(roomOne?: Room, roomTwo?: Room): Door {
        if (undefined !== roomOne && undefined !== roomTwo) {
            const door = this.prototypeDoor.clone()
            door.initialize(roomOne!, roomTwo!)

            return door
        }

        return new Door()
    }
}
