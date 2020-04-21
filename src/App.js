import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import { Toolbar, AppBar, Snackbar, Alert } from '@material-ui/core';

class App extends React.Component{

  constructor(props){
  super(props)
  this.state = {count: 0}
}

incrementVariable = () => {
  this.setState({
    count: this.state.count + 1
  })
}

  render(){
  return (
    <AppBar position = "static">
      <Toolbar>
        <Button color = "secondary" variant="outlined" size="small" onClick={this.incrementVariable} 
        fullWidth={true} disabled={this.state.count === 10}>
          Increment Me
          <br></br>
          {this.state.count}
        </Button>
        <Snackbar open={this.state.count === 10} message="You have reached ten clicks!"/>
      </Toolbar>
    </AppBar>
  );
}
}

export default App;
