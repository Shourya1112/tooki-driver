import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import Background from '../Tutorial/component/Background'
import pageHero from "../../assets/verification/sendOtp.png"
import GradientBtn from '../../globalComponent/ui/GradientBtn'
import "../../styles/component/verification/EnterOtp.css"

const EnterOtp = () => {
    const [ otp, setOtp ] = useState()

    const containerStyle = { 
        width: "100%",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        gap: "16px" 
    }

    const inputStyle = { 
        width: "72px", 
        height: "72px",
        background: "#FFEFEA", 
        border: "none", 
        borderRadius: "5px", 
        fontSize: "28px", 
        color: "#F95426" 
    }

  return (
    <Background flipped={true} image={pageHero}>
        <div className='enter-otp-main-div'>
            <p className='page-title'>
                OTP Verification
            </p>
            <p className='page-note'>
            An Authentication code has been sent to
            <br/>(+91) 76786 31922
            </p>
            
            <div className='input-container'>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    containerStyle={containerStyle}
                    inputStyle={inputStyle}
                    // renderSeparator=
                    renderInput={(props) => <input {...props} />}
                />
            </div>

            <p className='resend-note'>
                I didn't receive the code. <span>Resend Code</span>
            </p>
            <p className='time-counter'>
                1:20 Sec left
            </p>

            <GradientBtn text={"Send"} />

            <p className='terms-note'>
                By signing up, you agree to our<br/>
                <span>Terms & Conditions</span>
            </p>
        </div>
    </Background>
  )
}

export default EnterOtp