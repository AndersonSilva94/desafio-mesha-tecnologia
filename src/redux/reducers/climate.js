import { SET_CLIMATE_LOADING, SET_CLIMATE } from '../actions';

const INITIAL_STATE = {
  climate: {},
  loadingWeather: false
};

const climate = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CLIMATE_LOADING:
      return { ...state, loadingWeather: true };
    case SET_CLIMATE:
      return { ...state, climate: { ...action.payload }, loadingWeather: false };
    default:
      return state;
  }
}

export default climate;
