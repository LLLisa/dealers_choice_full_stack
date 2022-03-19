import axios from 'axios';

//action types-----------------------
const LOAD_MANUFACTURERS = 'LOAD_MANUFACTURERS';

//thunkerinos---------------------------
export const loadManufacturers = () => {
  return async (dispatch) => {
    const manufacturers = (await axios.get('/api/manufacturers')).data;
    dispatch({ type: LOAD_MANUFACTURERS, manufacturers });
  };
};

//reducer------------------
const manufacturerReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MANUFACTURERS:
      return action.manufacturers;
  }
  return state;
};

export default manufacturerReducer;
