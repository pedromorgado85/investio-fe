import React, { Component } from 'react';
import AssetsServices from './services';

export default class AddAssets extends Component {

    state = { userError: false, portefolio: [] };
    service = new AssetsServices();

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { name, type, amount, unit } = this.state;
        if (name && type && amount && unit) {
            const response = await this.service.create({
                name: name,
                type: type,
                amount: amount,
                unit: unit,
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
                {this.state.userError && <p>See your portefolio ratio!</p>}
                <div id="assets">
                    <form onSubmit={this.handleFormSubmit}>

                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} >
                        </input>

                        <label>Type:</label>
                        <select name="type" value={this.state.type} onChange={e => this.handleChange(e)} >
                            <option >Please select an option </option>
                            <option value="bonds">Bonds</option>
                            <option value="cryptoCurrency">Crypto Currency</option>
                            <option value="forex">Forex</option>
                            <option value="stocks">Stocks</option>
                        </select>

                        <label>Amount:</label>
                        <input type="number" name="amount" value={this.state.amount} onChange={e => this.handleChange(e)} >
                        </input>

                        <label>Unit:</label>
                        <select name="unit" value={this.state.unit} onChange={e => this.handleChange(e)} >
                            <option >Please select an option </option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                        <input type="submit" className="btn btn-primary" value="Generate" ></input>
                    </form>
                </div>
            </div>
        )
    }
}
