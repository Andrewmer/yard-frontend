import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import List from './Complexes/List';
import Show from './Complexes/Show';
import Header from './Header';
import Footer from './Footer';

export default () =>
  (<Router onUpdate={() => window.scrollTo(0, 0)}>
    <div className="App">
      <Header />

      <Route exact path="/" component={List} />
      <Route path="/complex" component={Show} />

      <Footer />
    </div>
  </Router>);
