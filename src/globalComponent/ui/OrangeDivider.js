import React from 'react'

const OrangeDivider = ({ width, height, color }) => {
    const divWidth = width || "1px"
    const divHeight = height || "100%"
    const bgColor = color || "#F76C2E"

  return (
    <div 
    style={{ 
        width: divWidth, 
        height: divHeight, 
        backgroundColor: bgColor,
        borderRadius: "5px",
        content: ""
    }}>
    </div>
  )
}

export default OrangeDivider