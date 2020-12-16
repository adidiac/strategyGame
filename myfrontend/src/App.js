import React from 'react';
import Home from './Home';
import history from './history';
import Prepare from './Prepare'
import Fight from './Fight'

import Done from './Done'
import { Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/select-army" exact component={Prepare} />
                    <Route path="/fight" exact component={Fight} />
                    <Route path="/done" exact component={Done} />
                </Switch>
        </Router>
    </div>
  );
}

export default App;
