import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import * as action from '../../constants/actions';
import {
  selectSearchData,
  selectSearch
 } from '../../selectors';

  class Find extends Component {

    handleClick(e, data) {
      const { dispatch } = this.props;
      dispatch({type: action.FLUSH_SEARCH})
    }

    render() {
      const { searchData, search } = this.props;
      if (search && searchData) {
        let regex = new RegExp(search);
        let newArr = [];
        searchData.map(item => {
          if (item.name.match(regex)) { newArr.push(item) }
        })

        return (
          <div className="frontpage--container--menu__find">
          <Menu vertical fluid borderless>
            {newArr.map(item => {
              return (
                <Link to={`/${item.entity}/${item.id}`} key={item.id}>
                <Menu.Item
                  name={item.name}
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
    search: selectSearch(state),
    searchData: selectSearchData(state)
  }
}

export default connect(mapStateToProps)(Find);
