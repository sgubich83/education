import React, { Component, ComponentType } from "react";
import { AuthorizationUtils } from "utils";

export interface BaseComponentProps {}
export interface BaseComponentState {}

export default function withAuthorizationPermissions<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return class<
    Props extends BaseComponentProps,
    State extends BaseComponentState
  > extends Component<P & Props, State> {
    componentDidMount() {
      const token = AuthorizationUtils.getSessionToken();
      if (token) {
        AuthorizationUtils.redirectToHomePage();
      }
    }

    render() {
      return <WrappedComponent {...(this.props as P)} />;
    }
  };
}
