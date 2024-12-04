import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AllContext } from '../Context/AllContext'


const RequiredAuth = () => {
  const User= JSON.parse(localStorage.getItem('user'))

  console.log(User)
  const auth = useContext(AllContext)

  const location = useLocation()
  return (
    User?.role === "Employer" ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace/>
  )
}

export default RequiredAuth