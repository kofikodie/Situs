import { MapSite } from '../map/MapSite'

export default class Wall extends MapSite {
    constructor() {
        super()
    }

    toString(): string {
        return `casting a Spell`
    }
}
