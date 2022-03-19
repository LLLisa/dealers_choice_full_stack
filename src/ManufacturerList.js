import React from 'react';
import { connect } from 'react-redux';

class ManufacturerList extends React.Component {
  render() {
    return (
      <div>
        <h1>Manufacturers of these bikes</h1>
        <ul>
          {this.props.manufacturers.map((manufacturer) => {
            return <li key={manufacturer.id}>{manufacturer.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state)(ManufacturerList);
