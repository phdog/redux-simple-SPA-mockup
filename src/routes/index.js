import React from 'react';
import { Route } from 'react-router';
import App from '../components/commons/app';
import Frontpage from './frontpage';
import { getApiData } from './callbacks';

  export default function() {
    return (

      <Route path="/" component={App} onEnter={getApiData}>
      {Frontpage}
    </Route>

  );
}
