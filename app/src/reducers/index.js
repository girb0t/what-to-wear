import { combineReducers } from 'redux';
import ForecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  forecastState: ForecastReducer,
});

export default rootReducer;
