import React, {Component} from 'react';
import Amount from './input.js';

export default class Exchange extends Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      rates: {
        'EUR': 1
      }
    };

  }

  /**
   * Get the rates from the API when the component will mount
   * @returns {Promise.<TResult>}
   */
  componentWillMount() {
    return fetch('http://api.fixer.io/latest')
      .then((response) => response.json())
      .then((responseJson) => {
        Object.keys(responseJson.rates).map((key) => {
          let tempState = this.state.rates;
          tempState[key] = responseJson.rates[key];
          this.setState({
            rates: tempState
          })
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * @param newValue
   * @param currency
   */
  handleInputChange = (newValue, currency) => {
    let val;
    //Calculations are based on the euro, if current currency is EUR keep the value
    if(currency === 'EUR'){
      val = newValue
    } else { //Else convert the value back to EUR
      val = newValue / this.state.rates[currency];
    }

    this.setState({
      val
    })
  };

  render() {
      return (
        <div className="converter">
          {
            Object.keys(this.state.rates).map((currency, index) =>
              <Amount inputValue={this.state.val * this.state.rates[currency]} currency={currency} key={currency}
                      onInputChange={this.handleInputChange}/>
            )
          }
        </div>)
  }
}