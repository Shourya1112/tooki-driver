import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import GradientBtn from '../../../globalComponent/ui/GradientBtn'
import axiosInstance from '../../../utils/axiosInstance'

const InfoLeft = ({ courierSize, selectedType, setSelectedType }) => {
    const navigate = useNavigate()
    const [dimensions, setDimensions] = useState({
        weight: '',
        length: '',
        width: '',
        height: ''
      });
    const noteText = "We will send a code to the registered Phone number you registered to regain your password"

    useEffect(() => {
        if (!selectedType) {
            return
        }

        if (selectedType === courierSize[0].name) {
            setDimensions(prev => ({ ...prev, length: 10, width: 10, height: 10 }))
            return
        }

        if (selectedType === courierSize[1].name) {
            setDimensions(prev => ({ ...prev, length: 20, width: 20, height: 20 }))
            return
        }

        if (selectedType === courierSize[2].name) {
            setDimensions(prev => ({ ...prev, length: 30, width: 30, height: 30 }))
            return
        }
    }, [selectedType, courierSize])

    const handleBtn = () => {
        if (!(dimensions.height && dimensions.weight && dimensions.length && dimensions.width)) {
            alert("Pleas fill all the details!")
            return
        }

        const randomNumber = Math.floor(Math.random() * 26) + 5;

        const postData = {
            parcel_type: "PARCEL",
            distance: randomNumber,
            weight: dimensions.weight,
            height: dimensions.height,
            width: dimensions.width
        }

        axiosInstance
            .post("/quotations/prices/", postData)
            .then(res => {
                console.log(res)
                const quotId = res.data.data.id
                const type = res.data.data.parcel_type
                sessionStorage.setItem("quotId", quotId)
                navigate("/courier/location", { state: { id: quotId, type: type} })
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div className='info-left'>
        <p className='page-title'>
            Calculate Parcel
        </p>
        <p className='page-note'>
            {noteText}
        </p>

        <div className='weight-input-div'>
            <input
                type='text'
                placeholder='Enter Weight'
                className='weight-input'
                value={dimensions.weight}
                onChange={e => setDimensions(prev => ({ ...prev, weight: e.target.value }))}
            />
            <button className='weight-unit-btn'>
                KG
            </button>
            <button className='weight-unit-btn'>
                LBs
            </button>
        </div>

        <div className='dimension-input-div'>
            <input
                type='text'
                placeholder='Length'
                className='dimension-input'
                value={dimensions.length}
                onChange={e => setDimensions(prev => ({ ...prev, length: e.target.value }))}
            />
            <input
                type='text'
                placeholder='Width'
                className='dimension-input'
                value={dimensions.width}
                onChange={e => setDimensions(prev => ({ ...prev, width: e.target.value }))}
            />
            <input
                type='text'
                placeholder='Height'
                className='dimension-input'
                value={dimensions.height}
                onChange={e => setDimensions(prev => ({ ...prev, height: e.target.value }))}
            />
        </div>

        <p className='label-text-dimension'>
            Common package size?
        </p>

        <div className='courier-dimension-div'>
            {courierSize.map((item, id) => (
            <div 
                key={id} 
                onClick={() => setSelectedType(item.name)} 
                className='type-check-btn'
            >
                <div className='type-check'>
                    {selectedType === item.name && 
                    <div className='type-check-fill'></div>}
                </div>

                <div className='green-circle'></div>

                <p className='type-text'>
                    {item.name}
                </p>
            </div>))}
        </div>

        <div className='main-continue-div'>
            {/* <div className='sub-total-div'>
                <p className='title-text'>Sub Total</p>

                <p className='amount-text'>134 Rs</p>
            </div> */}
            
            <GradientBtn text={"Continue"} onClickHandler={handleBtn} />
        </div>
    </div>
  )
}

export default InfoLeft