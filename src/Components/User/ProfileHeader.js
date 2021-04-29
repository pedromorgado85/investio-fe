import React, { Component } from 'react';


class ProfileHeader extends Component {

    render() {
        return (
            <div>
                <div>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNjhlYTE2YjUtYzgxMS00OWY1LTk3YzItY2RjMmQ2MjM0MjMzXkEyXkFqcGdeQXVyMzkyOTg1MzE%40._V1_UY1200_CR489%2C0%2C630%2C1200_AL_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0788626%2F&tbnid=y07lljeb513_HM&vet=12ahUKEwiU4_3fqKTwAhULTRoKHXc6Bg4QMygBegUIARCzAQ..i&docid=5FBzMrT174nNHM&w=630&h=1200&q=beetlejuice%20howard%20stern&hl=pt-PT&ved=2ahUKEwiU4_3fqKTwAhULTRoKHXc6Bg4QMygBegUIARCzAQ" class="img-thumbnail" alt="foto"></img>
                </div>
                <div>
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

        )
    }

}

export default ProfileHeader;