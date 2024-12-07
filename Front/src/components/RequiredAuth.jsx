import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'



const RequiredAuth = () => {
  const User= JSON.parse(localStorage.getItem('user'))
  const location = useLocation()
  return (
    User?.role === "Employer" ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace/>
  )
}

export default RequiredAuth