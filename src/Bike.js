import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Bike = ({ bikes, manufacturers, match }) => {
  console.log(manufacturers);
  return (
    <div>
      <h3>Bike Detail</h3>
      <ul>
        {bikes
          .filter((bike) => bike.id === match.params.id * 1)
          .map((bike) => {
            return (
              <li key={bike.id}>
                {bike.name}
                <ul>
                  <li>style: {bike.style}</li>
                  <li>material: {bike.material}</li>
                  <li>
                    manufacturer:{' '}
                    <Link to={`/manufacturers/${bike.manufacturerId}`}>
                      {manufacturers.length
                        ? manufacturers.find((x) => {
                            return x.id === bike.manufacturerId;
                          }).name
                        : ''}
                    </Link>
                  </li>
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default connect((state) => state)(Bike);
