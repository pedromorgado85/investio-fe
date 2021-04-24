import React, { Component } from 'react';
import AddInvestorProfile from '../InvestorProfile/AddInvestorProfile';
import ProfileHeader from './ProfileHeader'
import InvestorProfileHistory from '../InvestorProfile/InvestorProfileHistory';
import AddAssets from '../Assets/AddAssets'
import AssetsList from '../Assets/AssetsList';
import MarketResearchService from '../../MarketResearch/MarketResearchService'

class UserProfile extends Component {

    state = { showInvestorProfileForm: false }
    marketResearchService = new MarketResearchService();

    getEverything = (keyWord) => {
        this.marketResearchService.getEverything(keyWord)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        this.getEverything('bitcoin')
        return (
            <div>
                <ProfileHeader name={this.props.loggedInUser.name} email={this.props.loggedInUser.email} ></ProfileHeader>
                <InvestorProfileHistory investorProfiles={this.props.loggedInUser.investorProfiles}> </InvestorProfileHistory>
                <AddAssets setTheUser={this.props.setTheUser}></AddAssets>
                <AssetsList loggedInUser={this.props.loggedInUser}></AssetsList>
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