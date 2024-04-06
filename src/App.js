import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HomePage from './pages/HomePage';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';


function App() {
  const [loggedIn , setLoggIn] = useState(false)
  const logginUser = window.localStorage.getItem('LoggInuser')

  const handleLogin =( ) => {
    setLoggIn(true)
  }

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/login' element={<SignIn onLogin={handleLogin}/>}/>
          <Route path='/home' element={!logginUser ? <SignIn /> :<HomePage/>}/>
          <Route path='/profile' element={!logginUser ? <SignIn /> :<Profile/>}/>
          <Route path='/update-profile' element={!logginUser ? <SignIn /> :<UpdateProfile/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

