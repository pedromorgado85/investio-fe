import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {

    state = { name: '', email: '', password: '' }

    service = new AuthService()

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        console.log("AQUI", name, email, password)
        const response = await this.service.signup(name, email, password)
        this.props.setTheUser(response)
        console.log("response FE", response)
        // this.service.signup(email, password)
        //     .then(response => {
        //         if (response.message) {
        //             console.log(response.message)
        //         } else {
        //             this.setState({
        //                 email: "",
        //                 password: "",
        //             });
        //             this.props.getUser(response)
        //         }
        //     })
        //     .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />

                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

                    <label>Password:</label>
                    <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Signup" />
                </form>

                <p>Already have account?
          <Link to={"/"}> Login</Link>
                </p>

            </div>
        )
    }
}
export default Signup;

