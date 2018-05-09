import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import NumberFormat from 'react-number-format';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH&tsyms=USD')
    .then(response => {
      const cryptos = response.data
      this.setState({ cryptos: cryptos });
    })
    .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="App">
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'}  /></span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
