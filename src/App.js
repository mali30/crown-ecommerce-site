import React, { Component } from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom'
import { Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header-component/header.component'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

// for state when user logs in 
import {auth} from './firebase/firebase.utils'


class App extends Component {
  constructor() {
    super();
  
    this.state = {
    currentUser : null
  }
}

  unsubsribedFromAuth() {
    return null
  }

  // when someone signs in and out we want
  //to know
  componentDidMount() {
    // takes a function where paramter is what user state is 
    this.unsubsribedFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      
      console.log("user" , user)
    });
  }

  // closing subscription
  componentWillUnmount() {
    this.unsubsribedFromAuth()
  }
  // componentWillUnmount() {
  //   this.unsubsribedFromAuth()
  // }



  render() {
    return (
      <div>
        {/* <HomePage />  */}

        {/* will be on each page */}
        <Header currentUser = {this.state.currentUser}/>
        <Switch >

          <Route exact path='/' component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
    
        </Switch>
 

      </div>
    );
  }

}
export default App;
