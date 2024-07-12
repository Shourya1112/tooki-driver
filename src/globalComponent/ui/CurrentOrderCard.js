import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoIosCall, IoMdChatbubbles } from "react-icons/io";
import { MdAssistantNavigation } from "react-icons/md";
import profileImage from "../../assets/placeholder/profile-placeholder.png"
import "../../styles/globalComponent/CurrentOrderCard.css"

const CurrentOrderCard = ({ customerName, customerImage, orderBookingTime }) => {
    const custName = customerName || "john doe"
    const custImage = customerImage || profileImage;
    const orderTime = orderBookingTime || "--:--"

  return (
    <div className='current-order-card-div'>
        {/* <p className='status-tag'>
            Ongoing Trip
        </p> */}

        <div className='customer-profile-div'>
            <img src={custImage} className='customer-image' alt='customer' />

            <div className='customer-info'>
                <p className='customer-name'>
                    {custName}
                </p>

                <div className='customer-other-row'>
                    <p className='customer-rating'>
                        <FaStar /> <span>4.8</span>
                    </p>

                    <p className='order-time'>
                        {orderTime}
                    </p>
                </div>
            </div>
        </div>

        <div className='actions-div'>
            <p className='main-action'>
                <IoIosCall />
                <span>
                    call
                </span>
            </p>
            <p className='main-action'>
                <IoMdChatbubbles />
                <span>
                    chat
                </span>
            </p>
            <p className='main-action'>
                <MdAssistantNavigation />
                <span>
                    navigate
                </span>
            </p>
        </div>
    </div>
  )
}

export default CurrentOrderCard