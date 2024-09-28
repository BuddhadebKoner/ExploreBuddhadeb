import React, { Suspense, lazy, useState, useEffect } from 'react';
import './Github.css';
import assets from '../../assets/icons/icons';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Github() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state when component mounts
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
      <div className="github-main-container">
        <a target='_blank' href='https://github.com/BuddhadebKoner' className="github-link-container">
          <img src={assets.githubDark} alt="Github Profile" />
          <p>BuddhadebKoner</p>
        </a>
        <div className="Threed-canvas">
          {/* Conditionally render Spline only for non-mobile devices */}
          {!isMobile && (
            <Suspense fallback={<div>Loading 3D Model...</div>}>
              <Spline scene="https://prod.spline.design/TML5oS2HnRgLZlcd/scene.splinecode" />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
}
