import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Input, Select } from 'semantic-ui-react';
import { selectList, selectDetails } from '../../selectors';
import * as action from '../../constants/actions';

class EmployeeDetail extends Component {

  triggerEdit(field) {
    const { details, dispatch } = this.props;
    if (details.field && details.field === field) {
      dispatch({ type: action.TRIGGER_EDIT, payload: '' })
    } else {
      dispatch({ type: action.TRIGGER_EDIT, payload: field })
    }
  }

  renderIcon(field) {
    const { details } = this.props;
    if (details.field && details.field === field) {
      return <Icon name='reply' size="large" />
    } else {
      return  <Icon name='edit' size="large" />
    }
  }

  renderField(field) {
    const { employee, list, details, dispatch } = this.props;
    const id = list.id;
    if (details.field && details.field === field) {
      return <Input size='mini'/>
    } else {
      return (
        <p> {employee.entities.employees[id][field]} </p>
      )
    }
  }

  renderInput() {

  }

  renderSelect() {

  }

  renderDepartment() {
    const { employee, department, list, details } = this.props;
    const id = list.id;
    const departmentId = employee.entities.employees[id]['departmentId'];
    const departmentName = department.entities.departments[departmentId]['name'];
    if (details.field === 'departmentId') {
      return <Select placeholder='Select Department'/>
    } else {
      return departmentName
    }
  }

  render() {
    return (
      <Table selectable={false}>
        <Table.Body>
          <Table.Row className='frontpage--container--right--table__row'>
            <Table.Cell>
              First Name :
            </Table.Cell>
            <Table.Cell textAlign='left' className='frontpage--container--right--table__field'>
              {this.renderField('firstName')}
            </Table.Cell>
          <Table.Cell textAlign='right' className='frontpage--container--right--table__edit'
            onClick={() => {this.triggerEdit('firstName')}}>
            {this.renderIcon('firstName')}
          </Table.Cell>
          </Table.Row>
          <Table.Row className='frontpage--container--right--table__row'>
            <Table.Cell>
            Last Name :
            </Table.Cell>
            <Table.Cell textAlign='left' className='frontpage--container--right--table__field'>
             {this.renderField('lastName')}
            </Table.Cell>
            <Table.Cell textAlign='right' className='frontpage--container--right--table__edit'
              onClick={() => {this.triggerEdit('lastName')}}>
              {this.renderIcon('lastName')}
            </Table.Cell>
          </Table.Row>
          <Table.Row className='frontpage--container--right--table__row'>
            <Table.Cell>
            Department :
            </Table.Cell>
            <Table.Cell textAlign='left' className='frontpage--container--right--table__field'>
              {this.renderDepartment()}
            </Table.Cell>
            <Table.Cell textAlign='right' className='frontpage--container--right--table__edit'
              onClick={() => {this.triggerEdit('departmentId')}}>
                {this.renderIcon('departmentId')}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    employee: state.data.employee,
    department: state.data.department,
    list: selectList(state),
    details: selectDetails(state)
  };
}

export default connect(mapStateToProps)(EmployeeDetail);
