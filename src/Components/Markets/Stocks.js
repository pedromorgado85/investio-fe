import React, { Component } from 'react';
import PolygonApiService from './PolygonApiService';

export default class Stocks extends Component {

    state = { stocksTicker: "", date: "", unadjusted: true, open: undefined, }
    service = new PolygonApiService()

    getStocksOpenClose = (stocksTicker, date) => {
        return this.service.getStocksOpenClose(stocksTicker, date)
            .then(response => {
                console.log("response", response)
                this.setState({
                    stocksTicker: response,
                    date: response
                })
            })
    }

    handleFormSubmit = async (event) => {
        console.log("YOU FOUND ME")
        event.preventDefault();
        const response = await this.service.getStocksOpenClose(this.state.stocksTicker, this.state.date);
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
            <div className="d-flex align-items-center justify-content-around">
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Stock Ticker</label>
                        <input type="text" name="stocksTicker" value={this.state.stocksTicker} onChange={e => this.handleChange(e)} />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="text" name="date" value={this.state.date} onChange={e => this.handleChange(e)} />
                    </div>
                    <input type="submit" className="bg-dark-green" value="Search" ></input>
                </form>
                {this.state.open &&
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" >Ticker:{this.state.stocksTicker}</li>
                            <li className="list-group-item">Open:{this.state.open}</li>
                            <li className="list-group-item">Close:{this.state.close}</li>
                            <li className="list-group-item">High:{this.state.high}</li>
                            <li className="list-group-item">Low:{this.state.low}</li>
                            <li className="list-group-item">Volume:{this.state.volume}</li>
                        </ul>
                    </div>}
            </div>
        )
    }
}
