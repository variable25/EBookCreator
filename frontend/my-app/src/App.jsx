import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProtectedRoutes from './components/auth/ProtectedRoutes'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import DashboardPage from './Pages/DashboardPage'
import EditorPage from './Pages/EditorPage'
import ViewBookPage from './Pages/ViewBookPage'
import ProfilePage from './Pages/ProfilePage'

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>

      {/* Protected Routes */}
      <Route path='/dashboard' element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>}/>
      <Route path='/editor/:bookId' element={<ProtectedRoutes><EditorPage/></ProtectedRoutes>} />
      <Route path='/viewbook/:bookId' element={<ProtectedRoutes><ViewBookPage/></ProtectedRoutes>}/>
      <Route path='/profile' element={<ProtectedRoutes><ProfilePage/></ProtectedRoutes>}/>
    </Routes>
  )
}

export default App