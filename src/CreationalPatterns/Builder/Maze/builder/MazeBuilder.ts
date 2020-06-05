import { Door } from '../component/Door';

export class MazeBuilder {
    #roomNum = 0;
    #roomFrom = 0;
    #roomTo = 0;

    buildMaze(): void {
        this.#roomNum += this.#roomFrom + this.#roomTo;
    }

    buildRoom(room: number): MazeBuilder {
        this.#roomNum = room;
        return this;
    }

    buildDoor(rFrom: number, rTo: number): MazeBuilder {
        new Door(rFrom, rTo);
        return this;
    }

    getMaze(): number {
        return this.#roomNum;
    }
}
