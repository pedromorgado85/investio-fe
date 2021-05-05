import React, { Component } from 'react';
import AddInvestorProfile from '../InvestorProfile/AddInvestorProfile';
import ProfileHeader from './ProfileHeader'
import InvestorProfileHistory from '../InvestorProfile/InvestorProfileHistory';
import AddAssets from '../Assets/AddAssets'
import AssetsList from '../Assets/AssetsList';
import MarketResearchService from '../../MarketResearch/NewsApiService'
import { Link } from 'react-router-dom';

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
                <input
                    type="file" accept="image/*" multiple={false} />
                <div>
                    <ProfileHeader name={this.props.loggedInUser.name} email={this.props.loggedInUser.email} ></ProfileHeader>
                </div>
                <div>
                    <InvestorProfileHistory investorProfiles={this.props.loggedInUser.investorProfiles}> </InvestorProfileHistory>
                </div>
                <div>
                    <AddAssets setTheUser={this.props.setTheUser}></AddAssets>
                </div>
                <div>
                <AssetsList loggedInUser={this.props.loggedInUser}></AssetsList>
                </div>
                <div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => this.setState({ showInvestorProfileForm: !this.state.showInvestorProfileForm })}>Add Investor Profile</button>
                        {this.state.showInvestorProfileForm && <AddInvestorProfile setTheUser={this.props.setTheUser} />} {/*passar os props*/}
                    </div>
                </div>
                <div>
                    <Link to='/market-research'>Market Research</Link>
                </div>
                <div>
                    <Link to='/markets'>Markets</Link>
                </div>
                </div>)
    }
}

export default UserProfile