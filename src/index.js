import React from 'react';
import ReactDOM from 'react-dom';
import BikeList from './BikeList';
import ManufacturerList from './ManufacturerList';

class Root extends React.Component {
  render() {
    return (
      <>
        <BikeList />
        <ManufacturerList />
      </>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
