import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Background from './component/Background'
import image1 from "../../assets/tutorial/image-1.png"
import image2 from "../../assets/tutorial/image-2.png"
import image3 from "../../assets/tutorial/image-3.png"
import { useMobile } from "../../globalComponent/context/MobileContext"
import "../../styles/component/Tutorial/Tutorial.css"

const pageData = [
    {
        id: 0,
        image: image1,
        title: 'Trusted Parcel Point',
        para: 'Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop. Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.',
        mobileText: 'Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.'
    },
    {
        id: 1,
        image: image2,
        title: 'Find your best service',
        mobileText: 'Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.',
        para: 'Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop. Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.'
    },
    {
        id: 2,
        image: image3,
        title: 'Pickup and Drop system',
        mobileText: 'Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.',
        para: 'Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop. Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.Save time with Flaticon for Mac and have access to all icons at your desktop. No need to open your browser each time, simply drag and drop.'
    }
];

const Tutorial = () => {
    const { isMobile } = useMobile()
    console.log(isMobile)
    const navigate = useNavigate()
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ currentPageData, setCurrentPageData ] = useState(pageData[0])

    useEffect(() => {
        setCurrentPageData(pageData[currentPage])
    }, [currentPage])

    const handlePageChange = (direction) => {
        if (direction === "prev" && currentPage !== 0) {
            setCurrentPage(prev => prev - 1)
        } else if (direction === "next" && currentPage !== pageData.length - 1) {
            setCurrentPage(prev => prev + 1)
        } else if (direction === "next" && currentPage === pageData.length - 1) {
            navigate("/login")
        }
    }

  return (
    <Background image={currentPageData.image}>
        <div className="tutorial-main-container-div">
        <p className='tutorial-main-title'>
            {currentPageData.title}
        </p>
        <p className='tutorial-main-paragraph'>
            {isMobile? (currentPageData.mobileText) : (currentPageData.para)}
        </p>

        <div className='tutorial-nav-div'>
            <button onClick={() => handlePageChange("prev")} className='nav-btn'>
                Prev
            </button>

            <div className='tutorial-pagination'>
                {pageData.map((_, index) => 
                <div 
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={(index === currentPage)? "page-dot active-dot" : "page-dot"}
                ></div>)}
            </div>

            <button onClick={() => handlePageChange("next")} className='nav-btn'>
                Next
            </button>
        </div>
        </div>
    </Background>
  )
}

export default Tutorial