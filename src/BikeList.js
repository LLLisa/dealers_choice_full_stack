import React from 'react';
import { connect } from 'react-redux';

class BikeList extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Bikes I have owned</h1>
        <ul>
          {this.props.bikes.map((bike) => {
            return <li key={bike.id}>{bike.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(BikeList);
