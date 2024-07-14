import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../Styles/Feednavbar.css';

export default function Feednavbar() {
  const location = useLocation();

  // Mapping routes to titles
  const routeTitles = {
    "/explore": "My Post",
    "/resumepage": "Resume",
    "/about": "About Me",
    "/feedback": "Feedback"
  };

  // Get the current title based on the current path
  const currentTitle = routeTitles[location.pathname] || "Buddhadebs Home";

  return (
    <>
      <Helmet>
        <title>{currentTitle}</title>
      </Helmet>
      <div className="feednavbar-container glass-bg">
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          My Post
        </NavLink>
        <NavLink
          to="/resumepage"
          className={({ isActive }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive ? "nav-links-active" : "nav-links-normal"
          }
        >
          Feedback
        </NavLink>
      </div>
    </>
  );
}
