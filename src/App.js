import logo from './logo.svg';
import './App.css';

function App() {

  const PROJECT_NAME = process.env.REACT_APP_PROJECT_NAME ?? false;

  return (
    <div className="App">
      <header className="App-header">
        {PROJECT_NAME && <div>{PROJECT_NAME}</div>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
