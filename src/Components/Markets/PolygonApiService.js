import axios from 'axios';

class PolygonApiService {
    constructor() {
        let service = axios.create({
            baseURL: 'https://api.polygon.io/v1/'
        });
        this.service = service;
    }

    getEverything = (keyword) => {
        return this.service.get(`/open-close/AAPL/2020-10-14?unadjusted=true&apiKey=spjcYpSHqofxI8i3eH5Jkwr74wpFl0x7?&apiKey=${process.env.REACT_APP_POLYGONAPI_KEY}`)
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }

}

export default PolygonApiService;