import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MarketsView extends Component {

    render() {
        return (
            <div>
                {this.props.loggedInUser &&
                    <div>
                        <h1 className="text-center"> {this.props.loggedInUser.name},what do you want to search for?</h1>
                    </div>
                }
                <div className="d-flex justify-content-around align-items-center bg-light-gray">

                    <div className="text-start w-25 py-5" >
                        <figure className="figure">
                            <img src={process.env.PUBLIC_URL + 'stockMarkets.svg'} className="figure-img img-fluid rounded" alt="Dashboard" />
                        </figure>
                    </div>
                </div>
                <div className="text-start">
                    <h3 className="m-3 p-5">Markets</h3>
                    <div className="d-flex align-items-between justify-content-center">
                        <p>Follow up !</p>
                        <Link to="/stocks"><button type="button" className="text-white bg-dark-green">Stocks</button></Link>
                        <Link to="/crypto"><button type="button" className="text-white bg-dark-green">Crypto</button></Link>
                        <Link to="/forex"><button type="button" className="text-white bg-dark-green">Forex</button></Link>
                        <Link to="/bonds"><button type="button" className="text-white bg-dark-green">Bonds</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}