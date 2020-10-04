import React from "react";
import { Route, Redirect } from "react-router-dom";
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
            to= "/login"
            from={props.location}
          />
        )
      }
    />
  );
}
