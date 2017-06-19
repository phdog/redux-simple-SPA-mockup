import { createSelector } from 'reselect';
import { selectList } from './ui';

const getDepartment = state => state.data.department.entities.department;
const getEmployee = state => state.data.employee.entities.employee;

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
