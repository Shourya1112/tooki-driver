import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import "../../../styles/globalComponent/CustomSelect.css"

const CustomSelect = ({ placeholder, options }) => {
    const [ selectedName, setSelectedname ] = useState(placeholder? placeholder : "Select")
    const [ showDropDown, setShowDropDown ] = useState(false)

  return (
    <div className='custom-select-container'>
        <div className='main-selection-div'>
            <div 
                onClick={() => setShowDropDown(prev => !prev)} 
                className='selected-entry'
            >
                <p className='text'>
                    {selectedName}
                </p>

                <GoTriangleDown />
            </div>
            {showDropDown &&
            <div className='dropdown-options'>
                {options?.map((item, index) => (
                    <p
                        key={index} 
                        onClick={() => setSelectedname(item.option)} 
                        className='options-text'
                    >
                        {item.option}
                    </p>
                ))}
            </div>}
        </div>
    </div>
  )
}

export default CustomSelect