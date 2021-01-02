import MapSite from '../config/MapSite'
import Room from './Room'
import BombedRoom from './boom/BombedRoom'

export default class Door extends MapSite {
    private roomOne!: Room | BombedRoom
    private roomTwo!: Room | BombedRoom

    constructor()
    constructor(door: Door)
    constructor(door?: Door) {
        super()
        if (undefined !== door) {
            this.roomOne = door.roomOne
            this.roomTwo = door.roomTwo
        }
    }

    public initialize(rOne: Room | BombedRoom, rTwo: Room | BombedRoom) {
        this.roomOne = rOne
        this.roomTwo = rTwo
        console.log(`Creating a Door between ${this.roomOne?.toString()} and ${this.roomTwo?.toString()}`)
    }

    public clone(): Door {
        return new Door(this)
    }

    public toString(): string {
        return 'a Door'
    }
}
