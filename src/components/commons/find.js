import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import * as action from '../../constants/actions';
import {
  selectFindData,
  selectSearch,
  selectActive
} from '../../selectors';

class Find extends Component {

  handleClick(e, data) {
    const { dispatch } = this.props;
    dispatch({type: action.FLUSH_SEARCH})
  }

  render() {
    const { search, findData, active } = this.props;
    if ( search && findData ) {
      console.log('ACTIVE', active)
      return (
        <div className="frontpage--container--menu__find">
          <Menu vertical fluid borderless activeIndex={active}>
            {findData.map((item, i) => {
              return (
                <Link to={`/${item.entity}/${item.id}`} key={item.id}>
                <Menu.Item
                  name={item.name}
                  active={active === i}
                  onClick={this.handleClick.bind(this)}
                  >
                  </Menu.Item>
                </Link>
              )
            })
          }
        </Menu>
      </div>
    );
  } else { return null }
}
}

function mapStateToProps(state) {
  return {
    findData: selectFindData(state),
    search: selectSearch(state),
    active: selectActive(state)
  }
}

export default connect(mapStateToProps)(Find);
