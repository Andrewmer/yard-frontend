import React from 'react';

export default props => {
  return (
    <div className="jakimanka-card-item">
      <h6 className="jakimanka-card-location">
        {props.location}
      </h6>
      <p className="jakimanka-card-distance">
        {props.distance}
      </p>
    </div>
  );
};