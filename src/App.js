import React from "react";
import "./App.css";
import {
  BrowserRouter as AppRouter,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from './components/Auth/ProtectedRoute'

function App() {
  return (
    <AppRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute component={Layout} />
      </Switch>
    </AppRouter>
  );
}

export default App;
