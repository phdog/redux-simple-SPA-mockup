import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../constants/actions';
import { Input } from 'semantic-ui-react';
import { selectSearch } from '../../selectors';

class Search extends Component {

  handleInput(e) {
    const { dispatch } = this.props;
    dispatch({ type: action.TRIGGER_SEARCH, payload: e.target.value })
  }

  renderSearchList() {
    const { search } = this.props;
    if (search) {return <div>hello</div>}
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
      {this.renderSearchList()}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: selectSearch(state)
  }
}

export default connect(mapStateToProps)(Search);
