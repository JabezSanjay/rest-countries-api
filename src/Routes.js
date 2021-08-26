import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./components/Pages/DetailPage";
import HomePage from "./components/Pages/HomePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detail-page" exact component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
