import axios from 'axios';

//action types----------------------------
const LOAD_BIKES = 'LOAD_BIKES';
const CREATE_BIKE = 'CREATE_BIKE';
const DELETE_THE_BIKE = 'DELETE_THE_BIKE';

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

export const deleteTheBike = (bike) => {
  return async (dispatch) => {
    await axios.delete(`/api/bikes/${bike.id}`);
    dispatch({
      type: DELETE_THE_BIKE,
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
    case DELETE_THE_BIKE:
      return state.filter((x) => x.id !== action.bike.id);
  }
  return state;
};

export default bikeReducer;
