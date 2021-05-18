import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { Spinner } from "components/common";
import { withAuthorizationPermissions } from "hocs";
import { HeaderLayout } from "layouts";
import { history } from "utils";
import App from "./App";
import configureStore from "./store";

import "localization/i18n";

const store = configureStore();
const Main = lazy(() => import("modules/Main/pages/Main"));

const Root = () => {
  return (
    <Provider store={store}>
      <HeaderLayout>
        <Router history={history}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route
                exact
                path="/main"
                component={withAuthorizationPermissions(Main)}
              />
              <Route path="/" component={App} />
            </Switch>
          </Suspense>
        </Router>
      </HeaderLayout>
    </Provider>
  );
};

export default Root;
