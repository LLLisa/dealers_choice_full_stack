import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BikeList extends React.Component {
  render() {
    return (
      <div>
        <h3>Bikes</h3>
        <ul>
          {this.props.bikes.map((bike) => {
            return (
              <li key={bike.id}>
                <Link to={`/bikes/${bike.id}`}>{bike.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(BikeList);
