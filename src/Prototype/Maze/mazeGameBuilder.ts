import MazeGame from './config/MazeGame'
import MazePrototypeFactory from './factory/MazePrototypeFactory'
import { Maze } from './config/Maze'
import { Door } from './components/Door'
import { Room } from './components/Room'

const amaze = new MazeGame()

amaze.createMaze(new MazePrototypeFactory(new Maze, new Door(new Room(), new Room)))