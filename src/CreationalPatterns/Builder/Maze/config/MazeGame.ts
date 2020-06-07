import { MazeBuilder } from '../builder/MazeBuilder';
import { Maze } from './Maze';
import { ComplexMazeBuilder } from '../builder/ComplexMazeBuilder';

export class MazeGame {
    constructor(private mazeGameBuilder: MazeBuilder, private mazeComplexGameBuilder: ComplexMazeBuilder) {}

    createMaze(): Maze {
        this.mazeGameBuilder.buildMaze();
        this.mazeGameBuilder.buildRoom(3);
        this.mazeGameBuilder.buildRoom(5);
        this.mazeGameBuilder.buildDoor(3, 5);

        return this.mazeGameBuilder.getMaze();
    }

    createMazeWithoutDoor(): Maze {
        this.mazeGameBuilder.buildMaze();
        this.mazeGameBuilder.buildRoom(6);
        this.mazeGameBuilder.buildRoom(10);

        return this.mazeGameBuilder.getMaze();
    }

    createComplexMaze(): Maze {
        this.mazeComplexGameBuilder.buildMaze();
        const roomOne = this.mazeComplexGameBuilder.buildRoom(15);
        const roomTwo = this.mazeComplexGameBuilder.buildRoom(17);
        this.mazeComplexGameBuilder.buildDoor(roomOne, roomTwo);

        return this.mazeComplexGameBuilder.getMaze();
    }
}
