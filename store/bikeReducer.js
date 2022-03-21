import axios from 'axios';

//action types----------------------------
const LOAD_BIKES = 'LOAD_BIKES';
const CREATE_BIKE = 'CREATE_BIKE';

//thonks----------------------------------
export const loadBikes = () => {
  return async (dispatch) => {
    const bikes = (await axios.get('/api/bikes')).data;
    dispatch({ type: LOAD_BIKES, bikes });
  };
};

export const createBike = (newBike) => {
  return async (dispatch) => {
    const bike = (await axios.post('/api/bikes', newBike)).data;
    dispatch({
      type: CREATE_BIKE,
      bike,
    });
  };
};

//reducer---------------------------------
const bikeReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_BIKES:
      return action.bikes;
    case CREATE_BIKE:
      return [...state, action.bike];
  }
  return state;
};

export default bikeReducer;
