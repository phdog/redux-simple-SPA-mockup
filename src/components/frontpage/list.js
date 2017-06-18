import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import { selectList } from '../../selectors';
import * as action from '../../constants/actions';

class EmployeeList extends Component {

render() {
  const { employee, department, list } = this.props;
  if (!employee && !department) {
    return <div />
  }
  return (
    <Menu pointing vertical>

      {list.entity === 'employee' ?
      employee.result.map(id => {
        let firstName = employee.entities.employees[id]['firstName']
        let lastName = employee.entities.employees[id]['lastName']
        let fullName = `${lastName} ${firstName}`
        return (
          <Link to={`/employee/${id}`} key={id}>
          <Menu.Item name={fullName} active={list.id === id}>
          </Menu.Item>
        </Link>
      )
    }) :
    department.result.map(id => {
      return (
        <Link to={`/department/${id}`} key={id}>
        <Menu.Item
          name={department.entities.departments[id]['name']}
          active={list.id === id}>
        </Menu.Item>
      </Link>
    )
  })
}

</Menu>
);
}
}

function mapStateToProps(state) {
  return {
    employee: state.data.employee,
    department: state.data.department,
    list: selectList(state)
  };
}

export default connect(mapStateToProps)(EmployeeList);
