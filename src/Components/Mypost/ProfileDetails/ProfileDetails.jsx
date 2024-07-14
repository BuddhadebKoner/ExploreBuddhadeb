import React from "react";
import assets from "../../../assets/icons/icons";

import "../../../Styles/ProfileDetails.css";

export default function ProfileDetails(props) {
   const { media, Medialink, postdate } = props;
   return (
      <>
         <div className="main-container-profile-details">
            <div className="feed-post-profile">
               <img className="post-profile-icon" src={media} alt="" />
               <h4>Buddhadeb Koner</h4>
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
