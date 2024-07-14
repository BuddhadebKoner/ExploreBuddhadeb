import './App.css'
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


export default function App() {
  // useEffect(() => {
  //   // Disable right-click
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };

  //   // Disable inspect element and developer tools
  //   const handleKeyDown = (event) => {
  //     if (
  //       (event.ctrlKey && event.shiftKey && event.key === 'I') ||
  //       (event.ctrlKey && event.shiftKey && event.key === 'J') ||
  //       (event.ctrlKey && event.key === 'U') ||
  //       (event.key === 'F12')
  //     ) {
  //       event.preventDefault();
  //     }
  //   };

  //   // Disable dragging of images
  //   const handleDragStart = (event) => {
  //     if (event.target.tagName === 'IMG') {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);
  //   document.addEventListener('dragstart', handleDragStart);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //     document.removeEventListener('dragstart', handleDragStart);
  //   };
  // }, []);

  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
