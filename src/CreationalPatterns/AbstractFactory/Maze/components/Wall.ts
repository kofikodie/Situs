import { MapSite } from '../config/MapSite';

export class Wall extends MapSite {
    private static wallCount = 1;
    #wallNumber: number;

    constructor() {
        super();
        this.#wallNumber = Wall.wallCount++;
        console.log(`creating Wall# ${this.#wallNumber}`);
    }

    toString(): string {
        return `Wall# ${this.#wallNumber}`;
    }
}
