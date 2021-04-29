import React, { Component } from 'react'

export default class RedirectHome extends Component {
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <RedirectHome to='/' />
        }
    }
}

