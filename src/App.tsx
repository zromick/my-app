import React from 'react';
import Button from '@material-ui/core/Button';
import { Toolbar, AppBar, Snackbar, Grid } from '@material-ui/core';

enum Buttons {
  Button1,
  Button2,
  Button3,
}

export interface AppProps {
}


export interface AppState {
  button1: number,
  button2: number,
  button3: number,
}

class App extends React.Component<AppProps,AppState>{

constructor(props:AppProps) {
  super(props)
  this.incrementVariable=this.incrementVariable.bind(this);
  this.state = {
    button1: 0,
    button2: 0,
    button3: 0,
  }
}

incrementVariable = (whichButton:Buttons) => {
  const {
    button1,
    button2,
    button3,
  } = this.state;
  switch (whichButton) {
    case Buttons.Button1:
      this.setState({
        button1: button1 + 1
      });
      break;
    case Buttons.Button2:
      this.setState({
        button2: button2 + 1
      });
      break;
    case Buttons.Button3:
      this.setState({
        button3: button3 + 1
      });
      break;
    default:
      return;
  }
}

  render() {
    const {
      button1,
      button2,
      button3,
    } = this.state;
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Button 
                color="secondary"
                variant="outlined"
                size="small"
                onClick={() => this.incrementVariable(Buttons.Button1)} 
                fullWidth={true}
                disabled={button1 === 10}
              >
                Click Me!
                <br></br>
                {button1}
              </Button>
            </Grid>
            <Grid item>
              <Button 
                color="secondary"
                variant="outlined"
                size="small"
                onClick={() => this.incrementVariable(Buttons.Button2)} 
                fullWidth={true}
                disabled={button2 === 10}
              >
                Click Me, Please!
                <br></br>
                {button2}
              </Button>
            </Grid>
            <Grid item>
              <Button 
                color="secondary"
                variant="outlined"
                size="small"
                onClick={() => this.incrementVariable(Buttons.Button3)} 
                fullWidth={true}
                disabled={button3 === 10}
              >
                Click Me!
                <br></br>
                {button3}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <Snackbar
          open={button1 === 10 && button2 === 10 && button3 === 10}
          message="Reached 10 clicks!"
        />
      </AppBar>
    );
  }
}

export default App;
