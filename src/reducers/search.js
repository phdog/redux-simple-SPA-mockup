import Immutable from 'seamless-immutable';
import {
  TRIGGER_SEARCH,
  FLUSH_SEARCH,
  SEARCH_UP,
  SEARCH_DOWN
} from '../constants/actions';

const INITIAL_STATE = Immutable({ search: '', item: 0 });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TRIGGER_SEARCH:
      return Immutable.set(state, 'search', action.payload);
    case FLUSH_SEARCH:
      return Immutable.merge(state, INITIAL_STATE);
    case SEARCH_UP:
      return Immutable.set(state, 'item', state.item + 1);
    case SEARCH_DOWN:
      return Immutable.set(state, 'item', state.item - 1);
  }
  return state;
}
