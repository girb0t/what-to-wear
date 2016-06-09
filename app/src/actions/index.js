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

function getOneDayForecast(location) {
  return { temperature: 51 }; //STUB
}
