import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

class Frontpage extends Component {
  render() {
    const { menu, list, details, buttons, search, loading } = this.props;
    console.log(loading)
    return (
    <div className="frontpage">
      <div className="frontpage--container">
        <div className="frontpage--container--menu">
          {menu}
        </div>
        <div className="frontpage--container--left">
      <div className="frontpage--container--left--menu">

      </div>
      <div className="frontpage--container--left--search">
        {search}
      </div>
      <div className="frontpage--container--left--list">
        {list}
      </div>
    </div>
      <div className="frontpage--container--right">
        <div className="frontpage--container--right--table">
        {details}
      </div>
        <div className="frontpage--container--right--buttons">
        {buttons}
      </div>
      </div>
    </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    loading: state.ui.loading
  };
}

export default connect(mapStateToProps)(Frontpage);
