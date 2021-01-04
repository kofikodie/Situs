import Maze from "../components/Maze";
import Wall from "../components/Wall";
import Room from "../components/Room";
import Door from "../components/Door";
import EnchantedWall from "../components/enchanted/EnchantedWall";
import FactoryInterface from "./FactoryInterface";

export default class EnchantedMazeFactory implements FactoryInterface {
	makeMaze(): Maze {
		return new Maze();
	}

	makeWall(): Wall {
		return new EnchantedWall();
	}

	makeRoom(): Room {
		return new Room();
	}

	makeDoor(roomOne: Room, roomTwo: Room): Door {
		return new Door(roomOne, roomTwo);
	}
}
