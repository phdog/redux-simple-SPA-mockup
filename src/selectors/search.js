import { createSelector } from 'reselect';

const getSearch = state => state.search.search;

export const selectSearch = createSelector(getSearch, search => {
  if (search) {
    return search }
  else { return '' }
})
