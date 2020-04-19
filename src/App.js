import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import { Toolbar, AppBar } from '@material-ui/core';

function App() {
  var value = 0;

  function incrementVariable() {
    value += 1;
    console.log(value);
  }

  return (
    <AppBar position = "static">
      <Toolbar>
      <div className="App">
      <header className="App-header">
        <Button variant="contained" color = "primary" onClick={incrementVariable}>
          Increment Me!
        </Button>
      </header>
    </div>
      </Toolbar>
    </AppBar>
  );
}

export default App;
