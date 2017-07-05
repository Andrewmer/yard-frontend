import React from 'react';

export default props => {
  return (
    <div className="details-item">
      <h2 className="details-heading">
        {props.heading}
        <small className="details-heading-small">
          {props.subheading}
        </small>
      </h2>
    </div>
  );
};