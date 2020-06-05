import { Door } from '../component/Door';
import { MazeBuilderInterface } from './MazeBuilderInterface';
import { Room } from '../component/Room';

export class MazeBuilder implements MazeBuilderInterface<MazeBuilder> {
    #roomNum = 0;
    #roomFrom = 0;
    #roomTo = 0;

    buildMaze(): void {
        this.#roomNum += this.#roomFrom + this.#roomTo;
    }

    buildRoom(room: number): MazeBuilder {
        new Room(room);
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
