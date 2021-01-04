import MazeFactory from "./factory/MazeFactory";
import BombedMazeFactory from "./factory/BombedMazeFactory";
import EnchantedMazeFactory from "./factory/EnchantedMazeFactory";
import {Direction} from "././map/Direction"
import Maze from "./components/Maze";

export default class MazeGame {
	createMaze<T extends MazeFactory | BombedMazeFactory | EnchantedMazeFactory>(
		factoryMaze: T,
	): Maze {
		const maze = factoryMaze.makeMaze();
		const roomOne = factoryMaze.makeRoom();
		const roomTwo = factoryMaze.makeRoom();
		const wall = factoryMaze.makeWall();
		const theDoor = factoryMaze.makeDoor(roomOne, roomTwo);

		maze.addRoom(roomOne);
		maze.addRoom(roomTwo);

		roomOne.setSide(Direction.North, wall);
		roomOne.setSide(Direction.West, theDoor);
		roomOne.setSide(Direction.East, wall);
		roomOne.setSide(Direction.South, wall);
		roomTwo.setSide(Direction.West, wall);
		roomTwo.setSide(Direction.North, wall);
		roomTwo.setSide(Direction.South, theDoor);

		return maze;
	}
}
