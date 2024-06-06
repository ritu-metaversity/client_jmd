import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import MarqueeCom from '../MarqueeCom/MarqueeCom'

const Mainlayout = () => {
  return (
    <div>
        <Navbar/>
        <MarqueeCom />
        <Outlet />
    </div>
  )
}

export default Mainlayout