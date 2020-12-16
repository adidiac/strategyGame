import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import history from './history'
import './Prepare.css';
import './Item'
import Item from './Item';
import Info_Item from './Info_Item'
import Item_Enemy from './Item_Enemy'
import Soldier from './Soldier'
import Army from './Army'
import Calculator from './Calculator'
import Wheater from './Wheater'
import Terrain from './Terrain'
let references=[React.createRef(),React.createRef(),React.createRef(),React.createRef(), React.createRef(),React.createRef(),React.createRef(),React.createRef()];
var germany_soldiers=[<Item_Enemy ref={references[4]} image={require("./assets/German_soldiers/soldier1.png")} title={"German soldier"} amount={70}/>,
<Item_Enemy ref={references[5]} image={require("./assets/German_soldiers/soldier2.png")} title={"German officer"} amount={20}/>,
<Item_Enemy ref={references[6]} image={require("./assets/German_soldiers/soldier3.png")} title={"German soldier sniper"} amount={8}/>,
<Item_Enemy ref={references[7]} image={require("./assets/German_soldiers/soldier4.png")} title={"German general"} amount={2}/>,
];
var aliance_soldiers=[
  <Item  ref={references[0]} image={require("./assets/Soldiers/Soldier1.png")} title={"France soldier"} />,
  <Item ref={references[1]} image={require("./assets/Soldiers/Soldier2.gif")} title={"United Kingdom soldier"} />,
  <Item ref={references[2]} image={require("./assets/Soldiers/Soldier3.png")} title={"US soldier"} />,
  <Item ref={references[3]} image={require("./assets/Tank.png")} title={"US tanks"} />,
];
export default class Prepare extends React.Component {
  constructor(props) {
    super(props);
    this.state=
    {
      items:100,
    };
    this.start_game=this.start_game.bind(this);
    
  }
  start_game()
  {

    var soldiers=[];
    soldiers.push(new Soldier(0.2,0,0.3,0.1));
    soldiers.push(new Soldier(0.3,0,0.4,0.15));
    soldiers.push(new Soldier(0.25,0,0.35,0.13));
    soldiers.push(new Soldier(0.5,0,0.7,0.02));

    soldiers.push(new Soldier(0,0.15,0.25,0.12));
    soldiers.push(new Soldier(0,0.19,0.5,0.11));
    soldiers.push(new Soldier(0,0.17,0.8,0.20));
    soldiers.push(new Soldier(0,0.1,0.55,0.05));

    let wheater=new Wheater(0.025,0.015);
    let normalTerrain=new Terrain(0.015,0.005,0.007);
    let floodedTerrain=new Terrain(0.02,0.012,0.003);

    let armyAttack=new Army();
    let armyDefense=new Army();

    for(let i=0;i<4;i++)
    {
      let amount=references[i].current.get_value();
      for(let j=0;j<amount;j++)
        armyAttack.add_soldier(soldiers[i]);
    }
    for(let i=4;i<8;i++)
    {
      let amount=references[i].current.get_value();
      for(let j=0;j<amount;j++)
        armyDefense.add_soldier(soldiers[i]);
    }
    let choosedTerrain;
    if(document.getElementById("normalTerrain").classList.contains("active"))
      choosedTerrain=normalTerrain;
    else
      choosedTerrain=floodedTerrain;
    
    let calculator=new Calculator(armyAttack,armyDefense,wheater,choosedTerrain);
    calculator.score1=calculator.calculateArmyAttackChance()*10;
    calculator.score2=calculator.calculateArmyDefenceChance()*10;
    console.log(calculator)
    history.push("/fight",{details:calculator});
    history.go();

  }
  render() {
    return <div id="prepare-screen">
      <div id="menu_prepare">
        <img id="image_prepare" src={require('./assets/Background.png')}></img>
        <div id="child_prepare">
        <button on onClick={()=>{history.push("/");history.go();}} id="go_home">GO to Home</button>
        <button id="start_game_button" onClick={this.start_game}>Start Game</button>
        </div>
        </div>
      <div id="grid">
      <div id="select-army">
      <h1 id="Select-army-title">Your Army</h1>
      <h3 id="Select-army-title">You can select maxim {this.state.items}</h3>
       {aliance_soldiers}
      </div>
      <div id="select-terrain">
      <h1 id="Select-army-title">Select Ground</h1>
      <div id="demo" class="carousel fericit" data-interval="false"> 
        <div class="carousel-inner">
            <div id="normalTerrain" class="carousel-item active">
          <img class="ground" src={require("./assets/Ground/ground_simple.png")}></img>
          <div class="carousel-caption d-none d-md-block">
              <h5>Simple Ground</h5>
         </div>
        </div>
        <div id="floodedTerrain" class="carousel-item">
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
        <div id="soldiers">
      <div id="row-1-info">
      <Info_Item image={require("./assets/Soldiers/Soldier1.png")}  name={"France soldier"} info={"Speed 20%\nAccurace 30%\nDeath chance 10%"} />
        <Info_Item image={require("./assets/Soldiers/Soldier2.gif")}  name={"United Kingdom soldier"} info={"\nSpeed 20%\nAccurace 30%\nDeath chance 10%"} />
        <Info_Item image={require("./assets/Soldiers/Soldier3.png")}  name={"US soldier"} info={"\nSpeed 20%\nAccurace 30%\nDeath chance 10%"} />
        <Info_Item image={require("./assets/Tank.png")}  name={"US tanks"} info={"Speed 20%\nAccurace 30%\nDeath chance 10%"} />
        </div>
      <div id="row-2-info">
      <Info_Item image={require("./assets/German_soldiers/soldier1.png")} name={"German soldier"} info={"\nSpeed 20%\nAccurace 30%\nDeath chance 10%"}/>
<Info_Item image={require("./assets/German_soldiers/soldier2.png")} name={"German officer"} info={"\nSpeed 20%\nAccurace 30%\nDeath chance 10%"}/>
<Info_Item image={require("./assets/German_soldiers/soldier3.png")} name={"German soldier sniper"} info={"\nSpeed 20%\nAccurace 30%\nDeath chance 10%"}/>,
<Info_Item image={require("./assets/German_soldiers/soldier4.png")} name={"German General"} info={"\nSpeed 20%\nAccurace 30%\nDeath chance 10%"} />
        </div>
        </div>
        <div id="Others">
        <div id="row1_info">
        <Info_Item image={require("./assets/Ground/ground_simple.png")}  name={"Simple Ground"} info={"\nSpeed 20%\nAccurace 30%\nDefence 10%"}/>
        <Info_Item image={require("./assets/Ground/flooded.jpg")}  name={"Flooded Ground"} info={"\nSpeed 20%\nAccurace 30%\nDefence 10%"}/>
        </div>
        <div id="row2_info">
        <Info_Item image={require("./assets/Wheater/rainy.png")}   name={"Rainy Wheater"} info={"\nSpeed loss 20%\nDefence loss 10%"}/>
          </div>
        </div> 
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