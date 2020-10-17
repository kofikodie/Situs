import { Door } from './components/Door'
import { Room } from './components/Room'
import MazeGame from './config/MazeGame'
import MazePrototypeFactory from './factory/MazePrototypeFactory'
import { Wall } from './components/Wall'
import { RoomWithABomb } from './components/boom/RoomWithBoom'

const amaze = new MazeGame()

amaze.createMaze(new MazePrototypeFactory(new Wall, new Door(new Room(), new Room)))
console.log('\nA maze with a bomed \n')
amaze.createMaze(new MazePrototypeFactory(new Wall, new Door(new RoomWithABomb(), new Room)))

