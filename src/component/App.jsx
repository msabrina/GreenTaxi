import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx';
import Filter from './Filter/Filter.jsx';
// import Graph from './Graph/Graph.jsx';
import Search from './Search/Search.jsx';

class App extends Component {
  render() {
    return (
      <div className={styles["App"]}>
        <Header />
        <div className={styles["side-bar"]}>
          <Filter />
          <Search />
        </div>
        <div className={styles["graph-container"]}>
        </div>
      </div>
    )
  }
}

export default App;
