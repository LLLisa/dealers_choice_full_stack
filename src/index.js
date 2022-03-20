import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { connect, Provider } from 'react-redux';
import store from '../store';
import { loadBikes } from '../store/bikeReducer';
import { loadManufacturers } from '../store/manufacturerReducer';
import { HashRouter } from 'react-router-dom';
import Body from './Body';

class _Root extends React.Component {
  componentDidMount() {
    this.props.loadBikes();
    this.props.loadManufacturers();
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
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
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);
