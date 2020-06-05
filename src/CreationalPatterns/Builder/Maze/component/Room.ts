export class Room {
    protected static roomCount = 1;
    protected numberOfRooms: number;

    constructor(private roomNumber: number) {
        this.numberOfRooms = Room.roomCount++;
        console.log(`Creating a room ${this.roomNumber}`);
    }

    toString(): string {
        return `Room# ${this.numberOfRooms}`;
    }
}
