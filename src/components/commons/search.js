import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Input } from 'semantic-ui-react';
import * as action from '../../constants/actions';
import Find from './find';
import {
  selectSearchData,
  selectSearch,
  selectActive
 } from '../../selectors';

  class Search extends Component {

    handleKeyDown(target) {
      const { dispatch, active } = this.props;
      switch(target.keyCode) {
        case 13: //Enter
          browserHistory.push(`/${active.entity}/${active.id}`)
          dispatch({ type: action.FLUSH_SEARCH });
          break;
        case 40:
          dispatch({ type: action.SEARCH_UP });
          break;
        case 38:
          dispatch({ type: action.SEARCH_DOWN });
          break;
        case 27: //Escape
          dispatch({ type: action.FLUSH_SEARCH });
          break;
      }

    }

    handleInput(e) {
      const { dispatch } = this.props;
      dispatch({ type: action.TRIGGER_SEARCH, payload: e.target.value })
    }

render() {
  const { search, dispatch, active } = this.props;
  let placeholder = active ? active.name : 'Search...';
  return (
    <div style={{width: '100%'}} className="frontpage--container--menu__search">
      <Input fluid
        placeholder={placeholder}
        icon={{ name: 'search', circular: true, link: true }}
        onChange={this.handleInput.bind(this)}
        onFocus={()=> {dispatch({type: action.START_SEARCH})}}
        value={search}
        onKeyDown={this.handleKeyDown.bind(this)}
      />
      <Find />
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    search: selectSearch(state),
    searchData: selectSearchData(state),
    active: selectActive(state)
  }
}

export default connect(mapStateToProps)(Search);
