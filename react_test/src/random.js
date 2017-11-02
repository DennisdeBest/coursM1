import React, {Component} from 'react';

export default class RandomInt extends Component {
  constructor() {
    super();
    this.state = {
      randomInt: Math.floor(Math.random() * 10) + 1,
    };
  };

  componentDidMount() {
    console.log("mounted");
    this.timer = setInterval(this.update.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  update() {
    this.setState({randomInt: Math.floor(Math.random() * 10) + 1})
  };

  render() {

    return (
      <div>
        <span>RandomInt {this.state.randomInt}</span>
      </div>
    )
  }
}