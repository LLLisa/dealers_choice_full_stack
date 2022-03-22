import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTheBike } from '../store/bikeReducer';

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
                <button
                  style={{ height: '1rem', marginLeft: '1rem', border: 'none' }}
                  onClick={() => this.props.deleteTheBike(bike)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTheBike: async (bike) => {
      await dispatch(deleteTheBike(bike));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(BikeList);
