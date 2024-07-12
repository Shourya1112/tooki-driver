import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import EarningBarChart from "./EarningBarChart"
import axiosInstance from '../../utils/axiosInstance';
import BackBtn from '../../globalComponent/ui/BackBtn';
import '../../styles/component/driver/DriverEarnings.css';

const DriverEarnings = () => {
  const [earningsData, setEarningsData] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [displayedEarnings, setDisplayedEarnings] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const driverId = sessionStorage.getItem('driverId');

  useEffect(() => {
    if (driverId) {
      axiosInstance
        .put(`/analytics/data/driver/earning/${driverId}/`)
        .then((res) => {
          const response = res.data.data;
          setEarningsData(response);
          const totalSum = response.reduce((acc, item) => acc + item.total_amount, 0);
          setTotalEarnings(totalSum);
          // Set initial displayed earnings
          const initialDisplayed = response.slice(startIndex, startIndex + 4);
          setDisplayedEarnings(initialDisplayed);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [driverId, startIndex]);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
    }
  };

  const handleNext = () => {
    if (startIndex + 4 < earningsData.length) {
      setStartIndex(startIndex + 4);
    }
  };

  return (
    <div className='driver-earnings-main-div'>
      <BackBtn />

      <div className='earnings-left'>

        <p className='earnings-title'>My Earnings</p>

        <div className='wallet-balance-card'>
          
          <div className='balance-left'>
            <p className='balance-title'>Wallet Balance</p>
            <p className='balance-number'>Rs. {totalEarnings}</p>
          </div>
          <button className='main-withdraw-button'>WITHDRAW</button>
        </div>

        <div className='earnings-data-card'>
          <div className='earnings-data-row bold-data-row'>
            <p className='earnings-label'>Earnings</p>
            <p className='earnings-num'>Rs. {totalEarnings}</p>
          </div>
          <div className='earnings-data-row'>
            <p className='earnings-label'>Trip Earnings</p>
            <p className='earnings-num'>Rs. {totalEarnings}</p>
          </div>
          <div className='earnings-data-row'>
            <p className='earnings-label'>Taxes</p>
            <p className='earnings-num'>Rs. 0</p>
          </div>
        </div>
      </div>

      <div className='earnings-right'>
        <div className='earnings-graph-card'>
          <p className='earnings-time-period'>{displayedEarnings[displayedEarnings?.length - 1]?.order_date} to {displayedEarnings[0]?.order_date}</p>

          <div className='daily-earnings-div'>
            <p className='calender-btns' onClick={handlePrev}><FaChevronLeft /></p>
            <p className='earning-text'>Rs. {displayedEarnings.reduce((acc, item) => acc + item.total_amount, 0)}</p>
            <p className='calender-btns' onClick={handleNext}><FaChevronRight /></p>
          </div>

          <div className='bar-chart-container'>
            <EarningBarChart data={displayedEarnings} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DriverEarnings;
