import React, { Component } from 'react';
import PolygonApiService from './PolygonApiService';


export default class Stocks extends Component {

    state = { stocks: null, unadjusted: true }
    service = new PolygonApiService()


    getEverything = (stocks) => {
        return this.service.getEverything(stocks)
            .then(response => {
                console.log("response", response)
                this.setState({
                    stocks: response
                })
            })
    }
    handleChange = (event) => {
        const { value } = event.target;
        this.getEverything(value)
    }

    // componentDidMount() {
    //     this.getEverything(this.state.keyWord)

    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.keyWord !== this.state.keyWord) {
    //         this.getEverything(this.state.keyWord)
    //     }
    // }

    render() {
        console.log(this.state)
        return <div>
            <input type='text' name='keyWord' onChange={e => this.handleChange(e)} />
            <ul>
                {this.state.stocks && this.state.stocks.open.map(item => {
                    return <li key={item.url}>{item.high} </li>
                })}
            </ul>
        </div>
    }
}
