import React from 'react';
import './Info_Item.css'
export default class Info_Item extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div id="info_item">
        <img id="image_info" src={this.props.image}></img>
        <h3 id="info_text">{this.props.name}</h3>
        <h3 id="info_text">{this.props.info}</h3>
        </div>
    }
  }