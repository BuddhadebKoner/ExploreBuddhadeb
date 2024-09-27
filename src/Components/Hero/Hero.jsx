import React, { Suspense, lazy } from 'react';
import Profile from '../Profile/Profile'
import Feednavbar from '../Feednavbar/Feednavbar'
import assets from '../../assets/icons/icons'
// lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));


// styles are here
import '../../Styles/Hero.css'

export default function Hero() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-container-bg">
                    <img src={assets.heroBanner} alt="" />
                    <div className="Threed-canvas">
                        <Suspense fallback={<div>Loading 3D Model...</div>} >
                            {/* black whole */}
                            <Spline scene="https://prod.spline.design/4p332UTNWqGPiihv/scene.splinecode" />
                            {/* helloworld */}
                            {/* <Spline scene="https://prod.spline.design/w0Bi0UXjhwdR7hFM/scene.splinecode"/> */}
                            {/* bulb */}
                            {/* <Spline scene="https://prod.spline.design/LyENuUg0rgbOrXHs/scene.splinecode" /> */}
                            {/* nebula */}
                            {/* <Spline scene="https://prod.spline.design/hXtkBdNwdc2VJytO/scene.splinecode" /> */}
                        </Suspense>
                    </div>
                </div>
                <div className="profile-feednav">
                    <Profile />
                    <Feednavbar />
                </div>
            </div>
        </>
    )
}
