import React, { Component } from 'react';
import './complexes.css';
import './complex.css';
import './App.css';

import Header from './Header';
import Development from './Development';
import Discover from './Discover';
import Card from './Card';
import Footer from './Footer';
import ComplexName from './ComplexName';
import Gallery from './Gallery';
import Details from './Details';
import Characteristics from './Characteristics';
import Description from './Description';
import Structure from './Structure';
import Offers from './Offers';
import Jakimanka from './Jakimanka';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Development />
        <Discover />
        <Card />
        <Footer />
        <Header />
        <ComplexName />
        <Gallery />
        <Details />
        <Characteristics />
        <Description />
        <Structure />
        <Offers />
        <Jakimanka />
        <Footer />
      </div>
    );
  }
}

export default App;