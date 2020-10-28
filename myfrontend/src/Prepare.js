import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import history from './history'
import './Prepare.css';
import './Item'
import Item from './Item';
var germany_soldiers=[<Item image={require("./assets/German_soldiers/soldier1.png")} title={"German soldier"} />,
<Item image={require("./assets/German_soldiers/soldier2.png")} title={"German officer"} />,
<Item image={require("./assets/German_soldiers/soldier3.png")} title={"German soldier sniper"} />,
<Item image={require("./assets/German_soldiers/soldier4.png")} title={"German general"} />,
];
export default class Prepare extends React.Component {
  constructor(props) {
    super(props);
    this.state=
    {
      items:100,
    };
  }
  render() {
    return <div id="prepare-screen">
        <button on onClick={()=>{history.push("/");history.go();}}>GO to Home</button>
      <div id="grid">
      <div id="select-army">
      <h1 id="Select-army-title">Your Army</h1>
      <h3 id="Select-army-title">You can select maxim {this.state.items}</h3>
        <Item image={require("./assets/Soldiers/Soldier1.png")} title={"France soldier"} />
        <Item image={require("./assets/Soldiers/Soldier2.gif")} title={"United Kingdom soldier"} />
        <Item image={require("./assets/Soldiers/Soldier3.png")} title={"US soldier"} />
        <Item image={require("./assets/Tank.png")} title={"US tanks"} />
      </div>
      <div id="select-terrain">
      <h1 id="Select-army-title">Select Ground</h1>
      <div id="demo" class="carousel fericit" data-interval="false"> 
        <div class="carousel-inner">
            <div class="carousel-item active">
          <img class="ground" src={require("./assets/Ground/ground_simple.png")}></img>
          <div class="carousel-caption d-none d-md-block">
              <h5>Simple Ground</h5>
         </div>
        </div>
        <div class="carousel-item">
              <img class="ground" src={require("./assets/Ground/flooded.jpg")} ></img>
              <div class="carousel-caption d-none d-md-block">
              <h5>Flooded Ground</h5>
         </div>
            </div>
        </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      </div>
      <div id="info-army">


      </div>
      <div id="enemy-army">
      <h1 id="Select-army-title">Enemy Army</h1>
        {
          germany_soldiers
        }
      </div>
      </div>
      </div>
  }
}