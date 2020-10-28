
import React from 'react';
import './Item.css'
export default class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state={
      input:50
    }
    }
    render() {
      return <div id="item">
        <img id="image" src={this.props.image}></img>
        <h2 id="title">{this.props.title}</h2>
        <input type="range" class="form-control-range" min="0" max="100" id="select" onChange={(element)=>{
          this.setState({input:element.target.value})
          }}></input>
        {
          this.state.input
        }
        </div>
    }
  }