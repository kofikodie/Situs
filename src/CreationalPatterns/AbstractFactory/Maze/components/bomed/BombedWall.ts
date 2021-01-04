import Wall from '../Wall';

export default class BombedWall extends Wall {
    constructor() {
        super(`creating a Bomb wall`)
    }

    toString(): string {
        return `a bomb Wall`;
    }
}
