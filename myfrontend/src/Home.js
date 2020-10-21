
import React from 'react';
import './Home.css'
import history from './history'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="start-screen">
      <h1 id="home-title">Battle of Sambre</h1>
      <img src={require('./assets/home_image.jpg')} alt="Picture of the battle" id="home-image"></img>
      <h3 id="home-description">
        This is year 1918. Your units are formed with divisions from England, France and USA and you are against Germany.
        Your main objective is to analize the battle and to select the right force.</h3>
        <h3>Press Start to begin.
      </h3>
      <button onClick={()=>{history.push('/select-army')}}>Start</button>
      </div>
  }
}