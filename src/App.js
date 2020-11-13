import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <p>
      <a style={{color: 'white', textDecoration: 'none'}} href="https://www.google.com" target="__blank"> First Link </a> <br></br><br></br>
      <a style={{color: 'white', textDecoration: 'none'}} href="https://nattawat-port.web.app/Dark%20mode/dark.html" target="__blank"> Second Link </a>
    </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
