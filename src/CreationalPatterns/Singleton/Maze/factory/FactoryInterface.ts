import Maze from "../components/Maze";
import Wall from "../components/Wall";
import Room from "../components/Room";
import Door from "../components/Door";

export default interface FactoryInterface {
	makeMaze(): Maze;
	makeWall(): Wall;
	makeRoom(): Room;
	makeDoor(roomOne: Room, roomTwo: Room): Door;
}
