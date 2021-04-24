import React, { Component } from 'react';

export default class AssetsList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.loggedInUser.portefolio.reverse().map((asset) => {
                        return <li key={asset._id}>{asset.name} | {asset.amount}{asset.unit} | {asset.type} </li>
                    })}
                </ul>
            </div>
        )
    }
}