import { combineReducers } from 'redux';
import phonesReducer from './phoneSlice';
import filterReducer from './filterSlice';

export const reducer = combineReducers({
  phones: phonesReducer,
  filter: filterReducer,
});
