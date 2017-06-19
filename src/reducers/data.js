import Immutable from 'seamless-immutable';
import {
  PUSH_DATA,
  EDIT_DATA
} from '../constants/actions';

const INITIAL_STATE = Immutable({ employee: {}, department: {} });

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PUSH_DATA:
      const { employee, department } = action.payload;
      return Immutable.merge(state, {employee, department}, {deep: true});
    case EDIT_DATA:
      const { entity, id, field, value } = action.payload;
      return Immutable.setIn(state, [entity, 'entities', entity, id, field], value);
  }
  return state;
}
