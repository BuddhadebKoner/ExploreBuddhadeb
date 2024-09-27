import React, { Suspense, lazy } from 'react';
import './Github.css';
import assets from '../../assets/icons/icons';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Github() {
  return (
    <>
      <div className="github-main-container">
        <a target='_blank' href='https://github.com/BuddhadebKoner' className="github-link-container">
          <img src={assets.githubDark} alt="Github Profile" />
          <p>BuddhadebKoner</p>
        </a>
        <div className="Threed-canvas">
          {/* Use Suspense with a fallback for loading state */}
          <Suspense fallback={<div>Loading 3D Model...</div>}>
            <Spline scene="https://prod.spline.design/TML5oS2HnRgLZlcd/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </>
  );
}
