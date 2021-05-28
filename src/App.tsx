import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthorizationUtils } from "utils";
import { AppLayout } from "layouts";
import { Spinner } from "components/common";

const Notes = lazy(() => import("modules/Notes/pages/Notes"));
const UsersList = lazy(() => import("modules/Users/pages/UsersList"));
const UserDetails = lazy(() => import("modules/Users/pages/UserDetails"));
const Fiber = lazy(() => import("modules/Fiber/pages/Fiber"));

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
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/users/:id" component={UserDetails} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/fiber" component={Fiber} />
          <Redirect path="*" to="/notes" />
        </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default App;
