import axios from 'axios';

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:3000/api',
            withCredentials: true
        });
        this.service = service;
    }

    signup = (email, password) => {
        console.log("body", email, password)
        return axios.post('http://localhost:3000/api/signup', {
            email: 'Fred@Flintstone.com',
            password: 'Flintstone'
        })
            .then(response => {
                console.log("response", response)
                return response.data
            })
    }
    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }
    login = (email, password) => {
        console.log("AQUI", email, password)
        return this.service
            .post('/login', { email, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }

}

export default AuthService;