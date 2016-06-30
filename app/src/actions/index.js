import axios from 'axios';

export const GET_CURRENT_WEATHER = 'GET_CURRENT_WEATHER';
export const SET_LOCATION = 'SET_LOCATION';

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

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: location,
  }
}
