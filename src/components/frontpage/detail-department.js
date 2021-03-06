import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Input  } from 'semantic-ui-react';
import {
  getDepartment,
  getDepartmentList,
  selectList,
  selectField } from '../../selectors';
import * as action from '../../constants/actions';

class DepartmentDetail extends Component {

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
    const { department, list, details, dispatch } = this.props;
    const id = list.id;
    if (details.field && details.field === field) {
      return <Input size='mini'
        focus={true}
        tabIndex={1}
        value={department[id][field]}
        onChange={this.handleInput.bind(this)}
        onKeyPress={this.handleKeyPress.bind(this)}
        onBlur={() => {dispatch({ type: action.FLUSH_EDIT })}}
      />
    } else {
      return (
        <p> {department[id][field]} </p>
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

  render() {
    return (
      <Table selectable={false}>
        <Table.Body>
          <Table.Row className='frontpage--container--right--table__row'>
            <Table.Cell>
              Department :
            </Table.Cell>
            <Table.Cell textAlign='left' className='frontpage--container--right--table__field'>
              {this.renderField('name')}
            </Table.Cell>
          <Table.Cell textAlign='right' className='frontpage--container--right--table__edit'
            onClick={() => {this.triggerEdit('name')}}>
            {this.renderIcon('name')}
          </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    department: getDepartment(state),
    departmentList: getDepartmentList(state),
    list: selectList(state),
    details: selectField(state)
  };
}

export default connect(mapStateToProps)(DepartmentDetail);
