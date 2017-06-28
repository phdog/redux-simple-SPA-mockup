import Immutable from 'seamless-immutable';
import {
  TRIGGER_EDIT,
  FLUSH_EDIT,
  REQ_PENDING,
  RES_RECEIVED
} from '../constants/actions';

const INITIAL_STATE = Immutable({ field: '', loading: false });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TRIGGER_EDIT:
      return Immutable.set(state, 'field', action.payload);
    case FLUSH_EDIT:
      return Immutable.set(state, 'field', '');
    case REQ_PENDING:
      return Immutable.set(state, 'loading', true);
    case RES_RECEIVED:
      return Immutable.set(state, 'loading', false);
  }
  return state;
}
