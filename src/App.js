import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import UserProfile from './Components/User/UserProfile';
import Login from './Components/Auth/Login';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import Signup from './Components/Auth/Signup';
import AuthService from './Components/Auth/auth-service';
import MarketResearch from './MarketResearch/MarketResearch';

class App extends Component {

  state = { loggedInUser: null, redirect: false }

  service = new AuthService()


  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  setTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  // componentDidMount() {
  //   fetch('http://https://api.polygon.io/v1/open-close/AAPL/2020-10-14?unadjusted=true&apiKey=spjcYpSHqofxI8i3eH5Jkwr74wpFl0x7.typicode.com/users')
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({ stocks: data })
  //     })
  //     .catch(console.log)
  // }

  render() {


    this.fetchUser()
    return (
      <div className="App">
        <div>
          <Navbar className="Navbar" userInSession={this.state.loggedInUser} getUser={this.setTheUser} />
        </div>
        <Switch>
          <Route exact path='/signup' render={(props) => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/market-research' render={(props) => <MarketResearch getUser={this.setTheUser} {...props} />} />
          <Route exact path='/login' render={(props) => <Login getUser={this.setTheUser} {...props} />} />
          {/* <Route exact path='/user-profile/:id' render={() => <UserProfile getUser={this.setTheUser} {...props}/>} /> */}
          <ProtectedRoute user={this.state.loggedInUser} exact path="/user-profile/:id" component={UserProfile} setTheUser={this.setTheUser} />
        </Switch>
      </div>
    );
  }
}

export default App;

