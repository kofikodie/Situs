import Wall from "../Wall";

export default class BombedWall extends Wall {
	constructor() {
		super("creating a bombed Wall");
	}

	toString(): string {
		return "a bombed Wall";
	}
}
