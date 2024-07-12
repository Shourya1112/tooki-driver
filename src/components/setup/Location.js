import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Select from 'react-select';
import Background from '../Tutorial/component/Background';
import personImage from "../../assets/setup/location.png";
import { useForm } from 'react-hook-form';
import "../../styles/component/login/Login.css";

const Location = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [selectedCity, setSelectedCity] = useState();
    const [selectedRegion, setSelectedRegion] = useState();

    const onSubmit = (data) => {
        console.log(data);
    };

    const cityOptions = [
        {
            value: "delhi", 
            label: "Delhi",
            regions: ["North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi"] 
        },
        {
            value: "mumbai", 
            label: "Mumbai",
            regions: ["South Mumbai", "Western Suburbs", "Central Mumbai", "Navi Mumbai", "Thane"] 
        },
        {
            value: "bangalore", 
            label: "Bangalore",
            regions: ["Koramangala", "Indiranagar", "Whitefield", "Electronic City", "Jayanagar"] 
        },
        {
            value: "chennai", 
            label: "Chennai",
            regions: ["T Nagar", "Anna Nagar", "Velachery", "Adyar", "Mylapore"] 
        },
        {
            value: "kolkata", 
            label: "Kolkata",
            regions: ["Park Street", "Salt Lake City", "Howrah", "New Town", "Alipore"] 
        },
    ];

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        setSelectedRegion(null); // Reset selected region when city changes
    };

    const handleRegionChange = (selectedOption) => {
        setSelectedRegion(selectedOption);
    };

    const customStyles = {
        control: (styles, { isFocused }) => ({ 
            ...styles, 
            backgroundColor: 'transparent', 
            borderRadius: '8px', 
            border: 'none', 
            minHeight: '40px', 
            width: "100%",
            outline: isFocused? "0px" : "none"
        }),
        option: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: isFocused ? '#ddd' : 'transparent',
            color: '#333',
            padding: '8px 12px',
        }),
        singleValue: styles => ({ ...styles, color: '#333' }),
    };

    return (
        <Background image={personImage}>
            <div className='login-main-div'>
                <p className='main-title'>
                    Location
                </p>
                <p className='welcome-text'>
                    Set your Location!
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <Select
                            options={cityOptions}
                            placeholder='Select your City'
                            value={selectedCity}
                            {...register("city", { required: "true" })}
                            onChange={handleCityChange}
                            styles={customStyles}
                        />
                    </div>

                    <div className="form-group">
                        <Select
                            options={selectedCity && selectedCity.regions.map(region => ({ value: region, label: region }))}
                            placeholder='Select your Area'
                            value={selectedRegion}
                            {...register("region", { required: "true" })}
                            onChange={handleRegionChange}
                            styles={customStyles}
                        />
                    </div>

                    <button onClick={() => navigate("/courier/select")} type="submit" className="main-login-btn">
                        Sign In
                    </button>
                </form>
            </div>
        </Background>
    );
};

export default Location;
