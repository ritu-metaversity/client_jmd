import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import MarqueeCom from '../MarqueeCom/MarqueeCom'
import Footer from '../Footer/Footer'

const Mainlayout = () => {
  return (
    <div>
        <Navbar/>
        <MarqueeCom />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Mainlayout