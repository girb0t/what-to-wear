import { UPDATE_ONE_DAY_FORECAST } from '../actions/index';

// INITIAL_STATE is not the application state; only the state this reducer is
// responsible for
const INITIAL_STATE = { location: {}, oneDayForecast: {} }

export default function(state = INITIAL_STATE, action) {
  const payload = action.payload;
  switch(action.type) {
  case UPDATE_ONE_DAY_FORECAST:
    const { location, oneDayForecast } = payload;
    return { ...state,
             location,
             oneDayForecast
           };
  default:
    return state;
  }
}
