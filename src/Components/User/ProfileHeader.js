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
                {/* <div>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item"><a class="btn btn-primary" href="/user/:id" role="button">Edit</a></li>
                        <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">Delete</a></li>
                    </ul>
                </div> */}
            </div>

        )
    }

}

export default ProfileHeader;