import { Door } from '../components/Door'
import { Room } from '../components/Room'
import { Wall } from '../components/Wall'
import { Maze } from '../config/Maze'
import { MazeFactory } from '../factory/MazeFactory'

export interface FactoryInterface<T> {
    makeMaze(): Maze
    makeWall(): T extends MazeFactory ? Wall : never
    makeRoom(): T extends MazeFactory ? Room : never
    makeDoor<U extends Room>(roomOne: U, roomTwo: U): Door
}
