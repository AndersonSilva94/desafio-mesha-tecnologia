import { SET_CLIMATE, SET_CLIMATE_LOADING } from '.';
import { getApiWeather } from '../../services/getApiWeather';
import { getDate } from '../../utils/getDate';

export const setWeatherLoading = () => ({
  type: SET_CLIMATE_LOADING,
})

export const setWeather = (climate) => ({
  type: SET_CLIMATE,
  payload: climate
});

export const setWeatherThunk = (local) => (dispatch) => {
  dispatch(setWeatherLoading());
  getApiWeather(local)
    .then((res) => {
      const date = getDate();
      const { main: { temp } } = res;
      const temperature = Math.round(temp - 272.15)
      dispatch(setWeather({ ...res, date, temperature }));
    })
}