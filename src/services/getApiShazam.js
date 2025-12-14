export const getApiShazam = async (temp) => {
  const apiKey = process.env.REACT_APP_API_SHAZAM;
  const apiHost = process.env.REACT_APP_HOST_SHAZAM;
  let genre = '';
  
  if (temp < 16) genre = 'lofi';
  if (temp >= 16 && temp < 24) genre = 'classic';
  if (temp >= 24 && temp < 32) genre = 'pop';
  if (temp >= 32) genre = 'rock';

  const randomOffset = Math.round(Math.random() * 50)

  const url = `https://shazam.p.rapidapi.com/v2/search?term=${genre}&offset=${randomOffset}&limit=5`;

 try {
  const fetchApi = await fetch(url,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": `${apiHost}`,
        "x-rapidapi-key": `${apiKey}`
      }
    }
  );
  const responseApi = await fetchApi.json();
  return responseApi;
 } catch (err) {
   console.log(err);
 }
}