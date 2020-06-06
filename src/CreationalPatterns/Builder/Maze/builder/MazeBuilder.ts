import { Door } from '../component/Door';
import { MazeBuilderInterface } from './MazeBuilderInterface';
import { Room } from '../component/Room';
import { Maze } from '../config/Maze';

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
