import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ManufacturerList extends React.Component {
  render() {
    return (
      <div>
        <h3>Bike Manufacturers</h3>
        <ul>
          {this.props.manufacturers.map((manufacturer) => {
            const bikes = this.props.bikes.filter(
              (bike) => bike.manufacturerId === manufacturer.id
            );
            return (
              <li key={manufacturer.id}>
                <Link to={`/manufacturers/${manufacturer.id}`}>
                  {manufacturer.name} ({bikes.length})
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(ManufacturerList);
