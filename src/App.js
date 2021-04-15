import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import UserProfile from './Components/User/UserProfile';
import Login from './Components/Auth/Login';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import Signup from './Components/Auth/Signup';
import AuthService from './Components/Auth/auth-service';
import AddInvestorProfile from './Components/InvestorProfile/AddInvestorProfile';

class App extends Component {

  state = { loggedInUser: null }

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

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  // componentDidMount()

  render() {
    this.fetchUser()
    return (
      <div className="App">
        <div>
          <Navbar className="Navbar" userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
        </div>
        <Switch>
          <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser} />} />
          <Route exact path='/login' render={() => <Login getUser={this.getTheUser} />} />
          <Route exact path='/user-profile' render={() => <AddInvestorProfile getUser={this.getTheUser} />} />
          <ProtectedRoute user={this.state.loggedInUser} exact path="/users/:id" component={UserProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;

