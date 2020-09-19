import { WallInterface } from '../interface/WallInterface'

export class Wall implements WallInterface {
    constructor() {
        console.log(`creating a Wall`)
    }

    toString(): string {
        return `a Wall`
    }
}
