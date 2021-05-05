import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <div>
                <figure className="quote p-3">
                    <blockquote className="blockquote fst-italic m-25">
                        <h2 className="text">Before you invest in something, invest the time to understand it!</h2>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Robert T. Kiyosaki
                    </figcaption>
                </figure>
                <div className="d-flex justify-content-around align-items-center bg-light-gray">
                    <div className="text-start w-25 py-5" >
                        <figure className="figure">
                            <img src={process.env.PUBLIC_URL + 'portfolio.svg'} className="figure-img img-fluid rounded" alt="Dashboard" />
                        </figure>
                    </div>
                    <div className="text-start">
                        <h3>Portfolio Management</h3>
                        <p>Manage your investment portfolio in a easy way!</p>
                        <Link to="/signup"><button type="button" className="btn text-white bg-dark-green">Signup</button></Link>
                        
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center bg-dark-green">
                    <div className="text-start text-white">
                        <h3 >Targeting News</h3>
                        <p>Follow all the market news and keep up to date.<br />Knowledge equals to better investments!</p>
                        <Link to="/signup"><button type="button" className="btn text-white bg-deepblue">Signup</button></Link>
                    </div>
                    <div className="w-25 py-5" >
                        <figure className="figure">
                            <img src={process.env.PUBLIC_URL + 'market-research.svg'} className="figure-img img-fluid rounded" alt="Dashboard" />
                        </figure>
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center bg-light-gray">
                    <div className="w-25 py-5" >
                        <figure className="figure">
                            <img src={process.env.PUBLIC_URL + 'stocks.svg'} className="figure-img img-fluid rounded" alt="Dashboard" />
                        </figure>
                    </div>
                    <div className="text-start">
                        <h3>Markets Analysis</h3>
                        <p>Follow in realtime your favorite markets indicators!</p>
                        <Link to="/signup"><button type="button" className="btn text-white bg-dark-green">Signup</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}