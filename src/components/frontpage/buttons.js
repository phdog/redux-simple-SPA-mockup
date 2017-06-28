import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as action from '../../constants/actions';

class Buttons extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <Button.Group>
      <Button
        content="Restore"
        size="large"
        onClick={() => { dispatch({ type: action.GET_DATA })}}
      />
      <Button.Or />
      <Button
        content="Save"
        size="large"
        onClick={() => { dispatch({ type: action.PUT_EDIT })}}
      />
    </Button.Group>
    );
  }

}

export default connect(null)(Buttons);
