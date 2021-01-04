export default class Wall {
    constructor(private wallName = `creating a Wall`) {
        console.log(this.wallName);
    }

    toString(): string {
        return `a Wall`;
    }
}
