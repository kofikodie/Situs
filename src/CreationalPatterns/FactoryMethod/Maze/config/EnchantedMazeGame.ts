import { Door } from '../component/Door'
import { Room } from '../component/Room'
import Spell from '../component/Spell'

import EnchantedRoom from '../component/enchanted/EnchantedRoom'
import DoorNeedingSpell from '../component/spell/DoorNeedingSpell'
import MazeGame from './MazeGame'

export default class EnchantedMazeGame extends MazeGame {
    makeRoom(roomNumber: number): Room

    makeRoom(roomNumber: number): EnchantedRoom

    makeRoom(roomNumber: number): Room | EnchantedRoom {
        return new EnchantedRoom(roomNumber, this.castSpell())
    }

    makeDoor(roomOneNumber: number, roomTwoNumber: number): Door

    makeDoor(roomOneNumber: number, roomTwoNumber: number): DoorNeedingSpell

    makeDoor(roomOneNumber: number, roomTwoNumber: number): Door | DoorNeedingSpell {
        return new DoorNeedingSpell(roomOneNumber, roomTwoNumber)
    }

    castSpell(): Spell {
        return new Spell()
    }
}
