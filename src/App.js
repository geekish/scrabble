import './App.css';
import createBoard from './helpers/createBoard';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board board={createBoard()} />
    </div>
  );
}

export default App;
