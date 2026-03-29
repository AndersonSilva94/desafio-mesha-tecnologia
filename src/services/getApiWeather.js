export const getApiWeather = async (local) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}`

  try {
    const fetchApi = await fetch(url);
    const results = await fetchApi.json();
    return results;
  } catch (err) {
    console.log(err);
  }
}