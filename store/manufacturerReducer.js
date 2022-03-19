import axios from 'axios';

const LOAD_MANUFACTURERS = 'LOAD_MANUFACTURERS';

export const loadManufacturers = () => {
  return async (dispatch) => {
    const manufacturers = (await axios.get('/api/manufacturers')).data;
    dispatch({ type: LOAD_MANUFACTURERS, manufacturers });
  };
};

const manufacturerReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MANUFACTURERS:
      return action.manufacturers;
  }
  return state;
};

export default manufacturerReducer;
