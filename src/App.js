import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.componet.jsx';

const HatsPage = (props) => {
  debugger;
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
