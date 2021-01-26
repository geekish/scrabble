import './App.css';
import createBoard from './helpers/createBoard';
import createBag from './helpers/createBag';
import Board from './components/Board';
import Bag from './components/Bag';
import Player from './components/Player';

function App() {
  const bag = createBag();
  const board = createBoard();
  const playerInfo = {
    playerUp: 0,
    0: {
      name: 'Jack Overby',
      rack: bag.splice(0,7),
      score: 0
    },
    1: {
      name: 'Jason Vaysberg',
      rack: bag.splice(0, 7),
      score: 0
    }
  }

  function drawTiles(playerNo, tilesPlayed) {
    let playerRack=playerInfo[playerNo]["rack"];
    const playedIndices=tilesPlayed.map(playedTile=>playerRack.find((ix, tile)=>tile.letter===playedTile.letter));
    playedIndices.forEach(playedIx=>playerRack.splice(playedIx, 1));
    const newTilesDrawn=bag.splice(0, Math.min(7-tilesPlayed.length, bag.length));
    newTilesDrawn.forEach(tile=>playerRack.push(tile));
  }

  return (
    <div className="App">
      <Player player={playerInfo[0]}></Player>
      <Player player={playerInfo[1]}></Player>
      <Board board={board} />
      <Bag bag={bag} />
    </div>
  );
}

export default App;
