import Room from '../Room';

export default class RoomWithABomb extends Room {
    toString(): string {
        return `a bomb Room# ${this.roomNumber}`;
    }
}
