import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import dataReducer from './data';
import uiReducer from './ui';
import searchReducer from './search';

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
  routing: routerReducer,
  search: searchReducer
});

export default rootReducer;
