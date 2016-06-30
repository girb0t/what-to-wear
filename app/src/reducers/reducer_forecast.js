import { UPDATE_ONE_DAY_FORECAST } from '../actions/index';

// INITIAL_STATE is not the application state; only the state this reducer is
// responsible for
const INITIAL_STATE = { location: {}, currentWeather: {} }

export default function(state = INITIAL_STATE, action) {
  const payload = action.payload;
  switch(action.type) {
  case UPDATE_ONE_DAY_FORECAST:
    const { currentWeather } = payload.data;
    return { ...state,
             location,
             currentWeather
           };
  default:
    return state;
  }
}
