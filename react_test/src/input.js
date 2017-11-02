import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {

  static propTypes = {
    currency: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    inputValue: PropTypes.number,
  };

  handleChange = (e) => {
    let newValue = e.target.value;
    this.props.onInputChange(newValue, this.props.currency);
  };


  render() {
    return (
      <div>
        <input value={this.props.inputValue} onChange={this.handleChange}/>
        <span className="currency">
          {this.props.currency}
        </span>
      </div>
    )
  }

}