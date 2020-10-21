'use strict';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="start-screen">
      <h1 id="home-title">Battle of Sambre</h1>
      <img src="/assets/home_image.jpg"></img>
      <h3>
        You are 
      </h3>
      </div>
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));