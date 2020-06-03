import { MapSite } from '../config/MapSite';

export class BombedWall extends MapSite {
    private static wallCount = 1;
    #wallNumber: number;

    constructor() {
        super();
        this.#wallNumber = BombedWall.wallCount++;
        console.log(`creating bomb Wall# ${this.#wallNumber}`);
    }

    toString(): string {
        return `Wall# ${this.#wallNumber}`;
    }
}
