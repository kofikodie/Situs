import { Door } from '../component/Door';
import { Room } from '../component/Room';
import { Maze } from '../config/Maze';
import { MazeBuilderInterface } from './MazeBuilderInterface';

export class MazeBuilder implements MazeBuilderInterface {
    protected currentMaze!: Maze;
    buildMaze(): void {
        this.currentMaze = new Maze();
    }

    buildRoom(roomNumber: number): void {
        new Room(roomNumber);
    }

    buildDoor(rFrom: number, rTo: number): void {
        new Door(rFrom, rTo);
    }

    getMaze(): Maze {
        return this.currentMaze;
    }
}
