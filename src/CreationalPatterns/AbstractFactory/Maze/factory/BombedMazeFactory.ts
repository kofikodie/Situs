import Door from '../components/Door';
import Room from '../components/Room';
import BombedWall from '../components/bomed/BombedWall';
import RoomWithABomb from '../components/bomed/RoomWithABomb';
import Maze from '../config/Maze';
import Wall from '../components/Wall';
import MazeFactory from './MazeFactory';

export default class BombedMazeFactory extends MazeFactory {
    makeMaze(): Maze {
        return new Maze();
    }

    makeWall(): Wall {
        return new BombedWall();
    }

    makeRoom(): Room {
        return new RoomWithABomb();
    }

    makeDoor(roomOne: Room, roomTwo: Room): Door {
        return new Door(roomOne, roomTwo);
    }
}
