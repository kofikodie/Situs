import { MazeBuilder } from './MazeBuilder';
import { Room } from '../component/Room';
import { Direction } from '../config/Direction';
import { Wall } from '../component/Wall';
import { Door } from '../component/Door';

export class ComplexMazeBuilder extends MazeBuilder {
    commonWall(roomOne: Room, roomTwo: Room): Direction {
        const direction = Direction.East;
        console.log(`Setting a Wall at ${direction} side between ${roomOne.toString()} and ${roomTwo.toString()}`);

        return direction;
    }

    buildRoom(roomNumber: number): void {
        const room = new Room(roomNumber);
        this.currentMaze.addRoom(room);
        room.setSide(Direction.North, new Wall());
        room.setSide(Direction.South, new Wall());
        room.setSide(Direction.West, new Wall());
        room.setSide(Direction.East, new Wall());
    }

    buildDoor(roomOneNumber: number, roomTwoNumber: number): void {
        const roomOne = new Room(roomOneNumber).getRoom();
        const roomTwo = new Room(roomTwoNumber).getRoom();

        const door = new Door(roomOneNumber, roomTwoNumber);
        roomOne.setSide(this.commonWall(roomOne, roomTwo), door);
        roomTwo.setSide(this.commonWall(roomOne, roomTwo), door);
    }
}
