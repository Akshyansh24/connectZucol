import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'

function HomeLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default HomeLayout