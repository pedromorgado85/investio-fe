import React, { Component } from 'react';
import NewsApiService from './NewsApiService';


export default class NewsResearch extends Component {

    state = { newsResearch: null }
    service = new NewsApiService()


    getEverything = (keyword) => {
        return this.service.getEverything(keyword)
            .then(response => {
                console.log("response", response)
                this.setState({
                    newsResearch: response
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
            <div>
                <h2>Know the latest news on the topic of your choice</h2>
            </div>
            <input type='text' name='keyWord' onChange={e => this.handleChange(e)} />
            <ul className="list-group">
                {this.state.newsResearch && this.state.newsResearch.articles.map(item => {
                    return <li className="bg-dark list-group-item list-group-item-action" key={item.url}> <a href={item.url}>{item.title}</a></li>
                })}
            </ul>
        </div>
    }
}
