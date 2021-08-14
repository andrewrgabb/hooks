import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PropertyListPage from "./property-list";

// This page contains most of the routing for the application

// Sub-routers may also be added to reduce complexity if required

const PageRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/property-list">
          <PropertyListPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default PageRouter;
