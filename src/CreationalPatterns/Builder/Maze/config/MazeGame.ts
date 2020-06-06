import { MazeBuilder } from '../builder/MazeBuilder';
import { Maze } from './Maze';
import { ComplexMazeBuilder } from '../builder/ComplexMazeBuilder';

export class MazeGame {
    constructor(private mazeGameBuilder: MazeBuilder, private mazeComplexGameBuilder: ComplexMazeBuilder) {}

    createMaze(): Maze {
        this.mazeGameBuilder.buildRoom(3);
        this.mazeGameBuilder.buildRoom(5);
        this.mazeGameBuilder.buildDoor(3, 5);
        this.mazeGameBuilder.buildMaze();

        return this.mazeGameBuilder.getMaze();
    }

    createMazeWithoutDoor(): Maze {
        this.mazeGameBuilder.buildRoom(6);
        this.mazeGameBuilder.buildRoom(10);
        this.mazeGameBuilder.buildMaze();

        return this.mazeGameBuilder.getMaze();
    }

    createComplexMaze(): Maze {
        this.mazeComplexGameBuilder.buildMaze();
        this.mazeComplexGameBuilder.buildRoom(15);
        this.mazeComplexGameBuilder.buildRoom(17);
        this.mazeComplexGameBuilder.buildDoor(15, 17);

        return this.mazeComplexGameBuilder.getMaze();
    }
}
