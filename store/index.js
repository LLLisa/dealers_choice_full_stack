import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import bikeReducer from './bikeReducer';
import manufacturerReducer from './manufacturerReducer';

const rootReducer = combineReducers({
  bikes: bikeReducer,
  manufacturers: manufacturerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
