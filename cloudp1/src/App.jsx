

import './App.css'
import Navbar from './navbar.jsx'

import Home from './pages/Home.jsx'
import { Outlet } from "react-router";
function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
