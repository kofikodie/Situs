import { Room } from '../component/Room';

export class RoomRepository {
    constructor(private room: Room) {}
    getRoom(): Room {
        console.log(`Getting room# ${this.room.toString()}`);
        return this.room;
    }
}
