import Immutable from 'seamless-immutable';
import {
  START_SEARCH,
  TRIGGER_SEARCH,
  FLUSH_SEARCH,
  SEARCH_UP,
  SEARCH_DOWN
} from '../constants/actions';

const INITIAL_STATE = Immutable({ search: '', item: 0, mode: false });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case START_SEARCH:
      return Immutable.set(state, 'mode', true);
    case TRIGGER_SEARCH:
      return Immutable.merge(state, {search: action.payload, mode: true});
    case FLUSH_SEARCH:
      return Immutable.merge(state, INITIAL_STATE);
    case SEARCH_UP:
      return Immutable.merge(state, {item: state.item + 1, mode: true});
    case SEARCH_DOWN:
      return Immutable.set(state, 'item', state.item - 1);
  }
  return state;
}
