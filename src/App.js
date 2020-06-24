import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';
import { checkUserSession } from './redux/user/user.actions';

const TestPage = (props) => (
  <div>
    <h1>TEST PAGE</h1>
  </div>
)

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  render() {
    const {currentUser} = this.props;
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)}></Route>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
