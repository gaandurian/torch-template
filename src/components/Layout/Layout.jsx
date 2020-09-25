import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Navigation from '../Navigation'
import { Container } from 'semantic-ui-react'
import Dashboard from '../../pages/Dashboard'
import AdminTasks from '../../pages/admin/Tasks/AdminTasks'
import Tasks from '../../pages/Tasks'
import Members from '../../pages/Members'
import './layout.css'
import { isAdmin } from '../../pages/Auth/auth-utilities'
import UserProfile from '../../pages/UserProfile'

export default function Layout() {
    return (
        <>
        <Route component={Navigation} />
        <div className="content-wrapper">
        <Container fluid className="container">
            <Route
              path="/"
              exact
              component={() => <Redirect to="/dashboard" />}
            />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/admin/tasks" component={AdminTasks} />
            <Route path="/tasks" component={isAdmin() ? AdminTasks : Tasks} />
            <Route path="/profile/:id" component={UserProfile} />
            {isAdmin() && <Route path="/members" component={Members} />}
        </Container>
      </div>
        </>
    )
}
