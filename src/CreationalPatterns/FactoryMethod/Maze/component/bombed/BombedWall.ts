import { MapSite } from '../../config/MapSite'

export default class BombedWall extends MapSite {
    constructor() {
        super()
        console.log(`creating a Bombed Wall`)
    }

    toString(): string {
        return `a Bombed Wall`
    }
}
