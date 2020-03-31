import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Badge from '../pages/Badge'
import BadgeNew from '../pages/BagdeNew'


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badge}/>
          <Route exact path="/badges/new" component={BadgeNew}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );  
}

export default App;