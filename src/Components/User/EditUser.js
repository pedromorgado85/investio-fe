import React, { Component } from 'react';
import UserProfile from './UserProfile';

export default class EditUser extends Component {

    render() {
        return (
            <UserProfile loggedInUser={this.props.loggedInUser} ></UserProfile>
        )
    }
}
