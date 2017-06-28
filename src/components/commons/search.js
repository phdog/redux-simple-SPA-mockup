import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../constants/actions';
import { Input } from 'semantic-ui-react';
import Find from './find';
import {
  selectSearchData,
  selectSearch
 } from '../../selectors';

  class Search extends Component {

    handleInput(e) {
      const { dispatch } = this.props;
      dispatch({ type: action.TRIGGER_SEARCH, payload: e.target.value })
    }

render() {
  const { search } = this.props;
  return (
    <div style={{width: '100%'}} className="frontpage--container--menu__search">
      <Input fluid
        placeholder='Search...'
        icon={{ name: 'search', circular: true, link: true }}
        onChange={this.handleInput.bind(this)}
        value={search}
      />
      <Find />
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
