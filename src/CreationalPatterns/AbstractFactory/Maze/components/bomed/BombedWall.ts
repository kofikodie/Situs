import { WallInterface } from '../../interface/WallInterface';

export class BombedWall implements WallInterface {
    constructor() {
        console.log(`creating a Bomb wall`);
    }

    toString(): string {
        return `a bomb Wall`;
    }
}
