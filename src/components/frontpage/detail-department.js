import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import * as action from '../../constants/actions';

class DepartmentDetail extends Component {

  render() {
    const { department } = this.props;
    return (
      <div>

        I am DepartmentDetail

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(DepartmentDetail);
