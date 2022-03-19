import React from 'react';
import ReactDOM from 'react-dom';
import BikeList from './BikeList';
import ManufacturerList from './ManufacturerList';
import { connect, Provider } from 'react-redux';
import store from '../store';
import { loadBikes } from '../store/bikeReducer';
import { loadManufacturers } from '../store/manufacturerReducer';

class _Root extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.loadBikes();
    this.props.loadManufacturers();
  }

  render() {
    return (
      <>
        <BikeList />
        <ManufacturerList />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBikes: () => {
      dispatch(loadBikes());
    },
    loadManufacturers: () => {
      dispatch(loadManufacturers());
    },
  };
};

const Root = connect((state) => state, mapDispatchToProps)(_Root);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#root')
);
