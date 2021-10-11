import { SET_CLIMATE } from '../actions';

const INITIAL_STATE = {
  setClimate: {},
};

const climate = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CLIMATE:
      return { ...state, setClimate: action.payload };
    default:
      return state;
  }
}

export default climate;
