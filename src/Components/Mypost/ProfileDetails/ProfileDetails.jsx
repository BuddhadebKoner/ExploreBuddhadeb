import React from "react";
import assets from "../../../assets/icons/icons";

import "../../../Styles/ProfileDetails.css";

export default function ProfileDetails({ media, Medialink, postdate, profilelink }) {
   return (
      <>
         <div className="main-container-profile-details">
            <div className="feed-post-profile">
               <a target="_blank" href={profilelink}>
                  <img className="post-profile-icon" src={media} alt="" />
               </a>
               <a target="_blank" href={profilelink}>
                  <h3>Buddhadeb Koner</h3>
               </a>
               <a
                  href={Medialink}
                  className="see-original-post"
                  target="_blank"
               >
                  See Original Post
               </a>
            </div>
            <div className="image-profile-threedot-container">
               <p>{postdate}</p>
               <a href={Medialink}>
                  <img
                     src={assets.threeDotBlack}
                     className="post-profile-threedots"
                     alt=""
                  />
               </a>
            </div>
         </div>
      </>
   );
}
