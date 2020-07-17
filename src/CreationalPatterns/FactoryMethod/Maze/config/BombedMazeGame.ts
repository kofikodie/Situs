import { Room } from '../component/Room'
import BombedRoom from '../component/bombed/BombedRoom'
import BombedWall from '../component/bombed/BombedWall'
import MazeGame from './MazeGame'

export default class BombedMazeGame extends MazeGame {
    makeWall(): BombedWall {
        return new BombedWall()
    }

    makeRoom(roomNumber: number): Room

    makeRoom(roomNumber: number): BombedRoom

    makeRoom(roomNumber: number): Room | BombedRoom {
        return new BombedRoom(roomNumber)
    }
}
