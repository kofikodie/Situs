import { MapSite } from '../map/MapSite'

export class Wall extends MapSite {
    constructor() {
        super()
        console.log(`creating a Wall`)
    }

    toString(): string {
        return `a Wall`
    }
}
