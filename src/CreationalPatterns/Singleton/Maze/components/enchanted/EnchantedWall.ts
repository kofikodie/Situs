import Wall from "../Wall";

export default class EnchantedWall extends Wall {
	constructor() {
		super("creating a enchanted Wall");
	}

	toString(): string {
		return "a enchanted Wall";
	}
}
