import React from 'react';
import BikeList from './BikeList';
import ManufacturerList from './ManufacturerList';
import { Route } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <Route path="/bikes" component={BikeList} />
      <Route path="/manufacturers" component={ManufacturerList} />
    </div>
  );
};

export default Body;
