import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { email: '', password: '' }

    service = new AuthService()

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email; ///const {email, password} = this.state
        const password = this.state.password;
        this.service.login(email, password)
            .then(response => {
                this.setState({
                    email: "",
                    password: ""
                });
                this.props.getUser(response);
                this.props.history.push(`/user-profile/${response._id}`)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-centre bg-deepblue">
                <div className="w-25 py-5 justify-content-centre" >
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                    </div>
                    <input type="submit" className="bg-dark-green" value="Login" />
                    </form>
                </div>
                <p>Don't have account?
            <Link to={"/signup"}> Signup</Link>
                </p>
            </div>
        )
    }
}

export default Login;