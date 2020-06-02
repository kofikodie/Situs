import { MapSite } from './MapSite';
import { Direction } from './Direction';

export class Room extends MapSite {
    private static roomCount = 1;
    #roomNumber: number;

    #up?: MapSite;
    #down?: MapSite;
    #right?: MapSite;
    #left?: MapSite;

    constructor() {
        super();
        this.#roomNumber = Room.roomCount++;
        console.log(`Creating a room ${this.#roomNumber}`);
    }

    setSide(direction: Direction, site: MapSite): void {
        switch (direction) {
            case Direction.North:
                this.#up = site;
                break;
            case Direction.South:
                this.#down = site;
                break;
            case Direction.West:
                this.#left = site;
                break;
            case Direction.East:
                this.#right = site;
        }

        console.log(`setting ${direction.toString()} side of ${this.toString()} to ${site.toString()}`);
    }

    toString(): string {
        return `Room# ${this.#roomNumber}`;
    }
}
