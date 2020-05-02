import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Badge from '../pages/Badge'
import BadgeNew from '../pages/BadgeNew'


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/badges" component={Badge}/>
          <Route exact path="/badges/new" component={BadgeNew}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );  
}

export default App;