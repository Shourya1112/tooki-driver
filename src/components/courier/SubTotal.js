import React, { useEffect, useState } from 'react'
// import { FaMapPin } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import mapBg from "../../assets/courierPage/mapBg.png"
import Background from '../Tutorial/component/Background'
import GradientBtn from '../../globalComponent/ui/GradientBtn';
import parcelIcon from "../../assets/courierPage/parcelIcon.png"
// import { ThreeDots } from 'react-loader-spinner'
import axiosInstance from '../../utils/axiosInstance';
import "../../styles/component/courier/SubTotal.css"

const SubTotal = () => {
    const [ quotData, setQoutData ] = useState()
    const quotId = sessionStorage.getItem("quotId")

    useEffect(() => {
        console.log(quotId)
        if (quotId) {
            axiosInstance
                .get(`/quotations/prices/${quotId}/`)
                .then(res => {
                    const response = res.data.data
                    console.log(res)
                    setQoutData(response)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }, [quotId])

  return (
    <Background>
        {quotData &&
        <div className='main-sub-total-div'>
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
                        Confirm Details
                    </p>
                    <div className='quotation-div'>
                        <div className='icon-div'>
                            <img
                                src={parcelIcon}
                                className='parcel-icon'
                                alt='parcel'
                            />
                        </div>
                        <div className='parcel-info-div'>
                            <div className='info-left'>
                                <p className='weight'>
                                    Package ({quotData.weight? quotData.weight : "NA"})
                                </p>
                            </div>

                            <div className='info-right'>
                                <p className='price'>
                                    ₹ {quotData.estimated_amount}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mode-of-pay'>
                        <p className='text'>
                            Mode of Payment
                        </p>
                        <p className='icoon'>
                            <FaChevronRight />
                        </p>
                    </div>
                </div>

                <GradientBtn
                    text={"Continue"} 
                    // onClickHandler={handleCloseMap} 
                />
            </div>
        </div>}
    </Background>
  )
}

export default SubTotal