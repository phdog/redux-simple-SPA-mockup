import Immutable from 'seamless-immutable';
import {
  TRIGGER_SEARCH,
  FLUSH_SEARCH
} from '../constants/actions';

const INITIAL_STATE = Immutable({ search: '' });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TRIGGER_SEARCH:
      return Immutable.set(state, 'search', action.payload);
    case FLUSH_SEARCH:
      return Immutable.set(state, 'search', '');
  }
  return state;
}
