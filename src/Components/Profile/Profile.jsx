import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import assets from '../../assets/icons/icons';
import { Dropdown } from "flowbite-react";

// styles are here 
import '../../Styles/Profile.css';
import ApiDataResponce from '../../Api/apiresponce';

export default function Profile() {

   const handleMouseEnter = () => setShowText(true);
   const handleMouseLeave = () => setShowText(false);

   return (
      <>
         <div className="profile-container glass-bg">
            <div className="profile-photo">
               <ProfilePhoto />
            </div>
            <div className="follow-me">
               <Link to="/getstarted" className='super-follow-btn'>
                  <img src={assets.Donate} alt="" className='donate-icon' />
                  <h4 className='donate-text'>DISCOVER</h4>
               </Link>

               <div className="Dropdown-Container">
                  <Dropdown className='follow-me-btn' label="Follow me" dismissOnClick={false}>
                     <a href={ApiDataResponce.aboutdata.fblink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.fb} alt="" />
                           <h1>Facebook</h1>
                        </Dropdown.Item>
                     </a>
                     <a href={ApiDataResponce.aboutdata.xlink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.x} alt="" />
                           <h1>x</h1>
                        </Dropdown.Item>
                     </a>
                     <a href={ApiDataResponce.aboutdata.linkedinlink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.linkedin} alt="" />
                           <h1>Linkedin</h1>
                        </Dropdown.Item>
                     </a>
                     <a href={ApiDataResponce.aboutdata.gitlink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.github} alt="" />
                           <h1>Github</h1>
                        </Dropdown.Item>
                     </a>
                  </Dropdown>
               </div>

               <div className="main-btn-container">
                  <a className='mail-btn hover-btn' href="mailto:iambuddhadebkoner@gmail.com">
                     <img src={assets.mail} alt="" className='mail-icon' />
                  </a>
               </div>

               <div className="threedot-btn">
                  <NavLink
                     to={'/aboutwebinfo'}
                     className='threedot-btn hover-btn'
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                  >
                     <img src={assets.threeDotWhite} alt="" className='mail-icon' />
                  </NavLink>
               </div>
            </div>
         </div>
      </>
   );
}
