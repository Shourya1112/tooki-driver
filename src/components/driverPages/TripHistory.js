import React, { useContext, useEffect, useState } from 'react'
import profilePlaceholder from "../../assets/placeholder/profile-placeholder.png"
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import axiosInstance from '../../utils/axiosInstance';
import PreviousTripCard from '../../globalComponent/ui/PreviousTripCard';
import "../../styles/component/driver/TripHistory.css"
import { GlobalStateContext } from '../../utils/GlobalState';
import BackBtn from '../../globalComponent/ui/BackBtn';

const TripHistory = () => {
    const { state } = useContext(GlobalStateContext)
    const rating = 4.8
    const ratingsIndex = [ 1, 2, 3, 4, 5 ]

    const [ tripMode, setTripMode ] = useState(1)
    const [ prevTrips, setPrevTrips ] = useState()

    useEffect(() => {
        if (state.userId) {
            axiosInstance
                .get(`/logistics/driver/orders/${state.userId}`)
                .then(res => {
                    const response = res.data.data;
                    const delivered = response.filter(item => item.status === "DELIVERED")
                    setPrevTrips(delivered)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [state])

  return (
    <div className='trip-history-main-div'>
        <BackBtn />
        
        <p className='main-head'>
            Trip History
        </p>

        <div className='driver-info-div'>
            <img
                src={profilePlaceholder}
                className='driver-profile-image'
                alt='driver'
            />
            <p className='driver-name'>
                {state.name}
            </p>

            <div className='ratings-div'>
                <p className='star-icons'>
                    {ratingsIndex.map(value => (
                        (value > rating)? <FaRegStar /> : <FaStar />
                    ))}

                    <span>
                        {" " + rating}
                    </span>
                </p>
            </div>

        </div>

        <div className='trips-info-div'>
            <div className='trip-nav-options'>
                <button 
                    className={(tripMode===1)? 'trip-option selected' : 'trip-option'}
                    onClick={() => setTripMode(1)}
                >
                    Completed
                </button>
                <button 
                    className={(tripMode===2)? 'trip-option selected' : 'trip-option'}
                    onClick={() => setTripMode(2)}
                >
                    Upcoming
                </button>
            </div>

            <div className='previous-trips-container'>
                {prevTrips?.map((item, id) => (
                    <PreviousTripCard earning={item.order} index={id} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default TripHistory