import { createSelector } from 'reselect';
import _ from 'lodash';
import { selectList } from './ui';

export function getDepartment(state) {
  if (state.data && state.data.department.entities && state.data.department.entities.department) {
  return state.data.department.entities.department
} else { return {} }
}

export function getDepartmentList(state) {
  if (state.data && state.data.department.entities && state.data.department.entities.department) {
  return state.data.department.result
} else { return [] }
}

export function getEmployee(state) {
  if (state.data && state.data.employee.entities && state.data.employee.entities.employee) {
    return state.data.employee.entities.employee
  } else { return {} }
}

export function getEmployeeList(state) {
  if (state.data && state.data.employee.entities && state.data.employee.entities.employee) {
    return state.data.employee.result
  } else { return [] }
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

// Prepare department list for component render - remap properties
export const selectDepartmentRender = createSelector(getDepartment, department => {

  if (department) {
    // make an array of objects
          var arr = _.values(department);
    // remap to keys required by Dropdown Component
          var keyMap = { name: 'text', id: 'value' };
          var newArr = [];
          arr.forEach(dpt => {
            let transformed = _.mapKeys(dpt, function(value, key) {
              return keyMap[key]
            })
            newArr.push(transformed)
          })
        return newArr;
  } else { return []}


})
