import axios from 'axios';

//action types-----------------------
const LOAD_MANUFACTURERS = 'LOAD_MANUFACTURERS';
const CREATE_MANUFACTURER = 'CREATE_MANUFACTURER';

//thunkerinos---------------------------
export const loadManufacturers = () => {
  return async (dispatch) => {
    const manufacturers = (await axios.get('/api/manufacturers')).data;
    dispatch({ type: LOAD_MANUFACTURERS, manufacturers });
  };
};

export const createManufacturer = (newManufacturer) => {
  return async (dispatch) => {
    //certified jank below
    newManufacturer = { name: newManufacturer.manufacturer };
    const manufacturer = (
      await axios.post('/api/manufacturers', newManufacturer)
    ).data;
    dispatch({
      type: CREATE_MANUFACTURER,
      manufacturer,
    });
  };
};

//reducer------------------
const manufacturerReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MANUFACTURERS:
      return action.manufacturers;
    case CREATE_MANUFACTURER:
      return [...state, action.manufacturer];
  }
  return state;
};

export default manufacturerReducer;
