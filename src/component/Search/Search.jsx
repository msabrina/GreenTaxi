import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h2>Search Your Route</h2>
        <p>Starting Address</p>
        <input />
        <p>Ending Address</p>
        <input />
        <p>Date</p>
        <input type='date' />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
