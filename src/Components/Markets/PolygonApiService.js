import axios from 'axios';

class PolygonApiService {
    constructor() {
        let service = axios.create({
            baseURL: 'https://api.polygon.io'
        });
        this.service = service;
    }

    getStocksOpenClose = (stocksTicker, date) => {
        return this.service.get(`/v1/open-close/${stocksTicker}/${date}?unadjusted=true&apiKey=${process.env.REACT_APP_POLYGONAPI_KEY}`)
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }

    getCryptoOpenClose = (from, to, date) => {
        return this.service.get(`/v1/open-close/crypto/${from}/${to}/${date}?unadjusted=true&apiKey=${process.env.REACT_APP_POLYGONAPI_KEY}`)
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }


    getForexOpenClose = (from, to, date) => {
        return this.service.get(`/v1/open-close/crypto/${from}/${to}/${date}?unadjusted=true&apiKey=${process.env.REACT_APP_POLYGONAPI_KEY}`)
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }
}

export default PolygonApiService;