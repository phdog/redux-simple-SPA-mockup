import { createSelector } from 'reselect';

const getPath = state => state.routing.locationBeforeTransitions.pathname;
const getField = state => state.ui.field;

export const selectList = createSelector(getPath, path => {
  const [ ,entity, id ] = path.split('/');
  return { entity, id };
})

export const selectDetails = createSelector(getField, field => {
  return { field };
})
