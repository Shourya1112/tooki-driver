import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Background from '../Tutorial/component/Background'
import cameraInputImage from "../../assets/login/image-input.png"
import Navigator from '../../globalComponent/navigator/Navigator';
import { useMobile } from '../../globalComponent/context/MobileContext';
import "../../styles/component/signUp/SignUp.css"

const SignUp = () => {
    const { isMobile } = useMobile()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = (data) => {
        // console.log(data);
        if (data.password !== data.confirmPassword) {
            alert("passwords don't match!")
            return
        }

        const name = data.fullName.split(" ")

        const loginData = {
            first_name: name[0],
            last_name: name[1],
            phone_number: data.phNumber,
            username: data.username,
            email: data.email,
            password: data.password,
            user_type: "driver"
        }

        navigate("/signup/car", { state: loginData})
    };

  return (
    <Background noBg={false}>
        <div className='sign-up-main-div'>

           {isMobile &&
            <div className='navigator-main-container'>
                <Navigator pageTitle={"Sign Up"}/>
            </div>}

            {!isMobile &&
            <div className='image-container'>
                <img 
                    src={cameraInputImage} 
                    className='hero-image' 
                    alt='tutorial' 
                />
            </div>}

            <div className='divider'></div>

            <div className='main-form-container'>
                <p className='main-title'>
                    Sign Up
                </p>

                {isMobile &&
                <div className='image-container-mobile'>
                    <img 
                        src={cameraInputImage} 
                        className='hero-image' 
                        alt='tutorial' 
                    />
                </div>}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder='Full Name'
                            {...register("fullName", { required: true })}
                            className={errors.fullName? 'form-control input-error' : "form-control"}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder='Username*'
                            {...register("username", { required: true })}
                            className={errors.username? 'form-control input-error' : "form-control"}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder='Phone Number'
                            {...register("phNumber", { required: true })}
                            className={errors.phNumber? 'form-control input-error' : "form-control"}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder='Email'
                            {...register("email", { required: true })}
                            className={errors.email? 'form-control input-error' : "form-control"}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            {...register("password", { required: true })}
                            className={errors.password? 'form-control input-error' : "form-control"}
                        />
                        <button
                            type="button"
                            className="show-hide-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <IoMdEyeOff /> : <IoMdEye /> }
                        </button>
                    </div>

                    <div className="form-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            {...register("confirmPassword", { required: true })}
                            className={errors.confirmPassword? 'form-control input-error' : "form-control"}
                        />
                    </div>

                    <button type="submit" className="main-sign-up-btn">
                        Sign Up
                    </button>
                </form>

                <p className='login-text'>
                    Already have an account? <span onClick={() => navigate("/login")}>Sign In</span>
                </p>
            </div>
        </div>
    </Background>
  )
}

export default SignUp