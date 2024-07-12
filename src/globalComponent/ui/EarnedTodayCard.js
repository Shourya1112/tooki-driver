import React from 'react'
import "../../styles/globalComponent/EarnedTodayCard.css"

const EarnedTodayCard = ({ earning, trips, timeOnline, distance }) => {

  return (
    <div className='earned-today-card-div'>
        <p className='earned-today-label'>
            Earned Today
        </p>
        <p className='earnings-today'>
            Rs. {earning || 0}
        </p>

        <div className='other-info'>
            <p className='other-info-text'>
                Total Trips
                <span>
                    {trips || 0}
                </span>
            </p>
            <p className='other-info-text'>
                Time Online
                <span>
                    {timeOnline || "00h 00m"}
                </span>
            </p>
            <p className='other-info-text'>
                Total Distance
                <span>
                    {distance || 0} Km
                </span>
            </p>
        </div>
    </div>
  )
}

export default EarnedTodayCard