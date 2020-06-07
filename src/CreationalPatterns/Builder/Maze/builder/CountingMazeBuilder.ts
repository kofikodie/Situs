import { MazeBuilder } from './MazeBuilder';

export class CountingMazeBuilder extends MazeBuilder {
    #rooms: number;
    #doors: number;

    constructor() {
        super();
        this.#rooms = 0;
        this.#doors = 0;
    }

    buildRoom(room: number): void {
        console.log(`Creating Room# ${room.toString()}`);
        this.#rooms++;
    }

    buildDoor(roomOne: number, roomTwo: number): void {
        console.log(`Creating a Door between Room# ${roomOne.toString()} and Room# ${roomTwo.toString()}`);
        this.#doors++;
    }

    getCounts(): [number, number] {
        return [this.#rooms, this.#doors];
    }
}
