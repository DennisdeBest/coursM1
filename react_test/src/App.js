import React, {Component} from 'react';
import './App.css';
import './random.js';
import Exchange from './exchange.js';
import RandomInt from "./random";

class Welcome extends Component {
  render() {
    return (
     <div>Bonjour {this.props.name}</div>
    )
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      rendered: true,
      names: [
        'kek', 'kek', 'kek'
      ]
    }
  }

  toggle = () => {
    console.log(this.state.rendered);
    this.setState({
        rendered: !this.state.rendered,
      }
    )
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Kek</button>
        {this.state.rendered && <RandomInt/>}

        <h2>List</h2>

        {this.state.names.map((name, index) => <Welcome key={index} name={name}/>)}

        <h2>Echange</h2>
        <Exchange/>
      </div>
    )
  }
}

export default App;
