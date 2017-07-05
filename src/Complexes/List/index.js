import React from 'react';

import Development from './Development';
import Discover from './Discover';
import Cards from './Cards';

export default () => {
  return (
    <div className="bg-complexes">
      <Development />
      <Discover />
      <Cards />
    </div>
  );
};