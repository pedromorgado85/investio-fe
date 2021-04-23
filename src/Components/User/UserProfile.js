import React, { Component } from 'react';
import AddInvestorProfile from '../InvestorProfile/AddInvestorProfile';
import ProfileHeader from './ProfileHeader'
import InvestorProfileHistory from '../InvestorProfile/InvestorProfileHistory';
import AddAssets from '../Assets/AddAssets'

class UserProfile extends Component {

    state = { showInvestorProfileForm: false, }

    render() {
        return (
            <div>
                <ProfileHeader name={this.props.loggedInUser.name} email={this.props.loggedInUser.email} ></ProfileHeader>
                <InvestorProfileHistory investorProfiles={this.props.loggedInUser.investorProfiles}> </InvestorProfileHistory>
                <AddAssets assets={this.props.loggedInUser.assets}></AddAssets>
                <input
                    type="file" accept="image/*" multiple={false} />
                <div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => this.setState({ showInvestorProfileForm: !this.state.showInvestorProfileForm })}>Add Investor Profile</button>
                        {this.state.showInvestorProfileForm && <AddInvestorProfile setTheUser={this.props.setTheUser} />} {/*passar os props*/}
                    </div>
                </div>
            </div>)
    }
}

export default UserProfile