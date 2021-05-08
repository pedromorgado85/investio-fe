import React, { Component } from 'react';


class ProfileHeader extends Component {

    render() {
        return (
            <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngarts.com%2Fexplore%2F238417&psig=AOvVaw18Bxi_IdmIBnZ3nPMW0FyD&ust=1619950615862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjx-7mgqPACFQAAAAAdAAAAABAD" className="img-thumbnail" alt="foto" ></img>
                </div>
                <div className="d-flex justify-content-start">
                    <h1>
                        {this.props.name}
                    </h1>
                    <h5>
                        {this.props.email}
                    </h5>
                </div>
                {/* <div>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item"><a class="btn btn-primary" href="/user/:id" role="button">Edit</a></li>
                        <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">Delete</a></li>
                    </ul>
                </div> */}
                </div>
            </div>

        )
    }

}

export default ProfileHeader;