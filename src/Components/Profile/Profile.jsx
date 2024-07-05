import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import assets from '../../assets/icons/icons';
import { documentdata } from '../../assets/documentdata';
import Model from './ProfilePhoto/Model/Model';
import { Dropdown } from "flowbite-react";

// styles are here 
import '../../Styles/Profile.css';

export default function Profile() {

   const handleMouseEnter = () => setShowText(true);
   const handleMouseLeave = () => setShowText(false);

   return (
      <>
         <div className="profile-container ">
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
                     <a href={documentdata.fblink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.fb} alt="" />
                        </Dropdown.Item>
                     </a>
                     <a href={documentdata.xlink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.x} alt="" />
                        </Dropdown.Item>
                     </a>
                     <a href={documentdata.linkedinlink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.linkedin} alt="" />
                        </Dropdown.Item>
                     </a>
                     <a href={documentdata.gitlink} target='_blank'>
                        <Dropdown.Item className='dropdown-items'>
                           <img src={assets.github} alt="" />
                        </Dropdown.Item>
                     </a>
                  </Dropdown>
               </div>

               <div className="main-btn-container">
                  <a className='mail-btn hover-btn' href="mailto:iambuddhadebkoner@gmail.com">
                     <img src={assets.mail} alt="" className='mail-icon' />
                  </a>
               </div>

               <div className="">
                  <NavLink
                     to={'/aboutwebinfo'}
                     className='threedot-btn hover-btn'
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                  >
                     <img src={assets.threeDot} alt="" className='mail-icon' />
                  </NavLink>
               </div>
            </div>
         </div>
      </>
   );
}
