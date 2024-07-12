import React, { useEffect, useState } from 'react';
// import deleteImage from "../../assets/delete/delete.png"
import mapBackground from "../../assets/background/map-bg.png"
import NewOrderCard from '../../globalComponent/ui/NewOrderCard';
import axiosInstance from '../../utils/axiosInstance';
import { Rings } from 'react-loader-spinner';
import "../../styles/component/driver/DriverHome.css"

const DriverHome = () => {
  const [ allOrders, setAllOrders ] = useState([])
  const [ currentQuot, setCurrentQuot ] = useState()
  const [ currentOrderIndex, setCurrentOrderIndex ] = useState(0)
  const [ acceptedOrder, setAcceptedOrder ] = useState()

  const compareDates = (a, b) => {
    const dateA = new Date(a.created_date);
    const dateB = new Date(b.created_date);
    return dateB - dateA; // Descending order (newest to oldest)
  };

  useEffect(() => {
    axiosInstance
      .get("/logistics/driver/available-orders")
      .then(res => {
        console.log(res.data.data)
        const sortedQuotations = [...res.data.data]; // Create a copy of the array
        sortedQuotations.sort(compareDates);
        setAllOrders(sortedQuotations)
      })
  }, [])

  useEffect(() => {
    if(allOrders && allOrders[currentOrderIndex] && allOrders[currentOrderIndex].quotation_id) {
      console.log(allOrders[currentOrderIndex].quotation_id)
      axiosInstance
        .get(`/quotations/prices/${allOrders[currentOrderIndex].quotation_id}/`)
        .then(res => {
          console.log(res)
          setCurrentQuot(res.data.data)
        })
    }
  }, [currentOrderIndex, allOrders])

  const handleCancelOrder = () => {
    if (acceptedOrder) {
      axiosInstance
        .put(`/logistics/driver/${acceptedOrder}/`, { status: "CANCELLED"})
        .then(res => {
          console.log(res)
          setAcceptedOrder(null)
        })
        .catch(err => console.log(err))

      return
    }

    setCurrentOrderIndex(prev => prev + 1)
  }

  const fetchData = () => {
    axiosInstance
      .get("/logistics/driver/available-orders")
      .then(res => {
        console.log(res.data.data)
        const sortedQuotations = [...res.data.data]; // Create a copy of the array
        sortedQuotations.sort(compareDates);
        setAllOrders(sortedQuotations)
      })
  }

  const handleSubmit = () => {
    if (acceptedOrder) {
      axiosInstance
        .put(`/logistics/driver/${acceptedOrder}/`, { status: "DELIVERED"})
        .then(res => {
          console.log(res)
          setAcceptedOrder(null)
          setCurrentOrderIndex(0)
          fetchData()
        })
        .catch(err => console.log(err))

      return
    }

    // setAcceptedOrder(allOrders[currentOrderIndex].id)
    
    axiosInstance
      .post("/logistics/driver/", { 
        order: allOrders[currentOrderIndex].id, 
        status: "ACCEPTED" 
      })
      .then(res => {
        console.log(res.data.data)
        setAcceptedOrder(res.data.data.id)
      })
      .catch(err => console.log(err))

  }

  return (
    <div className='driver-home-div'>
        
        <div className='customer-card'>
            {(allOrders && allOrders[0] && allOrders.length > 0 && allOrders[currentOrderIndex] && currentQuot)?
            <NewOrderCard
              pickup={allOrders[currentOrderIndex].pickup_address}
              dropOff={allOrders[currentOrderIndex].delivery_address}
              amount={currentQuot.estimated_amount}
              btnText={acceptedOrder? "Arrived" : "Accept"}
              acceptedOrder={acceptedOrder}
              handleCancelOrder={handleCancelOrder}
              handleAcceptingOrder={handleSubmit}
            /> :
            <Rings
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          }
        </div>

        <div className='map-background-div'>
            <img src={mapBackground} className='map-background' alt='map' />
        </div>
    </div>
  )
}

export default DriverHome