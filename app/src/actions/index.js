import axios from 'axios';

export const UPDATE_ONE_DAY_FORECAST = 'UPDATE_ONE_DAY_FORECAST';

export function updateLocationAndOneDayForecast(location) {
  return {
    type: UPDATE_ONE_DAY_FORECAST,
    payload: {
      location,
      oneDayForecast: getOneDayForecast(location)
    }
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
  .then(response => {
    debugger
    const currentWeather = response.data.oneDayForecast
  })
  .catch(response => {
    // TODO handle error
    debugger
  })

  // return { temperature: 51 }; //STUB
}
