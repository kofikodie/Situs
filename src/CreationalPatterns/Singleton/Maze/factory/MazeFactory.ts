import Door from "../components/Door";
import Room from "../components/Room";
import Wall from "../components/Wall";
import Maze from "../components/Maze";
import BombedMazeFactory from "./BombedMazeFactory";
import EnchantedMazeFactory from "./EnchantedMazeFactory";
import FactoryInterface from "./FactoryInterface";

export default class MazeFactory implements FactoryInterface {
	private static instance: MazeFactory;

	protected constructor() {}

	public static mazeInstance(mazeStyle?: string): MazeFactory {
		if (undefined === MazeFactory.instance) {
			return MazeFactory.instance = new MazeFactory();
		}
		if ("bombed" === mazeStyle) {
			return MazeFactory.instance = new BombedMazeFactory();
		}
		if ("enchanted" === mazeStyle) {
			return MazeFactory.instance = new EnchantedMazeFactory();
		}

		return MazeFactory.instance;
	}

	makeMaze(): Maze {
		return new Maze();
	}

	makeWall(): Wall {
		return new Wall();
	}

	makeRoom(): Room {
		return new Room();
	}

	makeDoor(roomOne: Room, roomTwo: Room): Door {
		return new Door(roomOne, roomTwo);
	}
}
