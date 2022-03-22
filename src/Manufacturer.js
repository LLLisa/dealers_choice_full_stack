import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
              .filter((bike) => {
                return bike.manufacturerId === match.params.id * 1;
              })
              .map((bike) => {
                return (
                  <li key={bike.id}>
                    <Link to={`/bikes/${bike.id}`}>{bike.name}</Link>
                  </li>
                );
              })
          : ''}
      </ul>
    </div>
  );
};

export default connect((state) => state)(Manufacturer);
