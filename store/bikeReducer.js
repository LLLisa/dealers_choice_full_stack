import axios from 'axios';

//action types----------------------------
const LOAD_BIKES = 'LOAD_BIKES';

//thonks----------------------------------
export const loadBikes = () => {
  return async (dispatch) => {
    const bikes = (await axios.get('/api/bikes')).data;
    dispatch({ type: LOAD_BIKES, bikes: bikes });
  };
};

//reducer---------------------------------
const bikeReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_BIKES:
      return action.bikes;
  }
  return state;
};

export default bikeReducer;
