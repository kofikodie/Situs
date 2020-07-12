import { MapSite } from '../../config/MapSite'
import { Direction } from '../../config/Direction'
import Spell from '../Spell'

export default class EnchantedRoom {
    #up!: MapSite
    #down!: MapSite
    #right!: MapSite
    #left!: MapSite

    constructor(public readonly roomNumber: number, private spell: Spell) {
        console.log(`Creating a Room# ${this.roomNumber}`)
        spell.toString()
    }

    setSide(direction: Direction, site: MapSite): void {
        switch (direction) {
            case Direction.North:
                this.#up = site
                break
            case Direction.South:
                this.#down = site
                break
            case Direction.West:
                this.#left = site
                break
            case Direction.East:
                this.#right = site
        }

        console.log(`setting ${direction.toString()} side of ${this.toString()} to ${site.toString()}`)
    }

    toString(): string {
        return `Room# ${this.roomNumber}`
    }

    getRoom(): EnchantedRoom {
        console.log(`Getting room# ${this.roomNumber.toString()}`)
        return this
    }
}
