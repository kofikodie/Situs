import { MazeBuilder } from '../builder/MazeBuilder';
import { Maze } from './Maze';

export class MazeGame {
    constructor(private mazeGameBuilder: MazeBuilder) {}

    creazeMaze(): Maze {
        this.mazeGameBuilder.buildRoom(3);
        this.mazeGameBuilder.buildRoom(5);
        this.mazeGameBuilder.buildDoor(3, 5);
        this.mazeGameBuilder.buildMaze();

        return this.mazeGameBuilder.getMaze();
    }
}
