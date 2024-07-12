import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { FaMapPin } from "react-icons/fa";
import mapBg from "../../assets/courierPage/mapBg.png"
import Background from '../Tutorial/component/Background'
import GradientBtn from '../../globalComponent/ui/GradientBtn';
import axiosInstance from '../../utils/axiosInstance';
import "../../styles/component/courier/EnterLocation.css"

const EnterLocation = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [ pickDropPoints, setPickDropPoints ] = useState({
        pickUp: "",
        drop: ""
    })

    const parcelData = location.state

    const handleClick = () => {
        if (pickDropPoints.pickUp === "" && pickDropPoints.drop === "") {
            alert("Please enter current and drop Location")
            return
        }
        console.log(parcelData)

        const postData = {
            parcel_type: parcelData.type,
            quotation_id: parcelData.id,
            pickup_address: pickDropPoints.pickUp,
            delivery_address: pickDropPoints.drop
        }

        axiosInstance
            .post("/logistics/orders/", postData)
            .then(res => {
                console.log(res)
                navigate("/courier/sub-total")
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <Background>
        <div className='main-map-div show-map-active'>
            <div className='map-div'>
                <img
                    src={mapBg} 
                    className='map-background' 
                    alt='background' 
                />
            </div>

            <div
                className='main-location-enter-div'
            >
                <div className='enter-location-div'>
                    <p className='heading'>
                        Where is it going?
                    </p>
                    <div className='location-main-div'>
                        <p className='red-pin'>
                            <FaMapPin />
                        </p>
                        <div className='text-div'>
                            <input
                                type='text'
                                placeholder='Current Location'
                                className='location-input'
                                value={pickDropPoints.pickUp}
                                onChange={e => setPickDropPoints(prev => ({ ...prev, pickUp: e.target.value}))}
                            />
                        </div>
                    </div>
                    <div className='location-main-div'>
                        <p className='green-pin'>
                            <FaMapPin />
                        </p>
                        <div className='text-div'>
                            <input
                                type='text'
                                placeholder='Current Location'
                                className='location-input'
                                value={pickDropPoints.drop}
                                onChange={e => setPickDropPoints(prev => ({ ...prev, drop: e.target.value}))}
                            />
                        </div>
                    </div>
                </div>

                <GradientBtn
                    text={"Continue"} 
                    onClickHandler={handleClick} 
                />
            </div>
        </div>
    </Background>
  )
}

export default EnterLocation