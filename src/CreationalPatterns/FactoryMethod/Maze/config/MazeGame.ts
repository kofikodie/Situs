import { Maze } from './Maze'
import { Room } from '../component/Room'
import { Door } from '../component/Door'
import { Wall } from '../component/Wall'
import { Direction } from './Direction'

export default class MazeGame {
    createMaze(): void {
        const aMaze = this.makeMaze()

        const roomOne = this.makeRoom(101).getRoom()
        const roomTwo = this.makeRoom(111).getRoom()
        const theDoor = this.makeDoor(roomOne.roomNumber, roomTwo.roomNumber)

        aMaze.addRoom(roomOne)
        aMaze.addRoom(roomTwo)

        roomOne.setSide(Direction.North, this.makeWall())
        roomOne.setSide(Direction.East, theDoor)
        roomOne.setSide(Direction.West, this.makeWall())
        roomOne.setSide(Direction.South, this.makeWall())

        roomTwo.setSide(Direction.North, this.makeWall())
        roomTwo.setSide(Direction.West, this.makeWall())
        roomTwo.setSide(Direction.East, this.makeWall())
        roomTwo.setSide(Direction.South, theDoor)
    }

    makeMaze(): Maze {
        return new Maze()
    }

    makeRoom(numberOfRooms: number): Room {
        return new Room(numberOfRooms)
    }

    makeWall(): Wall {
        return new Wall()
    }

    makeDoor(roomOneNumber: number, roomTwoNumber: number): Door {
        return new Door(roomOneNumber, roomTwoNumber)
    }
}
