import { Maze } from '../config/Maze';

export interface MazeBuilderInterface {
    buildMaze(): void;
    buildRoom(room: number): void;
    buildDoor(roomOne: number, roomTwo: number): void;
    getMaze(): Maze;
}
