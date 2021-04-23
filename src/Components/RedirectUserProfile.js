import { Redirect } from 'react-router-dom';

class Redirect extends Component {
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user-profile' />
        }
    }
}

export default Redirect