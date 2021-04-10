import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './Auth/auth-service';

class Navbar extends Component {
    state = { loggedInUser: null }

    service = new AuthService()

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
    }

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.setState({ loggedInUser: null });
                this.props.getUser(null);
            })
    }

    render() {
        if (this.state.loggedInUser) {
            return (
                <nav className="nav-style">
                    <ul>
                        <li>Welcome, {this.state.loggedInUser.email}</li>
                        <li><Link to='/user-profile' style={{ textDecoration: 'none' }}>UserProfile</Link></li>
                        <li>
                            <button onClick={() => this.logoutUser()}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav className="nav-style">
                    <ul>
                        <div>
                            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
                        </div>
                        <div>
                            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
                        </div>
                    </ul>
                </nav>
            )
        }
    }
}

export default Navbar;
