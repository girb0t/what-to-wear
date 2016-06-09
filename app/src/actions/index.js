export const UPDATE_ONE_DAY_FORECAST = 'UPDATE_ONE_DAY_FORECAST';

export function updateLocationAndOneDayForecast(location) {
  const oneDayForecast = { temperature: 51 } //STUB

  return {
    type: UPDATE_ONE_DAY_FORECAST,
    payload: {
      location,
      oneDayForecast
    }
  }
}
