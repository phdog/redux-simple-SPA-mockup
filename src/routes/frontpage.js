import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Frontpage from '../components/frontpage';
import Menu from '../components/frontpage/menu';
import List from '../components/frontpage/list';
import EmployeeDetail from '../components/frontpage/detail-employee';
import DepartmentDetail from '../components/frontpage/detail-department';
import Buttons from '../components/frontpage/buttons';

export default (

<Route component={Frontpage}>

  <IndexRoute components={{ menu: Menu }} />

  <Route
    path={'/employee'}
    components={{ menu: Menu, list: List }}/>
    <Route
      path={'/employee/:id'}
      components={{ menu: Menu, list: List, details: EmployeeDetail, buttons: Buttons }}
    />

  <Route
    path={'/department'}
    components={{ menu: Menu, list: List }}
  />
  <Route
    path={'/department/:id'}
    components={{ menu: Menu, list: List, details: DepartmentDetail, buttons: Buttons }}
  />

</Route>

)
