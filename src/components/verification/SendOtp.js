import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Background from '../Tutorial/component/Background'
import pageHero from "../../assets/verification/sendOtp.png"
import GradientBtn from '../../globalComponent/ui/GradientBtn'
import "../../styles/component/verification/SendOtp.css"

const SendOtp = () => {
    const navigate = useNavigate()
    const [ phNumber, setNumber ] = useState()

    const handleSend = () => {
        console.log(phNumber)
        navigate('/verification/enter')
    }

  return (
    <Background flipped={true} image={pageHero}>
        <div className='send-otp-main-div'>
            <p className='page-title'>
                OTP Verification
            </p>
            <p className='page-note'>
                We will send a code to the registered Phone number you registered to regain your password
            </p>
            
            <div className='input-container'>
                <input
                    type='text'
                    className='input-main'
                    placeholder='111-222-3333'
                    value={phNumber}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <GradientBtn text={"Send"} onClickHandler={handleSend}/>
        </div>
    </Background>
  )
}

export default SendOtp