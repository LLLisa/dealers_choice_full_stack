import axios from 'axios';

const LOAD_BIKES = 'LOAD_BIKES';

export const loadBikes = () => {
  return async (dispatch) => {
    const bikes = (await axios.get('/api/bikes')).data;
    dispatch({ type: LOAD_BIKES, bikes });
  };
};

const bikeReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_BIKES:
      return action.bikes;
  }
  return state;
};

export default bikeReducer;
