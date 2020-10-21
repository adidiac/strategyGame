import React from 'react';
import Home from './Home';
import history from './history';
import Prepare from './Prepare'
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/select-army" exact component={Prepare} />
                </Switch>
        </Router>
    </div>
  );
}

export default App;
