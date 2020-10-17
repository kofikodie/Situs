import { Room } from '../Room';

export class RoomWithABomb extends Room {
    toString(): string {
        return `a bomb Room# ${this.roomNumber}`;
    }
}