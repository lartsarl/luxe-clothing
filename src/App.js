import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';

import './App.css';

const TestPage = (props) => (
  <div>
      <h1>TEST PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/hats' component={TestPage}></Route>
        <Route exact path='/shop/jackets' component={TestPage}></Route>
        <Route exact path='/shop/sneakers' component={TestPage}></Route>
        <Route exact path='/shop/womens' component={TestPage}></Route>
        <Route exact path='/shop/mens' component={TestPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
