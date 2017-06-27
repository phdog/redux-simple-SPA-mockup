import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as action from '../../constants/actions';
import { Input, Menu } from 'semantic-ui-react';
import {
  selectList,
  selectSearch } from '../../selectors';

class Search extends Component {

  handleInput(e) {
    const { dispatch } = this.props;
    dispatch({ type: action.TRIGGER_SEARCH, payload: e.target.value })
  }

  matches() {
    const { employee, department, search } = this.props;
    let regex = new RegExp(search);
    const Arr = ['hey', 'hello', 'how are you', 'fine'];
    let newArr = [];
    Arr.map(item => {
      if (item.match(regex)) { newArr.push(item) }
    })
    console.log(newArr)
  }

  renderFindList() {
    const { employee, search } = this.props;
    if (search) {
      return (
        <Menu vertical fluid borderless>

          {employee.result.map(id => {
            let firstName = employee.entities.employee[id]['firstName']
            let lastName = employee.entities.employee[id]['lastName']
            let fullName = `${lastName} ${firstName}`
            return (
              <Link to={`/employee/${id}`} key={id}>
              <Menu.Item name={fullName}>
              </Menu.Item>
            </Link>
          )
        })
      }

        </Menu>
      );
    }
    else { return null }
  }

  render() {
    const { search } = this.props;
    return (
      <div>
      <Input fluid
        placeholder='Search...'
        icon={{ name: 'search', circular: true, link: true }}
        onChange={this.handleInput.bind(this)}
        value={search}
      />
      {this.renderFindList()}
      {this.matches()}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: selectSearch(state),
    employee: state.data.employee,
    department: state.data.department
  }
}

export default connect(mapStateToProps)(Search);
