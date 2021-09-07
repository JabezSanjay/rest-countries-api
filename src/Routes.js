import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";

const Routes = () => {
  // const name = useSelector((state) => state.country);
  // console.log(name);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detail-page/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
