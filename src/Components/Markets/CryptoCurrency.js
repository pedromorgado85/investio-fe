import React, { Component } from 'react';
import PolygonApiService from './PolygonApiService';

export default class CryptoCurrency extends Component {

    state = { from: "", to: "", date: "", unadjusted: true, open: undefined, }
    service = new PolygonApiService()

    getCryptoOpenClose = (from, to, date) => {
        return this.service.getCryptoOpenClose(from, to, date)
            .then(response => {
                console.log("response", response)
                this.setState({
                    from: response,
                    to: response,
                    date: response
                })
            })
    }

    handleFormSubmit = async (event) => {
        console.log("YOU FOUND ME")
        event.preventDefault();
        const response = await this.service.getCryptoOpenClose(this.state.from, this.state.to, this.state.date);
        console.log(response)
        this.setState(response)
    }

    handleChange = (event) => {
        console.log("HANDLECHANGE")
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // componentDidMount() {
    //     this.getStocksOpenClose(stocksTicker, date)
    // }


    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.keyWord !== this.state.keyWord) {
    //         this.getEverything(this.state.keyWord)
    //     }
    // }



    render() {

        return (
            <div>
                <div className="d-flex align-items-center justify-content-around">
                    <form onSubmit={this.handleFormSubmit}>
                        <h3>Get the OPEN/CLOSE prices on a certain day. </h3>
                        <div>
                            <label>From</label>
                            <input type="text" name="from" value={this.state.from} onChange={e => this.handleChange(e)} />
                        </div>
                        <div>
                            <label>To</label>
                            <input type="text" name="to" value={this.state.to} onChange={e => this.handleChange(e)} />
                        </div>
                        <div>
                            <label>Date</label>
                            <input type="text" name="date" value={this.state.date} onChange={e => this.handleChange(e)} />
                        </div>
                        <input type="submit" className="text-white bg-dark-green" value="Search" ></input>
                    </form>
                    {this.state.open &&
                        <div className="bg-deepblue">
                            <ul className="bg-deepblue list-group list-group-flush">
                                <li className="list-group-item" >From:{this.state.from}</li>
                                <li className="list-group-item">Open:{this.state.open}</li>
                                <li className="list-group-item">Close:{this.state.close}</li>
                                <li className="list-group-item">High:{this.state.high}</li>
                                <li className="list-group-item">Low:{this.state.low}</li>
                                <li className="list-group-item">Volume:{this.state.volume}</li>
                            </ul>
                        </div>}
                </div>
            </div>
        )
    }
}