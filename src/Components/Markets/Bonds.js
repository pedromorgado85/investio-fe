import React, { Component } from 'react';



export default class Bonds extends Component {

    state = { bonds: null }
    service = new MarketsService()


    getEverything = (keyword) => {
        return this.service.getEverything(keyword)
            .then(response => {
                console.log("response", response)
                this.setState({
                    marketResearch: response
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
                {this.state.bonds && this.state.bonds.articles.map(item => {
                    return <li key={item.url}>{item.title} </li>
                })}
            </ul>
        </div>
    }
}
