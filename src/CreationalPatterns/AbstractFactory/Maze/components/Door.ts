import MapSite from '../map/MapSite';
import Room from './Room';

export default class Door extends MapSite {
    private static doorCount = 1;
    #doorNumber: number;
    constructor(private roomOne: Room, private roomTwo: Room) {
        super();
        this.#doorNumber = Door.doorCount++;
        console.log(
            `Creating a Door# ${this.#doorNumber} between ${this.roomOne.toString()} and ${this.roomTwo.toString()}`,
        );
    }

    toString(): string {
        return `Door# ${this.#doorNumber}`;
    }
}
