import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

function App() {
  var value = 0;
  
  function incrementVariable() {
    value += 1;
    console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color = "primary" onClick={incrementVariable}>
          Increment Me!
        </Button>
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
