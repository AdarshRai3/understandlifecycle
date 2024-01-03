import React from 'react';
import Timer1 from './Component/Timer/Timer1';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      timerOn: false,
    }
  }
  handleTimerOn = (event) => {
    event.preventDefault();
    this.setState( (prevState)  => ({
      timerOn : !prevState.timerOn
    }))
  }
  render(){
    return(
      <>
        <Timer1 timerOn = {this.state.timerOn} />
       <button onClick = {this.handleTimerOn}>{this.state.timerOn?"Stop":"Start"}</button>
      

      </>
    ) 
  }
}

export default App;
