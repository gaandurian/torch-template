import React from "./node_modules/react";
import { Route, Redirect } from "./node_modules/react-router-dom";
import { isAuthenticated } from "../../../pages/Auth/auth-utilities";

export default function ProtectedRoute({ component: Compp, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Compp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
