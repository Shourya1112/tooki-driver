import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const btnStyle = {
        position: "absolute",
        top: "20px",
        left: "20px",
        width: '50px',
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '25px',
        backgroundColor: isHovered ? '#F76C2E' : 'transparent',
        border: 'none',
        transition: 'background-color 0.3s ease',
        cursor: "pointer"
    };

    return (
        <button
            onClick={() => navigate(-1)}
            style={btnStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FaChevronLeft />
        </button>
    );
};

export default BackBtn;
