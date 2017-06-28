import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import * as action from '../../constants/actions';
import {
  selectFindData,
  selectSearch,
  selectActiveIndex
} from '../../selectors';

class Find extends Component {

  handleClick(e, data) {
    const { dispatch } = this.props;
    dispatch({type: action.FLUSH_SEARCH})
  }

  render() {
    const { search, findData, activeIndex } = this.props;
    if ( search && findData ) {
      return (
        <div className="frontpage--container--menu__find">
          <Menu vertical fluid borderless>
            {findData.map((item, i) => {
              return (
                <Link to={`/${item.entity}/${item.id}`} key={item.id}>
                <Menu.Item
                  name={item.name}
                  active={activeIndex === i}
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
    activeIndex: selectActiveIndex(state)
  }
}

export default connect(mapStateToProps)(Find);
