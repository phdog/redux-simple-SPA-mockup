import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react';
import Search from './search';
import { selectList } from '../../selectors';

class EntityMenu extends Component {

  handleItemClick(event, { name }) {
    browserHistory.push(`/${name}`)
  }

  render() {
    const { list } = this.props;
    return (
      <Menu>
        <Menu.Item
          name='All'
          active={list.entity === ''}
          onClick={()=>{browserHistory.push('/')}}
        />
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
        <Menu.Menu position='right'>
          <Menu.Item style={{width: '250px'}}>
            <Search />
          </Menu.Item>
        </Menu.Menu>
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
