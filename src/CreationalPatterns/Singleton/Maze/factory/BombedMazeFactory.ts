import Maze from "../components/Maze";
import Room from "../components/Room";
import Wall from "../components/Wall";
import Door from "../components/Door";
import BombedWall from "../components/bombed/BombedWall";
import FactoryInterface from "./FactoryInterface";

export default class BombedMazeFactory implements FactoryInterface {
	makeMaze(): Maze {
		return new Maze();
	}

	makeWall(): Wall {
		return new BombedWall();
	}

	makeRoom(): Room {
		return new Room();
	}

	makeDoor(roomOne: Room, roomTwo: Room): Door {
		return new Door(roomOne, roomTwo);
	}
}
