import React from 'react';
import { Link } from "react-router-dom";

export default props => {
  return (
    <section className="container">
      <Link to="/complex" className="card">
        <img
          src={process.env.PUBLIC_URL + './bitmap.png'}
          className="card-img"
          alt="complex preview"
        />
        <article className="card-details">
          <p className="card-district">
            {props.district}
          </p>
          <h3 className="card-address">
            {props.address}
          </h3>
          <p className="card-text">
            {props.text}
          </p>
        </article>
      </Link>
    </section>
  );
};