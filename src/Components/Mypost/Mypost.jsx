import React from 'react'
import Postdetails from '../Postdetails/Postdetails'


// styles are here 
import '../../Styles/Mypost.css'

export default function Mypost() {
  return (
    <div className="post-sec-full-box-container">
      <div className='feed-container-box'>
        <div className="feed-post-head">
          <h3>Feed</h3>
        </div>
        <Postdetails />
      </div>
    </div>
  )
}
