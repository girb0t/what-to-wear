import { GET_CURRENT_WEATHER, SET_LOCATION } from '../actions/index';

// INITIAL_STATE is not the application state; only the state this reducer is
// responsible for
const INITIAL_STATE = { location: {}, currentWeather: {} }

export default function(state = INITIAL_STATE, action) {
  const payload = action.payload;
  switch(action.type) {
  case SET_LOCATION:
    const location = payload;
    return { ...state, location }
  case GET_CURRENT_WEATHER:
    const { currentWeather } = payload.data;
    return { ...state, currentWeather };
  default:
    return state;
  }
}
