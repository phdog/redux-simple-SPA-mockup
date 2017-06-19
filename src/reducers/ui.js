import Immutable from 'seamless-immutable';
import {
  TRIGGER_EDIT
} from '../constants/actions';

const INITIAL_STATE = Immutable({ field: '' });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TRIGGER_EDIT:
      return Immutable.set(state, 'field', action.payload);
  }
  return state;
}
