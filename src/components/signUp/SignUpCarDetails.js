import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { MdCloudUpload } from "react-icons/md";
import { IoCloudDoneOutline } from "react-icons/io5";
import Background from '../Tutorial/component/Background'
import cameraInputImage from "../../assets/login/image-input.png"
import Navigator from '../../globalComponent/navigator/Navigator';
import { useMobile } from '../../globalComponent/context/MobileContext';
import axiosInstance from '../../utils/axiosInstance';
import "../../styles/component/signUp/SignUp.css"

const SignUpCarDetails = () => {
    const location = useLocation()
    const { isMobile } = useMobile()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [ fileUploaded, setFileUploaded ] = useState()
    const registerUserData = location.state

    useEffect(() => {
        console.log(fileUploaded)
    }, [fileUploaded])

    const onSubmit = (data) => {
        console.log(data.policeVerification[0])
        const formData = new FormData();
    
        // Append fields from registerUserData
        Object.keys(registerUserData).forEach(key => {
            formData.append(key, registerUserData[key]);
        });
    
        // Append fields from data
        formData.append('license_no', data.dlNumber);
        formData.append('aadhaar_no', data.aadhaar);
        formData.append('police_verification_letter', data.policeVerification[0]);
    
        axiosInstance
            .post("/register", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log(res);
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
            });
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
                            placeholder='Driver License No.'
                            {...register("dlNumber", { required: true })}
                            className={errors.fullName? 'form-control input-error' : "form-control"}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder='Aadhaar Card No.'
                            {...register("aadhaar", { required: true })}
                            className={errors.aadhaar? 'form-control input-error' : "form-control"}
                        />
                    </div>
                    
                    <div className="form-group file-input-group">
                        <p className='label-file-input'>
                            Upload Police Verification Letter
                        </p>
                        <input
                            type="file"
                            {...register("policeVerification", { required: true })}
                            onChange={e => setFileUploaded(e.target.value)}
                            className={errors.policeVerification? 'form-control input-error' : "form-control"}
                        />
                        {!fileUploaded &&
                        <div className='upload-icon'>
                            <MdCloudUpload />
                        </div>}
                        
                        {fileUploaded && 
                        <div className='upload-icon'>
                            <IoCloudDoneOutline />
                            <p className='upload-text'>
                                Upload Successful
                            </p>
                        </div>}
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

export default SignUpCarDetails