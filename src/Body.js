import React from 'react';
import Bike from './Bike';
import BikeList from './BikeList';
import Manufacturer from './Manufacturer';
import ManufacturerList from './ManufacturerList';
import { Route } from 'react-router-dom';
import Create from './Create';

const Body = () => {
  return (
    <div>
      <Create />
      <Route exact path="/bikes" component={BikeList} />
      <Route path="/bikes/:id" component={Bike} />
      <Route exact path="/manufacturers" component={ManufacturerList} />
      <Route path="/manufacturers/:id" component={Manufacturer} />
    </div>
  );
};

export default Body;
