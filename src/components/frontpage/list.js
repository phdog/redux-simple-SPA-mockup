import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import {
  selectList,
  getEmployee,
  getEmployeeList,
  getDepartment,
  getDepartmentList } from '../../selectors';

class EmployeeList extends Component {

  render() {
    const { employee, employeeList, department, departmentList, list } = this.props;
    if (!employee && !department) {
      return <div />
    }
    return ( <div>
      <Menu vertical fluid borderless>

        {list.entity === 'employee' ?
        employeeList.map(id => {
          let firstName = employee[id]['firstName']
          let lastName = employee[id]['lastName']
          let fullName = `${lastName} ${firstName}`
          return (
            <Link to={`/employee/${id}`} key={id}>
            <Menu.Item name={fullName} active={list.id === id}>
            </Menu.Item>
          </Link>
        )
      }) :
      departmentList.map(id => {
        return (
          <Link to={`/department/${id}`} key={id}>
          <Menu.Item
            name={department[id]['name']}
            active={list.id === id}>
          </Menu.Item>
        </Link>
      )
    })
  }

</Menu> </div>
);
}
}

function mapStateToProps(state) {
  return {
    employee: getEmployee(state),
    employeeList: getEmployeeList(state),
    department: getDepartment(state),
    departmentList: getDepartmentList(state),
    list: selectList(state)
  };
}

export default connect(mapStateToProps)(EmployeeList);
