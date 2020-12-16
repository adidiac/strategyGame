import React from 'react';
import 'jquery'
import './Fight.css'
import history from './history'
export default class Fight extends React.Component {
    constructor(props) {
      super(props);
      this.state=
      {
          i:0
      }
      this.move=this.move.bind(this);
    }
    explosion()
    {
      window.id_expl=setInterval(frame,1000)
      function frame()
      {
        var cont=document.getElementById('container');
      var gif=document.createElement('img');
      gif.src=require('./assets/Explosion/explosion.gif');
      gif.style.position='absolute';
      gif.style.left=Math.floor(Math.random()*1200)+'px';
      cont.appendChild(gif);
      setTimeout(()=>{cont.removeChild(gif)},500)
      }
    }
    move() {
        
        if (this.state.i == 0) {
        this.state.i = 1;
          var elem = document.getElementById("myBar");
          var width = 1;
          var id = setInterval(frame, 100);
          function frame(){
            if (width >= 100) {
              clearInterval(id);
              clearInterval(window.id_expl);
              history.push('/done',{details:history.location.state.details});
              history.go()
            } else {
              width++;
              elem.style.width = width + "%";
            }
          }
        }
    }
    componentDidMount()
    {
        
        this.move();
        setInterval(this.explosion(),100);
    }
    render() {
      return <div id="fight">
          <img id="principal_image" src={require('./assets/Background.png')}></img>
          <div id="myProgress">
  <div id="myBar"></div>
</div>
<div id="container"></div>
        </div>
    }
  }