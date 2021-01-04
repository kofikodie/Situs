import Door from '../components/Door';
import Room from '../components/Room';
import Wall from '../components/Wall';
import RoomWithABomb from '../components/bomed/RoomWithABomb';
import Maze from '../config/Maze';

export default interface FactoryInterface {
    makeMaze(): Maze;
    makeWall(): Wall;
    makeRoom(): RoomWithABomb;
    makeDoor(roomOne: Room, roomTwo: Room): Door;
}
