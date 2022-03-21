import React from 'react';
import { connect } from 'react-redux';

const Manufacturer = ({ bikes, manufacturers, match }) => {
  return (
    <div>
      <h3>
        Bikes made by{' '}
        {manufacturers.length
          ? manufacturers.find((x) => {
              return x.id === match.params.id * 1;
            }).name
          : ''}
      </h3>
      <ul>
        {bikes.length
          ? bikes
              .filter((x) => {
                return x.manufacturerId === match.params.id * 1;
              })
              .map((x) => {
                return <li key={x.id}>{x.name}</li>;
              })
          : ''}
      </ul>
    </div>
  );
};

export default connect((state) => state)(Manufacturer);
