import { MapSite } from '../config/MapSite'
import { WallInterface } from '../interface/WallInterface'

export class Wall extends MapSite implements WallInterface {
    constructor() {
        super()
        console.log(`creating a Wall`)
    }

    toString(): string {
        return `a Wall`
    }
}
