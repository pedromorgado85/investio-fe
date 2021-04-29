import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './Auth/auth-service';


class Navbar extends Component {

    service = new AuthService()

    logoutUser = () => {
        this.service.logout()
            .then(() => {
                this.props.getUser(null);
            })
    }

    render() {
        return (
            <div className="d-flex justify-content-between align-items-center p-3 bg-deepblue">
                <Link to='/' className="text-white text-decoration-none fw-bolder">Invest.IO</Link>
                <div className="d-flex align-items-center">
                    {this.props.loggedInUser &&
                        <Fragment>
                            <Link to={`/user-profile/${this.props.loggedInUser._id}`} className="text-white text-decoration-none me-3">{this.props.loggedInUser.name}</Link>
                            <button type="button" className="btn text-white bg-dark-green" onClick={() => this.logoutUser()}>Logout</button>
                        </Fragment>
                    }
                    {!this.props.loggedInUser &&
                        <Fragment>
                            <Link to='/login' className="text-white text-decoration-none me-3">Login</Link>
                            <Link to='/signup' className="btn text-white bg-dark-green">Signup</Link>
                        </Fragment>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;
