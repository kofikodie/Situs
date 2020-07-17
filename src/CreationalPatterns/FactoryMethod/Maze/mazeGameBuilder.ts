import BombedMazeGame from './config/BombedMazeGame'
import EnchantedMazeGame from './config/EnchantedMazeGame'
import MazeGame from './config/MazeGame'

new MazeGame().createMaze()
console.log('\n')
new BombedMazeGame().createMaze()
console.log('\n')
new EnchantedMazeGame().createMaze()
