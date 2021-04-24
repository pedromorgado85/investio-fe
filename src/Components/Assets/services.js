
import axios from 'axios';

class AssetsServices {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        });
        this.service = service;
    }

    create = (asset) => {
        return this.service.post('/assets', { ...asset })
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }
}

export default AssetsServices;