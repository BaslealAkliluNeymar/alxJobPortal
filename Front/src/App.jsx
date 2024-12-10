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
import Admin from './Pages/Admin.jsx'
import RequiredAuth from './components/RequiredAuth.jsx'
import Jobs from './Pages/Jobs.jsx'
import Dashboard from './components/Dashboard.jsx'
import Jobz from './components/Jobz.jsx'
import Talents from './components/Talents.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import ProProfile from './Pages/ProProfile.jsx'
import Project from './Pages/Project.jsx'

const App = () => {

  return (
    <Router>
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
              <Route path ='/:id/profile' element={<ProProfile />} />
              <Route path ='/browse' element={<Project />} />
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

    </Router>
   
  )
}

export default App