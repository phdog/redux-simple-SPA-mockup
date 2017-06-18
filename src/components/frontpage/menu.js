import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';
import { selectList } from '../../selectors';
import * as action from '../../constants/actions';

class EntityMenu extends Component {

  handleItemClick(event, { name }) {

    browserHistory.push(`/${name}`)

    const { dispatch } = this.props;
    //const message = { type: action.GET_ENTITY, payload: name };
    //dispatch(message);
    //console.log(message)
  }

  render() {
    const { entity, list } = this.props;
    return (
      <Menu pointing vertical >
        <Menu.Item
          name='department'
          active={list.entity === 'department'}
          onClick={this.handleItemClick.bind(this)}
        />
        <Menu.Item
          name='employee'
          active={list.entity === 'employee'}
          onClick={this.handleItemClick.bind(this)}
        />
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: selectList(state)
  };
}

export default connect(mapStateToProps)(EntityMenu);
