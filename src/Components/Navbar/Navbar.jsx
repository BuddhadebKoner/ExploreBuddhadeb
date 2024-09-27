import React, { useEffect, useState } from 'react'
import assets from '../../assets/icons/icons'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../../Styles/Navbar.css'
import { Helmet } from 'react-helmet'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const routeTitles = {
    "/": "Buddhadebs Home",
    "/github": "Buddhadebs GitHub",
    "/newsfeed": "Buddhadebs NewsFeed",
    "/login": "Buddhadebs Login",
    "/getstarted": "Buddhadebs Explore"
  };

  const currentTitle = routeTitles[location.pathname] || "Buddhadebs Home";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // if in url have this page /github
  useEffect(() => {
    if (location.pathname === '/github') {
      // change body background color 
      document.body.style.backgroundColor = '#000000';
      // overflow hidden
      document.body.style.overflow = 'hidden';
    } else {
      // if not have this page /github
      // change body background color to white
      document.body.style.backgroundColor = '#2E3A59';
      // overflow scroll
      document.body.style.overflow = 'scroll';
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{currentTitle}</title>
      </Helmet>
      <div className="navbar-container">
        <Link to="/">
          <img className='homelogo' src={assets.home} alt="logo" />
        </Link>
        <div className="nav-links">
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            GitHub
          </NavLink>
          <NavLink
            to="/newsfeed"
            className={({ isActive }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            News
          </NavLink>
          <NavLink
            to={'/login'}
            className='super'
          >
            TESTIMONIALS
          </NavLink>
        </div>
        <div className="hamburger-container" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <img src={assets.hamburger} alt="Open Menu" />
          ) : (
            <img src={assets.close} alt="Close Menu" />
          )}
        </div>
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/github" onClick={toggleMenu}>GitHub</NavLink>
          <NavLink to="/newsfeed" onClick={toggleMenu}>Resume</NavLink>
          <NavLink to="/explore" onClick={toggleMenu}>Post</NavLink>
          <NavLink to='/aboutwebinfo' onClick={toggleMenu}>Feedbacks</NavLink>
          <NavLink to='/newsfeed' onClick={toggleMenu}>News</NavLink>
        </div>
      </div>
    </>
  )
}
