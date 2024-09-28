import React, { Suspense, lazy, useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Feednavbar from '../Feednavbar/Feednavbar';
import assets from '../../assets/icons/icons';
// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

// Styles are here
import '../../Styles/Hero.css';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the device is mobile based on screen width
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set the initial state on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="hero-container">
                <div className="hero-container-bg">
                    <img src={assets.heroBanner} alt="herobanner" />
                    <div className="Threed-canvas">
                        {/* Conditionally render Spline only on non-mobile devices */}
                        {!isMobile && (
                            <Suspense fallback={<div>Loading 3D Model...</div>}>
                                {/* black whole */}
                                {/* <Spline scene="https://prod.spline.design/4p332UTNWqGPiihv/scene.splinecode" /> */}
                                {/* helloworld */}
                                <Spline scene="https://prod.spline.design/w0Bi0UXjhwdR7hFM/scene.splinecode"/>
                                {/* bulb */}
                                {/* <Spline scene="https://prod.spline.design/LyENuUg0rgbOrXHs/scene.splinecode" /> */}
                                {/* nebula */}
                                {/* <Spline scene="https://prod.spline.design/hXtkBdNwdc2VJytO/scene.splinecode" /> */}
                            </Suspense>
                        )}
                    </div>
                </div>
                <div className="profile-feednav">
                    <Profile />
                    <Feednavbar />
                </div>
            </div>
        </>
    );
}
