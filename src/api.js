export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const X_RapidAPI_Key = process.env.REACT_APP_RAPID_API_KEY;
export const geoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": X_RapidAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
