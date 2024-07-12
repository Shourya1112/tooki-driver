import React from 'react'
import tookiLogo from "../../../assets/logo/tookiLogo.png"
import "../../../styles/component/Tutorial/Background.css"

const Background = ({ children, image, flipped, noBg }) => {

    if (noBg) {
        return (
            <>
                {children}
            </>
        )
    }

  return (
    <div className='background-main-div'>
        <div className='main-content-div'>

            <div className='main-logo-div'>
                <img src={tookiLogo} className='main-logo' alt='tooki' />
            </div>
            
            {image &&
            <div className='background-main-div-photo'>
                {!flipped &&
                <div className='image-container'>
                    <img
                        src={image}
                        className='hero-image' 
                        alt='tutorial' 
                    />
                </div>}

                {flipped &&
                <div className='main-text-container'>
                    {children}
                </div>}

                <div className='divider'></div>

                {!flipped &&
                <div className='main-text-container'>
                    {children}
                </div>}

                {flipped &&
                <div className='image-container'>
                    <img 
                        src={image} 
                        className='hero-image' 
                        alt='tutorial' 
                    />
                </div>}
            </div>}

            {!image &&
            <div className='background-no-image-div'>
                {children}
            </div>}
        </div>
    </div>
  )
}

export default Background