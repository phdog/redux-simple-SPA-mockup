import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import dataReducer from './data';
import uiReducer from './ui';

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
  routing: routerReducer
});

export default rootReducer;
