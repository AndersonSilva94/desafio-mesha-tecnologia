import { SET_CLIMATE } from '.';

export const setWeather = (climate) => ({
  type: SET_CLIMATE,
  payload: climate
});
