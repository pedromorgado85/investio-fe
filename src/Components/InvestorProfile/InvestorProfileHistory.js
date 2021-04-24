import React, { Component } from 'react';
import InvestorProfileCard from './InvestorProfileCard'

class InvestorProfileHistory extends Component {

    render() {
        return (
            <div class="container">
                <div class="row align-item-start">
                    {this.props.investorProfiles.reverse().map(profile => {
                        return <InvestorProfileCard key={profile._id} profile={profile} />
                    })}
                </div>
            </div>
        )
    }
}

export default InvestorProfileHistory;