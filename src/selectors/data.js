import { createSelector } from 'reselect';
import _ from 'lodash';
import { selectList, selectSearch } from './ui';

function getDepartment(state) {
  if (state.data && state.data.department.entities && state.data.department.entities.department) {
  return state.data.department.entities.department
  } else { return null }
}

function getEmployee(state) {
  if (state.data && state.data.employee.entities && state.data.employee.entities.employee) {
    return state.data.employee.entities.employee
  } else { return null }
}

// Selet Data for Saga to put to API
export const selectData = createSelector(selectList, getDepartment, getEmployee, (list, department, employee) => {
  const { entity, id } = list;
  if ( entity === 'department' ) {
    let data = department[id];
    return data;
  } else if (entity === 'employee') {
    let data = employee[id];
    return data;
  } else { return null }
})


export const selectSearchData = createSelector(getEmployee, getDepartment, (employee, department) => {
  if (employee && department) {

  let employeeArray =  _.valuesIn(employee).map((item) => {
      return ({ id: item.id, name: `${item.lastName} ${item.firstName}`})
    })

  let departmentArray = _.valuesIn(department).map((item) => {
      return ({ id: item.id, name: item.name })
  })

  let searchData = _.concat(employeeArray, departmentArray);
  return searchData;
  }
  else { return []}
})
