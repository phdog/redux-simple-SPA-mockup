import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as action from '../../constants/actions';
import { Input, Menu } from 'semantic-ui-react';
import {
  selectSearchData,
  selectSearch
 } from '../../selectors';

  class Search extends Component {

    handleInput(e) {
      const { dispatch } = this.props;
      dispatch({ type: action.TRIGGER_SEARCH, payload: e.target.value })
    }

    matches() {
      const { searchData, search } = this.props;
      if (search && searchData) {
        let regex = new RegExp(search);
        let newArr = [];
        searchData.map(item => {
          if (item.name.match(regex)) { newArr.push(item) }
        })

        return (
          <Menu vertical fluid borderless>
            {newArr.map(item => {
              return (
                <Link to={`/${item.entity}/${item.id}`} key={item.id}>
                <Menu.Item name={item.name}>
                </Menu.Item>
              </Link>
            )
          })
        }
      </Menu>
    );
  }
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
      {this.matches()}
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    search: selectSearch(state),
    searchData: selectSearchData(state)
  }
}

export default connect(mapStateToProps)(Search);
