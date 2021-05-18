import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthorizationUtils } from "utils";
import { AppLayout } from "layouts";
import { Spinner } from "components/common";

const Dashboard = lazy(() => import("modules/Dashboard/pages/Dashboard"));
const UsersList = lazy(() => import("modules/Users/pages/UsersList"));
const UserDetails = lazy(() => import("modules/Users/pages/UserDetails"));

const App = () => {
  useEffect(() => {
    const token = AuthorizationUtils.getSessionToken();
    if (token) {
      // Prepare required data
    } else {
      AuthorizationUtils.redirectToMainForm();
    }
  });
  return (
    <AppLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/users/:id" component={UserDetails} />
          <Route exact path="/users" component={UsersList} />
          <Redirect path="*" to="/dashboard" />
        </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default App;
