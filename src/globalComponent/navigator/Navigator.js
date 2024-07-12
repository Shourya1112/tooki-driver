import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navigator = ({ pageTitle }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const containerStyles = {
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const buttonStyles = {
        position: "absolute",
        transform: "translate(0, -50%)",
        top: "50%",
        left: "1rem",

        border: "none",
        backgroundColor: "transparent",

        fontSize: "1.4rem",
        color: "#000"
    }

    const textStyles = {
        color: '#525252',
        textAlign: 'center',
        fontSize: '1.5625rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '1.4375rem',
        letterSpacing: '0.03125rem'
    }

    return (
        <div style={containerStyles}>
            <button style={buttonStyles} onClick={goBack}>
                <FaChevronLeft />
            </button>

            <p style={textStyles}>
                {pageTitle}
            </p>
        </div>
    );
};

export default Navigator;
