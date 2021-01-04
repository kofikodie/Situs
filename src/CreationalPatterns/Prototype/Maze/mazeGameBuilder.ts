import Door from './components/Door'
import Room from './components/Room'
import MazeGame from './config/MazeGame'
import MazePrototypeFactory from './factory/MazePrototypeFactory'
import Wall from './components/Wall'
import BombedRoom from './components/boom/BombedRoom'
import BombedWall from './components/boom/BombedWall'

const amaze = new MazeGame()

const prototypeDoor = new Door()
prototypeDoor.initialize(new Room(), new Room())
amaze.createMaze(new MazePrototypeFactory(new Wall(), new Door()))

console.log('\nA maze with a bomed \n')

const prototypeBombedDoor = new Door().clone()
prototypeBombedDoor.initialize(new BombedRoom(), new BombedRoom())
amaze.createMaze(new MazePrototypeFactory(new BombedWall(), prototypeBombedDoor))
