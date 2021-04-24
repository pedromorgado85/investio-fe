import axios from 'axios';

class InvestorProfileService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        });
        this.service = service;
    }

    create = (profile) => {
        return this.service.post('/investorProfile', { ...profile })
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }
}

export default InvestorProfileService;