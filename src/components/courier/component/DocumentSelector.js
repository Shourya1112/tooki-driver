import React from 'react'

const DocumentSelector = ({ quantity, setQuantity }) => {
  return (
    <div className='quantity-select-div'>
        <div className='quantity-div'>
            {quantity} Document{quantity > 1 && "'s"}
        </div>

        <button 
            onClick={() => quantity > 1 && setQuantity(prev => prev - 1)}
            className='quantity-btn'
        >
            -
        </button>

        <button 
            onClick={() => quantity > 0 && setQuantity(prev => prev + 1)}
            className='quantity-btn'
            style={{ background: "#00C50A"}}
        >
            +
        </button>
    </div>
  )
}

export default DocumentSelector