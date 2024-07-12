import React, { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom"
import { FaMapPin } from "react-icons/fa";
import Background from '../Tutorial/component/Background'
import GradientBtn from '../../globalComponent/ui/GradientBtn'
import mapBg from "../../assets/courierPage/mapBg.png"
import InfoLeft from './component/InfoLeft';
import "../../styles/component/courier/AllCourierInfo.css"
import { useMobile } from '../../globalComponent/context/MobileContext';
import Navigator from '../../globalComponent/navigator/Navigator';

const courierSize = [
    { name: "Small" },
    { name: "Medium" },
    { name: "Large" },
]

const AllCourierInfo = () => {
    const { isMobile } = useMobile()
    // const navigate = useNavigate()
    const [ selectedType, setSelectedType ] = useState()
    const [ showMap, setShowMap ] = useState(false)

    useEffect(() => {
        console.log(showMap)
    }, [showMap])

    const handleCloseMap = () => {
        setShowMap(false)
    }

  return (
    <Background noBg={isMobile && true}>
        <div className='courier-info-main-div'>
            {!showMap &&
            <div className='info-div-container'>
                <Navigator pageTitle={"Calculate Parcel"}/>

                {isMobile && 
                <div className='map-main-container'>
                 <div className='enter-location-div'>
                    <div className='location-main-div'>
                        <p className='red-pin'>
                            <FaMapPin />
                        </p>
                        <div className='text-div'>
                            <p className='label'>Pickup Point</p>
                            <p className='location'>B-88, Malviya nagar, New Delhi</p>
                        </div>
                    </div>
                    <div className='location-main-div'>
                        <p className='green-pin'>
                            <FaMapPin />
                        </p>
                        <div className='text-div'>
                            <p className='label green-label'>Drop Point</p>
                            <p className='location'>K-91, Rohini, New Delhi</p>
                        </div>
                    </div>
                </div>
                </div>}

                <InfoLeft 
                    courierSize={courierSize}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            </div>}

            {!showMap && 
            <div className='orange-divider'></div>}

            {!isMobile && 
            <div className={showMap? 'main-map-div show-map-active' : 'main-map-div'}>
                <img 
                    src={mapBg} 
                    className='map-background' 
                    alt='background' 
                />

                <div 
                    onClick={() => !showMap && setShowMap(true)} 
                    className='main-location-enter-div'
                >
                    <div className='enter-location-div'>
                        <div className='location-main-div'>
                            <p className='red-pin'>
                                <FaMapPin />
                            </p>
                            <div className='text-div'>
                                <p className='label'>Pickup Point</p>
                                <p className='location'>Delhi</p>
                            </div>
                        </div>
                        <div className='location-main-div'>
                            <p className='green-pin'>
                                <FaMapPin />
                            </p>
                            <div className='text-div'>
                                <p className='label green-label'>Drop Point</p>
                                <p className='location'>Antartica</p>
                            </div>
                        </div>
                    </div>

                    {showMap &&
                    <GradientBtn 
                        text={"Continue"} 
                        onClickHandler={handleCloseMap} 
                    />}
                </div>
            </div>}
        </div>
    </Background>
  )
}

export default AllCourierInfo