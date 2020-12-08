import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.componet.jsx';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
