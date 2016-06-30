import axios from 'axios';

export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';

export function getCurrentWeather(location) {
  const placeId = location.place_id;
  const request = axios.get('/current-weather-data', {
    params: {
      placeId
    }
  });

  return {
    type: GET_CURRENT_WEATHER,
    payload: request,
  }
}
