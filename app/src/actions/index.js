import axios from 'axios';

export const UPDATE_ONE_DAY_FORECAST = 'UPDATE_ONE_DAY_FORECAST';

export function updateLocationAndOneDayForecast(location) {
  return {
    type: UPDATE_ONE_DAY_FORECAST,
    payload: getOneDayForecast(location),
  }
}

// rename to 'current weather' everywhere
function getOneDayForecast(location) {
  const placeId = location.place_id;
  const request = axios.get('/one-day-forecast-data', {
    params: {
      placeId
    }
  })

  return request;
}
