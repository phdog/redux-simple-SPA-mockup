import Immutable from 'seamless-immutable';
import {
  PUSH_DATA
} from '../constants/actions';

const INITIAL_STATE = Immutable({ employee: {}, department: {} });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PUSH_DATA:
      return Immutable.merge(INITIAL_STATE, {employee: action.payload.employee, department: action.payload.department}, {deep: true});
  }
  return state;
}
