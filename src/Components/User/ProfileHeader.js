import React, { Component } from 'react';


class ProfileHeader extends Component {

    render() {
        return (
            <div>
                <p>
                    {this.props.name}
                </p>
                <p>
                    {this.props.email}
                </p>
            </div>

        )
    }

}

export default ProfileHeader;