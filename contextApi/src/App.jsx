import React from 'react'
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/userContextProvide';


const App = () => {
  return (
    <UserContextProvider>
  <>
     <Login />
     <Profile />
     
  </>
  </UserContextProvider>
  )
}

export default App;