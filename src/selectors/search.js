import { createSelector } from 'reselect';
import _ from 'lodash';
import { getEmployee, getDepartment, selectList } from './index';

export const getSearchMode = state => state.search.mode;
const getSearch = state => state.search.search;
const getSearchItem = state => state.search.item;

export const selectSearch = createSelector(getSearch, search => {
  if (search) {
    return search }
  else { return '' }
})

// Form arrays for searching based on URL path -> Search Component
export const selectSearchData = createSelector(getEmployee, getDepartment, selectList, (employee, department, list) => {
  if (employee && department) {

    let employeeArray =  _.valuesIn(employee).map((item) => {
      return ({ id: item.id, name: `${item.lastName} ${item.firstName}`, entity: 'employee'})
    })

    let departmentArray = _.valuesIn(department).map((item) => {
      return ({ id: item.id, name: item.name, entity: 'department' })
    })

    switch(list.entity) {
      case 'employee':
      return employeeArray;
      case 'department':
      return departmentArray;
    }
    return _.concat(employeeArray, departmentArray);

  }
  else { return []}
})

// Filtered array -> Find Component
export const selectFindData = createSelector(selectSearchData, selectSearch, getSearchMode, (searchData, search, mode) => {
  if (searchData && search && mode) {
    let regex = new RegExp(search);
    let matchArr = [];
    searchData.map(item => {
      if (item.name.match(regex)) { matchArr.push(item) }
    })
    return matchArr
  } else if (searchData && mode && !search) {
    return searchData;
  }
  else { return []}
})

export const selectActiveIndex = createSelector(getSearchItem, selectFindData, (item, findData) => {
  let Item;
  const min = 0;
  let max = findData.length;
  let range = max - min;
  Item = (item - min) % range;
  if (Item < 0) { return Math.abs(Item + range) } else { return Math.abs(Item) }
})

export const selectActive = createSelector(selectActiveIndex, selectFindData, (activeIndex, findData) => {
  if (findData) { return findData[activeIndex] } else { return {}}
})
