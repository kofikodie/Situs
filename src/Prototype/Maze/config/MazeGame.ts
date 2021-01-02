import MazePrototypeFactory from '../factory/MazePrototypeFactory'
import { Direction } from './Direction'

export default class MazeGame {
    createMaze(simpleMazeFactory: MazePrototypeFactory): void {
        const aMaze = simpleMazeFactory.makeMaze()

        const roomOne = simpleMazeFactory.makeRoom()
        const roomTwo = simpleMazeFactory.makeRoom()
        const theDoor = simpleMazeFactory.makeDoor()
        theDoor.initialize(roomOne, roomTwo)

        aMaze.addRoom(roomOne)
        aMaze.addRoom(roomTwo)

        roomOne.setSide(Direction.North, simpleMazeFactory.makeWall())
        roomOne.setSide(Direction.East, theDoor)
        roomOne.setSide(Direction.West, simpleMazeFactory.makeWall())
        roomOne.setSide(Direction.South, simpleMazeFactory.makeWall())

        roomTwo.setSide(Direction.North, simpleMazeFactory.makeWall())
        roomTwo.setSide(Direction.West, simpleMazeFactory.makeWall())
        roomTwo.setSide(Direction.East, simpleMazeFactory.makeWall())
        roomTwo.setSide(Direction.South, theDoor)
    }
}
