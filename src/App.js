import './App.css';
import createBoard from './helpers/createBoard';
import createBag from './helpers/createBag';
import Board from './components/Board';
import Bag from './components/Bag';
import Player from './components/Player';

function App() {
  const bag = createBag();
  const board = createBoard();
  let playerUp = 0;

  const [rack1, rack2] = [bag.splice(0,7), bag.splice(0, 7)];

  return (
    <div className="App">
      <Player name={'Jack Overby'} rack={rack1}></Player>
      <Player name={'Jason Vaysberg'} rack={rack2}></Player>
      <Board board={board} />
      <Bag bag={bag} />
    </div>
  );
}

export default App;
