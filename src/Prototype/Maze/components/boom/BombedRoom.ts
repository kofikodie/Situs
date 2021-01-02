import Room from '../Room'

export default class BombedRoom extends Room {
    constructor(){
        super('bomb Room')
    }
    toString(): string {
        return `a bomb Room# ${this.roomNumber}`
    }
}
