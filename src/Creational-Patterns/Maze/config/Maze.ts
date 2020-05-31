import { Room } from './Room';

export class Maze {
    #rooms: Set<Room> = new Set<Room>();

    constructor() {
        console.log('creating a Maze');
    }

    addRoom(room: Room): void {
        this.#rooms.add(room);
    }
}
