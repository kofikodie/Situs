import { Door } from './components/Door'
import { Room } from './components/Room'
import MazeGame from './config/MazeGame'
import MazePrototypeFactory from './factory/MazePrototypeFactory'
import { Wall } from './components/Wall'

const amaze = new MazeGame()

amaze.createMaze(new MazePrototypeFactory(new Wall, new Door(new Room(), new Room)))