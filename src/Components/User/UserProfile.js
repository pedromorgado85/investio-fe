import React, { Component } from 'react';
import AddInvestorProfile from '../InvestorProfile/AddInvestorProfile';
import ProfileHeader from './ProfileHeader'
import InvestorProfileHistory from '../InvestorProfile/InvestorProfileHistory';
import AddAssets from '../Assets/AddAssets'
import AssetsList from '../Assets/AssetsList';
import NewsApiService from '../../MarketResearch/NewsApiService'
import { Link } from 'react-router-dom';

class UserProfile extends Component {

    state = { showInvestorProfileForm: false }
    newsApiService = new NewsApiService();

    getEverything = (keyWord) => {
        this.newsApiService.getEverything(keyWord)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        this.getEverything()
        console.log(this.props.match.params)
        return (
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + 'avatar.svg'} alt="profilePic"></img>
                </div>
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
                <div className="d-flex justify-content-around align-items-center bg-light-gray">
                    <div className="text-start w-25 py-5" >
                        <div className="text-start">
                            <h5>Update a new Investor Profile</h5>
                        <div>
                            <button type="button" className="text-white bg-dark-green" onClick={() => this.setState({ showInvestorProfileForm: !this.state.showInvestorProfileForm })}>Add Investor Profile</button>
                            {this.state.showInvestorProfileForm && <AddInvestorProfile setTheUser={this.props.setTheUser} />} {/*passar as props*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='/news-research'><button type="button" className="text-white bg-dark-green ">News Research</button></Link>
                    </div>
                    <div>
                        <Link to='/markets'><button type="button" className="text-white bg-dark-green">Markets</button></Link>
                    </div>
                </div>
            </div>)
    }
}

export default UserProfile