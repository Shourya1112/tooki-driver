import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { IoIosMail, IoIosLock, IoMdEye, IoMdEyeOff } from "react-icons/io";
import image1 from "../../assets/login/image-1.png"
import Background from '../Tutorial/component/Background'
import "../../styles/component/login/Login.css"
import axiosInstance from '../../utils/axiosInstance';
import { GlobalStateContext } from '../../utils/GlobalState';

const Login = () => {
    const navigate = useNavigate()
    const { updateState } = useContext(GlobalStateContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = (data) => {
        const loginData = {
            email: data.email,
            password: data.password,
            login_type: "driver"
        }
        axiosInstance
            .post("/login", loginData)
            .then(res => {
                const response = res.data.data
                localStorage.setItem("access", response.access)
                localStorage.setItem("refresh", response.refresh)
                sessionStorage.setItem("driverId", response.user.id)

                updateState({ 
                    name: response.user.first_name + " " + response.user.last_name, 
                    userId: response.user.id 
                });

                navigate("/driver/")
            })
            .catch(err => {
                console.log(err)
            })
    };

    const goToSignUp = () => {
        navigate("/signup")
    }

  return (
    <Background image={image1}>
       <div className='login-main-div'>
            <p className='main-title'>
                Sign In
            </p>
            <p className='welcome-text'>
                Welcome!
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className='icon-wrap'>     
                        <IoIosMail />
                    </div>
                    <input
                        type="email"
                        placeholder='Email'
                        {...register("email", { required: true })}
                        className={errors.email? 'form-control input-error' : "form-control"}
                    />
                </div>

                <div className="form-group">
                    <div className='icon-wrap'>
                        <IoIosLock />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        {...register("password", { required: true })}
                        className={errors.email? 'form-control input-error' : "form-control"}
                    />
                    <button
                        type="button"
                        className="show-hide-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IoMdEyeOff /> : <IoMdEye /> }
                    </button>
                </div>

                <div className='bottom-buttons'>
                    <div className='checkbox-div'>
                        <input
                            type='checkbox'
                            {...register("remember")}
                            className='remember-checkbox'
                            defaultChecked
                        />
                        <p className='remember-text'>
                            Remember me
                        </p>
                    </div>
                    <button className='forgot-btn'>
                        Forgot Password?
                    </button>
                </div>

                <button type="submit" className="main-login-btn">
                    Login
                </button>
            </form>

            <button onClick={goToSignUp} className='create-new-btn'>
                Create a new account
            </button>
       </div>
    </Background>
  )
}

export default Login