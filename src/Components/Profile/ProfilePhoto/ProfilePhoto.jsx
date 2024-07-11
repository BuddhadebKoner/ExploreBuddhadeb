import React from 'react'
import assets from '../../../assets/icons/icons'
import ApiDataResponce from '../../../Api/apiresponce'

// styles are here
import '../../../Styles/ProfilePhoto.css'

export default function ProfilePhoto() {
    return (
        <>
            <div className="profile-photobox">
                <img src={assets.profile} alt="" />
            </div>
            <div className="profile-name">
                <h1>Buddhadeb Koner</h1>
                <p>{ApiDataResponce.profileDetails.bio}</p>
            </div>

        </>
    )
}
