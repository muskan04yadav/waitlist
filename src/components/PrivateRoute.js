import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Route, Navigate } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Navigate to='login' replace />
        )
      }}
    />
  )
}
