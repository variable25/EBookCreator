import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const isAuthenticated = true
  const loading = false
  const location = useLocation()

  if(loading){
    //Add loading spinner
    return <div>Loading...</div>
  }

  if(!isAuthenticated){
    return <Navigate to='/login' state={{ from:location }} replace/>
  }

  return children
}

export default ProtectedRoutes