import React, { Component } from 'react';
import './style.css';

import Header from './Header';
import Development from './Development';
import Discover from './Discover';
import Card from './Card';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Development />
        <Discover />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;