import { FETCH_DEVICE_LOCATION } from '../actions/index';

// INITIAL_STATE is not the application state; only the state this reducer is
// responsible for
const INITIAL_STATE = { zipCode: null }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_DEVICE_LOCATION:
    return { ...state, zipCode: action.payload.zipCode };
  default:
    return state;
  }
}
