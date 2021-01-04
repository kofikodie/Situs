import Wall from '../Wall'

export default class BombedWall extends Wall {
    public bombedWall!: BombedWall

    constructor()
    constructor(bombedWall: BombedWall)
    constructor(bombedWall?: BombedWall) {
        super('Bombed Wall')
        if (undefined !== bombedWall) {
            this.bombedWall = bombedWall
        }
    }

    public clone(): Wall {
        return new BombedWall(this)
    }

    public toString(): string {
        return 'a Bombed Wall'
    }
}
