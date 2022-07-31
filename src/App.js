import React from 'react'
import { Navbar, ProtectedRoute } from './components'
import {Account, Home, Login, Signup,Landing} from './pages'
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route 
          path="/account" 
          element={
            <ProtectedRoute>
            <Account/>
            </ProtectedRoute>
          }
           />
      </Routes>
      
    </AuthContextProvider>
    </>
  )
}

export default App