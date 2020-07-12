import MazeGame from './config/MazeGame'
import BombedMazeGame from './config/BombedMazeGame'
import EnchantedMazeGame from './config/EnchantedMazeGame'

new MazeGame().createMaze()
console.log('\n')
new BombedMazeGame().createMaze()
console.log('\n')
new EnchantedMazeGame().createMaze()
