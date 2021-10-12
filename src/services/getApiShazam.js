require('dotenv').config();

export const getApiShazam = async (temp) => {
  const apiKey = process.env.REACT_APP_API_SHAZAM
  const apiHost = process.env.REACT_APP_HOST_SHAZAM
  // console.log(apiKey, apiHost)
  // console.log(process.env)
  let genre = '';
  // console.log(temp)
  
  if (temp < 16) genre = 'lofi';
  if (temp >= 16 && temp < 24) genre = 'classic';
  if (temp >= 24 && temp < 32) genre = 'pop';
  if (temp >= 32) genre = 'rock';
  // console.log(genre)

  const url = `https://shazam.p.rapidapi.com/search?term=${genre}&offset=0&limit=5`;

  const fetchApi = await fetch(url,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": `${apiHost}`,
        "x-rapidapi-key": `${apiKey}`
      }
    }
  );
  const responseApi = fetchApi.json();
  return responseApi;
}