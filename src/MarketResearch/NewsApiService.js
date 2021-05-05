import axios from 'axios';

class NewsApiService {
    constructor() {
        let service = axios.create({
            baseURL: 'https://newsapi.org/v2'
        });
        this.service = service;
    }

    getEverything = (keyword) => {
        return this.service.get(`/everything?q=${keyword}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }

}

export default NewsApiService;