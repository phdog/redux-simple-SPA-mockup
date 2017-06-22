import { store } from '../redux';
import * as action from '../constants/actions';

export function getApiData() {
  store.dispatch({ type: action.GET_DATA });
}
