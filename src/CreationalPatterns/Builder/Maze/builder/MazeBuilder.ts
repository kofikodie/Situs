import { Door } from '../component/Door';
import { MazeBuilderInterface } from './MazeBuilderInterface';
import { Room } from '../component/Room';
import { Maze } from '../config/Maze';

export class MazeBuilder implements MazeBuilderInterface<MazeBuilder> {
    private aMaze: Maze = '';

    buildMaze(): void {
        this.aMaze = new Maze();
    }

    buildRoom(room: number): MazeBuilder {
        new Room(room);
        return this;
    }

    buildDoor(rFrom: number, rTo: number): MazeBuilder {
        new Door(rFrom, rTo);
        return this;
    }

    getMaze(): Maze {
        return this.aMaze;
    }
}
