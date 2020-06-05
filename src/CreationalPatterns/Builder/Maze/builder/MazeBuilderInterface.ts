import { MazeBuilder } from './MazeBuilder';

export interface MazeBuilderInterface<T> {
    buildMaze(): void;
    buildRoom(room: number): T extends MazeBuilder ? T : never;
    buildDoor(roomOne: number, roomTwo: number): T extends MazeBuilder ? T : never;
    getMaze(): number;
}
