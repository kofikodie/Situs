import { MazeBuilder } from './builder/MazeBuilder';

export class MazeGame {
    constructor(private mazeGameBuilder: MazeBuilder) {}

    creazeMaze(): number {
        this.mazeGameBuilder.buildRoom(3);
        this.mazeGameBuilder.buildDoor(1, 5);
        this.mazeGameBuilder.buildMaze();

        return this.mazeGameBuilder.getMaze();
    }
}
