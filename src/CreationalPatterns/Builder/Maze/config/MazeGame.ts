import { MazeBuilder } from '../builder/MazeBuilder';
import { ComplexMazeBuilder } from '../builder/ComplexMazeBuilder';
import { CountingMazeBuilder } from '../builder/CountingMazeBuilder';
import { Maze } from './Maze';

export class MazeGame {
    constructor(
        private mazeGameBuilder: MazeBuilder,
        private mazeComplexGameBuilder: ComplexMazeBuilder,
        private countingMazeBuilder: CountingMazeBuilder,
    ) {}

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

    planMaze(): string {
        this.countingMazeBuilder.buildMaze();
        this.countingMazeBuilder.buildRoom(67);
        this.countingMazeBuilder.buildRoom(670);
        this.countingMazeBuilder.buildDoor(67, 670);

        const [room, door] = this.countingMazeBuilder.getCounts();
        return `This maze will have ${room} rooms and ${door} door(s)`;
    }
}
