import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import tookiLogo from "../assets/logo/tookiLogo.png"
import profilePlaceholder from "../assets/placeholder/profile-placeholder.png"
import compassIcon from "../assets/icons/compassIcon.png"
import compassActiveIcon from "../assets/icons/compassActive.png"
import healthIcon from "../assets/icons/healthIcon.png"
import healthActiveIcon from "../assets/icons/healthActive.png"
import settingsIcon from "../assets/icons/settingsIcon.png"
import settingsActiveIcon from "../assets/icons/settingsActive.png"
import DriverHome from '../components/driverPages/DriverHome'
import DriverEarnings from '../components/driverPages/DriverEarnings';
import DriverProfile from '../components/driverPages/DriverProfile';
import TripHistory from '../components/driverPages/TripHistory';
import "../styles/pages/DriverHomePage.css"

const DriverHomePage = () => {
    const navigate = useNavigate()
    const pathName = window.location.pathname;

  return (
    <div className='driver-home-main-div'>
        <div className='main-content-div'>

            <div className='nav-bar-div'>
                <div onClick={() => navigate("/driver")} className='logo-div'>
                    <img 
                        src={tookiLogo} 
                        className='logo-small' 
                        alt='tooki' 
                    />
                </div>

                <div className='status-div'>
                    <p className='status-text'>
                        Online
                    </p>
                    <div className='slider'></div>
                </div>

                <div className='profile-div'>
                    <img 
                        src={profilePlaceholder} 
                        className='profile-image' 
                        alt='helloooo'
                        onClick={() => navigate("/driver/profile")}
                    />
                </div>
            </div>

            <div className='main-center-div'>

                <Routes>
                    <Route path='/' element={<DriverHome />} />
                    <Route path='/earnings' element={<DriverEarnings />} />
                    <Route path='/profile' element={<DriverProfile />} />
                    <Route path='/trip-history' element={<TripHistory />} />
                </Routes>
            </div>

            <div className='nav-bar-div'>
                <div 
                    onClick={() => navigate("/driver")}
                    className='bottom-icon-div'
                >
                    <img 
                        src={(pathName === "/driver")? compassActiveIcon : compassIcon} 
                        className='bottom-icon' 
                        alt='map' 
                    />
                </div>

                <div 
                    onClick={() => navigate("/driver/earnings")}
                    className='bottom-icon-div'>
                    <img 
                        src={(pathName === "/driver/earnings")? healthActiveIcon : healthIcon} 
                        className='bottom-icon' 
                        alt='health' 
                    />
                </div>

                <div 
                    className='bottom-icon-div'
                    onClick={() => navigate("/driver/trip-history")}
                >
                    <img 
                        src={(pathName === "/driver/trip-history")? settingsActiveIcon : settingsIcon} 
                        className='bottom-icon'
                        alt='settings' 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DriverHomePage