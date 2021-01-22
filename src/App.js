import './App.css';
import createBoard from './helpers/createBoard';
import createBag from './helpers/createBag';
import Board from './components/Board';
import Bag from './components/Bag';
import Player from './components/Player';

function startGame() {
    const racks = [];
}

function App() {
  return (
    <div className="App">
      <h2>Tiles Remaining: {}</h2>
      <Board board={createBoard()} />
      <Bag bag={createBag()} />
      <Player name={'Jack Overby'}></Player>
      <Player name={'Jason Vaysberg'}></Player>
    </div>
  );
}

export default App;
