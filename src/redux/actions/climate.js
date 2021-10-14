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

export const setWeatherThunk = (local) => async (dispatch) => {
  dispatch(setWeatherLoading());
  const apiResults = await getApiWeather(local);
  const date = getDate();
  const idDate = String(new Date());
  if (apiResults.cod === 200) {
    const { main: { temp } } = apiResults;
    const temperature = Math.round(temp - 272.15);
    const dispatchResults = await dispatch(setWeather({ ...apiResults, idDate, date, temperature }));
    return dispatchResults;
  }
}