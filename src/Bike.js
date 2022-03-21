import React from 'react';
import { connect } from 'react-redux';

const Bike = ({ bikes, match }) => {
  return (
    <div>
      <h3>Bike Detail</h3>
      <ul>
        {bikes
          .filter((x) => x.id === match.params.id * 1)
          .map((bike) => {
            return (
              <li key={bike.id}>
                {bike.name}
                <ul>
                  <li>style: {bike.style}</li>
                  <li>material: {bike.material}</li>
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default connect((state) => state)(Bike);
