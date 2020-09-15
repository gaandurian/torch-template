import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as AppRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Members from "./pages/Members";

function App() {
  return (
    <AppRouter>
      <Layout>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
      </Layout>
    </AppRouter>
  );
}

export default App;
