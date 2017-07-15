import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Gallery = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 1.0;
  color: white;
  border: none;
  border-radius: 2px;
  background-color: #00779a;
`;

const ButtonMargin = styled.div`
  margin-top: -2.5rem;
`;

const Image = styled.img`
  height: 400px;
`;

const imagesPath = 'https://yard-images.s3.amazonaws.com/';

export default props =>
  (<div>
    <Gallery>
      {props.complex.images.map(img => <Image src={`${imagesPath}${img.id}-512`} />)}
    </Gallery>
    <Grid>
      <ButtonMargin>
        <Button>{props.images.length} фотография</Button>
      </ButtonMargin>
    </Grid>
  </div>);
