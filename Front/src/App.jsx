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
              <Route path ='/browse' element={<Browse />}/>
              <Route path='/talent' element={<Description />} />
              <Route path='/talent/:id' element={<Single />} />
              <Route path='/chat/:id' element={<Chat />} />
              <Route path='/test' element={<Test />}/>
          </Routes>
          <Footer />
        </div>

      </AllContextProvider>
    </Router>
   
  )
}

export default App