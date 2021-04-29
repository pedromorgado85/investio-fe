import React, { Component } from 'react'

export default class InvestorProfileCard extends Component {
    render() {
        return (
            <div className="col">
                <div className="card text-success ">
                    <div className="card-investor-profile">
                        <div className="card-body ">
                            <h5 className="card-title">{this.props.profile.result}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}