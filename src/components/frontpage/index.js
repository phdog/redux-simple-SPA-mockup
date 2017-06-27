import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Frontpage extends Component {
  render() {
    const { menu, list, details, buttons, search } = this.props;
    return (
    <div className="frontpage">
      <div className="frontpage--container">
        <div className="frontpage--container--left">
      <div className="frontpage--container--left--menu">
        {menu}
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
    routing: state.routing
  };
}

export default connect(mapStateToProps)(Frontpage);
