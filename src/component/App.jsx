import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      historyData: [],
      predictResponse: [],
      origAddress: '',
      origLat: '',
      origLong: '',
      destAddress: '',
      destLat: '',
      destLong: '',
      distance: '',
      month: '',
      day: '',
    }
  }

  componentWillMount(){
    getHistory();
}

  getPrediction(){
    fetch(`http://localhost:9000/api/prediction`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      origLat: this.state.origLat,
      origLong: this.state.origLong,
      destLat: this.state.destLat,
      destLong: this.state.destLong,
      distance: this.state.distance,
      month: this.state.month,
      day: this.state.day
    })
  })
  .then(r => r.json())
  .then((response) => {
    this.setState({
      predictResponse = response
    })
    next();
  })
}

  getHistory () {
    fetch(`http://localhost:4000/history`)
    .then(r => r.json())
    .then((response) => {
      this.setState({
        historyData: response
      })
    })
    .catch(err => console.log(err));
  }

  updateAddress (e) {
    this.setState({
      origAddress: e.target.value
    });
  }

  updateDestination (e) {
    this.setState({
      destAddress: e.target.value
    });
  }

  updateMonth (e) {
    this.setState({
      month: e.target.value
    });
  }

  updateAddress (e) {
    this.setState({
      day: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Graph />
        <Search />
      </div>
    );
  }
}
