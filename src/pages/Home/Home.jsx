import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <Outlet />
    </>
  )
}
