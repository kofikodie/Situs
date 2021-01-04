export default class Wall {
	private wallName: string;

	constructor(wallName = "creating a Wall") {
		this.wallName = wallName;
		console.log(this.wallName);
	}

	toString(): string {
		return "a Wall";
	}
}
