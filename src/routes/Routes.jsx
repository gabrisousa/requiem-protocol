import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/home/Index.jsx'
import Login from '../containers/login/Index.jsx'
import Dashboard from '../containers/dashboard/Index.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import Threats from '../containers/threats/Index.jsx'
import Alerts from '../containers/alerts/Index.jsx'
import Settings from '../containers/settings/Index.jsx'
import ScannerLine from '../components/scannerLine/Index.jsx'
import NoiseOverlay from '../components/noiseOverlay/Index.jsx'
import { useEffect, useState } from 'react'
import LoadingScreen from '../components/loadingScreen/Index.jsx'
import Register from '../containers/register/Index.jsx'
import NewAlert from '../containers/new-alert/Index.jsx'



function App() {


  const [loading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}, [])

if (loading) {
  return <LoadingScreen />
}
  return (
    <BrowserRouter>
    <ScannerLine />
    <NoiseOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/settings" element={<Settings />} />
        <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/new-alert"
  element={
    <PrivateRoute>
      <NewAlert />
    </PrivateRoute>
  }
/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App