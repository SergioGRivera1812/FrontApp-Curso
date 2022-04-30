import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { map } from "lodash";
import configRouting from "./configRouting";
//import { Switch } from 'react-router-dom';

export default function Routing(props) {
  const { setRefreshCheckLogin } = props;

  return (
    <Router>
      <Route>
        {map(configRouting, (route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.page setRefreshCheckLogin={setRefreshCheckLogin} />
          </Route>
        ))}
      </Route>
    </Router>
  );
}
