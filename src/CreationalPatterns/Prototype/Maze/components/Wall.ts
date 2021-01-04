import MapSite from '../config/MapSite'

export default class Wall extends MapSite {

    constructor(wallType = 'Wall') {
        super()
        console.log(`creating a ${wallType}`)
    }

    toString(): string {
        return `a Wall`
    }
}
