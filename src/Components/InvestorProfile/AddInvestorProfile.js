import React, { Component } from 'react';
import InvestorProfileService from './services';


class AddInvestorProfile extends Component {

    state = { userError: false, ageGroup: '', education: '', experience: '', profession: '', risk: '', investment: '', result: '' }

    service = new InvestorProfileService()

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { ageGroup, education, experience, profession, risk, investment } = this.state;
        if (ageGroup && education && experience && profession && risk && investment) {
            const response = await this.service.create({
                ageGroup: ageGroup,
                education: education,
                experience: experience,
                profession: profession,
                risk: risk,
                investment: investment,
            });
            console.log(response)
            this.props.setTheUser(response)
        } else {
            console.log("All fields are mandatory")
            this.setState({ userError: true })
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                {this.state.userError && <p>PLEASE COMPLETE THE FORM ...</p>}
                <div id="comboBoxes">
                    <form onSubmit={this.handleFormSubmit}>

                        <label>Age Group:</label>
                        <select name="ageGroup" value={this.state.ageGroup} onChange={e => this.handleChange(e)} >
                            <option >Please select an option</option>
                            <option value="1">18 - 29</option>
                            <option value="2"> 30 - 50</option>
                            <option value="3"> 51 - 70</option>
                            <option value="4"> + 70</option>
                        </select>

                        <label>Education:</label>
                        <select name="education" value={this.state.education} onChange={e => this.handleChange(e)} >
                            <option >Please select an option </option>
                            <option value="1">Finance, Economy, Management</option>
                            <option value="2">Human Sciences</option>
                            <option value="3">Technology</option>
                            <option value="3">Art</option>
                            <option value="3">Engineering</option>
                            <option value="4">None</option>
                        </select>

                        <label>Experience:</label>
                        <select name="experience" value={this.state.experience} onChange={e => this.handleChange(e)} >
                            <option >Please select an option</option>
                            <option value="1">Never Invested</option>
                            <option value="2"> Invested only on simple products</option>
                            <option value="3"> Invested on complex products</option>
                        </select>

                        <label>Profession:</label>
                        <select name="profession" value={this.state.profession} onChange={e => this.handleChange(e)} >
                            <option value="">Please select an option</option>
                            <option value="1"> Management, Banking and Finance</option>
                            <option value="2"> Lawyer</option>
                            <option value="2"> Administrative</option>
                            <option value="3"> Engineer</option>
                            <option value="4"> Hospitality professional</option>
                        </select>

                        <label>Risk Apettite(1-low && 5-high ):</label>
                        <select name="risk" value={this.state.risk} onChange={e => this.handleChange(e)} >
                            <option value="">Please select an option</option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </select>

                        <label>Investment Amount:</label>
                        <select name="investment" value={this.state.investment} onChange={e => this.handleChange(e)}>
                            <option value="">Please select an option</option>
                            <option value="1">€500 - €5000</option>
                            <option value="2">€5001- €20 000 </option>
                            <option value="3"> €20 001 - €50 000</option>
                            <option value="4"> + €50 000</option>
                        </select>

                        <input type="submit" className="bg-dark-green text-white" value="Submit" ></input>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddInvestorProfile;

