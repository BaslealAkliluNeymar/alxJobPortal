import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
// import { useContext } from 'react'
// import { AllContext } from '../Context/AllContext'

const RequiredAuth = () => {
//   const { user } = useContext(AllContext)
  

  const User = localStorage.getItem('user')
  console.log(User)
  const location = useLocation()
  return (
    User.user ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace/>
  )
}

export default RequiredAuth