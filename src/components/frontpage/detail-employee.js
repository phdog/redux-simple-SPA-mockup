import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Input, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';
import { selectList, selectDetails } from '../../selectors';
import * as action from '../../constants/actions';

class EmployeeDetail extends Component {

  triggerEdit(field) {
    const { details, dispatch } = this.props;
    if (details.field && details.field === field) {
      dispatch({ type: action.TRIGGER_EDIT, payload: '' });
    } else {
      dispatch({ type: action.TRIGGER_EDIT, payload: field });
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
      return <Input size='mini'
        focus={true}
        tabIndex={1}
        value={employee.entities.employee[id][field]}
        onChange={this.handleInput.bind(this)}
        onKeyPress={this.handleKeyPress.bind(this)}
        onBlur={() => {dispatch({ type: action.FLUSH_EDIT })}}
      />
    } else {
      return (
        <p> {employee.entities.employee[id][field]} </p>
      )
    }
  }

  handleKeyPress(target) {
    const { dispatch } = this.props;
    if (target.charCode === 13) {
      dispatch({ type: action.FLUSH_EDIT })
    }
  }

  handleInput(e) {
    const { list, details, dispatch } = this.props;
    dispatch({ type: action.EDIT_DATA, payload: {
      entity: list.entity,
      id: list.id,
      field: details.field,
      value: e.target.value
    } })
  }

  renderDepartment() {
    const { employee, department, list, details, dispatch } = this.props;
    const id = list.id;
    const departmentId = employee.entities.employee[id]['departmentId'];
    const departmentName = department.entities.department[departmentId]['name'];
    if (details.field === 'departmentId') {

// make an array of objects
      var arr = _.values(department.entities.department);
// remap to keys required by Dropdown Component
      var keyMap = { name: 'text', id: 'value' };
      var newArr = [];
      arr.forEach((dpt, i) => {
        let transformed = _.mapKeys(dpt, function(value, key) {
          return keyMap[key]
        })
        newArr.push(transformed)
      })

      return (
        <Dropdown
          fluid
          defaultOpen={true}
          placeholder='Select Department'
          closeOnChange={true}
          options={newArr}
          value={departmentId}
          onChange={(e, data) => {
            dispatch({ type: action.EDIT_DATA, payload: {
              entity: list.entity,
              id: list.id,
              field: details.field,
              value: data.value
            } })
          }}
          onBlur={() => {dispatch({ type: action.FLUSH_EDIT })}}
        />
      );
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
            <Table.Cell textAlign='left' className='frontpage--container--right--table__field'
              onClick={() => {this.triggerEdit('departmentId')}}>
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
