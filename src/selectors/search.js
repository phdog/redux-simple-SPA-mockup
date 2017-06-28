import { createSelector } from 'reselect';
import _ from 'lodash';
import { getEmployee, getDepartment } from './data';

const getSearch = state => state.search.search;

export const selectSearch = createSelector(getSearch, search => {
  if (search) {
    return search }
  else { return '' }
})

export const selectSearchData = createSelector(getEmployee, getDepartment, (employee, department) => {
  if (employee && department) {

  let employeeArray =  _.valuesIn(employee).map((item) => {
      return ({ id: item.id, name: `${item.lastName} ${item.firstName}`, entity: 'employee'})
    })

  let departmentArray = _.valuesIn(department).map((item) => {
      return ({ id: item.id, name: item.name, entity: 'department' })
  })

  let searchData = _.concat(employeeArray, departmentArray);
  return searchData;
  }
  else { return []}
})
