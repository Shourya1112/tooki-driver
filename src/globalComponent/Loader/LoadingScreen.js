import React from 'react'
import tookiLogo from "../../assets/logo/tookiLogo.png"
import "../../styles/globalComponent/LoadingScreen.css"

const LoadingScreen = () => {
  return (
    <div className='loading-screen-main-div'>
        <div className='loading-image-container'>
            <img
                src={tookiLogo} 
                className='main-logo-desktop' 
                alt='tooki' 
            />
        </div>
    </div>
  )
}

export default LoadingScreen