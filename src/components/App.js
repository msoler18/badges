import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Badge from '../pages/Badge'
import BadgeNew from '../pages/BagdeNew'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badge}/>
        <Route exact path="/badges/new" component={BadgeNew}/>
      </Switch>
    </BrowserRouter>
  );  
}

export default App;