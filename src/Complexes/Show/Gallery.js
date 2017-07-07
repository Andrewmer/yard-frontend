import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Gallery = styled.div`
  display: flex;
`;

const Images = styled.div`
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

export default () => {
  return (
    <div>
      <Gallery>
        <Image src={process.env.PUBLIC_URL + './img/bitmap1.png'} />
        <Image src={process.env.PUBLIC_URL + './img/bitmap2.png'} />
        <Image src={process.env.PUBLIC_URL + './img/bitmap3.png'} />
        <Image src={process.env.PUBLIC_URL + './img/bitmap4.png'} />
        <Image src={process.env.PUBLIC_URL + './img/bitmap5.png'} />
      </Gallery>
      <Grid>
        <ButtonMargin>
          <Button>41 фотография</Button>
        </ButtonMargin>
      </Grid>
    </div>
  );
};