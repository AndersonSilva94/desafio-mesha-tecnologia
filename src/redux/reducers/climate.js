import { SET_CLIMATE_LOADING, SET_CLIMATE } from '../actions';

const INITIAL_STATE = {
  climate: {},
};

const climate = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CLIMATE_LOADING:
      return { ...state };
    case SET_CLIMATE:
      return { ...state, climate: { ...action.payload } };
    default:
      return state;
  }
}

export default climate;
