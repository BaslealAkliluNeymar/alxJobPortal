import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Footer from './components/Footer'
import Browse from './Pages/Browse.jsx'
import Description from './Pages/Description.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Chat from './Pages/Chat.jsx'
import Single from './Pages/Single.jsx'
import { AllContextProvider } from './Context/AllContext.jsx'
import Test from './Pages/Test.jsx'
import Profile from './Pages/Profile.jsx'
import Admin from './Pages/Admin.jsx'
import RequiredAuth from './components/RequiredAuth.jsx'
import Jobs from './Pages/Jobs.jsx'
import Dashboard from './components/Dashboard.jsx'

import Jobz from './components/Jobz.jsx'
import Talents from './components/Talents.jsx'
import Chats from './components/Chats.jsx'
import Users from './components/Users.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'


const App = () => {
  return (
    
    <Router>
      <AllContextProvider>

        <div className='main-container min-h-screen flex flex-col'>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path = '/sign-up' element={<SignUp/>} />
              <Route path ='/talent/search' element={<Browse />}/>
              <Route path='/talent' element={<Description />} />
              <Route path='/talent/:id' element={<Single />} />
              <Route path='/chat/:id' element={<Chat />} />
              <Route path='/test' element={<Test />}/>
              <Route path ='/:id/profile' element={<Profile />} />
              <Route path ='/browse' element={<Browse />} />
              <Route path ='/jobs' element={<Jobs />} />
              <Route element = {<RequiredAuth />}>
                <Route path = '/admin' element={<Admin />} >
                  <Route path='/admin/dashboard' element={<Dashboard />} />
                  <Route path='/admin/jobs' element={<Jobz />} />
                  <Route path='/admin/talents' element={<Talents />} />
                </Route>  
              </Route>
              <Route path ='*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>

      </AllContextProvider>
    </Router>
   
  )
}

export default App