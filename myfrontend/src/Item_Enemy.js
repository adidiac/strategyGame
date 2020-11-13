import React from 'react';
import './Item.css'
export default class Item_Enemy extends React.Component {
    constructor(props) {
      super(props);
      this.state={
      input:50
    }
    }
    render() {
      return <div id="item">
        <img id="image" src={this.props.image}></img>
        <h2 class="title">{this.props.title} </h2>
        <h2 class="title">{this.props.amount}</h2>
        </div>
    }
  }