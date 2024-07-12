import React from 'react'
import fakeMap from "../../assets/placeholder/fakeMap.png"
import profilePlaceholder from "../../assets/placeholder/profile-placeholder.png"
import "../../styles/globalComponent/PreviousTripCard.css"

const PreviousTripCard = ({ customerImage, customerName, earning, index }) => {
    const profileImg  = customerImage || profilePlaceholder;
    const profileName = customerName || "not available";
    const price = earning || "--"

  return (
    <div key={index || 0} className='previous-trip-card-div'>
        <img src={fakeMap} className='map-bg-image' alt='map' />

        <div className='customer-profile-div'>
            <img src={profileImg} className='profile-image' alt='profile' />

            <p className='profile-name'>
                {profileName}
            </p>

            <p className='total-amt'>
                Trip Total
                <span>
                    ₹ {price}
                </span>
            </p>
        </div>
    </div>
  )
}

export default PreviousTripCard