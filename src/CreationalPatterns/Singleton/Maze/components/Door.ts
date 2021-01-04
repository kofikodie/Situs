import MapSite from "../map/MapSite";
import Room from "./Room";

export default class Door extends MapSite {
	private static doorCount = 1;
	#doorNumber: number;
	#roomOne: Room;
	#roomTwo: Room;

	constructor(roomOne: Room, roomTwo: Room) {
		super();
		this.#doorNumber = Door.doorCount++;
		this.#roomOne = roomOne;
		this.#roomTwo = roomTwo;
		console.log(
			`Creating a Door# ${this.#doorNumber} between ${this.#roomOne.toString()} and ${this.#roomTwo.toString()}`,
		);
	}

	toString(): string {
		return `Door# ${this.#doorNumber}`;
	}
}
