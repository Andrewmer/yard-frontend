import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import Development from './Development';
import Discover from './Discover';
import Card from './Card';

class Complexes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complexes: [],
    };
  }
  componentDidMount() {
    fetch('https://yard.moscow/api/v1/complexes?filter%5Bstate%5D=public')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ complexes: data.items });
      });
  }
  render() {
    return (
      <div>
        <Development />
        <Grid>
          <Discover />
          {this.state.complexes.map(item => <Card complex={item} key={item.id} />)}
        </Grid>
      </div>
    );
  }
}

export default Complexes;
