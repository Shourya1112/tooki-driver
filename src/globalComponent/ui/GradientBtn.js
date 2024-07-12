import React from 'react'

const GradientBtn = ({ onClickHandler, text}) => {
    const btnStyles = {
        width: '100%',
        height: '53px',
        border: 'none',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #FB331A 4.08%, #F76C2E 99.07%), #FF6B17',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        textAlign: 'center',
        fontSize: '27px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '23px'
      };

      const btnHandler = () => {
        if (!onClickHandler) {
            console.log("don't click the btn")
            return
        }

        onClickHandler()
      }

  return (
    <button style={btnStyles} onClick={btnHandler}>
        {text}
    </button>
  )
}

export default GradientBtn