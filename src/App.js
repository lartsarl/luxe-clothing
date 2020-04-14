import React from 'react';
import {auth} from './firebase/firebase.utils'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'

import './App.css';

const TestPage = (props) => (
  <div>
      <h1>TEST PAGE</h1>
  </div>
)

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({currentUser: user})});
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
          <Route exact path='/shop/hats' component={TestPage}></Route>
          <Route exact path='/shop/jackets' component={TestPage}></Route>
          <Route exact path='/shop/sneakers' component={TestPage}></Route>
          <Route exact path='/shop/womens' component={TestPage}></Route>
          <Route exact path='/shop/mens' component={TestPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
