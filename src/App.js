import './App.css';
import createBoard from './helpers/createBoard';
import createBag from './helpers/createBag';
import Board from './components/Board';
import Bag from './components/Bag';
import Player from './components/Player';

function startGame() {
  
}

function App() {
  const bag = createBag();
  const board = createBoard();
  
  return (
    <div className="App">
      <h2>Tiles Remaining: {bag.length}</h2>
      <Board board={board} />
      <Bag bag={bag} />
      <Player name={'Jack Overby'}></Player>
      <Player name={'Jason Vaysberg'}></Player>
    </div>
  );
}

export default App;
