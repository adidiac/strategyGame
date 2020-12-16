
import React from 'react';
import Calculator from './Calculator'
import history from './history'
import './Done.css'
export default class Done extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        calculator:'',
        decision:''
      } 
      this.go_home=this.go_home.bind(this)
    }
    go_home()
    {
        history.push('/');
        history.go();
    }
    componentDidMount()
    {
      let calculator=history.location.state.details;
    let decision='';
    if(calculator.score1>=calculator.score2)
        decision="You Win!";
    else
        decision="You lose!";
      console.log(calculator);
      this.setState({
          calculator:calculator,
          decision:decision
      })
      
    }
    render() {
      return <div id="done">
         <img id="principal_image" class="doneImage" src={require('./assets/Background.png')}></img>
         <h1 id="decision">{this.state.decision}</h1>
         <div id="results">
        <div id="army1">
            <h1>Your score: {Math.floor(this.state.calculator.score1)}%
            </h1><br/><br/>
            <h3>Deaths: {Math.floor(this.state.calculator.death1)}</h3>
            <h3>Speed: {Math.floor(this.state.calculator.totalSpeed1)}</h3>
            <h3>Accurace: {Math.floor(this.state.calculator.totalAccurecy1)}</h3>
        </div>
        <div id="army2">
             <h1>Enemy score: {Math.floor(this.state.calculator.score2)}%</h1><br/><br/>
             <h3>Deaths: {Math.floor(this.state.calculator.death2)}</h3>
            <h3>Defense: {Math.floor(this.state.calculator.totalDefense)}</h3>
            <h3>Accurace: {Math.floor(this.state.calculator.totalAccurecy2)}</h3>
        </div>
        </div>
        <button id="return_home" onClick={this.go_home}>Return home</button>
        </div>
    }
  }