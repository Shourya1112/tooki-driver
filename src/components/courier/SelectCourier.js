import React, { useState } from 'react'
import axiosInstance from '../../utils/axiosInstance'
import { Link, useNavigate } from "react-router-dom"
import dashedLine from "../../assets/courierPage/dashed-line.png"
import Background from '../Tutorial/component/Background'
import selectCourierHero from "../../assets/courierPage/selectCourier.png"
import documentIcon from "../../assets/courierPage/documentIcon.png"
import parcelIcon from "../../assets/courierPage/parcel.png"
import logisticsIcon from "../../assets/courierPage/logisticsIcon.png"
import GradientBtn from '../../globalComponent/ui/GradientBtn'
import DocumentSelector from './component/DocumentSelector'
// import ParcelSelector from './component/ParcelSelector'
import "../../styles/component/courier/SelectCourier.css"
import { useMobile } from '../../globalComponent/context/MobileContext'
import Navigator from '../../globalComponent/navigator/Navigator'

const courierTypes = [
    { name: "Document", icon: documentIcon },
    { name: "Parcel", icon: parcelIcon, linkTo: "/courier/details" },
    { name: "Logistics", icon: logisticsIcon },
]

const SelectCourier = () => {
    const navigate = useNavigate()
    const { isMobile } = useMobile()
    const [ selectedType, setSelectedType ] = useState(courierTypes[0].name)
    const [ quantity, setQuantity ] = useState(1)
    const noteText = ' Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.'

    const handleContinue = () => {
        // navigate("/courier/details")

        const randomNumber = Math.floor(Math.random() * 26) + 5;

        const postData = {
            parcel_type: "DOCUMENT",
            distance: randomNumber,
            document_quantity: quantity
        }

        axiosInstance
            .post("/quotations/prices/", postData)
            .then(res => {
                console.log(res)
                const quotId = res.data.data.id
                const type = res.data.data.parcel_type
                sessionStorage.setItem("quotId", quotId)
                navigate("/courier/location", { state: { id: quotId, type: type} })
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <Background noBg={isMobile && true} flipped={true} image={selectCourierHero}>
        <div className='select-courier-main-div'>

            <Navigator pageTitle={"Select Courier"} />

            <div className='mobile-image-div'>
                <img
                    src={selectCourierHero}
                    className='hero-image-div'
                    alt='car hero'
                />
            </div>

            <p className='page-title'>
                Select Courier
            </p>
            <p className='sub-title'>
                What are you sending?
            </p>

            <div className='courier-type-div'>
                {courierTypes.map((item, id) => (
                <Link
                    to={item.linkTo && item.linkTo}
                    key={id} 
                    onClick={() => setSelectedType(item.name)} 
                    className='type-check-btn'
                >
                    <div className='type-check'>
                        {selectedType === item.name && 
                        <div className='type-check-fill'></div>}
                    </div>

                    <img 
                        src={item.icon}
                        className='type-icon'
                        alt='type'
                    />
                    <p className='type-text'>
                        {item.name}
                    </p>
                </Link>))}
            </div>

            {selectedType === "Document" &&
            <DocumentSelector
                quantity={quantity}
                setQuantity={setQuantity}
            />}

            {/* {selectedType === "Parcel" &&
            <ParcelSelector
                dimensions={dimensions}
                setDimensions={setDimensions}
            />} */}

            <img 
                className='dashed-line' 
                src={dashedLine} 
                alt='dashed' 
            />

            <div className='note-div'>
                <p className='note-text'>
                    <span>Note - </span>
                    {noteText}
                </p>
            </div>

            <GradientBtn text={"Continue"} onClickHandler={handleContinue} />
        </div>
    </Background>
  )
}

export default SelectCourier