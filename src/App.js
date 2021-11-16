import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import  SignInAndSignUpPage from './pages/sign_in_and_sign_up/sign_in_and_sign_up';
import { auth } from './firebase/firebase.utils';

import './App.css';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
      return (
      <div>
        <Header currentUser={this.state.currentUser} /> 
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/shop' component={ShopPage} />
            <Route  path='/signin' component={SignInAndSignUpPage} />
        </Switch>   
      </div>
    );
  }
  
}

export default App;
