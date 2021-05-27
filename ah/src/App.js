import './App.css';
import GameCard from './Components/GameCard';
import GameData from './Data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>New Game App</h3>
      </header>
      <div class="App-body">
        <GameCard gameData={GameData} />
      </div>
    </div>
  );
}

export default App;
