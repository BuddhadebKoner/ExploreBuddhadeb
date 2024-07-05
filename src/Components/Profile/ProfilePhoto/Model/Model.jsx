import React from 'react'
import assets from '../../../../assets/icons/icons'

// styles are here 
import '../../../../Styles/Model.css'

export default function Model({ onClose }) {
   return (
      <>
         <div className="modal">
            <div className="modal-content">
               <div className="close-btn-container">
                  <button className="close-btn" onClick={onClose}><img className='close-btn-image' src={assets.Close} alt="" /></button>
               </div>
               <div className="donate-details-section">
                  <h3>Buy me a coffee</h3>
                  <img className='GPayQR' src="" alt="" />
                  <p>Donations are voluntary please donate responsibly.</p>
               </div>
            </div>
         </div>
      </>
   )
}
