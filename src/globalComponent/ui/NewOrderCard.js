import React from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import GradientBtn from "../../globalComponent/ui/GradientBtn"
import "../../styles/globalComponent/NewOrderCard.css"

const NewOrderCard = ({ pickup, dropOff, amount, btnText, handleCancelOrder, acceptedOrder, handleAcceptingOrder }) => {
  return (
    <div>
        <div className='main-info-container'>
            <div className='pickup-loc-div'>
                <p className='pickup-loc-label'>
                    From:
                </p>
                <p className='pickup-loc'>
                    {pickup}
                </p>
            </div>
            <div className='pickup-loc-div'>
                <p className='pickup-loc-label'>
                    To:
                </p>
                <p className='pickup-loc'>
                    {dropOff}
                </p>
            </div>
            <div className='pickup-loc-div'>
                <p className='pickup-loc-label'>
                    Estimated Amount:
                </p>
                <p className='pickup-loc'>
                    {amount || 200}
                </p>
            </div>
            <div className='options-div'>
                <button className='option-button'>
                    <p className='card-option-icon'>
                        <IoIosCall />
                    </p>
                    <p className='card-option-text'>
                        call
                    </p>
                </button>
                <button className='option-button'>
                    <p className='card-option-icon'>
                        <IoMdChatbubbles />
                    </p>
                    <p className='card-option-text'>
                        chat
                    </p>
                </button>
                <button onClick={handleCancelOrder} className='option-button'>
                    <p className='card-option-icon'>
                        <RxCross1 />
                    </p>
                    <p className='card-option-text'>
                        cancel
                    </p>
                </button>
            </div>
            <GradientBtn onClickHandler={handleAcceptingOrder} text={btnText} />
        </div>
    </div>
  )
}

export default NewOrderCard