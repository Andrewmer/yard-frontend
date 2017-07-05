import React from 'react';

export default props => {
  return (
    <div className="col-xs-4">
      <div className="offers-card">
        <h4 className="offers-card-heading">
          {props.heading}
        </h4>
        <p className="offers-card-value">
          <small className="offers-card-key">
            {props.key1}
          </small>
          {props.value1}
        </p>
        <p className="offers-card-value">
          <small className="offers-card-key">
            {props.key2}
          </small>
          {props.value2}
        </p>
        <button className="offers-button">
          {props.button}
        </button>
      </div>
    </div>
  );
};