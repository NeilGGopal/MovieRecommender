import logo from './logopop.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="mainhdr">SHUFFLIX</header>
        <button class="btn btn-danger">Recommender</button>
        &nbsp;
        &nbsp;
        <button class="btn btn-danger">Planner</button>
    </div>
  );
}

export default App;
