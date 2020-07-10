import { Room } from '../component/Room'

export class Maze {
    #rooms: Set<Room> = new Set<Room>()

    constructor() {
        console.log('creating a Maze')
    }

    addRoom(room: Room): void {
        this.#rooms.add(room)
    }

    toString(): string {
        return 'Maze has been intialized'
    }
}
