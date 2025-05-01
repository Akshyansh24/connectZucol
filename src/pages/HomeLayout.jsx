import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default HomeLayout